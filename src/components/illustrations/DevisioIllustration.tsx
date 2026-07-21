export function DevisioIllustration() {
  return (
    <svg viewBox="0 0 680 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warm parchment bg */}
      <rect width="680" height="220" fill="#FDFAF4"/>
      {/* Subtle grid */}
      <line x1="0" y1="55" x2="680" y2="55" stroke="#E8E0CC" strokeWidth=".5"/>
      <line x1="0" y1="110" x2="680" y2="110" stroke="#E8E0CC" strokeWidth=".5"/>
      <line x1="0" y1="165" x2="680" y2="165" stroke="#E8E0CC" strokeWidth=".5"/>
      <line x1="170" y1="0" x2="170" y2="220" stroke="#E8E0CC" strokeWidth=".5"/>
      <line x1="340" y1="0" x2="340" y2="220" stroke="#E8E0CC" strokeWidth=".5"/>
      <line x1="510" y1="0" x2="510" y2="220" stroke="#E8E0CC" strokeWidth=".5"/>

      {/* Main invoice card — cream paper */}
      <rect x="110" y="20" width="265" height="186" rx="10" fill="#FFFFFF" stroke="#D4C9A8" strokeWidth="1"/>

      {/* Invoice header */}
      <rect x="126" y="36" width="100" height="10" rx="2.5" fill="#2D6A4F" fillOpacity=".8"/>
      <rect x="126" y="52" width="160" height="6" rx="2" fill="#1A1410" fillOpacity=".25"/>
      <rect x="126" y="62" width="120" height="5" rx="2" fill="#1A1410" fillOpacity=".15"/>

      {/* Divider */}
      <line x1="126" y1="78" x2="357" y2="78" stroke="#E8E0CC" strokeWidth=".8"/>

      {/* Line items */}
      <rect x="126" y="86" width="130" height="5" rx="2" fill="#1A1410" fillOpacity=".2"/>
      <rect x="318" y="86" width="39" height="5" rx="2" fill="#2D6A4F" fillOpacity=".6"/>
      <rect x="126" y="98" width="100" height="5" rx="2" fill="#1A1410" fillOpacity=".15"/>
      <rect x="318" y="98" width="39" height="5" rx="2" fill="#2D6A4F" fillOpacity=".45"/>
      <rect x="126" y="110" width="145" height="5" rx="2" fill="#1A1410" fillOpacity=".12"/>
      <rect x="318" y="110" width="39" height="5" rx="2" fill="#2D6A4F" fillOpacity=".35"/>
      <rect x="126" y="122" width="115" height="5" rx="2" fill="#1A1410" fillOpacity=".10"/>
      <rect x="318" y="122" width="39" height="5" rx="2" fill="#2D6A4F" fillOpacity=".28"/>

      {/* Divider total */}
      <line x1="126" y1="136" x2="357" y2="136" stroke="#D4C9A8" strokeWidth=".8"/>

      {/* Total row */}
      <rect x="126" y="147" width="55" height="7" rx="2" fill="#1A1410" fillOpacity=".2"/>
      <rect x="288" y="144" width="69" height="15" rx="4" fill="#2D6A4F"/>
      <rect x="292" y="148" width="61" height="7" rx="2" fill="#FDFAF4" fillOpacity=".9"/>

      {/* PDF stamp */}
      <rect x="282" y="172" width="54" height="22" rx="5" fill="#FEF9EC" stroke="#D4C9A8"/>
      <text x="309" y="186" fontFamily="'DM Mono',monospace" fontSize="8" fill="#92400E" textAnchor="middle" fontWeight="600">PDF ↓</text>

      {/* Second document shadow */}
      <rect x="342" y="36" width="200" height="158" rx="10" fill="#FAFAF7" stroke="#DDD5BA" strokeWidth=".8"/>
      <rect x="358" y="54" width="130" height="8" rx="3" fill="#1A1410" fillOpacity=".14"/>
      <rect x="358" y="68" width="90" height="5" rx="2" fill="#1A1410" fillOpacity=".09"/>
      <rect x="358" y="78" width="110" height="5" rx="2" fill="#1A1410" fillOpacity=".07"/>
      <line x1="358" y1="96" x2="524" y2="96" stroke="#E8E0CC" strokeWidth=".6"/>
      <rect x="358" y="106" width="85" height="4" rx="2" fill="#1A1410" fillOpacity=".10"/>
      <rect x="462" y="103" width="60" height="12" rx="3" fill="#2D6A4F" fillOpacity=".18"/>
      <text x="492" y="112" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#2D6A4F" textAnchor="middle" fontWeight="600">2 450 €</text>

      {/* Zod validation badge */}
      <rect x="358" y="154" width="56" height="18" rx="4" fill="#FEF9EC" stroke="#D4C9A8"/>
      <text x="386" y="166" fontFamily="'DM Mono',monospace" fontSize="7" fill="#92400E" textAnchor="middle" fontWeight="500">Zod ✓</text>
      <rect x="422" y="154" width="62" height="18" rx="4" fill="#F0FDF4" stroke="#BBF7D0"/>
      <text x="453" y="166" fontFamily="'DM Mono',monospace" fontSize="7" fill="#15803D" textAnchor="middle" fontWeight="500">Type-safe</text>
    </svg>
  );
}
