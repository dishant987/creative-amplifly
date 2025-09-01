import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import gsap from "gsap"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const botResponses = [
  "Hello! I'm here to help you with your digital marketing and web development needs. How can I assist you today?",
  "That's a great question! Our team specializes in SEO, PPC, social media marketing, and custom web development. Would you like to know more about any specific service?",
  "I'd be happy to help you get started! Let me connect you with one of our specialists. Please visit our Contact Us page to schedule a free consultation.",
  "Our SEO services typically show results within 3-6 months, with significant improvements often visible in the first month. Would you like to learn more about our SEO process?",
  "Web development timelines vary based on complexity. A basic website takes 2-4 weeks, while complex e-commerce sites can take 8-12 weeks. What type of website are you looking to build?",
  "Our PPC campaigns are designed to maximize ROI. We've helped clients reduce their cost per acquisition by up to 45%. Shall I direct you to our Contact page for a detailed consultation?",
  "Social media marketing is crucial for brand awareness! We manage content creation, community engagement, and paid social campaigns. Would you like to see some of our case studies?",
  "That sounds like a perfect fit for our services! I recommend scheduling a free consultation with our team. They can provide a customized strategy for your business. Please visit our Contact Us section.",
  "Our content marketing strategies have helped clients generate 40% of their qualified leads through blogging and content creation. Want to learn more about our approach?",
  "Absolutely! We offer comprehensive email marketing services including automation, segmentation, and A/B testing. Let me guide you to speak with our team - check out our Contact section!"
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm AmpliBot, your digital marketing assistant. I can help you learn about our services, answer questions about SEO, web development, PPC, and more. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && chatRef.current) {
      gsap.fromTo(chatRef.current, 
        { scale: 0.8, opacity: 0, y: 20 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      )
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90 shadow-custom-xl hover-lift"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40" ref={chatRef}>
          <Card className="w-80 sm:w-96 h-96 glass shadow-custom-xl border-card-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <span>AmpliBot</span>
                <div className="flex-1"></div>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex flex-col h-full p-0">
              {/* Messages */}
              <ScrollArea className="flex-1 px-4">
                <div className="space-y-4 pb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isBot ? 'bg-gradient-primary' : 'bg-muted'
                        }`}>
                          {message.isBot ? (
                            <Bot className="h-4 w-4 text-primary-foreground" />
                          ) : (
                            <User className="h-4 w-4 text-foreground" />
                          )}
                        </div>
                        <div className={`rounded-lg px-3 py-2 ${
                          message.isBot 
                            ? 'bg-muted text-foreground' 
                            : 'bg-gradient-primary text-primary-foreground'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-card-border">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90"
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}