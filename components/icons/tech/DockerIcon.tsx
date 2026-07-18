interface Props {
  className?: string
}

function DockerIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="10" width="3" height="4" rx="1" />
      <rect x="8" y="10" width="3" height="4" rx="1" />
      <rect x="12" y="10" width="3" height="4" rx="1" />
      <rect x="8" y="6" width="3" height="4" rx="1" />
      <path d="M16 12c0-3-2-5-4-5" />
      <path d="M2 14h20c0 3-2 5-5 5H7c-3 0-5-2-5-5z" />
    </svg>
  )
}

export default DockerIcon
