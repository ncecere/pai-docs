import mark from '@/lib/mark.json';

/*
 * The Pi Agent Interface logo, "Face": an amber face with two upright eyes on
 * a near-black tile, the face every agent has in the app. The mark is inline
 * SVG (no request, no font), read from lib/mark.json, which holds
 * mark-small.svg from pai-assets (logo/face/), the drawing for 20 to 47 px;
 * `npm run logo -- face` writes it. The tile keeps the mark readable on light
 * pages as well as dark ones (the bare face is for dark surfaces only). The
 * name beside it is live text. The website draws the same mark at the same
 * size: change both together.
 */

/** The mark: decorative here, because the name is always next to it. */
export function PaiMark({ className = 'size-7' }: { className?: string }) {
  return (
    <svg
      viewBox={mark.viewBox}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      // Static markup from lib/mark.json, written by us; no user input.
      dangerouslySetInnerHTML={{ __html: mark.svg }}
    />
  );
}

/** The product's full name as text, set in Inter (used inline in sentences too). */
export function PaiWordmark({ className }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight whitespace-nowrap ${className ?? ''}`}>Pi Agent Interface</span>
  );
}

/**
 * The nav bar title: the mark, the name and a "docs" tag. `antialiased`
 * matches the website, whose body sets it, so the name renders identically.
 */
export function NavTitle() {
  return (
    <span className="inline-flex items-center gap-2.5 text-fd-foreground antialiased">
      <PaiMark />
      <PaiWordmark className="text-[1.05rem]" />
      <span className="rounded-md border border-fd-border px-1.5 py-0.5 text-xs font-medium text-fd-muted-foreground">
        docs
      </span>
    </span>
  );
}
