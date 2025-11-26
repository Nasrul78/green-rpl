import type { ITanaman } from "@/types"
import { ArrowRight, Droplet } from "lucide-react"

const TanamanCard = ({id, thumbnail, title, description, siram}: ITanaman) => {
  const words = siram.split(" ");
  const lastWord = words[words.length - 1];
  const shortenedLastWord = lastWord.slice(0, 1);

  const trimmedSiram = `${words.slice(0, -1).join(" ")} ${shortenedLastWord}`;

  return (
    <article className="rounded-xl bg-card">
      <img className="rounded-t-xl h-48 w-full object-cover" src={thumbnail} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-title">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="mt-3 flex justify-between items-center text-accent">
            <span className="gap-1 justify-between items-center flex bg-accent-primary-slight-blur sm:hidden px-3 py-1 rounded-full"><Droplet className="size-5.5"/>{trimmedSiram}</span>
            <span className="gap-1 justify-between items-center sm:flex bg-accent-primary-slight-blur hidden px-3 py-1 rounded-full"><Droplet className="size-5.5"/>{siram}</span>
            <a className={`flex items-center gap-2" href="/tanaman/${id}`}>Selengkapnya<ArrowRight className="size-4.5"/></a>
        </div>
      </div>
    </article>
  )
}

export default TanamanCard