interface Props {
  className?: string
}

function NextJsIcon({ className }: Props) {
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
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 8v8" />
      <path d="M15 8l-4 4 4 4" />
    </svg>
  )
}

export default NextJsIcon
