import { ArrowRight, Leaf, Users } from "lucide-react"
import { Link } from "react-router-dom"
import FEATURE from "@/constants/FeatureCard"
import FeatureCard from "@/components/FeatureCard"
import TANAMAN from "@/constants/Tanaman"
import TanamanCard from "@/components/TanamanCard"
import { SHORTCUT } from "@/constants/Shortcut"
import Shortcut from "@/components/Shortcut"
import type { IShortcut } from "@/types"

const Homepage = () => {
  return (
    <main>
      <section className="bg-hero p-12 flex flex-col items-center">
        <img className="size-36" src="logo-kelas.png" alt="Logo Kelas" />
        <h1 className="text-center m-8 font-bold text-6xl text-title">Eksplori Dunia Tanaman </h1>
        <p className="text-center">Temukan informasi lengkap tentang tanaman, panduan perawatan, dan fakta menarik dari tanaman pada taman kami</p>

        <nav className="p-8 flex flex-col gap-4 w-9/8">
          <Link className="gap-2 flex items-center bg-accent-primary h-16 justify-center rounded-lg text-white font-semibold text-lg" to="/tanaman">
            <Leaf />Eksplor Tanaman
          </Link>
          <Link className="gap-2 flex items-center border-2 border-accent-primary h-16 bg-white justify-center rounded-lg text-accent-primary font-semibold text-lg" to="/about">
            <Users />Temui Tim Kami
          </Link>
        </nav>
      </section>

      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-title">Gambaran Proyek</h1>
        <p className="text-md mt-6">Proyek ini menampilkan koleksi tanaman outdoor pada taman kami yang disusun secara kurasi, lengkap dengan informasi detail dan fakta menarik tentang tanaman agar pengunjung mengetahui lebih banyak tentang tanaman yang ada di taman kami.</p>
      </section>

      <section className="p-12 flex flex-col gap-6  w-full">
        {FEATURE.map(({ icon, title, description}, index) => (
          <FeatureCard icon={icon} title={title} description={description} key={index} />
        ))}
      </section>

      <section className="p-12 bg-section-odd">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-title">Tanaman Kami</h1>
          <div className="flex text-accent items-center gap-1">
            <a href="/tanaman">Lihat Selengkapnya</a>
            <ArrowRight className="size-5"/>
          </div>
        </div>

        <div className="gap-5 flex flex-col mt-8">
          {TANAMAN.slice(0, 3).map(({ id, thumbnail, title, description, siram}) => (
            <TanamanCard key={id} id={id} thumbnail={thumbnail} title={title} description={description} siram={siram} />
          ))}
        </div>

        <Link className="gap-2 flex items-center bg-white border-2 border-accent-primary h-16 mt-8 justify-center rounded-lg text-accent-primary font-semibold text-lg" to="/tanaman">
          Lihat Semua Tanaman Kami
        </Link>
      </section>

      <section className="p-12 text-center">
          <h1 className="text-title text-2xl font-bold">Akses Cepat</h1>

          <div className="flex flex-col gap-4 mt-6">
            {SHORTCUT.map(({ icon, title, description, link, color}: IShortcut) => (
              <Shortcut icon={icon} title={title} description={description} link={link} color={color} key={title} />
            ))}
          </div>
      </section>
    </main>
  )
}

export default Homepage