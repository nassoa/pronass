export function OrthoflowIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="180" fill="#FEFEFE"/>

      {/* Text editor zone */}
      <rect x="16" y="16" width="268" height="100" rx="8" fill="#F8FAFF" stroke="#E2E8F0"/>

      {/* Ruler at top */}
      <rect x="16" y="16" width="268" height="18" rx="8" fill="#EEF2FF"/>
      <rect x="16" y="26" width="268" height="8" rx="0" fill="#EEF2FF"/>
      <text x="28" y="29" fontFamily="'DM Mono',monospace" fontSize="7" fill="#6366F1" letterSpacing=".05em">A  ORTHOGRAPHE  GRAMMAIRE  STYLE</text>

      {/* Text lines */}
      <rect x="28" y="44" width="220" height="6" rx="2" fill="#1E293B" fillOpacity=".22"/>
      <rect x="28" y="56" width="190" height="6" rx="2" fill="#1E293B" fillOpacity=".15"/>
      <rect x="28" y="68" width="240" height="6" rx="2" fill="#1E293B" fillOpacity=".12"/>
      <rect x="28" y="80" width="160" height="6" rx="2" fill="#1E293B" fillOpacity=".12"/>

      {/* Error underlines — rouge wavy style */}
      <path d="M96 50 Q100 52.5 104 50 Q108 47.5 112 50" stroke="#DC2626" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M156 62 Q160 64.5 164 62 Q168 59.5 172 62" stroke="#DC2626" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Warning underline — orange */}
      <path d="M68 74 Q72 76 76 74 Q80 72 84 74" stroke="#EA580C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeDasharray="2 1"/>

      {/* Error badge */}
      <rect x="240" y="42" width="36" height="14" rx="3" fill="#FEE2E2" stroke="#FECACA"/>
      <text x="258" y="52" fontFamily="'DM Mono',monospace" fontSize="7" fill="#DC2626" textAnchor="middle" fontWeight="600">3 ✗</text>

      {/* Correction panel */}
      <rect x="16" y="126" width="130" height="38" rx="7" fill="#EFF6FF" stroke="#BFDBFE"/>
      <rect x="28" y="134" width="16" height="5" rx="2" fill="#2563EB" fillOpacity=".6"/>
      <rect x="28" y="143" width="96" height="4" rx="1.5" fill="#1E293B" fillOpacity=".18"/>
      <text x="26" y="158" fontFamily="'DM Mono',monospace" fontSize="7" fill="#2563EB" fontWeight="500">Correction suggérée</text>

      {/* Accept button */}
      <rect x="156" y="126" width="128" height="38" rx="7" fill="#F0FDF4" stroke="#BBF7D0"/>
      <rect x="168" y="134" width="16" height="5" rx="2" fill="#16A34A" fillOpacity=".65"/>
      <rect x="168" y="143" width="88" height="4" rx="1.5" fill="#1E293B" fillOpacity=".15"/>
      <text x="166" y="158" fontFamily="'DM Mono',monospace" fontSize="7" fill="#16A34A" fontWeight="500">✓ Texte corrigé</text>

      {/* Score badge */}
      <rect x="222" y="16" width="50" height="26" rx="5" fill="#F5F3FF" stroke="#DDD6FE"/>
      <text x="247" y="26" fontFamily="'Cabinet Grotesk',sans-serif" fontSize="13" fill="#7C3AED" textAnchor="middle" dominantBaseline="central" fontWeight="800">98%</text>
      <text x="247" y="37" fontFamily="'DM Mono',monospace" fontSize="6" fill="#A78BFA" textAnchor="middle" dominantBaseline="central">score</text>
    </svg>
  );
}
