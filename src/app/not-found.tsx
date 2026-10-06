import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md border border-forest/20 p-10 bg-ivory-50 shadow-xl">
        <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-widest">
          404 ERROR
        </span>
        <h1 className="text-4xl font-sans font-extrabold text-forest">
          Page Not Found
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          The requested page or case study does not exist or may have been relocated.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-ivory text-xs uppercase tracking-widest font-bold hover:bg-forest-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-gold" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
