'use client';
import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { PasServices } from "@/components/pasServices"

import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonial"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, MapPin } from "lucide-react"
import Carousel from "@/components/carousel"; 
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Maadhavan
              <br></br>
              Muthuselvan's
                <br></br>
              Website!
              <br></br>
            </h1>
            <div className="flex gap-4">
            <Button
                      size="lg"
                      onClick={() => {
                        window.scrollTo({
                          top: 6000,  // Scrolls to 1000 pixels from the top
                          behavior: 'smooth'  // Smooth scrolling
                        });
                      }}
                      className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                    >
                     Contact Me
                    </Button>

                      

              <a href="https://docs.google.com/document/d/19WfdoSleDL4TNX-A_OxZQTMFZpUYO9tu2Lhn29aJ8Hc/edit?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer" 
              >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Resume/CV
              </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <Image
                src="/headshot.jpg"
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/*    */}
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <PasServices />
        <Projects />
        <Skills />
        {/* <div className="text-center mb-12" >
              <h2 className="text-3xl font-bold mb-4">PICS THAT DIDNT MAKE INSTAGRAM</h2>
          </div>
        <Carousel /> */}

        {/* <Testimonials /> */}


        
        {/* Contact Section */}
        <section className="py-16" id="social-media">
          <div className="container mx-auto px-4 ">
            <div className="text-center mb-12" >
              {/* <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2> */}
              {/* <p className="text-gray-400 max-w-2xl mx-auto" >
                PLEASE PLEASE PLEASE TALK TO ME IM SO BORED
              </p> */}
            </div>
           <ul className="flex space-x-8 animate-slide justify-center overflow-hidden h-12">
            <a className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://www.linkedin.com/in/maadhavan23/"><li className="flex flex-col items-center justify-center aos-init" data-aos="fade-left" data-aos-duration="400"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6 mb-2 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>LinkedIn</li></a>
            <a className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://github.com/maadhavan23/"><li className="flex flex-col items-center justify-center aos-init" data-aos="fade-left" data-aos-duration="300"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="h-6 w-6 mb-2 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>GitHub</li></a>
            <a className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse"    target="_blank"    href="https://www.instagram.com/_maadhavan/" >   <li className="flex flex-col items-center justify-center">     <img        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"        alt="Instagram"       className="h-6 w-6 mb-2"     />     Instagram   </li> </a>            <a className="text-sm font-medium hover:font-bold underline-offset-4 hover:animate-pulse" target="_blank" href="mailto:maadhavanuga@gmail.com"><li className="flex flex-col items-center justify-center aos-init" data-aos="fade-right" data-aos-duration="400"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6 mb-2 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>Email</li></a></ul>
          </div>
        </section>
      </div>
      {/* Footer
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lukman</h3>
              <p className="text-gray-400">
                Full Stack Developer based in your location. Available for freelance work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@example.com</li>
                <li>+1234567890</li>
                <li>Your Address Here</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 maadhavan.com All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </main>
  )
}

