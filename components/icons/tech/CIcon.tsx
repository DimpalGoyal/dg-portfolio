interface Props {
  className?: string
}

function CIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 9a6 6 0 0 0-12 0v6a6 6 0 0 0 12 0" />
    </svg>
  )
}

export default CIcon
