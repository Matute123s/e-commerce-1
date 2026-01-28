import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Northwind Supply
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/products" className="hover:text-slate-900">
              Products
            </Link>
            <Link href="/cart" className="hover:text-slate-900">
              Cart
            </Link>
            <Link href="/checkout" className="hover:text-slate-900">
              Checkout
            </Link>
            <Link href="/admin" className="hover:text-slate-900">
              Admin
            </Link>
          </nav>
          <Button variant="secondary">Sign in</Button>
        </div>
      </Container>
    </header>
  );
}
