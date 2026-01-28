import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white p-10 shadow-sm">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Commerce built for confidence
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Launch a storefront your customers will love.
          </h1>
          <p className="text-lg text-slate-600">
            Northwind Supply delivers beautifully designed essentials with a
            premium checkout flow. Explore curated products, build carts, and
            prepare for Stripe-ready payments in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button>Browse products</Button>
            </Link>
            <Link href="/checkout">
              <Button variant="secondary">Preview checkout</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Curated catalog",
            description:
              "Hand-picked merchandise with clear pricing and high-quality imagery."
          },
          {
            title: "Fast checkout",
            description:
              "Checkout flow that will be powered by Stripe for a secure payment experience."
          },
          {
            title: "Admin ready",
            description:
              "Manage products, orders, and fulfillment with simple admin tools."
          }
        ].map((feature) => (
          <Card key={feature.title} className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h2>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
