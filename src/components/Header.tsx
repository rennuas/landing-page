import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Sparkles, Rocket } from "lucide-react";
import { withBase } from "@/lib/utils";
import { ShimmerButton } from "@/components/ShimmerButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { label: "Portofolio", href: withBase("/#Portfolio") },
    { label: "Order", href: withBase("/#order-steps") },
    { label: "Harga", href: withBase("/#pricing") },
    { label: "Testimoni", href: withBase("/#testimonials") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
      {/* Logo */}
      <a href={withBase("/")} className="flex items-center space-x-2">
        <img 
          src={withBase("/logo.png")} 
          alt="LamanPlus" 
          className="h-16 w-13 rounded-lg object-contain"
        />
        <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          LamanPlus
        </span>
      </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href="https://wa.me/6285156286627" target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="hidden md:block">Konsultasi</ShimmerButton>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://wa.me/6285156286627" target="_blank" rel="noopener noreferrer">
              <ShimmerButton className="hidden md:block">Konsultasi</ShimmerButton>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
