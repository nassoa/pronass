export function GlobalConverterIllustration() {
  return (
    <svg viewBox="0 0 680 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clean financial white */}
      <rect width="680" height="200" fill="#FFFFFF"/>
      {/* Subtle grid */}
      <line x1="0" y1="50" x2="680" y2="50" stroke="#F1F5F9" strokeWidth=".8"/>
      <line x1="0" y1="100" x2="680" y2="100" stroke="#F1F5F9" strokeWidth=".8"/>
      <line x1="0" y1="150" x2="680" y2="150" stroke="#F1F5F9" strokeWidth=".8"/>
      <line x1="227" y1="0" x2="227" y2="200" stroke="#F1F5F9" strokeWidth=".8"/>
      <line x1="454" y1="0" x2="454" y2="200" stroke="#F1F5F9" strokeWidth=".8"/>

      {/* FROM card */}
      <rect x="40" y="22" width="182" height="96" rx="10" fill="#F8FAFF" stroke="#E0E7FF" strokeWidth="1"/>
      <text x="58" y="44" fontFamily="'DM Mono',monospace" fontSize="9" fill="#6366F1" letterSpacing=".12em" fontWeight="600">EUR</text>
      <text x="58" y="48" fontFamily="'DM Mono',monospace" fontSize="9" fill="#6366F1" letterSpacing=".12em" fontWeight="600"> </text>
      <rect x="58" y="48" width="48" height="1" fill="#6366F1" fillOpacity=".2"/>
      <text x="130" y="88" fontFamily="'Cabinet Grotesk',sans-serif" fontSize="52" fill="#1E1B4B" fontWeight="800" textAnchor="middle" letterSpacing="-.04em">€</text>
      <text x="58" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#6B7280">Euro · Eurozone</text>

      {/* Swap icon */}
      <circle cx="249" cy="70" r="20" fill="#F0F9FF" stroke="#BAE6FD"/>
      <path d="M239 64 L259 64" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M255 60 L259 64 L255 68" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M259 76 L239 76" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M243 72 L239 76 L243 80" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>

      {/* TO card — highlighted */}
      <rect x="276" y="22" width="182" height="96" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
      <text x="294" y="44" fontFamily="'DM Mono',monospace" fontSize="9" fill="#16A34A" letterSpacing=".12em" fontWeight="600">USD</text>
      <rect x="294" y="48" width="48" height="1" fill="#16A34A" fillOpacity=".3"/>
      <text x="366" y="88" fontFamily="'Cabinet Grotesk',sans-serif" fontSize="52" fill="#14532D" fontWeight="800" textAnchor="middle" letterSpacing="-.04em">$</text>
      <text x="294" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#6B7280">Dollar · US</text>

      {/* Live rate pill */}
      <rect x="130" y="128" width="198" height="24" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <circle cx="148" cy="140" r="3.5" fill="#16A34A"/>
      <text x="229" y="144" fontFamily="'DM Mono',monospace" fontSize="9" fill="#15803D" textAnchor="middle" fontWeight="600">1 € = 1.0842 $</text>

      {/* Crypto mini strip on right */}
      <rect x="478" y="22" width="172" height="36" rx="7" fill="#FAFAFA" stroke="#E5E7EB"/>
      <text x="492" y="34" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#374151">BTC</text>
      <text x="548" y="34" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#16A34A" textAnchor="end">67,420</text>
      <text x="550" y="34" fontFamily="'DM Mono',monospace" fontSize="7" fill="#16A34A">▲</text>
      <text x="492" y="50" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#374151">ETH</text>
      <text x="548" y="50" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#DC2626" textAnchor="end">3,241</text>
      <text x="550" y="50" fontFamily="'DM Mono',monospace" fontSize="7" fill="#DC2626">▼</text>

      {/* Sparkline EUR/USD */}
      <rect x="478" y="68" width="172" height="60" rx="7" fill="#FAFAFA" stroke="#E5E7EB"/>
      <text x="492" y="80" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" letterSpacing=".05em">EUR/USD · 7 days</text>
      <path d="M490 118 Q510 112 525 108 Q540 104 558 100 Q575 96 590 88 Q605 80 632 76" stroke="#16A34A" strokeWidth="1.5" fill="none"/>
      <path d="M490 118 Q510 112 525 108 Q540 104 558 100 Q575 96 590 88 Q605 80 632 76 L632 128 L490 128 Z" fill="#16A34A" fillOpacity=".06"/>

      {/* Auto-refresh */}
      <rect x="478" y="138" width="172" height="24" rx="5" fill="#F8FAFC"/>
      <circle cx="493" cy="150" r="3" fill="#16A34A"/>
      <text x="500" y="154" fontFamily="'DM Mono',monospace" fontSize="7" fill="#9CA3AF">live · refresh 30s</text>
    </svg>
  );
}
