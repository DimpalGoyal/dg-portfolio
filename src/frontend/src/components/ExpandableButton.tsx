import { type ReactNode } from "react"

interface Props {
  icon: ReactNode
  label: string
  href?: string
  onClick?: () => void
}

function ExpandableButton({ icon, label, href, onClick }: Props) {
  const base =
    "group flex items-center gap-2 rounded-2xl border border-border-custom px-2 py-2 text-on-surface-muted hover:text-on-surface hover:border-on-surface hover:bg-surface-hover transition-all duration-700 cursor-pointer"

  const content = (
    <>
      <span className="shrink-0 flex items-center justify-center w-7 h-7">
        {icon}
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-700 group-hover:max-w-40 text-sm font-medium">
        {label}
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={base}>
      {content}
    </button>
  )
}

export default ExpandableButton
