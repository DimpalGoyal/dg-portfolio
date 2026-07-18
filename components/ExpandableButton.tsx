import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  color?: string;
  href?: string;
  onClick?: () => void;
}

function ExpandableButton({ icon, label, color, href, onClick }: Props) {
  const base =
    "group flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-border-custom px-1.5 py-1.5 sm:px-2 sm:py-2 text-on-surface-muted hover:border-on-surface hover:bg-surface-hover transition-all duration-500 cursor-pointer hover:-translate-y-0.5";

  const content = (
    <>
      <span className="shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 group-hover:text-[var(--brand)] [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </span>
      <span className="whitespace-nowrap text-xs sm:text-sm font-medium transition-colors duration-500 group-hover:text-[var(--brand)]">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={{ '--brand': color } as React.CSSProperties}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base} style={{ '--brand': color } as React.CSSProperties}>
      {content}
    </button>
  );
}

export default ExpandableButton;
