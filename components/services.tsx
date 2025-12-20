import type React from "react"
import { Code, Palette, Globe,Backpack,Dog, Binary, LucideTrees, HousePlus } from "lucide-react"
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

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">WHO AM I????</h2>
        <h2 className="text-gray-400 max-w-2xl mx-auto">
          (in a short and sweet fashion...)
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Dog size={24} />}
          title={
            <>
              MIS Major @{" "}
              <a
                href="https://www.terry.uga.edu/majors-and-minor/management-information-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-primary/80"
              >
                UGA
              </a>
            </>
          }
          description="Uses data-driven insights to create value for businesses"
        />
        <ServiceCard
          icon={<Binary size={24} />}
          title={
            <>
              VP of Internal Affairs @{" "}
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
          description="Leading DEI initiatives and managing logistics to foster an inclusive fraternity culture."
        />
        <ServiceCard
          icon={<LucideTrees size={24} />}
          title=
          {
            <>
              {" "}
              <a
                href="https://perseus.uga.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-primary/80"
              >
                Virtual Reality Project Intern
              </a>
              <br></br>
                 @ Warnell School of Forestry and Natural Resources
            </>
          }


          description="Creating and Managing the Forestry School's Virtual Reality Classroom through VR Experience Production"
        />
        <ServiceCard
          icon={<HousePlus size={24} />}
          title="Community Service Assistant @ University Housing"
          description="Coordinating mail, keys, and packages for 900 residents as well as being a resource for accurate University and Housing Information "
        />
      </div>
    </section>
  )
}

