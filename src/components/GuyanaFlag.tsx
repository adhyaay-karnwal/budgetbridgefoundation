/** Flag of Guyana ("The Golden Arrowhead"), drawn to the official 3:5 ratio. */
export function GuyanaFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 30" className={className} role="img" aria-label="Flag of Guyana">
      <rect width="50" height="30" fill="#009e49" />
      <path d="M0 0 50 15 0 30z" fill="#fff" />
      <path d="M0 1.5 46 15 0 28.5z" fill="#fcd116" />
      <path d="M0 0 25 15 0 30z" fill="#000" />
      <path d="M0 1.9 22 15 0 28.1z" fill="#ce1126" />
    </svg>
  );
}
