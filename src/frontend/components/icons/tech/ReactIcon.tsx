interface Props {
  className?: string
}

function ReactIcon({ className }: Props) {
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
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)" />
    </svg>
  )
}

export default ReactIcon
