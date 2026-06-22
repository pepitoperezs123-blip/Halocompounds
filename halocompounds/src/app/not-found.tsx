import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-halo">404</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <ButtonLink href="/" className="mt-7">
        Back home
      </ButtonLink>
    </div>
  );
}
