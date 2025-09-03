import { useState } from "react"
import { Calculator, TrendingUp, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SEOCalculator() {
  const [businessType, setBusinessType] = useState("")
  const [annualRevenue, setAnnualRevenue] = useState("")
  const [serviceDuration, setServiceDuration] = useState("")
  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const revenue = parseInt(annualRevenue) || 0
    let growthRate = 0.1 // default 10%

    if (serviceDuration === "3m" || serviceDuration === "6m" || serviceDuration === "12m" || serviceDuration === "ongoing") {
      growthRate = 0.25
    }

    const minGrowth = revenue * growthRate
    const maxGrowth = serviceDuration === "3m" ? minGrowth : revenue * 0.3

    setResults({
      currentRevenue: revenue.toFixed(0),
      minProjected: (revenue + minGrowth).toFixed(0),
      maxProjected: (revenue + maxGrowth).toFixed(0),
      growthRange: `${(growthRate * 100).toFixed(0)}% - ${(serviceDuration === "3m" ? growthRate * 100 : 30)}%`
    })
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
         <div className="inline-flex items-center px-4 py-2 rounded-full border bg-background mb-6">
  <Calculator className="h-4 w-4 mr-2 text-primary" />
  <span className="text-sm font-medium">SEO ROI Calculator</span>
</div>

<h2 className="text-3xl md:text-4xl font-bold mb-4">
  <span className="text-foreground">How Much Revenue Are You Missing</span>{" "}
  <span className="text-gradient-primary">without OnceSeen?</span>
</h2>

<p className="text-lg text-foreground-muted max-w-xl mx-auto">
  Enter just a few details to see how OnceSeen SEO strategies can maximize your business growth.
</p>
</div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Enter Your Details
              </CardTitle>
              <CardDescription>
                Minimal inputs for a clear revenue projection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Business Type */}
              <div className="space-y-2">
                <Label htmlFor="businessType">Nature of Business</Label>
                <Select onValueChange={setBusinessType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "SaaS / IT Services",
                      "E-commerce",
                      "Manufacturing",
                      "Healthcare",
                      "EdTech",
                      "Finance",
                      "Real Estate",
                      "Other"
                    ].map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Annual Revenue */}
              <div className="space-y-2">
                <Label htmlFor="annualRevenue">Annual Revenue (₹)</Label>
                <Input
                  id="annualRevenue"
                  type="number"
                  placeholder="e.g., 5000000"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                />
              </div>

              {/* Service Duration */}
              <div className="space-y-2">
                <Label htmlFor="serviceDuration">SEO Service Duration</Label>
                <Select onValueChange={setServiceDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lt3">Less than 3 Months</SelectItem>
                    <SelectItem value="3m">3 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                    <SelectItem value="12m">12 Months</SelectItem>
                    <SelectItem value="ongoing">Ongoing Retainer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateROI} 
                className="w-full bg-gradient-primary hover:opacity-90 font-semibold py-5"
                disabled={!annualRevenue || !businessType || !serviceDuration}
              >
                Calculate Potential
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
       <Card className="shadow-lg border border-muted/30">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <DollarSign className="h-5 w-5 text-success" />
      Potential Growth with OnceSeen
    </CardTitle>
    <CardDescription>
      See how SEO can unlock untapped revenue for your business
    </CardDescription>
  </CardHeader>
  <CardContent>
    {results ? (
      <div className="space-y-6 text-center">
        {/* Current Revenue */}
        <div className="p-4 rounded-xl bg-muted/40 shadow-sm">
          <div className="text-base text-foreground-muted">Your Current Annual Revenue</div>
          <div className="text-2xl font-bold text-foreground">
            ₹{parseInt(results.currentRevenue).toLocaleString("en-IN")}
          </div>
        </div>

        {/* Projected Growth */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-success/30 shadow-md">
          <div className="text-lg font-medium text-success/90">Projected Annual Revenue</div>
          <div className="text-3xl font-extrabold text-success mt-1">
            ₹{parseInt(results.minProjected).toLocaleString("en-IN")} – ₹{parseInt(results.maxProjected).toLocaleString("en-IN")}
          </div>
          <p className="text-sm  text-foreground-muted mt-2">
            🚀 Potential uplift: <span className="font-semibold text-success">{results.growthRange}</span>
          </p>
        </div>

        {/* Gap Highlight */}
        <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
          <p className="text-base font-medium text-warning">
            You could be leaving <span className="font-bold">₹{(parseInt(results.maxProjected) - parseInt(results.currentRevenue)).toLocaleString("en-IN")}</span> on the table!
          </p>
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-primary hover:opacity-90 font-semibold px-10 rounded-xl shadow-md"
        >
          Get Your Custom SEO Plan
        </Button>
      </div>
    ) : (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
          <Calculator className="h-8 w-8 text-foreground-muted" />
        </div>
        <p className="text-foreground-muted">
          Enter your details to see how much growth you’re missing
        </p>
      </div>
    )}
  </CardContent>
</Card>
</div></div>
    </section>
  )
}
