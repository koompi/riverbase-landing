import { ArrowUpRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

interface Store {
  name: string;
  desc: string;
  href: string;
}

// NOTE: smartcam-group.com is omitted until its domain is cleaned up — it
// currently serves injected spam content instead of the storefront.
const stores: Store[] = [
  {
    name: "Camprotec",
    desc: "Office technology: printers, photocopiers, toner, and payment solutions for Cambodian businesses.",
    href: "https://camprotec.com.kh/en",
  },
  {
    name: "weYOUNG Cambodia",
    desc: "Skincare and beauty essentials, from cleansing water to sunscreen, sold direct to fans.",
    href: "https://weyoungcambodia.com/en",
  },
  {
    name: "BE Cambodia",
    desc: "Curated premium lifestyle products with fast delivery across Cambodia.",
    href: "https://staging.riverbase.org/shops/en/69f976a69f53bad84d68a566",
  },
  {
    name: "VET Shop",
    desc: "Farm-fresh produce and agriculture goods, listed in Khmer for local customers.",
    href: "https://shop.vet-agri.com/en",
  },
];

function hostOf(href: string) {
  return new URL(href).host;
}

export function Stores() {
  return (
    <section id="stores" className="section-divider border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
            Built on Riverbase
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            Real stores, selling today
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            From skincare brands to office tech suppliers, Cambodian
            businesses run their storefronts on Riverbase.
          </p>
        </div>

        <div className="mt-20 rounded-2xl overflow-hidden bg-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {stores.map((store) => (
              <a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 md:p-10 hover:bg-muted/40 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {store.name}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-foreground/25 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {store.desc}
                </p>
                <p className="text-[12px] font-medium text-foreground/40 mt-4 font-mono">
                  {hostOf(store.href)}
                </p>
              </a>
            ))}

            {/* Open slot — the visitor's store. Spans the remaining columns
                so the grid stays filled with 4 stores + this cell. */}
            <a
              href={SIGNUP_URL}
              className="group bg-card p-8 md:p-10 hover:bg-muted/40 transition-colors duration-200 md:col-span-2"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[15px] font-semibold text-primary">
                  Your store
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Launch your storefront in minutes and join the merchants
                already selling on Riverbase.
              </p>
              <p className="text-[12px] font-medium text-primary/50 mt-4 font-mono">
                riverbase.org/shops/create
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
