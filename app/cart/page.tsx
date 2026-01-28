import Button from "@/components/Button";
import Card from "@/components/Card";

export default function CartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
        <p className="text-slate-600">
          Review the items in your cart before checkout.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Starter Bundle
              </h2>
              <p className="text-sm text-slate-600">Quantity: 1</p>
            </div>
            <span className="text-sm font-semibold text-slate-900">$120</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Workspace Essentials
              </h2>
              <p className="text-sm text-slate-600">Quantity: 1</p>
            </div>
            <span className="text-sm font-semibold text-slate-900">$220</span>
          </div>
        </Card>
        <Card className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">$340</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <span className="font-semibold text-slate-900">Free</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-base">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="font-semibold text-slate-900">$340</span>
          </div>
          <Button className="w-full">Proceed to checkout</Button>
        </Card>
      </div>
    </div>
  );
}
