import { useState } from "react"
import { Calculator, TrendingUp, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SEOCalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [avgOrderValue, setAvgOrderValue] = useState("")
  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const traffic = parseInt(monthlyTraffic) || 0
    const conversion = parseFloat(conversionRate) || 0
    const orderValue = parseFloat(avgOrderValue) || 0

    const currentRevenue = traffic * (conversion / 100) * orderValue
    const improvedTraffic = traffic * 2.5 // 150% increase typical for SEO
    const improvedConversion = conversion * 1.3 // 30% increase typical for optimization
    const projectedRevenue = improvedTraffic * (improvedConversion / 100) * orderValue
    const monthlyIncrease = projectedRevenue - currentRevenue
    const yearlyIncrease = monthlyIncrease * 12

    setResults({
      currentRevenue: currentRevenue.toFixed(0),
      projectedRevenue: projectedRevenue.toFixed(0),
      monthlyIncrease: monthlyIncrease.toFixed(0),
      yearlyIncrease: yearlyIncrease.toFixed(0),
      roiMultiplier: (projectedRevenue / currentRevenue).toFixed(1)
    })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border-card-border bg-background/50 mb-6">
            <Calculator className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Calculate Your</span>
            <span className="text-gradient-primary"> SEO ROI Potential</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Discover how much additional revenue you could generate with optimized SEO and digital marketing strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="glass hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Enter Your Current Metrics
              </CardTitle>
              <CardDescription>
                Provide your current website performance data for accurate projections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="traffic">Monthly Website Traffic</Label>
                <Input
                  id="traffic"
                  type="number"
                  placeholder="e.g., 10000"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="conversion">Conversion Rate (%)</Label>
                <Input
                  id="conversion"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="orderValue">Average Order Value ($)</Label>
                <Input
                  id="orderValue"
                  type="number"
                  placeholder="e.g., 100"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(e.target.value)}
                />
              </div>

              <Button 
                onClick={calculateROI} 
                className="w-full bg-gradient-primary hover:opacity-90 font-semibold py-6"
                disabled={!monthlyTraffic || !conversionRate || !avgOrderValue}
              >
                Calculate ROI Potential
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                Your Growth Potential
              </CardTitle>
              <CardDescription>
                Based on industry averages and our proven strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-foreground-muted">
                        ${parseInt(results.currentRevenue).toLocaleString()}
                      </div>
                      <div className="text-sm text-foreground-muted">Current Monthly Revenue</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-primary/10 border border-primary/20">
                      <div className="text-2xl font-bold text-gradient-primary">
                        ${parseInt(results.projectedRevenue).toLocaleString()}
                      </div>
                      <div className="text-sm text-primary">Projected Monthly Revenue</div>
                    </div>
                  </div>

                  <div className="text-center space-y-4 p-6 rounded-lg bg-success/5 border border-success/20">
                    <div>
                      <div className="text-3xl font-bold text-success">
                        +${parseInt(results.monthlyIncrease).toLocaleString()}
                      </div>
                      <div className="text-sm text-foreground-muted">Additional Monthly Revenue</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">
                        +${parseInt(results.yearlyIncrease).toLocaleString()}
                      </div>
                      <div className="text-sm text-foreground-muted">Additional Yearly Revenue</div>
                    </div>
                    <div className="pt-2 border-t border-success/20">
                      <div className="text-lg font-semibold text-success">
                        {results.roiMultiplier}x Revenue Multiplier
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 font-semibold px-8">
                      Get Your Custom Strategy
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Calculator className="h-10 w-10 text-foreground-muted" />
                  </div>
                  <p className="text-foreground-muted">
                    Enter your metrics to see your growth potential
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}