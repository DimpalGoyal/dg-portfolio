interface Props {
  className?: string
}

function NodeIcon({ className }: Props) {
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
      <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="7" x2="22" y2="7" />
      <line x1="2" y1="17" x2="22" y2="17" />
    </svg>
  )
}

export default NodeIcon
