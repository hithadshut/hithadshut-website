type IconName =
  | "shield"
  | "wall"
  | "box"
  | "module"
  | "villa"
  | "hammer"
  | "expand"
  | "key"
  | "certificate"
  | "plan"
  | "team";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function ServiceIcon({ name, size = 40, className = "" }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };
  const stroke = "currentColor";
  const gold = "#C8A97E";

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M24 4L40 9.5V22c0 9-6.5 16.5-16 19C14.5 38.5 8 31 8 22V9.5L24 4z"
            stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" fill="none"/>
          <path d="M17 24l5 5 10-11" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "wall":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="36" height="28" rx="2" stroke={stroke} strokeWidth="2.2"/>
          <path d="M6 19h12M18 19v9M6 28h24M30 10v9M30 28v10M18 28v10M42 19H30" stroke={stroke} strokeWidth="2"/>
          <path d="M35 13h4M35 32h4" stroke={gold} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "box":
      return (
        <svg {...common}>
          <path d="M24 6l16 7v16l-16 9-16-9V13l16-7z" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/>
          <path d="M8 13l16 9 16-9M24 22v16" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/>
          <circle cx="24" cy="29" r="2" fill={gold}/>
        </svg>
      );
    case "module":
      return (
        <svg {...common}>
          <rect x="7" y="12" width="34" height="26" rx="2" stroke={stroke} strokeWidth="2.2"/>
          <rect x="12" y="17" width="10" height="8" stroke={gold} strokeWidth="2"/>
          <rect x="26" y="17" width="10" height="8" stroke={stroke} strokeWidth="2"/>
          <rect x="12" y="28" width="10" height="6" stroke={stroke} strokeWidth="2"/>
          <rect x="26" y="28" width="10" height="6" stroke={gold} strokeWidth="2"/>
        </svg>
      );
    case "villa":
      return (
        <svg {...common}>
          <path d="M6 22L24 8l18 14" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 20v20h28V20" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/>
          <rect x="20" y="28" width="8" height="12" stroke={gold} strokeWidth="2"/>
          <rect x="14" y="25" width="4" height="4" stroke={stroke} strokeWidth="1.8"/>
          <rect x="30" y="25" width="4" height="4" stroke={stroke} strokeWidth="1.8"/>
        </svg>
      );
    case "hammer":
      return (
        <svg {...common}>
          <path d="M28 6l14 14-6 6-14-14 6-6z" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/>
          <path d="M22 12l-4 4" stroke={gold} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M22 20L8 34l-2 6 6-2 14-14" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round"/>
        </svg>
      );
    case "expand":
      return (
        <svg {...common}>
          <path d="M6 26V14h12" stroke={stroke} strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M42 22v12H30" stroke={stroke} strokeWidth="2.2" strokeLinecap="round"/>
          <rect x="10" y="18" width="18" height="18" stroke={stroke} strokeWidth="2.2"/>
          <path d="M20 12h18v18" stroke={gold} strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="16" cy="24" r="8" stroke={stroke} strokeWidth="2.2"/>
          <path d="M24 24h18M38 24v6M32 24v4" stroke={gold} strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="24" rx="2" stroke={stroke} strokeWidth="2.2"/>
          <path d="M14 16h20M14 22h14" stroke={stroke} strokeWidth="2"/>
          <circle cx="32" cy="34" r="6" fill={gold}/>
          <path d="M29 34l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "plan":
      return (
        <svg {...common}>
          <rect x="8" y="6" width="32" height="36" rx="2" stroke={stroke} strokeWidth="2.2"/>
          <path d="M14 14h20M14 22h20M14 30h14" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
          <circle cx="34" cy="32" r="4" stroke={gold} strokeWidth="2"/>
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="17" cy="18" r="5" stroke={stroke} strokeWidth="2.2"/>
          <circle cx="33" cy="20" r="4" stroke={gold} strokeWidth="2.2"/>
          <path d="M8 38c0-5 4-8 9-8s9 3 9 8" stroke={stroke} strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M26 36c0-4 3-7 7-7s7 3 7 7" stroke={gold} strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      );
  }
}
