import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom"

const Photos = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const picture = id?.split("-")[0]

    return (
        <main className="w-screen h-screen">
            <div className="w-full p-3">
            <Button onClick={() => navigate(-1)} className="flex gap-1.5 items-center cursor-pointer" variant="ghost">
                <ArrowLeft className="size-4 mb-0.5"/>
                <p>Kembali</p>
            </Button>
            </div>

            <img className="p-2 rounded-2xl" src={`photos/${picture}.jpeg`} alt={`Foto ${picture}`} />
        </main>
    )
}

export default Photos