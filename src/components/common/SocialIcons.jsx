function iconProps(size) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
}

export function FacebookIcon({ size = 16 }) {
  return (
    <svg {...iconProps(size)}>
      <path d="M14 9.5h2.5V6.5H14C11.79 6.5 10 8.29 10 10.5V13H8v3h2v5h3v-5h2.3l.7-3H13v-2c0-.55.45-1 1-1z" />
    </svg>
  )
}

export function InstagramIcon({ size = 16 }) {
  return (
    <svg {...iconProps(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TwitterIcon({ size = 16 }) {
  return (
    <svg {...iconProps(size)}>
      <path d="M4 4l7.5 9.5L4.5 20H7l5-5.6L16.5 20H20l-7.8-9.9L19.5 4H17l-4.6 5.1L8.5 4H4z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16 }) {
  return (
    <svg {...iconProps(size)}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <line x1="7.5" y1="6.8" x2="7.5" y2="6.9" />
      <path d="M12 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" />
    </svg>
  )
}
