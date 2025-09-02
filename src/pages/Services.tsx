import { useEffect, useRef } from "react"
import { Search, MousePointer, Share2, FileText, Mail, Code, Palette, BarChart3, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with data-driven SEO strategies that drive organic traffic and increase visibility.",
    features: ["Keyword Research & Analysis", "On-page Optimization", "Technical SEO Audits", "Link Building Campaigns", "Local SEO", "SEO Content Strategy"],
    results: "Average 300% increase in organic traffic within 6 months",
    pricing: "Starting from $1,200/month"
  },
  {
    icon: MousePointer,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns across Google Ads, Facebook, and other platforms.",
    features: ["Campaign Strategy & Setup", "Ad Creative Development", "Bid Management & Optimization", "Landing Page Optimization", "Conversion Tracking", "Performance Reporting"],
    results: "Up to 45% reduction in cost per acquisition",
    pricing: "Starting from $800/month + ad spend"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across all major social media platforms.",
    features: ["Content Strategy & Creation", "Community Management", "Paid Social Campaigns", "Influencer Partnerships", "Social Media Analytics", "Brand Monitoring"],
    results: "180% average increase in engagement rates",
    pricing: "Starting from $600/month"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives conversions.",
    features: ["Content Strategy Development", "Blog Writing & Management", "Video Production", "Infographic Design", "E-book Creation", "Content Distribution"],
    results: "40% of qualified leads generated through content",
    pricing: "Starting from $900/month"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that convert.",
    features: ["Email Design & Development", "Marketing Automation", "List Segmentation", "A/B Testing", "Performance Analytics", "Drip Campaigns"],
    results: "Average 25% increase in customer retention",
    pricing: "Starting from $400/month"
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Build responsive, high-performance websites that provide exceptional user experiences.",
    features: ["Custom Web Development", "CMS Integration", "E-commerce Solutions", "Mobile App Development", "API Integration", "Website Maintenance"],
    results: "250% average increase in online conversions",
    pricing: "Starting from $3,000 per project"
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Create stunning, user-friendly designs that capture your brand essence and drive engagement.",
    features: ["UI/UX Design", "Responsive Design", "Brand Identity Design", "Wireframing & Prototyping", "Design Systems", "User Testing"],
    results: "85% improvement in user experience metrics",
    pricing: "Starting from $2,000 per project"
  },
  {
    icon: BarChart3,
    title: "Branding & Strategy",
    description: "Develop comprehensive brand strategies that differentiate you in the marketplace.",
    features: ["Brand Strategy Development", "Logo & Identity Design", "Brand Guidelines", "Market Research", "Competitive Analysis", "Brand Positioning"],
    results: "Average 40% increase in brand recognition",
    pricing: "Starting from $1,500 per project"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and current challenges to develop a tailored strategy."
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "Our team creates detailed project plans and designs that align with your brand and business objectives."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, using industry best practices and cutting-edge tools and technologies."
  },
  {
    step: "04",
    title: "Optimization & Growth",
    description: "Continuous monitoring, testing, and optimization to ensure sustained growth and maximum ROI."
  }
]

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Services cards animation
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'), 
        { y: 80, opacity: 0, scale: 0.8 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Process animation
    if (processRef.current) {
      gsap.fromTo(processRef.current.querySelectorAll('.process-item'), 
        { x: -100, opacity: 0 }, 
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
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
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50 mb-6">
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Complete Digital</span>
              <br />
              <span className="text-gradient-primary">Marketing Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              From SEO and PPC to custom web development, we provide comprehensive digital solutions that drive growth and deliver measurable results for your business.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Choose the Perfect</span>
              <br />
              <span className="text-gradient-primary">Service for Your Needs</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Each service is designed to work independently or as part of a comprehensive digital strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className="service-card glass hover-lift group h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-foreground-muted">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium text-success mb-1">Typical Results:</p>
                    <p className="text-sm text-foreground-muted">{service.results}</p>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-card-border">
                    <div>
                      <p className="text-sm text-foreground-muted">Starting from</p>
                      <p className="text-lg font-bold text-gradient-primary">{service.pricing}</p>
                    </div>
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/5" asChild>
                      <a href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}>
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30" ref={processRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our Proven</span>
              <br />
              <span className="text-gradient-primary">4-Step Process</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Every successful project follows our systematic approach to ensure maximum results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="process-item text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              Let's discuss your project and create a custom strategy that drives real results. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}