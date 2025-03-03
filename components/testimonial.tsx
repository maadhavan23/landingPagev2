import { CardWrapper } from "./ui/card-wrapper"
import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  content: string
  image: string
}

function TestimonialCard({ content, image }: TestimonialProps) {
  return (
    <CardWrapper>

          <div className="flex items-center gap-4">
            <Image src={image || "/placeholder.svg"} alt={content} width={100} height={100} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{content}</h4>
            </div>
          </div>
        </CardWrapper>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      content: "",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
      
    },
    {
      content:
      "Working with this developer was an absolute pleasure. Their attention to detail and creative solutions made our project a success.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
     },
  ]

  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my clients have to say about their experiences working with me.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

