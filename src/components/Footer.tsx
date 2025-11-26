import { Github, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 gap-2 bg-footer flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
            <img className="size-12" src="logo-kelas.png" alt="Logo Kelas" />
            <h1 className="text-footer-title font-bold text-xl">Taman X - RPL</h1>
        </div>

        <p className="text-footer-paragraph">Ko-Kurikuler 2025</p>
        
        <div className="flex gap-2 text-footer-paragraph">
            <p>Kelas X - RPL</p>
            <p>|</p>
            <p>Sie Teknologi</p>
        </div>

        <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/xerpeell/" target="_blank" rel="noreferrer">
                <Instagram />
            </a>
            <a href="https://www.github.com/Nasrul78/" target="_blank" rel="noreferrer">
                <Github />
            </a>
        </div>

        <hr className="mt-2 w-4/5"/>
        <p className="mt-4">© 2025 Taman X - RPL. Oleh Sie Teknologi</p>
    </footer>
  )
}

export default Footer