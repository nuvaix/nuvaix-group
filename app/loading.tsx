export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-titanium-silver/30 border-t-champagne-gold"
      />
    </div>
  );
}
