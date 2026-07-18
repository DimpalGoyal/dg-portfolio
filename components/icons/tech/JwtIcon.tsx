interface Props {
  className?: string
}

function JwtIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l2 7 7-2-4 6 6 4-7 2 2 7-6-4-6 4 2-7-7-2 6-4-4-6 7 2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default JwtIcon
