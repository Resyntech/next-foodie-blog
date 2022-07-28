const Loading = ({ ...props }) => {
  return props.loading === 0 ? (
    <div className="flex items-center dark:bg-black justify-center min-h-screen">
      <ul className="grid grid-cols-2 gap-2 w-32 h-32 list-none">
        <li className="w-full animation-delay-100 dark:animation-delay-100 animate-loadLight dark:animate-loadDark bg-transparent dark:bg-transparent" />
        <li className="w-full animation-delay-200 dark:animation-delay-200 animate-loadLight dark:animate-loadDark bg-transparent dark:bg-transparent" />
        <li className="w-full animation-delay-300 dark:animation-delay-300 animate-loadLight dark:animate-loadDark bg-transparent dark:bg-transparent" />
        <li className="w-full animation-delay-400 dark:animation-delay-400 animate-loadLight dark:animate-loadDark bg-transparent dark:bg-transparent" />
      </ul>
    </div>
  ) : (
    <>{props.children}</>
  )
}

export default Loading
