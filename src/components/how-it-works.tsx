import { Rocket, Users, PackageCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Create your store",
    description:
      "Sign up and configure your storefront in minutes. No technical expertise required.",
  },
  {
    number: "02",
    icon: Users,
    title: "Add your products",
    description:
      "Import your catalog or add products manually with our intuitive management tools.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Set up payments",
    description:
      "Connect your preferred payment provider and start accepting orders worldwide.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow your business",
    description:
      "Use built-in analytics and marketing tools to scale your revenue effortlessly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-divider border-t border-border py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 tracking-tight">
            From zero to selling in four steps
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            Getting started takes minutes, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mt-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-left">
                <span className="text-[13px] font-semibold text-primary/70 tracking-wide">
                  {step.number}
                </span>
                <Icon className="mt-4 size-5 text-foreground/30" />
                <h3 className="text-[15px] font-semibold text-foreground mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
