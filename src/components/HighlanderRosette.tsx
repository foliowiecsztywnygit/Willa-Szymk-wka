import { cn } from "@/lib/utils";

export default function HighlanderRosette(props: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", props.className)}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rozeta podhalańska"
    >
      <circle cx="48" cy="48" r="46" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="48" cy="48" r="34" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" />
      <g fill="currentColor">
        <path d="M48 18c7.4 0 13.4 6 13.4 13.4 0 7.2-5.8 13.2-13 13.4 2.9-3.5 4.7-8 4.7-12.9C53.1 26.7 51 21.8 48 18Z" opacity="0.92" />
        <path d="M78 48c0 7.4-6 13.4-13.4 13.4-7.2 0-13.2-5.8-13.4-13 3.5 2.9 8 4.7 12.9 4.7 5.2 0 10.1-2.1 13.9-5.1Z" opacity="0.92" />
        <path d="M48 78c-7.4 0-13.4-6-13.4-13.4 0-7.2 5.8-13.2 13-13.4-2.9 3.5-4.7 8-4.7 12.9 0 5.2 2.1 10.1 5.1 13.9Z" opacity="0.92" />
        <path d="M18 48c0-7.4 6-13.4 13.4-13.4 7.2 0 13.2 5.8 13.4 13-3.5-2.9-8-4.7-12.9-4.7-5.2 0-10.1 2.1-13.9 5.1Z" opacity="0.92" />
        <path
          d="M48 30c10 0 18 8.2 18 18s-8.2 18-18 18-18-8.2-18-18 8.2-18 18-18Z"
          opacity="0.08"
        />
        <path
          d="M48 37.5c5.8 0 10.5 4.7 10.5 10.5S53.8 58.5 48 58.5 37.5 53.8 37.5 48 42.2 37.5 48 37.5Z"
          opacity="0.55"
        />
      </g>
      <circle cx="48" cy="48" r="2.4" fill="currentColor" />
    </svg>
  );
}

