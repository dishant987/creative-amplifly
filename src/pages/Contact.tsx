import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Business Avenue", "Suite 100, New York, NY 10001"],
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@ampliflow.com", "support@ampliflow.com"],
    action: "Send Email"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: "Schedule Meeting"
  }
]

const services = [
  "SEO Optimization",
  "PPC Advertising", 
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Website Development",
  "Web Design",
  "Branding & Strategy",
  "Other"
]

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000", 
  "$50,000 - $100,000",
  "Over $100,000"
]

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const { toast } = useToast()
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    projectDetails: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mapboxToken, setMapboxToken] = useState("")

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo(formRef.current.querySelectorAll('.form-section'), 
        { y: 80, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  useEffect(() => {
    // Initialize map
    if (!mapContainer.current || !mapboxToken) return

    mapboxgl.accessToken = mapboxToken
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-74.006, 40.7128], // NYC coordinates
      zoom: 15,
    })

    // Add marker
    new mapboxgl.Marker({
      color: '#6366f1'
    })
    .setLngLat([-74.006, 40.7128])
    .addTo(map.current)

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => {
      map.current?.remove()
    }
  }, [mapboxToken])

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      projectDetails: ""
    })
    
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50 mb-6">
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Let's Discuss</span>
              <br />
              <span className="text-gradient-primary">Your Next Project</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Ready to grow your business? Get in touch with our team for a free consultation and custom strategy tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="glass hover-lift text-center h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-foreground-muted">{detail}</p>
                  ))}
                  <Button variant="outline" size="sm" className="mt-4 border-primary/20 hover:bg-primary/5">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12" ref={formRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <Card className="form-section glass h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Service & Budget */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Interested In *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Timeline</label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 Month</SelectItem>
                        <SelectItem value="2-3-months">2-3 Months</SelectItem>
                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                        <SelectItem value="6-months">6+ Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details *</label>
                    <Textarea
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      required
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any additional information you'd like to share..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="form-section glass overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Our Location</CardTitle>
                  <CardDescription>
                    Visit us at our office or schedule a virtual meeting
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {!mapboxToken ? (
                    <div className="p-6">
                      <Input
                        placeholder="Enter your Mapbox public token"
                        value={mapboxToken}
                        onChange={(e) => setMapboxToken(e.target.value)}
                        className="mb-4"
                      />
                      <p className="text-sm text-foreground-muted">
                        Get your free token at{" "}
                        <a 
                          href="https://mapbox.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          mapbox.com
                        </a>
                      </p>
                    </div>
                  ) : (
                    <div ref={mapContainer} className="w-full h-80" />
                  )}
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="form-section glass">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose AmpliFlow?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Proven track record with 500+ successful projects",
                    "Average 300% ROI increase for our clients", 
                    "24/7 support and dedicated account manager",
                    "Free consultation and custom strategy development",
                    "Transparent reporting and regular performance updates"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground-muted">{benefit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="form-section glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground-muted italic mb-4">
                    "AmpliFlow transformed our online presence completely. Our organic traffic increased by 400% and sales doubled within 6 months. Their team is incredibly professional and results-driven."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-primary-foreground">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarah Mitchell</p>
                      <p className="text-xs text-foreground-muted">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}