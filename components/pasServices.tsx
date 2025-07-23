import type React from "react"
import { Code, Palette, Globe,Backpack,Dog, Binary, LucideTrees, HousePlus, Braces } from "lucide-react"
import { CardWrapper } from "./ui/card-wrapper"
import Bulldog from '../bulldawg.svg'


interface ServiceProps {
  title: React.ReactNode
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardWrapper>
  )
}

export function PasServices() {
  return (
    <section className="py-16" id="pasServices">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4"> PREVIOUS POSITIONS</h2>
        <h2 className="text-gray-400 max-w-2xl mx-auto">
          (also on linkedin...)
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Binary size={24} />}
          title={
            <>
              New Member Coordinator @{" "}
              <a
                href="https://ktpgeorgia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-primary/80"
              >
                Kappa Theta Pi
              </a>
            </>
          }
          description="Guiding new members through pledging with Event Planning and Coordination, and Fraternity Leadership"
        />
        <ServiceCard
          icon={<Braces size={24} />}
          title="Software Engineering Fellow @ Headstarter.AI"
          description=" Participate in a 7-week remote fellowship focused on building 5 AI projects, participating in hackathons, and launching a capstone project aiming for 1,000+ users."
        />
      </div>
    </section>
  )
}

