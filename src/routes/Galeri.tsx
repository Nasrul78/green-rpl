import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import clsx from "clsx"
import { useState } from "react"

const images = import.meta.glob("/public/photos/*.{jpg,png,jpeg}", { eager: true })
const imageList = Object.values(images).map((mod: any) => mod.default)

// const videos = import.meta.glob("/public/videos/*.{}", { eager: true })
// const videoList = Object.values(videos).map((mod: any) => mod.default)

const Galeri = () => {
  // const [activeChild, setActiveChild] = useState<number>(0)
  const [loadedPhotos, setLoadedPhotos] = useState<number>(6)

  return (
    <main>
      <section className="p-12 bg-section-odd text-center">
        <h1 className="text-2xl font-bold text-title">Jurnal Taman Kami</h1>
        <p className="leading-5 mt-2">Saksikan momen-momen indah kami selama proyek ini. Mulai dari menanam dan merawat tanaman hingga taman yang penuh warna.</p>
      </section>

      <section className="py-6 px-12 flex justify-between">
        <h2 className="text-xl font-bold text-title">Dokumentasi Kami</h2>
        {/* <RadioGroup className="flex p-2 bg-gray-400/40 rounded-full transition-all">
          <div className={clsx(
            "flex items-center rounded-full p-2 text-white",
            activeChild === 0 ? "bg-accent-primary" : ""
          )}>
            <RadioGroupItem onClick={() => setActiveChild(0)} id="pict" value="picture" />
            <Label htmlFor="pict">Picture</Label>
          </div>
          <div className={clsx(
            "flex items-center rounded-full p-2 text-white",
            activeChild === 1 ? "bg-accent-secondary" : ""
          )}>
            <RadioGroupItem onClick={() => setActiveChild(1)} id="vid" value="video" />
            <Label htmlFor="vid">Video</Label>
          </div>
        </RadioGroup> */}
      </section>

      <section className="p-12 pt-0">
        <div className="columns-2 md:columns-3 gap-4">
          {imageList.slice(0, loadedPhotos).map((galeri, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <img
                src={galeri}
                alt="Foto Galeri"
                className="w-full object-cover rounded-2xl"
              />
            </div>
          ))}
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