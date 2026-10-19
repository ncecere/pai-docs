/*
 * The site's addresses, repositories and the version of the product it
 * describes, in one place so they are easy to change. Everything else imports
 * from here.
 */

/** The published docs. Used for absolute URLs (Open Graph, metadata). */
export const siteUrl = 'https://docs.pai.bitop.dev';

/** The product's own website. */
export const productSite = 'https://pai.bitop.dev';

/** The docs' own repository: "Edit on GitHub" links point here. */
export const gitConfig = {
  user: 'ncecere',
  repo: 'pai-docs',
  branch: 'main',
};

/** The product's repository. */
export const productRepo = 'https://github.com/ncecere/pi-agent-interface';

/** The agent platform Pi Agent Interface runs on. */
export const platformRepo = 'https://github.com/ncecere/pi-durable-platform';

/** The latest tagged release of Pi Agent Interface. */
export const productVersion = 'v0.5.0';

/** The date that release was tagged (YYYY-MM-DD). */
export const productReleaseDate = '2026-10-19';

/**
 * What these docs describe: the product at its latest release tag, at this
 * commit. Read the tag (`git show v0.5.0:<path>`), not a working tree: work
 * for the next release happens on main.
 */
export const describedRef = productVersion;
export const describedCommit = 'df32023';
export const describedLabel = `${describedRef} (${productReleaseDate})`;

/** Where the release workflow publishes the container image (published since v0.2.0). */
export const productImage = 'ghcr.io/ncecere/pi-agent-interface';

/** The digest of the v0.5.0 image (from its GitHub Release). */
export const productImageDigest =
  'sha256:0df3c305657a9a8a38f6eca78329a7f12854a370bc640926e0fc4af94e668fa1';

export const appName = 'Pi Agent Interface docs';
export const docsRoute = '/docs';

export const docsRepoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function editUrl(path: string): string {
  return `${docsRepoUrl}/blob/${gitConfig.branch}/${path}`;
}
