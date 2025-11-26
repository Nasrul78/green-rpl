import type { IPlantStats } from "@/types"

const StatsCard = ({label, description}: IPlantStats) => {
  return (
    <article className="text-center">
        <p className="text-stats-description font-bold text-2xl">{description}</p>
        <h3 className="text-sm">{label}</h3>
    </article>
  )
}

export default StatsCard