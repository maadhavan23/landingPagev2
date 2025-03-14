import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK (only once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

export async function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP';
  const userAgent = req.headers.get('user-agent') || 'Unknown User-Agent';
  const timestamp = new Date().toISOString();

  // Store in Firestore
  await db.collection('ip_logs').add({
    ip,
    userAgent,
    timestamp,
  });

  console.log(`Logged IP: ${ip}`);

  return NextResponse.next();
}
