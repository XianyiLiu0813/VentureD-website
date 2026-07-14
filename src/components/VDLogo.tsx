interface VDLogoProps {
  size?: number;
  id?: string;
  showTagline?: boolean;
}

export default function VDLogo({ size = 40, id = "logo", showTagline = false }: VDLogoProps) {
  const gradId = `vd-grad-${id}`;

  const mark = (
    <svg
      width={size}
      height={Math.round(size * 72 / 94)}
      viewBox="-3 -4 100 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="92" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B48E0" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>
      {/* V stroke: smooth curve from upper-left, dips down, sweeps back up to upper-right */}
      <path
        d="M 5,5 C 5,76 64,78 68,20"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* O circle */}
      <circle
        cx="70"
        cy="20"
        r="19"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        fill="none"
      />
    </svg>
  );

  if (!showTagline) return mark;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {mark}
        <span style={{ fontSize: size * 0.75, fontWeight: 900, letterSpacing: "-0.01em", color: "#0f0e2a", lineHeight: 1 }}>
          VentureD
        </span>
      </div>
      <div style={{ fontSize: size * 0.27, letterSpacing: "0.16em", fontWeight: 400, display: "flex", alignItems: "center", gap: "0.35em" }}>
        <span style={{ color: "#6366f1" }}>—</span>
        <span style={{ color: "#1a1a2e" }}>创意穿出地球</span>
        <span style={{ color: "#6366f1" }}>—</span>
      </div>
    </div>
  );
}
