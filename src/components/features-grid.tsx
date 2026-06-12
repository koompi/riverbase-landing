import {
  MessageCircle,
  Monitor,
  Globe,
  Landmark,
  Package,
  ShoppingBag,
  Crown,
  Bell,
  Palette,
  ShoppingCart,
  Tag,
  Ticket,
  MapPin,
  Layers,
  CreditCard,
  Building,
  FileText,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const featuresTop: Feature[] = [
  {
    icon: MessageCircle,
    title: "Telegram Mini App",
    desc: "Turn your shop into a Telegram Mini App. Let customers browse, order, and pay directly inside Telegram.",
  },
  {
    icon: Monitor,
    title: "Point of Sale",
    desc: "Built-in POS system for in-store sales. Process walk-in orders, scan products, and print receipts instantly.",
  },
  {
    icon: Globe,
    title: "Custom Domain",
    desc: "Connect your own domain name to your storefront. Build your brand with a professional web presence.",
  },
  {
    icon: Landmark,
    title: "Direct Bank Payment",
    desc: "Accept direct bank deposits and transfers. Customers pay straight to your bank account with instant confirmation.",
  },
  {
    icon: Package,
    title: "Product Catalog",
    desc: "Rich product listings with variants, images, and real-time inventory tracking across multiple locations.",
  },
  {
    icon: ShoppingBag,
    title: "Order Management",
    desc: "Real-time order tracking, processing, and status updates. Support for delivery, pickup, and on-site POS.",
  },
  {
    icon: Crown,
    title: "Membership & VIP",
    desc: "Tiered membership programs with exclusive discounts for your most loyal customers. Drive repeat purchases.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    desc: "Instant updates on new orders, inventory changes, and customer activity via Telegram and in-app alerts.",
  },
  {
    icon: Palette,
    title: "Custom Storefront",
    desc: "Customizable themes, sections, and layouts to make your shop uniquely yours. No coding required.",
  },
];

const featuresBottom: Feature[] = [
  {
    icon: ShoppingCart,
    title: "Flexible Checkout",
    desc: "Guest, registered, and B2B checkout flows in one system. No account needed — customers order with just a phone number.",
  },
  {
    icon: Tag,
    title: "Smart Discounts",
    desc: "Percentage, fixed amount, Buy X Get Y, and schedule-based promotions. Best-saving logic applied automatically at checkout.",
  },
  {
    icon: Ticket,
    title: "Coupon & Promo Codes",
    desc: "Customer-entered codes with usage limits, expiry dates, and per-customer caps. Track redemptions in real time.",
  },
  {
    icon: MapPin,
    title: "Delivery & Location",
    desc: "Map-based address picker with reverse geocoding. Multiple delivery partners per shop. Distance-based fee calculation.",
  },
  {
    icon: Layers,
    title: "Multi-Fulfillment",
    desc: "Delivery, in-store pickup, digital, on-site, and online POS — all managed from one dashboard.",
  },
  {
    icon: CreditCard,
    title: "Installment & Deposit Payments",
    desc: "Let customers pay in parts. Set a deposit requirement or split the total into N scheduled installments.",
  },
  {
    icon: Building,
    title: "B2B Credit Orders",
    desc: "Wholesale customers order on a credit line. Credit limits enforced at checkout. Payment terms locked to each order.",
  },
  {
    icon: FileText,
    title: "Quotation Management",
    desc: "Create custom-priced quotes for clients. When accepted, convert to a live order in one click — pricing preserved.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Revenue, completion rates, payment breakdown, and product performance. Filter by date, fulfillment type, or status.",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="group bg-card p-8 md:p-10 hover:bg-muted/40 transition-colors duration-200">
      <Icon className="size-5 text-foreground/30 group-hover:text-primary transition-colors duration-200" />

      <h3 className="text-[15px] font-semibold text-foreground mt-4">
        {feature.title}
      </h3>

      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <section id="features" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            Powerful tools for modern commerce
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            From product management to real-time analytics, Riverbase gives you
            all the tools to run a successful online business.
          </p>
        </div>

        {/* First 9 feature cards */}
        <div className="mt-20 rounded-2xl overflow-hidden bg-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {featuresTop.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        {/* Divider with badge */}
        <div className="my-20 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-border" />
          </div>
          <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/80 bg-background px-5 py-1 relative z-10">
            Commerce &amp; Checkout
          </span>
        </div>

        {/* Last 9 feature cards */}
        <div className="rounded-2xl overflow-hidden bg-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {featuresBottom.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
