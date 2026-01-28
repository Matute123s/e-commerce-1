import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

const products = [
  {
    id: "starter-bundle",
    name: "Starter Bundle",
    description: "A clean starter kit with everything you need to begin.",
    price: "$120"
  },
  {
    id: "workspace-essentials",
    name: "Workspace Essentials",
    description: "Upgrade your desk with premium accessories and tools.",
    price: "$220"
  },
  {
    id: "travel-ready",
    name: "Travel Ready Kit",
    description: "Lightweight travel items for seamless work on the go.",
    price: "$180"
  }
];

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Products</h1>
        <p className="text-slate-600">
          Explore our curated collection. These listings will be powered by the
          database in the next phase.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex h-full flex-col gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600">{product.description}</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">
                {product.price}
              </span>
              <Link href={`/products/${product.id}`}>
                <Button variant="secondary">View</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
