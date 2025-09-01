import { CheckCircle, Users, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Team Members" }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with clear, measurable goals and ROI in mind."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work as an extension of your team."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Stay ahead with cutting-edge strategies and proven methodologies."
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-background/50 mb-6">
                <span className="text-sm font-medium">About AmpliFlow</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Your Trusted Partner in</span>
                <br />
                <span className="text-gradient-primary">Digital Transformation</span>
              </h2>
              <p className="text-lg text-foreground-muted mb-8">
                AmpliFlow combines the power of digital marketing expertise with cutting-edge web development to deliver comprehensive solutions that amplify your online presence and drive sustainable business growth.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Data-driven strategies backed by industry insights",
                "Full-service approach from strategy to execution",
                "Proven track record across diverse industries",
                "Dedicated team of certified professionals"
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted">{point}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center p-6 glass rounded-lg hover-lift">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-foreground-muted">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={value.title} className="flex items-start space-x-4 p-4 glass rounded-lg hover-lift">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-foreground-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}