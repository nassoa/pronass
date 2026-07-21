export function SeoAnalyzerIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clean white data bg */}
      <rect width="300" height="180" fill="#FAFAFA"/>

      {/* Grid lines */}
      <line x1="30" y1="30" x2="30" y2="162" stroke="#E5E7EB" strokeWidth=".6"/>
      <line x1="30" y1="162" x2="280" y2="162" stroke="#E5E7EB" strokeWidth=".6"/>
      <line x1="30" y1="120" x2="280" y2="120" stroke="#F3F4F6" strokeWidth=".5"/>
      <line x1="30" y1="90" x2="280" y2="90" stroke="#F3F4F6" strokeWidth=".5"/>
      <line x1="30" y1="60" x2="280" y2="60" stroke="#F3F4F6" strokeWidth=".5"/>

      {/* Bars — 6 bars, alternating green/blue for metrics */}
      {/* SEO score, Performance, Accessibilité, Liens, Meta, Contenu */}
      <rect x="42" y="92" width="26" height="70" rx="3" fill="#0284C7" fillOpacity=".7"/>
      <rect x="78" y="48" width="26" height="114" rx="3" fill="#16A34A" fillOpacity=".85"/>
      <rect x="114" y="60" width="26" height="102" rx="3" fill="#16A34A" fillOpacity=".7"/>
      <rect x="150" y="78" width="26" height="84" rx="3" fill="#0284C7" fillOpacity=".55"/>
      <rect x="186" y="38" width="26" height="124" rx="3" fill="#16A34A" fillOpacity=".9"/>
      <rect x="222" y="104" width="26" height="58" rx="3" fill="#EF4444" fillOpacity=".65"/>

      {/* Labels x axis */}
      <text x="55" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" textAnchor="middle">SEO</text>
      <text x="91" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" textAnchor="middle">Perf</text>
      <text x="127" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" textAnchor="middle">A11y</text>
      <text x="163" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" textAnchor="middle">Links</text>
      <text x="199" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#9CA3AF" textAnchor="middle">Meta</text>
      <text x="235" y="172" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#EF4444" textAnchor="middle">Speed</text>

      {/* Score circle */}
      <circle cx="272" cy="55" r="28" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
      <circle cx="272" cy="55" r="22" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeOpacity=".2"/>
      <circle cx="272" cy="55" r="22" fill="none" stroke="#16A34A" strokeWidth="3.5"
        strokeDasharray="119 20" strokeDashoffset="30" strokeLinecap="round"/>
      <text x="272" y="55" fontFamily="'Cabinet Grotesk',sans-serif" fontSize="15" fill="#15803D" textAnchor="middle" dominantBaseline="central" fontWeight="800">92</text>
      <text x="272" y="67" fontFamily="'DM Mono',monospace" fontSize="6" fill="#6B7280" textAnchor="middle" dominantBaseline="central">score</text>

      {/* PageSpeed badge */}
      <rect x="34" y="16" width="130" height="16" rx="3" fill="#EFF6FF" stroke="#BFDBFE"/>
      <text x="99" y="24" fontFamily="'DM Mono',monospace" fontSize="7" fill="#1D4ED8" textAnchor="middle" dominantBaseline="central" fontWeight="500">PageSpeed Insights API</text>
    </svg>
  );
}
