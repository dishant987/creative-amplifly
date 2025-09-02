import { useEffect, useRef } from "react"
import { ArrowRight, PlayCircle, TrendingUp, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.hero-content > *'), 
        { y: 80, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      )
    }

    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 1 }
      )
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <TrendingUp className="h-8 w-8 text-primary animate-float" />
      </div>
      <div className="absolute top-32 right-20 opacity-20 hidden lg:block">
        <Globe className="h-12 w-12 text-accent animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 hidden lg:block">
        <Users className="h-10 w-10 text-secondary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="hero-content space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50">
              <span className="text-sm font-medium text-foreground-muted">
                🚀 #1 Digital Marketing Agency
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Amplify Your</span>
                <br />
                <span className="text-gradient-primary">Digital Presence</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto lg:mx-0">
                Transform your business with data-driven digital marketing strategies and cutting-edge web development solutions that deliver real results.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 py-4">
              <div className="stat-item text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">500+</div>
                <div className="text-sm text-foreground-muted">Projects Completed</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">98%</div>
                <div className="text-sm text-foreground-muted">Client Satisfaction</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">2.5x</div>
                <div className="text-sm text-foreground-muted">Average ROI Increase</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 font-semibold px-6 lg:px-8 py-6 text-base lg:text-lg hover-lift"
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold px-6 lg:px-8 py-6 text-base lg:text-lg border-primary/20 hover:bg-primary/5 hover:text-muted-foreground"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-foreground-muted mb-4">Trusted by leading brands worldwide</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 opacity-60">
                <div className="h-6 bg-foreground-muted rounded w-20"></div>
                <div className="h-6 bg-foreground-muted rounded w-24"></div>
                <div className="h-6 bg-foreground-muted rounded w-16"></div>
                <div className="h-6 bg-foreground-muted rounded w-28"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Graphic Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-secondary p-6 lg:p-8 shadow-custom-xl hover-lift">
                <div className="w-full h-full rounded-xl bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 lg:w-20 h-16 lg:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 lg:h-10 w-8 lg:w-10 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground">
                      <div className="text-xl lg:text-2xl font-bold">Growth Analytics</div>
                      <div className="text-sm opacity-80">Real-time insights</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-2 lg:-top-4 -left-2 lg:-left-4 glass rounded-lg p-3 lg:p-4 shadow-custom-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium">SEO Optimized</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 lg:-bottom-4 -right-2 lg:-right-4 glass rounded-lg p-3 lg:p-4 shadow-custom-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-medium">Live Traffic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}