interface VDLogoProps {
  size?: number;
  id?: string;
}

export default function VDLogo({ size = 40, id = "logo" }: VDLogoProps) {
  const gradId = `vd-grad-${id}`;
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="80" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="0.5" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Left arm of V */}
      <line
        x1="6" y1="8"
        x2="30" y2="52"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Right arm of V (meets circle at lower-left of O) */}
      <line
        x1="30" y1="52"
        x2="50" y2="20"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* O — circle ring, gap at bottom-left where V arm meets it */}
      <circle
        cx="62"
        cy="22"
        r="14"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="74 14"
        strokeDashoffset="10"
      />
    </svg>
  );
}
