type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: Props) {
  const color = variant === "light" ? "#FFFFFF" : "#1B365D";
  const accent = "#E8A838";
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="התחדשות — לוגו"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 2.5L34.5 8v10.5c0 9.1-6.2 17-14.5 19C11.7 35.5 5.5 27.6 5.5 18.5V8L20 2.5z"
          fill={color}
        />
        <path
          d="M20 7L30 11v7.5c0 6.3-4.3 11.8-10 13.3-5.7-1.5-10-7-10-13.3V11l10-4z"
          fill={accent}
          opacity="0.95"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className="font-extrabold tracking-tight text-xl"
        style={{ color }}
      >
        התחדשות
      </span>
    </span>
  );
}
