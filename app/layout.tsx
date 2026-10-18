import type { Metadata, Viewport } from 'next';
import { Provider } from '@/components/provider';
import { siteUrl } from '@/lib/site';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s · Pi Agent Interface docs',
    default: 'Pi Agent Interface docs',
  },
  description:
    'Documentation for Pi Agent Interface, the self-hosted chat app for Pi Durable agents: using it, administering it and running it.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  // Open Graph card (public/og.png, the logo's og-card.png, copied by
  // scripts/sync-logo.mjs). Titles and descriptions come from each page's own
  // <title> and description.
  openGraph: {
    type: 'website',
    siteName: 'Pi Agent Interface docs',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Pi Agent Interface: your agents, and an inbox for the work they do',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
