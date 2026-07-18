interface Props {
  className?: string
}

function CppIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <line x1="9" y1="9" x2="9" y2="15" />
      <line x1="6" y1="12" x2="12" y2="12" />
    </svg>
  )
}

export default CppIcon
