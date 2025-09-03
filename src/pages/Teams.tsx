import { useEffect, useRef } from "react"
import { Linkedin, Twitter, Github, Mail, Award, Users, Target, TrendingUp, Instagram } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "Sanju Rajora",
    role: "Co-Founder & SEO Expert",
    image: "/placeholder.svg",
    bio: "1+ years of experience in digital marketing and business strategy. 3+ years exprience in Website development.",
    specialties: ["Digital Strategy", "Business Growth", "Website Development"],
    achievements: ["Built 2 successful agencies", "20+ Websites", "Seo Centric Websites"],
    social: {
      linkedin: "https://linkedin.com/in/sanju-rajora",
      instagram: "https://www.instagram.com/_sanju_25o4_/",
      email: "sanjurajora3@gmail.com"
    }
  },
  {
    name: "Manan Patel",
    role: "Co-Founder & SEO-Expert ",
    image: "/placeholder.svg",
    bio: "SEO expert with a proven track record of improving organic rankings for 2+ websites across various industries.",
    specialties: ["Technical SEO", "Content Strategy", "Local SEO"],
    achievements: ["Google Analytics Certified", "300% avg traffic increase", "SEO Conference Speaker"],
    social: {
      linkedin: "https://www.linkedin.com/in/manan-patel-735381265/",
      instagram: "https://www.instagram.com/manan_patel_310/",
      email: "manantpatel1234@gmail.com"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "PPC Specialist",
    image: "/placeholder.svg",
    bio: "Google Ads expert managing $2M+ in ad spend annually with consistently achieving 4:1+ ROAS for clients.",
    specialties: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
    achievements: ["Google Ads Certified", "$2M+ ad spend managed", "4:1 average ROAS"],
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      instagram: "https://github.com/michaelrodriguez",
      email: "michael@ampliflow.com"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "PPC Specialist",
    image: "/placeholder.svg",
    bio: "Google Ads expert managing $2M+ in ad spend annually with consistently achieving 4:1+ ROAS for clients.",
    specialties: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
    achievements: ["Google Ads Certified", "$2M+ ad spend managed", "4:1 average ROAS"],
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      instagram: "https://github.com/michaelrodriguez",
      email: "michael@ampliflow.com"
    }},

]

const companyValues = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable results that directly impact your business growth and ROI."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build long-term partnerships based on trust and transparency."
  },
  {
    icon: TrendingUp,
    title: "Innovation First",
    description: "We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive edge."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy to execution and reporting."
  }
]

const stats = [
  { number: "4+", label: "Team Members", description: "Experts across all digital disciplines" },
  { number: "30+", label: "Projects Delivered", description: "Successful campaigns and websites" },
  { number: "98%", label: "Client Satisfaction", description: "Based on client feedback and retention" },
  { number: "300%", label: "Average ROI", description: "Return on investment for our clients" }
]

export default function Teams() {
  const heroRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Team cards animation
    if (teamRef.current) {
      gsap.fromTo(teamRef.current.querySelectorAll('.team-card'), 
        { y: 80, opacity: 0, scale: 0.8 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Values animation
    if (valuesRef.current) {
      gsap.fromTo(valuesRef.current.querySelectorAll('.value-card'), 
        { x: -100, opacity: 0 }, 
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), 
        { scale: 0.5, opacity: 0 }, 
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
              <span className="text-sm font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Meet the</span>
              <br />
              <span className="text-gradient-primary">Experts Behind Your Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Our diverse team of digital marketing specialists, developers, and strategists work together to deliver exceptional results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-foreground-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20" ref={teamRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our</span>
              <span className="text-gradient-primary"> Talented Team</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Get to know the passionate professionals who make your success possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="team-card glass hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gradient-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="text-xs text-foreground-muted">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 pt-4 border-t border-card-border">
                    {member.social.linkedin && (
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.instagram && (
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                        <Instagram className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.instagram && (
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30" ref={valuesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Our</span>
              <span className="text-gradient-primary"> Core Values</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={value.title} className="value-card glass text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="glass max-w-4xl mx-auto text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Join Our</span>
                <span className="text-gradient-primary"> Amazing Team</span>
              </h2>
              <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about digital marketing and web development. Join us in creating exceptional results for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
                  Send Your Resume
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