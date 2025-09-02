import { useEffect, useRef } from "react"
import { MousePointer, CheckCircle, TrendingUp, Target, BarChart3, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ppcServices = [
  {
    title: "Google Ads Management",
    description: "Comprehensive Google Ads campaign management for maximum ROI",
    features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Advertising"],
    duration: "Ongoing"
  },
  {
    title: "Facebook & Instagram Ads", 
    description: "Social media advertising campaigns that drive engagement and conversions",
    features: ["Audience Targeting", "Creative Development", "Campaign Optimization", "A/B Testing"],
    duration: "Ongoing"
  },
  {
    title: "LinkedIn Advertising",
    description: "B2B focused advertising campaigns on LinkedIn for lead generation",
    features: ["Sponsored Content", "Lead Gen Forms", "Account Targeting", "Message Ads"],
    duration: "Ongoing"
  },
  {
    title: "Campaign Strategy & Setup",
    description: "Strategic planning and initial campaign setup for optimal performance",
    features: ["Market Research", "Competitor Analysis", "Audience Research", "Campaign Structure"],
    duration: "2-3 weeks"
  },
  {
    title: "Landing Page Optimization",
    description: "Optimize landing pages for better conversion rates and lower costs",
    features: ["Conversion Rate Optimization", "A/B Testing", "User Experience Design", "Mobile Optimization"],
    duration: "3-4 weeks"
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive reporting and analytics to track campaign performance",
    features: ["Custom Dashboards", "ROI Tracking", "Conversion Attribution", "Performance Reports"],
    duration: "Ongoing"
  }
]

const results = [
  { metric: "45%", description: "Reduction in cost per acquisition" },
  { metric: "4.2x", description: "Average return on ad spend (ROAS)" },
  { metric: "250%", description: "Increase in qualified leads" },
  { metric: "98%", description: "Client retention rate" }
]

const platforms = [
  {
    name: "Google Ads",
    description: "Search, Display, Shopping, and YouTube advertising",
    features: ["High Intent Traffic", "Extensive Reach", "Advanced Targeting", "Detailed Analytics"]
  },
  {
    name: "Facebook Ads",
    description: "Facebook and Instagram advertising campaigns",
    features: ["Social Engagement", "Visual Content", "Demographic Targeting", "Retargeting Options"]
  },
  {
    name: "LinkedIn Ads",
    description: "Professional network advertising for B2B companies",
    features: ["Professional Audience", "B2B Focus", "Industry Targeting", "Lead Generation"]
  },
  {
    name: "Microsoft Ads",
    description: "Bing and Microsoft network advertising",
    features: ["Less Competition", "Professional Audience", "Lower CPCs", "Import from Google"]
  }
]

export default function PPC() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const platformsRef = useRef<HTMLDivElement>(null)

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

    if (platformsRef.current) {
      gsap.fromTo(platformsRef.current.querySelectorAll('.platform-card'), 
        { x: -100, opacity: 0 }, 
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: platformsRef.current,
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
                <MousePointer className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">PPC</span>
                <br />
                <span className="text-gradient-primary">Advertising Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
                Maximize your ROI with targeted pay-per-click campaigns. Drive immediate traffic and conversions with expertly managed advertising campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Get Free Campaign Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                  View PPC Case Studies
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
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Proven PPC Results</h2>
            <p className="text-foreground-muted">Average improvements our clients see within 3 months</p>
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
              <span className="text-foreground">Complete</span>
              <span className="text-gradient-primary"> PPC Management</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your pay-per-click advertising campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, index) => (
              <Card key={service.title} className="service-card glass hover-lift h-full">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit">
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-foreground-muted">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30" ref={platformsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Advertising</span>
              <span className="text-gradient-primary"> Platforms We Manage</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              We're certified experts across all major advertising platforms to reach your audience wherever they are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={platform.name} className="platform-card glass">
                <CardHeader>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-foreground-muted">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="glass max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Ready to Scale Your</span>
                <span className="text-gradient-primary"> Advertising Results?</span>
              </h2>
              <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
                Get started with a free PPC audit and discover how we can improve your campaign performance and ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Get Free PPC Audit
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