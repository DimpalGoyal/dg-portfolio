import type { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  username: string;
  color: string;
}

function SocialCard({ href, icon, username, color }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card group flex items-center gap-2.5 rounded-2xl border border-ring-custom px-3 py-2.5 transition-all duration-300 cursor-pointer hover:border-[var(--brand)]"
      style={{ "--brand": color } as React.CSSProperties}
    >
      <span className="shrink-0 flex items-center justify-center w-7 h-7 text-on-surface-body transition-colors duration-300 group-hover:text-[var(--brand)]">
        {icon}
      </span>
      <span className="text-sm font-medium text-on-surface-body transition-colors duration-300 group-hover:text-[var(--brand)]">
        {username}
      </span>
    </a>
  );
}

export default SocialCard;
