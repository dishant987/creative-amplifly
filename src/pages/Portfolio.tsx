import { useEffect, useRef } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  {
    title: "TechStart Inc. - Complete Digital Transformation",
    category: "SEO & Web Development",
    description: "Complete website redesign and SEO optimization that resulted in 300% increase in organic traffic and 150% boost in conversions.",
    image: "/api/placeholder/600/400",
    results: [
      "300% increase in organic traffic",
      "150% boost in conversions",
      "40% improvement in site speed",
      "Top 3 rankings for target keywords"
    ],
    tags: ["SEO", "Web Development", "UI/UX Design"],
    link: "#"
  },
  {
    title: "GrowthCorp - PPC Campaign Optimization",
    category: "PPC Advertising",
    description: "Restructured PPC campaigns across Google Ads and Facebook, reducing cost per acquisition by 45% while scaling reach.",
    image: "/api/placeholder/600/400",
    results: [
      "45% reduction in CPA",
      "200% increase in qualified leads",
      "300% improvement in ROAS",
      "50% lower cost per click"
    ],
    tags: ["PPC", "Google Ads", "Facebook Ads"],
    link: "#"
  },
  {
    title: "EcomPlus - E-commerce Website & Marketing",
    category: "E-commerce Development",
    description: "Built a custom e-commerce platform with integrated marketing automation, resulting in 250% increase in online sales.",
    image: "/api/placeholder/600/400",
    results: [
      "250% increase in online sales",
      "60% improvement in user experience",
      "180% boost in mobile conversions",
      "40% increase in average order value"
    ],
    tags: ["E-commerce", "Web Development", "Email Marketing"],
    link: "#"
  },
  {
    title: "InnovateLab - Thought Leadership Content Strategy",
    category: "Content Marketing",
    description: "Developed comprehensive content marketing strategy that established the client as an industry thought leader.",
    image: "/api/placeholder/600/400",
    results: [
      "40% of leads from content",
      "500% increase in blog traffic",
      "200% growth in social following",
      "15 industry award nominations"
    ],
    tags: ["Content Marketing", "SEO", "Social Media"],
    link: "#"
  },
  {
    title: "DigitalWave - Social Media Marketing Campaign",
    category: "Social Media Marketing",
    description: "Created viral social media campaigns that significantly boosted brand awareness and engagement across platforms.",
    image: "/api/placeholder/600/400",
    results: [
      "180% increase in engagement",
      "300% growth in followers",
      "50% improvement in brand recall",
      "25% increase in social conversions"
    ],
    tags: ["Social Media", "Content Creation", "Brand Strategy"],
    link: "#"
  },
  {
    title: "LocalBiz - Local SEO & Google My Business",
    category: "Local SEO",
    description: "Optimized local presence for small business, achieving top local rankings and significantly increasing foot traffic.",
    image: "/api/placeholder/600/400",
    results: [
      "400% increase in local visibility",
      "60% more phone inquiries",
      "35% increase in foot traffic",
      "#1 local rankings achieved"
    ],
    tags: ["Local SEO", "Google My Business", "Local Marketing"],
    link: "#"
  }
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "300%", label: "Average Traffic Increase" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "2.5x", label: "Average ROI Improvement" }
]

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Portfolio items animation
    if (portfolioRef.current) {
      gsap.fromTo(portfolioRef.current.querySelectorAll('.portfolio-item'), 
        { y: 100, opacity: 0, rotationX: 15 }, 
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), 
        { scale: 0, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
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
              <span className="text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Success Stories &</span>
              <br />
              <span className="text-gradient-primary">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns and web development projects that have driven real results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20" ref={portfolioRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Featured</span>
              <br />
              <span className="text-gradient-primary">Case Studies</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Each project showcases our commitment to delivering exceptional results and driving business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioItems.map((item, index) => (
              <Card key={item.title} className="portfolio-item glass hover-lift group overflow-hidden">
                <div className="aspect-video bg-muted/50 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{item.category}</p>
                  <p className="text-foreground-muted mb-6">{item.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">Key Results:</h4>
                    <ul className="space-y-2">
                      {item.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-foreground-muted">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 group">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Ready to Be Our Next</span>
              <br />
              <span className="text-gradient-primary">Success Story?</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              Let's discuss your project and create a strategy that delivers results like these. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}