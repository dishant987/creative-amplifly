import { useEffect, useRef } from "react"
import { Search, CheckCircle, TrendingUp, Target, BarChart3, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const seoServices = [
  {
    title: "Technical SEO Audit",
    description: "Comprehensive analysis of your website's technical performance and SEO health",
    features: ["Site Speed Optimization", "Mobile Responsiveness", "Crawlability Analysis", "Schema Markup"],
    duration: "2-3 weeks"
  },
  {
    title: "Keyword Research & Strategy", 
    description: "In-depth keyword analysis to identify high-value opportunities for your business",
    features: ["Competitive Analysis", "Long-tail Keywords", "Search Intent Mapping", "Keyword Difficulty Assessment"],
    duration: "1-2 weeks"
  },
  {
    title: "On-Page Optimization",
    description: "Optimize individual pages to rank higher and earn more relevant traffic",
    features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking"],
    duration: "3-4 weeks"
  },
  {
    title: "Content Strategy",
    description: "Create and optimize content that ranks well and engages your target audience",
    features: ["Content Audits", "Topic Clusters", "SEO Copywriting", "Content Calendar"],
    duration: "Ongoing"
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers to your business",
    features: ["Google Business Profile", "Local Citations", "Review Management", "Local Keywords"],
    duration: "4-6 weeks"
  },
  {
    title: "Link Building",
    description: "Build high-quality backlinks to improve your domain authority and rankings",
    features: ["Authority Link Building", "Guest Posting", "Digital PR", "Broken Link Building"],
    duration: "Ongoing"
  }
]

const results = [
  { metric: "300%", description: "Average increase in organic traffic" },
  { metric: "250%", description: "Improvement in keyword rankings" },
  { metric: "180%", description: "Growth in qualified leads" },
  { metric: "95%", description: "Client satisfaction rate" }
]

const process = [
  {
    step: 1,
    title: "SEO Audit & Analysis",
    description: "We conduct a comprehensive audit of your website to identify opportunities and issues affecting your search performance."
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Based on our findings, we create a custom SEO strategy tailored to your business goals and target audience."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Our team implements on-page optimizations, technical fixes, and content improvements across your website."
  },
  {
    step: 4,
    title: "Content & Link Building",
    description: "We create high-quality content and build authoritative backlinks to boost your domain authority and rankings."
  },
  {
    step: 5,
    title: "Monitoring & Optimization", 
    description: "Continuous monitoring, testing, and optimization to ensure sustained growth and improved performance."
  }
]

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Typically, you'll start seeing improvements in 3-6 months, with significant results in 6-12 months. SEO is a long-term strategy that builds momentum over time."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we can't guarantee specific rankings (no ethical SEO agency can), we do guarantee improved visibility, traffic, and leads based on our proven methodology."
  },
  {
    question: "What's included in your SEO services?",
    answer: "Our SEO services include technical audits, keyword research, on-page optimization, content strategy, link building, and monthly reporting with full transparency."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track organic traffic growth, keyword rankings, conversion rates, and business metrics that matter to your bottom line, providing detailed monthly reports."
  }
]

export default function SEO() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

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
          <div ref={heroRef} className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Search className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">SEO</span>
                <br />
                <span className="text-gradient-primary">Optimization Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
                Boost your search rankings and drive organic traffic with our data-driven SEO strategies. Get found by customers actively searching for your services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                  View SEO Case Studies
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
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Proven SEO Results</h2>
            <p className="text-foreground-muted">Average improvements our clients see within 6 months</p>
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
              <span className="text-foreground">Comprehensive</span>
              <span className="text-gradient-primary"> SEO Services</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              From technical optimization to content strategy, we cover every aspect of SEO to maximize your online visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30" ref={processRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our</span>
              <span className="text-gradient-primary"> SEO Process</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              A systematic approach to improving your search engine rankings and organic visibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <Card key={item.step} className="process-item glass">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Frequently Asked</span>
              <span className="text-gradient-primary"> Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">{faq.answer}</p>
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
                <span className="text-foreground">Ready to Dominate</span>
                <span className="text-gradient-primary"> Search Results?</span>
              </h2>
              <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
                Get started with a comprehensive SEO audit and custom strategy designed specifically for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  Start Your SEO Journey
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