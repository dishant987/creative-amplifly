import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "PPC Advertising", href: "/services/ppc" },
    { name: "Social Media Marketing", href: "/services/social-media" },
    { name: "Content Marketing", href: "/services/content" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Web Design", href: "/services/web-design" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
  ],
  resources: [
    { name: "Digital Marketing Guide", href: "/resources/marketing-guide" },
    { name: "SEO Checklist", href: "/resources/seo-checklist" },
    { name: "Web Design Trends", href: "/resources/design-trends" },
    { name: "ROI Calculator", href: "/calculator" },
    { name: "Write for Us", href: "/write-for-us" },
    { name: "Free Consultation", href: "/consultation" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo & Description */}
              <div>
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-xl text-gradient-primary">
                    Once Seen
                  </span>
                </Link>
                <p className="text-foreground-muted max-w-md">
                  Amplifying your digital success through innovative marketing
                  strategies and cutting-edge web development solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-foreground-muted">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">hello@ampliflow.com</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground-muted">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground-muted">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Digital Avenue, Tech City</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Stay Updated
                </h4>
                <p className="text-sm text-foreground-muted mb-4">
                  Get the latest digital marketing insights and updates.
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email address" className="flex-1" />
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-foreground-muted">
              © {new Date().getFullYear()} Once Seen. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-4 text-sm text-foreground-muted">
              <span>Built with ❤️ by AmpliFlow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
