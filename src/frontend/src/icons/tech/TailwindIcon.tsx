interface Props {
  className?: string
}

function TailwindIcon({ className }: Props) {
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
      <path d="M4 14c0-4 2-6 6-6 4 0 4.5 3 7 3 2.5 0 3-1.5 3-3 0 4-2 6-6 6-4 0-4.5-3-7-3-2.5 0-3 1.5-3 3z" />
      <path d="M4 20c0-4 2-6 6-6 4 0 4.5 3 7 3 2.5 0 3-1.5 3-3 0 4-2 6-6 6-4 0-4.5-3-7-3-2.5 0-3 1.5-3 3z" />
    </svg>
  )
}

export default TailwindIcon
