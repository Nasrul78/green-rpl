import type { IShortcut } from "@/types"
import { Images, Leaf, Users2 } from "lucide-react"

export const SHORTCUT: IShortcut[] = [
  {
    icon: Leaf,
    title: "Katalog Tanaman",
    description: "Jelajahi koleksi tanaman pada taman kami beserta penjelasan yang detail.",
    link: "/tanaman",
    color: "primary",
  },
  {
    icon: Users2,
    title: "Tim Kami",
    description: "Kenali tim di balik proyek ini serta peran mereka dalam mengembangkan taman ini.",
    link: "/about",
    color: "secondary",
  },
  {
    icon: Images,
    title: "Galeri Foto",
    description: "Lihat koleksi foto tanaman dari taman kami lengkap dengan tampilan terbaiknya.",
    link: "/galeri",
    color: "tertiary",
  },
];


export const COLORS = {
  primary: {
    bg: "bg-accent-primary",
    bgBlur: "bg-accent-primary-blur",
    border: "border-accent-primary",
  },
  secondary: {
    bg: "bg-accent-secondary",
    bgBlur: "bg-accent-secondary-blur",
    border: "border-accent-secondary",
  },
  tertiary: {
    bg: "bg-accent-tertiary",
    bgBlur: "bg-accent-tertiary-blur",
    border: "border-accent-tertiary",
  },
} as const;