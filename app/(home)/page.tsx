import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { BookOpen, MessagesSquare, Server, ShieldCheck, Tag } from 'lucide-react';
import { PaiWordmark } from '@/components/logo';
import { describedLabel, platformRepo, productRepo, productSite, productVersion } from '@/lib/site';

const sections = [
  {
    title: 'Get started',
    href: '/docs/get-started',
    icon: <BookOpen />,
    description:
      'What Pi Agent Interface is, its ideas (agents, conversations, the inbox), and a quick start with Docker and the development accounts.',
  },
  {
    title: 'Use',
    href: '/docs/use',
    icon: <MessagesSquare />,
    description:
      'Chatting with an agent, tool steps and reasoning, the inbox and searching it, keyboard shortcuts, accessibility, your own agents, connecting your platform account and your settings.',
  },
  {
    title: 'Administer',
    href: '/docs/administer',
    icon: <ShieldCheck />,
    description:
      'The first administrator, people and roles, agents and models, branding, optional features, usage and the audit log.',
  },
  {
    title: 'Operate',
    href: '/docs/operate',
    icon: <Server />,
    description:
      'The agent platform it needs (Connect or a service account), every setting, sign-in and access by group, Postgres and migrations, the signed container image, the Kubernetes base, security, rotating the session secret, metrics, upgrades, backups and restores.',
  },
  {
    title: 'Releases',
    href: '/docs/releases',
    icon: <Tag />,
    description: `What changed in each release: ${productVersion} is the latest: two fixes for phones. Before it: long conversation lists drawn a page at a time, usage with Connect, and search inside messages; before those: access and administrators by identity-provider group, rotating the session secret, Prometheus metrics and a rehearsed restore.`,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
          <PaiWordmark /> documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Your agents, and an inbox for the work they do.
        </h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          Pi Agent Interface is a self-hosted, open-source chat app for{' '}
          <a className="text-brand-link underline" href={platformRepo}>
            Pi Durable
          </a>{' '}
          agents. Everyone who signs in gets their own agents, and an inbox that shows which
          conversations are working, which have a new reply, and which are snoozed, settled or put
          away. These docs are for the people who use it, the administrators who run an instance,
          and the operators who host it.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/docs/get-started"
            className="rounded-control bg-brand-primary px-4 py-2 text-sm font-medium text-brand-primary-contrast shadow-brand-1 hover:bg-brand-primary-hover"
          >
            Get started
          </Link>
          <Link
            href="/docs/get-started/quick-start"
            className="rounded-control border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            Quick start
          </Link>
          <a
            href={productRepo}
            className="rounded-control border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            Source on GitHub
          </a>
        </div>
      </div>

      <h2 className="sr-only">Sections</h2>
      <Cards className="mt-12">
        {sections.map((s) => (
          <Card key={s.href} title={s.title} href={s.href} icon={s.icon}>
            {s.description}
          </Card>
        ))}
      </Cards>

      <p className="mt-12 text-sm text-fd-muted-foreground">
        Pi Agent Interface is pre-1.0 and MIT licensed. These docs describe {describedLabel}, the
        latest release. More about the project is on{' '}
        <a className="text-brand-link underline" href={productSite}>
          its website
        </a>
        ; the engineering notes stay in the{' '}
        <a className="text-brand-link underline" href={productRepo}>
          repository
        </a>
        .
      </p>
    </div>
  );
}
