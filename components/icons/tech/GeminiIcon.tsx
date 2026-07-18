interface Props {
  className?: string
}

function GeminiIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
    </svg>
  )
}

export default GeminiIcon
