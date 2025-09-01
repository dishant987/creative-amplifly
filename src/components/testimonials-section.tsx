import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "AmpliFlow transformed our digital presence completely. Our organic traffic increased by 300% in just 6 months, and our conversion rates doubled. Their team's expertise in both marketing and development is unmatched."
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCorp",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "Working with AmpliFlow has been a game-changer. Their data-driven approach to PPC advertising helped us reduce our cost per acquisition by 45% while scaling our campaigns. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcomPlus",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "The website they built for us is not just beautiful, but it's also a conversion machine. Our online sales increased by 250% after the launch. The SEO integration was seamless and effective."
  },
  {
    name: "David Kumar",
    role: "VP Marketing, InnovateLab",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "AmpliFlow's content marketing strategy helped establish us as thought leaders in our industry. Our blog now generates 40% of our qualified leads. Their strategic approach is impressive."
  },
  {
    name: "Lisa Thompson",
    role: "CMO, DigitalWave",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "From social media management to email marketing automation, they handle everything seamlessly. Our engagement rates are up 180% and we've seen a significant improvement in brand awareness."
  },
  {
    name: "James Wilson",
    role: "Business Owner, LocalBiz",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    content: "As a small business owner, I needed a partner who could handle both my website development and marketing needs. AmpliFlow delivered beyond expectations and helped us compete with larger companies."
  }
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
            Don't just take our word for it. Here's what our clients have to say about working with AmpliFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="glass hover-lift group h-full" style={{ animationDelay: `${index * 100}ms` }}>
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
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
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
          <p className="text-foreground-muted mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 bg-foreground-muted rounded w-24"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}