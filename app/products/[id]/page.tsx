import Button from "@/components/Button";
import Card from "@/components/Card";

type ProductDetailProps = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: ProductDetailProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <Card className="space-y-4">
        <div className="h-64 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">
            Product: {params.id.replace("-", " ")}
          </h1>
          <p className="text-slate-600">
            This is a placeholder detail page. Product data will be loaded from
            the database in the next phase.
          </p>
        </div>
      </Card>
      <Card className="space-y-6">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            From $120
          </p>
          <p className="text-sm text-slate-600">
            Includes shipping and premium packaging.
          </p>
        </div>
        <Button className="w-full">Add to cart</Button>
        <Button variant="secondary" className="w-full">
          Save for later
        </Button>
      </Card>
    </div>
  );
}
