"use client"

import { useState } from "react"
import { Search, MousePointer, Share2, FileText, Mail, Code, Palette, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with data-driven SEO strategies that drive organic traffic and increase visibility.",
    features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Link Building"]
  },
  {
    icon: MousePointer,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns across Google Ads, Facebook, and other platforms.",
    features: ["Campaign Setup", "Ad Creative", "Bid Management", "Performance Tracking"]
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across all major social media platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Analytics"]
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives conversions.",
    features: ["Content Strategy", "Copywriting", "Blog Management", "Video Production"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that convert.",
    features: ["Email Design", "Automation", "Segmentation", "A/B Testing"]
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Build responsive, high-performance websites that provide exceptional user experiences.",
    features: ["Custom Development", "CMS Integration", "E-commerce", "Mobile Apps"]
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Create stunning, user-friendly designs that capture your brand essence and drive engagement.",
    features: ["UI/UX Design", "Responsive Design", "Brand Identity", "Wireframing"]
  },
  {
    icon: BarChart3,
    title: "Branding & Strategy",
    description: "Develop comprehensive brand strategies that differentiate you in the marketplace.",
    features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Market Research"]
  }
]

export function ServicesSection() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
    }, 2000) // Auto-close modal after thank you
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50 mb-6">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Complete Digital Marketing &</span>
            <br />
            <span className="text-gradient-primary">Development Solutions</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            From SEO and PPC to custom web development, we provide end-to-end digital solutions that drive growth and deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="glass hover-lift group" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary/20 hover:bg-primary/5"
                  onClick={() => setOpen(true)}
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
            View All Services
          </Button>
        </div>
      </div>

      {/* Modal for Contact Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Contact Us - Get a Quote</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={3} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-gradient-primary text-white">Submit</Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-foreground-muted">Your request has been submitted. We’ll get back to you shortly.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
