import { site } from '../lib/site';

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 md:px-6">
      <div className="flex flex-col items-center justify-between gap-3 rounded-3xl bg-card px-6 py-5 text-sm text-muted-foreground shadow-soft sm:flex-row">
        <p>
          Built by{' '}
          <a href={site.links.apenApps} target="_blank" rel="noreferrer" className="font-semibold text-foreground hover:text-primary">
            Apen Apps
          </a>
          . MIT licensed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={site.links.npm} target="_blank" rel="noreferrer" className="hover:text-foreground">
            npm
          </a>
          <a href={site.links.apenUi} target="_blank" rel="noreferrer" className="hover:text-foreground">
            apen-ui
          </a>
          <a href={site.links.createApen} target="_blank" rel="noreferrer" className="hover:text-foreground">
            create-apen
          </a>
          <a href={site.links.youtube} target="_blank" rel="noreferrer" className="hover:text-foreground">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
