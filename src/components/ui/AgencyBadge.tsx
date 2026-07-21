interface AgencyBadgeProps {
  initials: string;
  bg: string;
  color: string;
  url?: string | null;
}

export default function AgencyBadge({ initials, bg, color, url }: AgencyBadgeProps) {
  const Badge = () => (
    <div
      className="agency-badge"
      style={{ backgroundColor: bg, color }}
    >
      {initials}
    </div>
  );

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Badge />
      </a>
    );
  }

  return <Badge />;
}
