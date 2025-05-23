import { CardWrapper } from "./ui/card-wrapper"
import Image from "next/image"

interface SkillProps {
  name: string
  icon: string
}

export default function SkillItem({ name, icon }: SkillProps) {
  return (
    <CardWrapper>
      <div className="flex items-center gap-4">
        <Image 
          src={icon || "/placeholder.svg"} 
          alt={name} 
          width={48} 
          height={48} 
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
        </div>
      </div>
    </CardWrapper>
  );
}

export function Skills() {
  const testimonials: SkillProps[] = [
    {
      name: "SQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },{
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },{
      name: "Tableau",
      icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    },{
      name: "Matplotlib",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png",
    },{
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },{
      name: "Figma",
      icon: "https://www.svgrepo.com/show/330433/figma.svg",
    },{
      name: "ChatGPT",
      icon: "https://ai.ls/assets/openai-logos/SVGs/openai-logomark.svg",
    },{
      name: "SurveyMonkey / IRB Compliance",
      icon: "https://www.irbsearch.com/images/icons/icon-irbsearch.png",
    },{
      name: "TeamGantt",
      icon: "https://www.shareicon.net/data/2017/06/23/887697_management_512x512.png",
    }
  ];

  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        {/* <p className="text-gray-400 max-w-2xl mx-auto">
          Things I am at least decently familiar with (ominous)...
        </p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <SkillItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
