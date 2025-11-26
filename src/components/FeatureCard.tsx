import type { IFeatureCard } from "@/types"

const FeatureCard = ({ icon, title, description }: IFeatureCard) => {
    const LucideIcon = icon

    return (
        <article className="bg-feature-card border-l-4 border-l-feature-card-border flex gap-4 rounded-xl p-6">
            <div className="min-w-12 h-12 bg-accent-primary flex items-center justify-center rounded-lg">
                <LucideIcon className="size-6 text-white" />
            </div>
            <div>
                <h2 className="text-title text-lg font-semibold">{title}</h2>
                <p className="text-md mt-2">{description}</p>
            </div>
        </article>
    )
}

export default FeatureCard