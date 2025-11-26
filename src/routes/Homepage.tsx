import { Leaf, Users } from "lucide-react"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <main>
      <section className="bg-hero p-12 flex flex-col items-center">
        <img className="size-24" src="logo-kelas.png" alt="Logo Kelas" />
        <h1 className="text-center m-12 font-bold text-7xl text-title">Eksplori Dunia Tanaman</h1>
        <p className="text-center">Temukan in`formasi lengkap tentang tanaman, panduan perawatan, dan fakta menarik dari tanaman pada taman kami</p>
        <Link className="gap-2 w-9/10 flex items-center bg-accent h-16 justify-center rounded-lg text-white font-semibold text-lg" to="/tanaman">
          <Leaf />Eksplor Tanaman
        </Link>
        <Link className="gap-2 w-9/10 flex items-center border-2 border-accent h-16 justify-center rounded-lg text-accent font-semibold text-lg" to="/about">
          <Users />Temui Tim Kami
        </Link>
      </section>
    </main>
  )
}

export default Homepage