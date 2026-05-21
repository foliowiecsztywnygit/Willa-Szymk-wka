export function buildMailtoHref(params: { to: string; subject: string; body: string }) {
  const subject = encodeURIComponent(params.subject);
  const body = encodeURIComponent(params.body);
  return `mailto:${params.to}?subject=${subject}&body=${body}`;
}

