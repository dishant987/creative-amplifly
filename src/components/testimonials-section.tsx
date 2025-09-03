import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Skillspeer",
    role: "Freelancing & Collaboration Platform",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content:
      "We partnered with OnceSeen for a complete technical audit, on-page SEO, and Google Search Console setup. The results have been excellent, with steady improvements in visibility and performance. Their professional approach and detailed reporting give us full confidence in the process.",
  },
  {
    name: "EPIX IT Services",
    role: "IT Solutions & Consulting",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content:
      "OnceSeen helped us optimize our digital presence through GMB setup, on-page optimization, and SEO improvements. The impact on local visibility and search performance has been very positive. Their structured execution and ongoing support make them a reliable growth partner.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50 mb-6">
            <Star className="h-4 w-4 mr-2 text-warning fill-current" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">What Our Clients</span>
            <br />
            <span className="text-gradient-primary">Say About Us</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            A glimpse of the work we’ve done for our clients and the impact of our strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="glass hover-lift group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground-muted mb-6 flex-1">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-8">Trusted by businesses that value results</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 bg-foreground-muted rounded w-24"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
