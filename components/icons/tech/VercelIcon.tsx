interface Props {
  className?: string
}

function VercelIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 22 22 2 22" />
    </svg>
  )
}

export default VercelIcon
