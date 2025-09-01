import { ArrowRight, PlayCircle, TrendingUp, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <TrendingUp className="h-8 w-8 text-primary animate-float" />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <Globe className="h-12 w-12 text-accent animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Users className="h-10 w-10 text-secondary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-muted/50">
              <span className="text-sm font-medium text-foreground-muted">
                🚀 #1 Digital Marketing Agency
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Amplify Your</span>
                <br />
                <span className="text-gradient-primary">Digital Presence</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl">
                Transform your business with data-driven digital marketing strategies and cutting-edge web development solutions that deliver real results.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">500+</div>
                <div className="text-sm text-foreground-muted">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">98%</div>
                <div className="text-sm text-foreground-muted">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">2.5x</div>
                <div className="text-sm text-foreground-muted">Average ROI Increase</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 font-semibold px-8 py-6 text-lg hover-lift"
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-foreground-muted mb-4">Trusted by leading brands worldwide</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                <div className="h-6 bg-foreground-muted rounded w-20"></div>
                <div className="h-6 bg-foreground-muted rounded w-24"></div>
                <div className="h-6 bg-foreground-muted rounded w-16"></div>
                <div className="h-6 bg-foreground-muted rounded w-28"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative slide-in-right">
            <div className="relative">
              {/* Main Graphic Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-secondary p-8 shadow-custom-xl hover-lift">
                <div className="w-full h-full rounded-xl bg-background/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground">
                      <div className="text-2xl font-bold">Growth Analytics</div>
                      <div className="text-sm opacity-80">Real-time insights</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass rounded-lg p-4 shadow-custom-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">SEO Optimized</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-lg p-4 shadow-custom-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Traffic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}