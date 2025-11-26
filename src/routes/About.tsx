const About = () => {
  return (
    <main>
      <section className="px-12 py-8 bg-section-odd flex flex-col items-center">
        <img className="size-28" src="logo-kelas.png" alt="Logo Kelas" />
        <h1 className="text-center mt-4 font-bold text-4xl text-title">Taman X - RPL </h1>
        <p className="text-center mt-2">"Hijaukan Ide, Kembangkan Kreativitas."</p>
      </section>

      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-title">Gambaran Proyek</h1>
        <p className="text-md mt-6">Proyek ini menampilkan koleksi tanaman outdoor pada taman kami yang disusun secara kurasi, lengkap dengan informasi detail dan fakta menarik tentang tanaman agar pengunjung mengetahui lebih banyak tentang tanaman yang ada di taman kami.</p>
      </section>
    </main>
  )
}

export default About