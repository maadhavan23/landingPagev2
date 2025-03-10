import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP';
  
  console.log(`Visitor IP: ${ip}`);

  return NextResponse.next();
}