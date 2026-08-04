interface VDLogoProps {
  size?: number;
  id?: string;
  showTagline?: boolean;
  dark?: boolean;
}

export default function VDLogo({ size = 40, id = "logo", showTagline = false, dark = false }: VDLogoProps) {
  const gradId = `vd-grad-${id}`;
  const textColor = dark ? "#ffffff" : "#0f0e2a";

  // VO mark proportions derived from the actual logo:
  // - Overall width:height ratio ≈ 2:1
  // - O circle diameter ≈ total mark height
  // - V left arm starts perfectly vertical from upper-left
  // - V right arm enters O circle from lower-left, ending inside the O stroke
  // viewBox: 216 wide × 108 tall (exactly 2:1)
  const vbW = 216;
  const vbH = 108;

  const mark = (
    <svg
      width={size}
      height={Math.round(size * vbH / vbW)}
      viewBox={`-8 -8 ${vbW} ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="-8" y1="50" x2="208" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B48E0" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>

      {/*
        V stroke — single cubic bezier:
        Start  (8,5):   CP1=(8,102)  → tangent=(0,97) = perfectly vertical down
        End (118,42):   CP2=(110,102) → tangent=(8,−60) = 82° above horizontal (steep up-right)
        Bottom of curve at approx (60, 82), stroke bottom at 87.5
        V right-arm end (118,42) is INSIDE O circle (dist=37 < r=42) → creates overlap
      */}
      <path
        d="M 8,5 C 8,102 110,102 118,42"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/*
        O circle:
        cx=155, cy=40, r=42
        Outer edge (incl. stroke): x=202.5, top y=−7.5, bottom y=87.5
        Top aligns with V left arm top; bottom aligns with V stroke bottom
      */}
      <circle
        cx="155"
        cy="40"
        r="42"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        fill="none"
      />
    </svg>
  );

  if (!showTagline) return mark;

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {mark}
        <span style={{ fontSize: size * 0.60, fontWeight: 900, letterSpacing: "-0.02em", color: textColor, lineHeight: 1 }}>
          VentureD
        </span>
      </div>
      <div style={{ fontSize: size * 0.20, letterSpacing: "0.18em", display: "flex", alignItems: "center", gap: "0.35em" }}>
        <span style={{ color: "#6366f1" }}>—</span>
        <span style={{ color: dark ? "rgba(255,255,255,0.75)" : "#1a1a2e" }}>创意穿出地球</span>
        <span style={{ color: "#6366f1" }}>—</span>
      </div>
    </div>
  );
}
