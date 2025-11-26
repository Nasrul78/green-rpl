import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="p-2 sticky flex top-0 justify-between items-center bg-navbar border-2 border-border">
      <div className="flex items-center gap-2">
        <img src="logo-kelas.png" alt="Logo Kelas" className="size-12" />
        <h1 className="text-title font-bold text-xl">Taman X - RPL</h1>
      </div>

      <nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 bg-navbar" align="center">
            <DropdownMenuLabel className="text-lg font-semibold">Taman X - RPL</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-paragraph/20!">
              <NavLink className="text-md my-1 w-full" to="/tanaman">Tanaman</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-paragraph/20!">
              <NavLink className="text-md my-1 w-full" to="/galeri">Galeri</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-paragraph/20!">
              <NavLink className="text-md my-1 w-full" to="/about">Tentang Kami</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}

export default Navbar