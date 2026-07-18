interface Props {
  className?: string
}

function PostgreIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3c-1 0-3 1-3 3v12" />
      <path d="M9 12h6" />
      <path d="M15 6c0-2-2-3-3-3" />
      <path d="M9 18c0 2 2 3 3 3s3-1 3-3" />
    </svg>
  )
}

export default PostgreIcon
