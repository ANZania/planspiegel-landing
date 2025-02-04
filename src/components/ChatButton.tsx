export function ChatButton({
  className,
  text,
}: {
  className?: string
  text?: string
}) {
  return (
    <div className={`items-center ${className}`}>
      <a
        className="text-md icon-button rounded-full border-0 bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-500"
        href="https://planspiegel.com"
        title="Security Check"
        target="_blank"
      >
        <button aria-label="Security Check">
          <p>{text}</p>
        </button>
      </a>
    </div>
  )
}
