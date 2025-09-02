import { useState, useEffect, useRef } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "SEO", href: "/services/seo" },
      { name: "PPC", href: "/services/ppc" },
      { name: "Web Development", href: "/services/web-development" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Teams", href: "/teams" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations on component mount
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo
    tl.fromTo(
      logoRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Animate navigation items with stagger
    tl.fromTo(
      navItemsRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    // Animate CTA button
    tl.fromTo(
      ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleMobileNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === href) {
      window.scrollTo(0, 0);
    }
  };

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );

        gsap.fromTo(
          ".mobile-nav-item",
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleDropdownEnter = (itemName: string) => {
    // Clear any pending timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    setActiveDropdown(itemName);
    // Animate dropdown appearance
    const dropdown = document.getElementById(`dropdown-${itemName}`);
    if (dropdown) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleDropdownLeave = (itemName: string) => {
    // Set a timeout before closing to allow cursor to move to dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
  };

  const handleDropdownMenuEnter = () => {
    // Clear timeout if user enters the dropdown menu
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownMenuLeave = () => {
    // Close dropdown after a short delay when leaving the menu
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-border/30 py-0"
          : "bg-background/80 backdrop-blur-sm border-border/10 py-1"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform group-hover:scale-105 transition-transform duration-300 shadow-md">
              <Zap className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Once Seen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="relative group"
              >
                {item.subItems ? (
                  <>
                    <button
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.href) || activeDropdown === item.name
                          ? "text-foreground bg-muted/50"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/30"
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={() => handleDropdownLeave(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      id={`dropdown-${item.name}`}
                      className={`absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg overflow-hidden py-2 z-50 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={handleDropdownMenuEnter}
                      onMouseLeave={handleDropdownMenuLeave}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-2 text-popover-foreground hover:bg-accent transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-foreground font-medium bg-muted/50"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <ModeToggle />
            <Button
              ref={ctaRef}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-muted rounded-full h-10 w-10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden bg-card/95 backdrop-blur-md border-t border-border"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="mobile-nav-item">
                {item.subItems ? (
                  <div className="px-3 py-2">
                    <div className="font-medium text-foreground/80 mb-2">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block py-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
                          onClick={() => handleMobileNavClick(sub.href)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted transition-colors duration-200 font-medium"
                    onClick={() => handleMobileNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-3 pt-2">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg shadow-md"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
