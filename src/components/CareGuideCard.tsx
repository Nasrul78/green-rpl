import type { ICareGuide } from "@/types"
import { Clock, TriangleAlert, type LucideIcon } from "lucide-react"

const BG_COLOR_MAP: Record<string, string> = {
  "Watering": "text-care-water",
  "Sunlight": "text-care-sunlight",
  "Soil & Tips": "text-care-soil",
}

const BG_COLOR_MAP_BLUR: Record<string, string> = {
  "Watering": "bg-care-water-blur",
  "Sunlight": "bg-care-sunlight-blur",
  "Soil & Tips": "bg-care-soil-blur",
}

const MESSAGE_ICON: Record<string, LucideIcon | string> = {
    "Watering": Clock,
    "Sunlight": TriangleAlert,
    "Soil & Tips": "Pro-Tip: ",
}

const CareGuideCard = ({ icon, title, description, message }: ICareGuide) => {
    const LucideIcon = icon
    const MessageIcon = MESSAGE_ICON[title]

    return (
    <article className=" bg-white rounded-xl p-5">
        <div className="flex items-center gap-3">
            <div className={`${BG_COLOR_MAP_BLUR[title]} ${BG_COLOR_MAP[title]} flex rounded-full size-10 items-center justify-center`}>
                <LucideIcon className="size-6" />
            </div>
            <h3 className="text-lg text-title font-semibold">{title}</h3>
        </div>
        <p className="mt-3">{description}</p>
        <div className="flex mt-2 items-center gap-1">
            {MessageIcon !== "Pro-Tip: " && <MessageIcon className="size-6 sm:size-4"
            />}
            <p className="text-xs"><span className="font-bold">{MessageIcon === "Pro-Tip: " && "Pro-Tip: "}</span>{message}</p>
        </div>
    </article>
    )
}

export default CareGuideCard