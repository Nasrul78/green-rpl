import type { IShortcut } from "@/types"
import { COLORS } from "@/constants/Shortcut"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Shortcut = ({icon, title, description, link, color}: IShortcut) => {
  const styles = COLORS[color];
  const LucideIcon = icon

  return (
    <Link to={link}>
      <article className={`${styles.bgBlur} ${styles.border} gap-4 h-36 border-2 justify-between flex rounded-xl p-6`}>
        <div className={`size-14 ${styles.bg} rounded-xl flex justify-center items-center text-white`}>
          <LucideIcon />
        </div>
        <div className="text-left w-3/5 flex gap-2 flex-col">
          <h2 className="text-title font-bold text-md sm:text-lg">{title}</h2>
          <p className="text-xs sm:text-sm">{description}</p>
        </div>
        <ChevronRight className="size-7" />
      </article>
    </Link>
  )
}

export default Shortcut