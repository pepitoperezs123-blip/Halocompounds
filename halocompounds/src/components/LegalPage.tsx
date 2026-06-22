export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        Last updated {updated}
      </p>
      <div className="prose-legal mt-8 space-y-5 text-sm leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-foreground [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
