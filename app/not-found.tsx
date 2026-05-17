import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-primary-bg min-h-screen flex items-center justify-center text-text-primary">
      <div className="section-container text-center space-y-8 max-w-xl">
        <span className="eyebrow">ERROR CODE 404</span>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary">
          Protocol <br />
          Not Found.
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed">
          The requested system node does not exist or has been re-routed. Please return to the main operational interface.
        </p>
        <div className="pt-4 flex justify-center">
          <Link href="/" className="btn-secondary">
            Return to Core Index
          </Link>
        </div>
      </div>
    </section>
  );
}
export const dynamic = "force-static";
