import TanamanCard from "@/components/TanamanCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"
import TANAMAN from "@/constants/Tanaman"
import { ArrowLeft, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Tanaman = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(TANAMAN);

  useEffect(() => {
    const lowered = search.toLowerCase()

    setData(TANAMAN.filter((tanaman) =>
      tanaman.title.toLowerCase().includes(lowered)
    ))
  }, [search])

  return (
    <div className="flex flex-col items-center p-12">
        <h1 className="font-bold text-5xl text-title  text-center">Tanaman Kami</h1>
        <p className="mt-4 text-center">Temukan informasi lengkap tentang tanaman dan fakta menarik dari tanaman pada taman kami</p>
        
        <form action="" className="w-full mt-8">
          <InputGroup className="border-2 border-border rounded-2xl divide-y-0 bg-navbar">
            <Input
              placeholder="Cari tanaman"
              onChange={(e) => setSearch(e.target.value)}
              className="border-0 outline-none! ring-0! decoration-0"
            ></Input>
            <Button
              type="submit"
              variant="ghost"
            >
              <Search className="size-5 hover:size-4 transition-all" />
            </Button>
          </InputGroup>
        </form>


        <div className="gap-5 flex flex-col mt-8">
          {data.length === 0 ?
            <p className="text-center text-lg">Tanaman tidak ditemukan</p>
          :
            data.map(({ id, thumbnail, title, description, siram}) => (
              <TanamanCard key={id} id={id} thumbnail={thumbnail} title={title} description={description} siram={siram} />
          ))}
        </div>

        <Link className="gap-2 flex items-center bg-white border-2 border-accent-primary h-16 mt-8 justify-center rounded-lg text-accent-primary w-full font-semibold text-lg" to="/">
          <ArrowLeft />Kembali ke Beranda
        </Link>
    </div>
  )
}

export default Tanaman