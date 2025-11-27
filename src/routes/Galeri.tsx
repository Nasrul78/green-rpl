import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"

const images = import.meta.glob("/public/photos/*.{jpg,png,jpeg}", { eager: true })
const imageList = Object.values(images).map((mod: any) => mod.default)

const Galeri = () => {
  const [loadedPhotos, setLoadedPhotos] = useState<number>(6)

  return (
    <main>
      <section className="p-12 bg-section-odd text-center">
        <h1 className="text-2xl font-bold text-title">Jurnal Taman Kami</h1>
        <p className="leading-5 mt-2">Saksikan momen-momen indah kami selama proyek ini. Mulai dari menanam dan merawat tanaman hingga taman yang penuh warna.</p>
      </section>

      <section className="py-6 px-12 flex justify-between">
        <h2 className="text-xl font-bold text-title">Dokumentasi Kami</h2>
      </section>

      <section className="p-12 pt-0">
        <div className="columns-2 md:columns-3 gap-4">
          {imageList.slice(0, loadedPhotos).map((galeri, index) => {
            const link = galeri.split("/").pop().split(".")[0]
console.log(link)
            return (
            <div key={index} className="mb-4">
              <Link to={`/photos/${link}`}>
                <img
                  src={galeri}
                  alt="Foto Galeri"
                  className="w-full object-cover rounded-2xl"
                />
              </Link>
            </div>
          )})}
        </div>

        {loadedPhotos < imageList.length && <Button className="cursor-pointer flex mt-4 items-center border-2 border-accent-primary h-16 w-full justify-center rounded-lg  bg-white text-accent-primary font-semibold text-lg" onClick={() => {
          setLoadedPhotos(loadedPhotos + 6)
          if (loadedPhotos > imageList.length)
            setLoadedPhotos(imageList.length)
        }}>
          Lihat Lebih Banyak
        </Button>}
      </section>
    </main>
  )
}

export default Galeri