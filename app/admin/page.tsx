import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Admin login</h1>
        <p className="text-slate-600">
          Access the admin dashboard to manage products and orders.
        </p>
      </div>
      <Card className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="admin@northwind.com" />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="password"
          >
            Password
          </label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign in</Button>
      </Card>
    </div>
  );
}
