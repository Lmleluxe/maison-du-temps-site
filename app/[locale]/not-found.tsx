import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-palace-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-heading text-palace-blue-deep mb-4">404</h1>
        <h2 className="text-4xl font-heading text-palace-blue-deep mb-6">
          Page introuvable
        </h2>
        <p className="text-xl text-palace-anthracite/70 mb-12">
          La page que vous recherchez semble avoir disparu dans le temps...
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <Home className="h-5 w-5" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
