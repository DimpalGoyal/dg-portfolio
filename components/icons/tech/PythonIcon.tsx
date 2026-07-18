interface Props {
  className?: string
}

function PythonIcon({ className }: Props) {
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
      <path d="M12 2c-2.5 0-5 1-5 3v2h10V5c0-2-2.5-3-5-3z" />
      <path d="M7 14c0 2 2.5 3 5 3s5-1 5-3v-2H7v2z" />
      <line x1="12" y1="5" x2="12" y2="5.01" />
      <line x1="12" y1="15" x2="12" y2="15.01" />
    </svg>
  )
}

export default PythonIcon
