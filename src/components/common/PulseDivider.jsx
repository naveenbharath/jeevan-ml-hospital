function PulseDivider({ className = '' }) {
  return (
    <svg
      className={`pulse-divider ${className}`}
      width="96"
      height="20"
      viewBox="0 0 96 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 10H18L26 2L34 18L42 10H60"
        stroke="var(--color-primary)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 10H76L84 3"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="86" cy="2" r="2.4" fill="var(--color-accent)" />
    </svg>
  )
}

export default PulseDivider
