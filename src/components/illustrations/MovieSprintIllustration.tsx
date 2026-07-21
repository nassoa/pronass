export function MovieSprintIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cinema dark */}
      <rect width="300" height="180" fill="#141414"/>

      {/* Movie poster cards */}
      <rect x="16" y="12" width="72" height="108" rx="6" fill="#1C1C1C" stroke="#2A2A2A"/>
      <rect x="96" y="12" width="72" height="108" rx="6" fill="#1C1C1C" stroke="#E50914" strokeOpacity=".3"/>
      <rect x="176" y="12" width="72" height="108" rx="6" fill="#1C1C1C" stroke="#2A2A2A"/>
      <rect x="256" y="12" width="30" height="108" rx="6" fill="#1C1C1C" stroke="#2A2A2A" fillOpacity=".4"/>

      {/* Poster gradient overlays — cinema feel */}
      <rect x="16" y="60" width="72" height="60" rx="0" fill="url(#p1)"/>
      <rect x="96" y="60" width="72" height="60" rx="0" fill="url(#p2)"/>
      <rect x="176" y="60" width="72" height="60" rx="0" fill="url(#p3)"/>
      <defs>
        <linearGradient id="p1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1C1C" stopOpacity="0"/>
          <stop offset="100%" stopColor="#141414" stopOpacity=".9"/>
        </linearGradient>
        <linearGradient id="p2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1C1C" stopOpacity="0"/>
          <stop offset="100%" stopColor="#141414" stopOpacity=".9"/>
        </linearGradient>
        <linearGradient id="p3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1C1C" stopOpacity="0"/>
          <stop offset="100%" stopColor="#141414" stopOpacity=".9"/>
        </linearGradient>
      </defs>

      {/* Play icons */}
      <circle cx="52" cy="52" r="14" fill="#000000" fillOpacity=".5" stroke="#FFFFFF" strokeOpacity=".2" strokeWidth=".8"/>
      <path d="M48 46 L48 58 L60 52 Z" fill="#FFFFFF" fillOpacity=".7"/>
      <circle cx="132" cy="52" r="14" fill="#E50914" fillOpacity=".2" stroke="#E50914" strokeOpacity=".4" strokeWidth=".8"/>
      <path d="M128 46 L128 58 L140 52 Z" fill="#E50914" fillOpacity=".85"/>
      <circle cx="212" cy="52" r="14" fill="#000000" fillOpacity=".5" stroke="#FFFFFF" strokeOpacity=".2" strokeWidth=".8"/>
      <path d="M208 46 L208 58 L220 52 Z" fill="#FFFFFF" fillOpacity=".7"/>

      {/* IMDb-style rating stars */}
      <text x="20" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5C518">★★★★</text>
      <text x="20" y="118" fontFamily="'DM Mono',monospace" fontSize="6" fill="#9CA3AF">7.4</text>
      <text x="100" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5C518">★★★★★</text>
      <text x="100" y="118" fontFamily="'DM Mono',monospace" fontSize="6" fill="#9CA3AF">9.1</text>
      <text x="180" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5C518">★★★</text>
      <text x="180" y="118" fontFamily="'DM Mono',monospace" fontSize="6" fill="#9CA3AF">6.8</text>

      {/* Bottom row: TanStack + TMDB badges */}
      <line x1="16" y1="130" x2="284" y2="130" stroke="#2A2A2A" strokeWidth=".8"/>

      <rect x="16" y="138" width="80" height="18" rx="4" fill="#FF4154" fillOpacity=".15" stroke="#FF4154" strokeOpacity=".3"/>
      <text x="56" y="147" fontFamily="'DM Mono',monospace" fontSize="7" fill="#FF6B7A" textAnchor="middle" dominantBaseline="central" fontWeight="500">TanStack Query</text>

      <rect x="104" y="138" width="70" height="18" rx="4" fill="#1C1C1C" stroke="#2A2A2A"/>
      <text x="139" y="147" fontFamily="'DM Mono',monospace" fontSize="7" fill="#9CA3AF" textAnchor="middle" dominantBaseline="central">TMDB API</text>

      <rect x="182" y="138" width="102" height="18" rx="4" fill="#1C1C1C" stroke="#2A2A2A"/>
      <text x="233" y="147" fontFamily="'DM Mono',monospace" fontSize="7" fill="#9CA3AF" textAnchor="middle" dominantBaseline="central">Infinite scroll ↓</text>

      {/* IMDb badge */}
      <rect x="214" y="12" width="38" height="14" rx="3" fill="#F5C518"/>
      <text x="233" y="19" fontFamily="'Cabinet Grotesk',sans-serif" fontSize="8" fill="#000000" textAnchor="middle" dominantBaseline="central" fontWeight="800">IMDb</text>
    </svg>
  );
}
