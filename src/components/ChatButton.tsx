

export function ChatButton({ className, titleName }: { className?: string, titleName?: string }) {
  return (
    <div className={`items-center ${className}`}>
        <a class="rounded-full px-4 py-3 text-md font-semibold transition text-white icon-button bg-sky-600 hover:bg-sky-500 border-0"
            href="https://planspiegel.com"
            alt="Security Check"
            target="_blank">
          <button aria-label="Security Check" >
            <p>{titleName}</p>
          </button>
        </a>
    </div>
  )
}
