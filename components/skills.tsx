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
      name: "Unreal Engine",
      icon: "https://www.citypng.com/public/uploads/preview/hd-unreal-engine-white-logo-icon-png-7017516949697958pnkct2kiz.png",
    },
    {
      name: "Unity",
      icon: "https://www.citypng.com/public/uploads/preview/unity-white-logo-icon-png-701751694968149dpc3d4ff9d.png",
    },{
      name: "C#",
      icon: "https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo-thumbnail.png",
    },{
      name: "Tableau",
      icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"},
    {
      name: "SQL",
      icon: "https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },{
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },{
      name: "Matplotlib",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png",
    },{
      name: "GitHub",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s",
    },{
      name: "Figma",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    },{
      name: "ChatGPT",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZH7RyUSalXPozJigEDxsWFatFPdpT0yWmA&s",
    },{
      name: "SurveyMonkey / IRB Compliance",
      icon: "https://www.irbsearch.com/images/icons/icon-irbsearch.png",
    },{
      name: "TeamGantt",
      icon: "https://www.shareicon.net/data/2017/06/23/887697_management_512x512.png",
    },
    {
      name: "R",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
    },
    
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
