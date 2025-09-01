import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    title: "The Ultimate Guide to SEO in 2024: Strategies That Actually Work",
    excerpt: "Discover the latest SEO strategies and techniques that are driving results in 2024. From E-A-T to Core Web Vitals, learn what really matters.",
    author: "Sarah Johnson",
    authorRole: "SEO Specialist",
    date: "2024-03-15",
    readTime: "12 min read",
    category: "SEO",
    tags: ["SEO", "Digital Marketing", "Search Rankings"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    title: "PPC Campaign Optimization: How to Reduce CPA by 50%",
    excerpt: "Learn proven strategies to dramatically reduce your cost per acquisition while maintaining or increasing conversion volume.",
    author: "Michael Chen",
    authorRole: "PPC Expert",
    date: "2024-03-12",
    readTime: "8 min read",
    category: "PPC",
    tags: ["PPC", "Google Ads", "Conversion Optimization"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Building High-Converting Landing Pages: A Developer's Guide",
    excerpt: "Technical insights on creating landing pages that not only look great but convert visitors into customers at scale.",
    author: "Emily Rodriguez",
    authorRole: "Web Developer",
    date: "2024-03-10",
    readTime: "15 min read",
    category: "Web Development",
    tags: ["Web Development", "Conversion Optimization", "UX"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    title: "Social Media Marketing Trends That Will Dominate 2024",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends and platform updates you need to know about.",
    author: "David Kumar",
    authorRole: "Social Media Manager",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "Social Media",
    tags: ["Social Media", "Marketing Trends", "Content Strategy"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Email Marketing Automation: Boost Revenue by 300%",
    excerpt: "Discover how to set up email automation sequences that nurture leads and drive consistent revenue growth.",
    author: "Lisa Thompson",
    authorRole: "Email Marketing Specialist",
    date: "2024-03-05",
    readTime: "12 min read",
    category: "Email Marketing",
    tags: ["Email Marketing", "Automation", "Revenue Growth"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    title: "Content Marketing ROI: Measuring What Matters",
    excerpt: "Learn how to properly measure content marketing ROI and prove the value of your content strategy to stakeholders.",
    author: "James Wilson",
    authorRole: "Content Strategist",
    date: "2024-03-03",
    readTime: "9 min read",
    category: "Content Marketing",
    tags: ["Content Marketing", "ROI", "Analytics"],
    image: "/api/placeholder/600/400",
    featured: false
  }
]

const categories = ["All", "SEO", "PPC", "Web Development", "Social Media", "Email Marketing", "Content Marketing"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const heroRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Posts animation
    if (postsRef.current) {
      gsap.fromTo(postsRef.current.querySelectorAll('.blog-post'), 
        { y: 80, opacity: 0, scale: 0.95 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [filteredPosts])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50 mb-6">
              <span className="text-sm font-medium">Digital Marketing Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Insights, Tips &</span>
              <br />
              <span className="text-gradient-primary">Industry Trends</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on digital marketing, web development, and the latest industry trends.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground-muted" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary" : "border-primary/20 hover:bg-primary/5"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20" ref={postsRef}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Featured</span>
                <br />
                <span className="text-gradient-primary">Articles</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {featuredPosts.map((post, index) => (
                <Card key={post.title} className="blog-post glass hover-lift group overflow-hidden">
                  <div className="aspect-video bg-muted/50 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {post.category}
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground-muted mb-6">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground-muted mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-primary hover:opacity-90 group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Latest</span>
                <br />
                <span className="text-gradient-primary">Articles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={post.title} className="blog-post glass hover-lift group h-full">
                  <div className="aspect-video bg-muted/50 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge variant="secondary" className="bg-primary/10 text-primary w-fit mb-4">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground-muted mb-4 flex-1">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-foreground-muted mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/5 group">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Stay Updated</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              Get the latest digital marketing insights and web development tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-primary hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}