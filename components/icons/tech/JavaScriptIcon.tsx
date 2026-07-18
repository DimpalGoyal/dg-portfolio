interface Props {
  className?: string
}

function JavaScriptIcon({ className }: Props) {
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
      <path d="M14 15a2 2 0 1 0 2-2" />
      <path d="M10 9a2 2 0 1 1-2 2" />
    </svg>
  )
}

export default JavaScriptIcon
