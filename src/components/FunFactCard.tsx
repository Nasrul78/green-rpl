import type { IFunFacts } from "@/types"

const BORDER_COLOR_MAP: Record<string, string> = {
    "pink-500": "border-l-pink-500",
    "green-600": "border-l-green-600",
    "yellow-400": "border-l-yellow-400",
    "gray-400": "border-l-gray-400",
    "green-500": "border-l-green-500",
    "pink-400": "border-l-pink-500",
    "orange-400": "border-l-orange-400",
    "blue-400": "border-l-blue-400",
};

const BG_COLOR_MAP: Record<string, string> = {
    "pink-500": "bg-pink-500",
    "green-600": "bg-green-600",
    "yellow-400": "bg-yellow-400",
    "gray-400": "bg-gray-400",
    "green-500": "bg-green-500",
    "pink-400": "bg-pink-400",
    "orange-400": "bg-orange-400",
    "blue-400": "bg-blue-400",
};

const FunFactCard = ({ icon, title, description, color }: IFunFacts) => {
    const LucideIcon = icon

    return (
        <article className={`bg-feature-card border-l-4 ${BORDER_COLOR_MAP[color]} flex gap-4 rounded-xl p-6`}>
            <div className={`min-w-12 h-12 ${BG_COLOR_MAP[color]} flex items-center justify-center rounded-lg`}>
                <LucideIcon className="size-6 text-white" />
            </div>
            <div>
                <h2 className="text-title text-lg font-semibold">{title}</h2>
                <p className="text-md mt-2">{description}</p>
            </div>
        </article>
    )
}

export default FunFactCard