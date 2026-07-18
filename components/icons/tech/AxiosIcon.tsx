interface Props {
  className?: string
}

function AxiosIcon({ className }: Props) {
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
      <path d="M12 2v20" />
      <path d="M5 9l7-7 7 7" />
      <path d="M19 15l-7 7-7-7" />
    </svg>
  )
}

export default AxiosIcon
