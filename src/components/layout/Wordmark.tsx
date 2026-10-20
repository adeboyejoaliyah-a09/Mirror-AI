interface WordmarkProps {
  className?: string
}

export function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-tight text-ink ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5.5"
          stroke="#AA3BFF"
          strokeOpacity="0.9"
          strokeWidth="1.6"
        />
        <path d="M12 3.5v17" stroke="#BD5FFF" strokeWidth="1.5" />
        <path
          d="M6.8 8.4c0-.66.54-1.2 1.2-1.2h2.4c.66 0 1.2.54 1.2 1.2v7.2c0 .66-.54 1.2-1.2 1.2H8a1.2 1.2 0 0 1-1.2-1.2V8.4Z"
          fill="#AA3BFF"
          fillOpacity="0.55"
        />
        <path
          d="M14.6 9.6h2.6M14.6 12.4h2.6M14.6 15.2h1.8"
          stroke="#A4AEC2"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      MirroirAI
    </span>
  )
}
