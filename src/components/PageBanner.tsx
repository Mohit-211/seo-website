type Props = {
  title: string;
  subtitle?: string;
  highlight?: string; // word to render in gold
  size?: "sm" | "md" | "lg"; // vertical spacing
  pattern?: "dots" | "waves"; // choose the edge pattern
  accentHex?: string; // default "#FED045"
  bgHex?: string; // default "#1E222A"
};

export default function PageBanner({
  title,
  subtitle,
  highlight,
  size = "md",
  pattern = "dots",
  accentHex = "#FED045",
  bgHex = "#1E222A",
}: Props) {
  const parts = highlight
    ? title.split(new RegExp(`(${highlight})`, "i"))
    : [title];
  const pad =
    size === "lg"
      ? "py-24 md:py-32"
      : size === "sm"
      ? "py-12 md:py-16"
      : "py-16 md:py-24";

  return (
    <section className={`relative isolate overflow-hidden text-white ${pad}`}>
      {/* background */}
      <div
        className="absolute inset-0 -z-40"
        style={{
          background: `radial-gradient(1200px 600px at 50% 30%, rgba(255,255,255,.06), transparent 60%),
                       linear-gradient(180deg, ${shade(
                         bgHex,
                         -6
                       )} 0%, ${bgHex} 100%)`,
        }}
      />

      {/* vignette to frame content */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(80% 70% at 50% 40%, transparent 60%, rgba(0,0,0,.35) 100%)",
        }}
      />

      {/* edge pattern */}
      {pattern === "dots" ? (
        <DotsWedges accent={accentHex} />
      ) : (
        <WavesEdges accent={accentHex} />
      )}

      {/* content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {parts.map((p, i) =>
            highlight && p.toLowerCase() === highlight.toLowerCase() ? (
              <span key={i} style={{ color: accentHex }}>
                {p}
              </span>
            ) : (
              <span key={i}>{p}</span>
            )
          )}
        </h1>
        {subtitle && (
          <p className="mt-4 mx-auto max-w-2xl text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- Patterns (kept at edges, diagonals, away from center) ---------- */

function DotsWedges({ accent }: { accent: string }) {
  return (
    <>
      {/* top-right diagonal wedge */}
      <svg
        className="absolute inset-0 -z-20 h-full w-full"
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="dotgrid"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.2" fill={accent} />
          </pattern>
          {/* fade mask so dots disappear toward center */}
          <linearGradient id="fadeTR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="maskTR">
            <rect width="100%" height="100%" fill="url(#fadeTR)" />
          </mask>
        </defs>
        {/* triangular wedge in top-right */}
        <polygon
          points="520,0 1440,0 1440,220 900,140"
          fill="url(#dotgrid)"
          opacity="0.25"
          mask="url(#maskTR)"
        />
      </svg>

      {/* bottom-left diagonal wedge */}
      <svg
        className="absolute inset-0 -z-20 h-full w-full"
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fadeBL" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="maskBL">
            <rect width="100%" height="100%" fill="url(#fadeBL)" />
          </mask>
        </defs>
        <polygon
          points="0,300 560,360 0,480"
          fill="url(#dotgrid)"
          opacity="0.18"
          mask="url(#maskBL)"
        />
      </svg>
    </>
  );
}

function WavesEdges({ accent }: { accent: string }) {
  return (
    <>
      {/* soft wave in top-right */}
      <svg
        className="absolute inset-0 -z-20 h-full w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <path
          d="M560,40 C820,10 1100,90 1440,30"
          fill="none"
          stroke={accent}
          strokeOpacity="0.22"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M640,120 C920,80 1160,150 1440,110"
          fill="none"
          stroke={accent}
          strokeOpacity="0.14"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* soft wave in bottom-left */}
      <svg
        className="absolute inset-0 -z-20 h-full w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <path
          d="M0,360 C260,330 520,380 780,350"
          fill="none"
          stroke={accent}
          strokeOpacity="0.18"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0,410 C240,385 520,420 760,395"
          fill="none"
          stroke={accent}
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

/* ---------- tiny util to slightly darken bg for gradient ---------- */
function shade(hex: string, amt: number) {
  const n = (x: number) => Math.max(0, Math.min(255, x));
  const c = hex.replace("#", "");
  const num = parseInt(
    c.length === 3
      ? c
          .split("")
          .map((h) => h + h)
          .join("")
      : c,
    16
  );
  const r = n((num >> 16) + amt);
  const g = n(((num >> 8) & 0xff) + amt);
  const b = n((num & 0xff) + amt);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
