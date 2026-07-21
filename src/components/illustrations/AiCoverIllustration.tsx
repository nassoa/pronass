export function AiCoverIllustration() {
  return (
    <svg viewBox="0 0 680 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Deep dark AI bg */}
      <rect width="680" height="190" fill="#0F0A1E"/>
      {/* Purple glow top-left */}
      <ellipse cx="80" cy="50" rx="120" ry="80" fill="#7C3AED" fillOpacity=".08"/>
      {/* Cyan glow bottom-right */}
      <ellipse cx="600" cy="140" rx="120" ry="70" fill="#0891B2" fillOpacity=".06"/>

      {/* Left panel: prompt input */}
      <rect x="30" y="20" width="290" height="150" rx="10" fill="#1A1030" stroke="#3B2F6B" strokeWidth=".8"/>
      {/* Panel header */}
      <rect x="30" y="20" width="290" height="28" rx="10" fill="#241848"/>
      <rect x="30" y="38" width="290" height="10" rx="0" fill="#241848"/>
      <text x="46" y="38" fontFamily="'DM Mono',monospace" fontSize="8" fill="#A78BFA" fontWeight="500">Offre d'emploi</text>
      {/* Input lines */}
      <rect x="44" y="58" width="230" height="5" rx="2" fill="#EDE9FE" fillOpacity=".18"/>
      <rect x="44" y="69" width="200" height="5" rx="2" fill="#EDE9FE" fillOpacity=".13"/>
      <rect x="44" y="80" width="210" height="5" rx="2" fill="#EDE9FE" fillOpacity=".10"/>
      <rect x="44" y="91" width="170" height="5" rx="2" fill="#EDE9FE" fillOpacity=".09"/>
      {/* Model selector */}
      <rect x="44" y="110" width="120" height="16" rx="4" fill="#2E1F6B" stroke="#7C3AED" strokeOpacity=".4"/>
      <text x="54" y="121" fontFamily="'DM Mono',monospace" fontSize="7" fill="#A78BFA">Mixtral 8x7B ▾</text>
      {/* Generate button */}
      <rect x="172" y="110" width="100" height="16" rx="4" fill="#7C3AED"/>
      <text x="222" y="121" fontFamily="'DM Mono',monospace" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="600">Générer ✦</text>
      {/* Token count */}
      <text x="44" y="152" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#6D28D9" fillOpacity=".7">tokens: 1,247 · 0.8s</text>

      {/* Right panel: streaming output */}
      <rect x="334" y="20" width="316" height="150" rx="10" fill="#0D0A1C" stroke="#1E1845" strokeWidth=".8"/>
      <rect x="334" y="20" width="316" height="28" rx="10" fill="#150F30"/>
      <rect x="334" y="38" width="316" height="10" rx="0" fill="#150F30"/>
      <text x="350" y="38" fontFamily="'DM Mono',monospace" fontSize="8" fill="#67E8F9" fontWeight="500">Lettre générée</text>

      {/* Streaming text lines — appearing effect */}
      <rect x="348" y="58" width="270" height="5" rx="2" fill="#EDE9FE" fillOpacity=".22"/>
      <rect x="348" y="70" width="250" height="5" rx="2" fill="#EDE9FE" fillOpacity=".18"/>
      <rect x="348" y="82" width="265" height="5" rx="2" fill="#EDE9FE" fillOpacity=".15"/>
      <rect x="348" y="94" width="220" height="5" rx="2" fill="#EDE9FE" fillOpacity=".12"/>
      <rect x="348" y="106" width="240" height="5" rx="2" fill="#EDE9FE" fillOpacity=".10"/>
      <rect x="348" y="118" width="180" height="5" rx="2" fill="#EDE9FE" fillOpacity=".09"/>

      {/* Streaming cursor blink */}
      <rect x="348" y="131" width="3" height="12" rx="1" fill="#C084FC" fillOpacity=".9"/>

      {/* Stream progress bar */}
      <rect x="348" y="150" width="284" height="4" rx="2" fill="#1E1845"/>
      <rect x="348" y="150" width="180" height="4" rx="2" fill="#7C3AED" fillOpacity=".7"/>
      {/* Together AI badge */}
      <rect x="560" y="22" width="76" height="14" rx="3" fill="#1A0E38" stroke="#6D28D9" strokeOpacity=".4"/>
      <text x="598" y="32" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#A78BFA" textAnchor="middle">Together AI ✦</text>
    </svg>
  );
}
