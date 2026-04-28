export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
