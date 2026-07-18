interface Props {
  className?: string
}

function MongoIcon({ className }: Props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14" />
      <path d="M21 5v14" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
      <path d="M3 12h18" />
    </svg>
  )
}

export default MongoIcon
