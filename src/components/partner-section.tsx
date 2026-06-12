import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PartnerSection() {
  return (
    <section id="partners" className="section-divider border-t border-border py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-muted/30 p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Built for businesses that want more than a storefront.
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
            Whether you&apos;re launching your first product or scaling to millions,
            Riverbase gives you the infrastructure, tools, and support to grow
            without limits.
          </p>
          <Button className="bg-foreground text-background hover:bg-foreground/90 h-11 px-6 text-sm font-medium rounded-lg mt-8 cursor-pointer">
            Become a Partner
            <ArrowRight className="size-4 ml-1.5" />
          </Button>
          <p className="text-[13px] text-muted-foreground/60 mt-4">
            Join 200+ businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
