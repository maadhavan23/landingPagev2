import Image from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Github,Figma } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  image: string
  demoLink?: string
  githubLink?: string
  figmaLink?: string
}

function ProjectCard({ title, description, image, demoLink, githubLink,figmaLink }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
       </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Demo
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          <a
            href={githubLink || figmaLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {githubLink ? <Github size={16} /> : <Figma size={16} />}
            {githubLink ? "Code" : "Design"}
          </a>
        </Button>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const projects = [
    {
      title: "Finance with Friends!",
      description: `A project for <a href="https://ugahacks.com" target="_blank" rel="noopener noreferrer" class="text-secondary underline hover:text-primary/10">UGAHacks X</a>! Basically a learning tool for personal Finances! Very Cool!`,
      image:"/logo.png",
      demoLink: "https://devpost.com/software/finance-with-friends",
      githubLink: "https://github.com/Juvis237/UGAHacks/tree/main",
    },
    {
      title: "CharismaCrafter",
      description: "An AI Chatbot I made to help me come up with more creative and detailed compliments given characteristics/traits!",
      image: "/charisma.png",
      demoLink: "https://vercel.com/maadhavan23s-projects/charismacrafter-and-its-the-same-but-its-in-nextjs-so-its-not",
      githubLink: "https://github.com/maadhavan23/chatbot-3",
    },
    {
      title: "Pantry Items!",
      description: "Rudimentary pantry app that lets you add and remove groceries using Google Firebase!",
      image: "/Pantry.png",
      demoLink: "https://vercel.com/maadhavan23s-projects/pantry-tracker",
      githubLink: "https://github.com/maadhavan23/PantryTracker",
    },
    {
      title: "GreenSpace",
      description: "Design for showing users different local areas for Pick-Up Sports!",
      image: "/newGreenspace.jpg",
      demoLink: "https://docs.google.com/presentation/d/14VIqiCyju2nQRVc0FQZ1p7cIXZq6sImkJ87LWVRu6wM/edit#slide=id.g1f87997393_0_782",
      figmaLink: "https://www.figma.com/proto/nE7UBuNX4GKREF6Y67EUGD/High-Fidelity?node-id=4-5&starting-point-node-id=4%3A5",
    },
    {
      title: "Athens Access",
      description: "An app that connects users who wish to visit Athens with nearby hotels to their chosen events.",
      image: "/Athens Access Icon.png",
      demoLink: "https://docs.google.com/presentation/d/13fNE0I9M6L77nOi6S0Nz7WphVO6quTZF4KuTTqN9p-E/edit#slide=id.p",
      figmaLink: "https://www.figma.com/proto/VhZvCQ6PBKacOZ29t87yYd/Athens-Access%3A-High-Fidelity?node-id=9-2&t=J6IhtxYbR1be1P2L-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2&show-proto-sidebar=1",
    },
    {
      title: "Eagle Scout Project",
      description: "Planned and Built a Paver Walkway over the course of 7 months for the Furkids using 100 total Volunteer Hours with an average of 8 Workers throughout",
      image: "/Post Project.jpg",
      demoLink: "https://drive.google.com/file/d/1xJMJTMIotevgiITyzBpyH-QQAyw3fwLO/view?usp=sharing",

    }
  ]

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">PROJECTS PROJECTS PROJECTS</h2>
        {/* <p className="text-gray-400 max-w-2xl mx-auto">
          Sometimes I do cool things!
        </p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

