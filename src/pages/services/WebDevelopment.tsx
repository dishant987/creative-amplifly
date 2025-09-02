import { useEffect, useRef } from "react"
import { Code, CheckCircle, Smartphone, Globe, Zap, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const webDevServices = [
  {
    title: "Custom Web Development",
    description: "Bespoke websites built from scratch to match your exact requirements",
    features: ["React/Next.js", "Node.js Backend", "Custom Functionality", "API Integrations"],
    duration: "6-12 weeks",
    startingPrice: "$5,000"
  },
  {
    title: "E-commerce Development", 
    description: "Full-featured online stores that drive sales and provide great UX",
    features: ["Shopify/WooCommerce", "Payment Processing", "Inventory Management", "Mobile Optimization"],
    duration: "8-16 weeks", 
    startingPrice: "$8,000"
  },
  {
    title: "Web Applications",
    description: "Complex web applications with advanced functionality and user management",
    features: ["User Authentication", "Database Design", "Real-time Features", "Admin Dashboards"],
    duration: "12-24 weeks",
    startingPrice: "$15,000"
  },
  {
    title: "CMS Development",
    description: "Content management systems for easy website updates and maintenance",
    features: ["WordPress/Strapi", "Content Editing", "User Roles", "SEO Features"],
    duration: "4-8 weeks",
    startingPrice: "$3,000"
  },
  {
    title: "API Development",
    description: "RESTful APIs and backend services for web and mobile applications",
    features: ["REST/GraphQL APIs", "Database Integration", "Authentication", "Documentation"],
    duration: "4-10 weeks",
    startingPrice: "$4,000"
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, updates, and optimization for your existing website",
    features: ["Security Updates", "Performance Optimization", "Bug Fixes", "Content Updates"],
    duration: "Ongoing",
    startingPrice: "$500/month"
  }
]

const technologies = [
  {
    category: "Frontend",
    tech: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    tech: ["Node.js", "Python", "PHP", "Database Design", "Cloud Services"]
  },
  {
    category: "E-commerce",
    tech: ["Shopify", "WooCommerce", "Magento", "Custom Solutions", "Payment Gateways"]
  },
  {
    category: "CMS",
    tech: ["WordPress", "Strapi", "Contentful", "Sanity", "Custom CMS"]
  }
]

const results = [
  { metric: "250%", description: "Average increase in conversions" },
  { metric: "50+", description: "Websites delivered successfully" },
  { metric: "99.9%", description: "Uptime guarantee" },
  { metric: "100%", description: "Mobile responsive designs" }
]

export default function WebDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'), 
        { y: 80, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    if (techRef.current) {
      gsap.fromTo(techRef.current.querySelectorAll('.tech-card'), 
        { scale: 0.8, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={heroRef} className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Code className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Web</span>
                <br />
                <span className="text-gradient-primary">Development Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
                Build fast, secure, and scalable websites that deliver exceptional user experiences and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Development Excellence</h2>
            <p className="text-foreground-muted">Quality metrics that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {result.metric}
                </div>
                <p className="text-foreground-muted">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Web Development</span>
              <span className="text-gradient-primary"> Services</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              From simple websites to complex web applications, we build solutions that grow with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map((service, index) => (
              <Card key={service.title} className="service-card glass hover-lift h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-foreground-muted">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-card-border">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-foreground-muted">Starting from</p>
                        <p className="text-lg font-bold text-gradient-primary">{service.startingPrice}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30" ref={techRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Technologies</span>
              <span className="text-gradient-primary"> We Master</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              We use cutting-edge technologies and frameworks to build modern, efficient websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <Card key={category.category} className="tech-card glass text-center h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gradient-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tech.map((tech) => (
                      <li key={tech} className="text-sm text-foreground-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Why Choose Our</span>
              <span className="text-gradient-primary"> Development Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "All websites are built with mobile responsiveness as a priority, ensuring perfect performance across all devices."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with advanced caching, CDN integration, and performance optimization techniques."
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Built with security best practices, SSL certificates, and regular security updates and monitoring."
              },
              {
                icon: Globe,
                title: "SEO Optimized",
                description: "Search engine friendly code structure with proper meta tags, schema markup, and performance optimization."
              },
              {
                icon: Code,
                title: "Clean Code",
                description: "Well-structured, commented code that's easy to maintain and scale as your business grows."
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Rigorous testing across browsers and devices to ensure flawless functionality and user experience."
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="glass text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground-muted">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="glass max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Ready to Build Your</span>
                <span className="text-gradient-primary"> Dream Website?</span>
              </h2>
              <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
                Get started with a free consultation and quote. Let's discuss your project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}