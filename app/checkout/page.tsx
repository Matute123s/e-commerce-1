import Button from "@/components/Button";
import Card from "@/components/Card";

export default function CheckoutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Checkout</h1>
        <p className="text-slate-600">
          Stripe Checkout will power payments in the next phase. For now, review
          the summary and continue.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              Shipping information
            </h2>
            <p className="text-sm text-slate-600">
              Customer details will be collected during Stripe Checkout.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            Payment collection, tax calculation, and order confirmation will be
            handled automatically once Stripe is connected.
          </div>
        </Card>
        <Card className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Order total</span>
            <span className="font-semibold text-slate-900">$340</span>
          </div>
          <Button className="w-full">Continue to payment</Button>
        </Card>
      </div>
    </div>
  );
}
