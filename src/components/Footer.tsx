import { Mail, Instagram, MapPin, Phone } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={withBase("/logo.png")} 
                alt="LamanPlus" 
                className="h-16 w-13 rounded-lg object-contain"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                LamanPlus
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Membantu UMKM dalam membangun presence digital mereka.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={withBase("/#order-steps")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cara Pemesanan
                </a>
              </li>
              <li>
                <a
                  href={withBase("/#pricing")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href={withBase("/#faq")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={withBase("/about")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href={withBase("/contact")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@lamanplus.web.id"
                  className="hover:text-foreground transition-colors"
                >
                  hello@lamanplus.web.id
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/6285156286627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +62 851-5628-6627
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Instagram className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="https://instagram.com/lamanplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  @lamanplus
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Batam, Kepulauan Riau, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LamanPlus. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={withBase("/privacy")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href={withBase("/terms")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href={withBase("/privacy#cookies")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}