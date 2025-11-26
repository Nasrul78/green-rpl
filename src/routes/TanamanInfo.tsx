import { Button } from "@/components/ui/button";
import TANAMAN from "@/constants/Tanaman";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FunFactCard from "@/components/FunFactCard";
import CareGuideCard from "@/components/CareGuideCard";
import StatsCard from "@/components/StatsCard";

const TanamanInfo = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { thumbnail, title, titleLatin, description, funFacts, careGuide, plantStats } = TANAMAN[Number(id)]

    return (
    <main>
        <div className="w-full p-3">
          <Button onClick={() => navigate(-1)} className="flex gap-1.5 items-center cursor-pointer" variant="ghost">
            <ArrowLeft className="size-4 mb-0.5"/>
            <p>Kembali</p>
          </Button>
        </div>

        <section className="bg-section-odd p-12 flex flex-col items-center gap-2 text-center">
          <img src={thumbnail} alt="Foto Bunga" className="h-64 rounded-2xl object-cover img-shadow" />
          <h1 className="font-bold text-2xl mt-6 text-green-title">{title}</h1>
          <h2 className="text-sm text-green-subtitle">{titleLatin}</h2>
          <div className="mt-4 bg-white rounded-xl p-8">
            <p>{description}</p>
          </div>
        </section>

        <section className="p-12">
          <div className="flex items-center gap-2">
            <img src="bulb.svg" alt="Fakta Menarik" className="size-6" />
            <h1 className="font-semibold text-xl text-green-title">Fakta Menarik</h1>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {funFacts.map(({icon, title, description, color}, index) => (
              <FunFactCard key={index} icon={icon} title={title} description={description} color={color} />
            ))}
          </div>
        </section>

        <section className="p-12 bg-section-odd">
          <div className="flex items-center gap-2">
            <img src="heart.svg" alt="Fakta Menarik" className="size-6" />
            <h1 className="font-semibold text-xl text-green-title">Panduan Perawatan</h1>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {careGuide.map(({icon, title, description, message}, index) => (
              <CareGuideCard key={index} icon={icon} title={title} description={description} message={message} />
            ))}
          </div>
        </section>

        <section className="p-12 ">
          <h1 className="font-semibold text-xl text-green-title text-center">Informasi Tanaman</h1>

          <div className="mt-5 gap-4 grid grid-cols-2">
            {plantStats.map(({label, description}, index) => (
              <StatsCard key={index} label={label} description={description} />
            ))}
          </div>
        </section>

        <Link className="gap-2 flex items-center bg-white border-2 border-accent-primary h-16 justify-center rounded-lg text-accent-primary mt-0 m-12 font-semibold text-lg" to="/tanaman">
          <ArrowLeft />Kembali ke Katalog Tanaman
        </Link>
    </main>
  )
}

export default TanamanInfo