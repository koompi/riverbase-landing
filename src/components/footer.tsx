import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Riverbase Logo"
                width={28}
                height={28}
                className="rounded-lg object-contain"
              />
              <span className="text-base font-semibold text-foreground">
                Riverbase
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-[240px]">
              The complete commerce platform for modern businesses.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[13px] font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-muted-foreground/80">
            © 2025 Riverbase. All rights reserved.
          </p>
          <p className="text-[13px] text-muted-foreground/80">
            <a href="#" className="hover:text-foreground transition-colors">
              X
            </a>
            {" · "}
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            {" · "}
            <a href="#" className="hover:text-foreground transition-colors">
              Telegram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
