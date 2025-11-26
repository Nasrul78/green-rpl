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
    <header className="p-2 flex justify-between items-center bg-navbar border-2 border-border">
      <div>
        <img src="logo-kelas.png" alt="Logo Kelas" className="size-12" />
      </div>

      <nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="center">
            <DropdownMenuLabel>Taman X - RPL</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-paragraph/20!">
              <NavLink to="/tanaman">Tanaman</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-paragraph/20!">
              <NavLink to="/about">Tentang Kami</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}

export default Navbar