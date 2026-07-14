interface VDLogoProps {
  size?: number;
  id?: string;
  showTagline?: boolean;
  dark?: boolean;
}

export default function VDLogo({ size = 40, id = "logo", showTagline = false, dark = false }: VDLogoProps) {
  const gradId = `vd-grad-${id}`;
  const textColor = dark ? "#ffffff" : "#0f0e2a";
  const taglineColor = dark ? "rgba(255,255,255,0.5)" : "#6366f1";

  const mark = (
    <svg
      width={size}
      height={Math.round(size * 90 / 96)}
      viewBox="-2 -2 96 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="44" x2="94" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B48E0" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>
      {/* V stroke: from upper-left, curves diagonally down to bottom-center, sweeps back up to upper-right */}
      <path
        d="M 10,8 C 35,80 60,80 68,20"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* O circle */}
      <circle
        cx="72"
        cy="22"
        r="22"
        stroke={`url(#${gradId})`}
        strokeWidth="11"
        fill="none"
      />
    </svg>
  );

  if (!showTagline) return mark;

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {mark}
        <span style={{
          fontSize: size * 0.8,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: textColor,
          lineHeight: 1,
          fontFamily: "inherit",
        }}>
          VentureD
        </span>
      </div>
      <div style={{
        fontSize: size * 0.26,
        letterSpacing: "0.2em",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        gap: "0.4em",
        color: taglineColor,
      }}>
        <span>—</span>
        <span style={{ color: dark ? "rgba(255,255,255,0.75)" : "#1a1a2e" }}>创意穿出地球</span>
        <span>—</span>
      </div>
    </div>
  );
}
