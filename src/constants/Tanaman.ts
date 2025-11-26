import { Leaf, Sun, Droplet, Activity } from "lucide-react";
import type { ITanaman } from "@/types";

const TANAMAN: ITanaman[] = [
  {
    id: 0,
    thumbnail: "photos/nusa-indah0.jpeg",
    title: "Bunga Nusa Indah",
    titleLatin: "Mussaenda philippica",
    description:
      "Tanaman semak tropis dengan braktea cerah mencolok dan bunga kecil di tengahnya — cocok mempercantik pagar, pagar hidup, atau sudut taman rumah.",
    siram: "2-3 / minggu",
    funFacts: [
      {
        icon: Leaf,
        title: "Braktea Menarik",
        description: "Kelopak cerah yang terlihat seperti bunga besar sebenarnya adalah braktea; bunga aslinya kecil.",
        color: "pink-500",
      },
      {
        icon: Activity,
        title: "Tinggi Perdu",
        description: "Bisa tumbuh hingga 2-5 meter, ideal sebagai pagar atau tanaman latar.",
        color: "green-600",
      },
      {
        icon: Droplet,
        title: "Tanaman Obat",
        description: "Daun dan batang kadang dipakai dalam ramuan herbal tradisional.",
        color: "yellow-400",
      },
    ],
    careGuide: [
      {
        icon: Droplet,
        title: "Watering",
        description: "Sirami 2-3 kali seminggu ketika tanah mulai kering.",
        message: "Jangan biarkan tanah terlalu basah untuk mencegah akar busuk.",
        color: "blue-400",
      },
      {
        icon: Sun,
        title: "Sunlight",
        description: "Sinar matahari penuh sampai teduh parsial.",
        message: "Pastikan tanaman mendapat cahaya minimal 4-6 jam/hari.",
        color: "yellow-400",
      },
      {
        icon: Leaf,
        title: "Soil & Tips",
        description: "Gunakan tanah gembur dengan drainase baik.",
        message: "Tambahkan kompos untuk kesuburan dan pangkas cabang tua secara rutin.",
        color: "green-500",
      },
    ],
    plantStats: [
      { label: "Tingkat Perawatan", description: "Menengah" },
      { label: "Tinggi Maksimal", description: "2-5 m" },
      { label: "Suhu", description: "22-32 °C" },
      { label: "Kelembapan", description: "Sedang-Tinggi" },
    ],
  },
  {
    id: 1,
    thumbnail: "photos/bulu-ayam0.jpeg",
    title: "Bunga Bulu Ayam",
    titleLatin: "Chlorophytum comosum",
    description:
      "Tanaman hias dengan bunga memanjang menyerupai bulu halus — ideal untuk pot, taman kecil, atau border taman dengan nuansa alami.",
    siram: "2-3 / minggu",
    funFacts: [
      {
        icon: Leaf,
        title: "Tekstur Unik",
        description: "Bunga dan daun menyerupai bulu halus yang menambah tekstur taman.",
        color: "gray-400",
      },
      {
        icon: Activity,
        title: "Fleksibel",
        description: "Cocok ditanam di pot maupun tanah kebun.",
        color: "green-500",
      },
      {
        icon: Sun,
        title: "Tahan Matahari",
        description: "Mampu tumbuh di area cerah sampai teduh parsial.",
        color: "yellow-400",
      },
    ],
    careGuide: [
      {
        icon: Droplet,
        title: "Watering",
        description: "Sirami 2-3 kali seminggu, tanah tetap lembab.",
        message: "Hindari genangan air agar akar tidak membusuk.",
        color: "blue-400",
      },
      {
        icon: Sun,
        title: "Sunlight",
        description: "Cerah sampai teduh parsial.",
        message: "Pastikan mendapat minimal 4 jam cahaya per hari.",
        color: "yellow-400",
      },
      {
        icon: Leaf,
        title: "Soil & Tips",
        description: "Tanah porous atau campuran kompos & pasir.",
        message: "Kurangi penyiraman saat musim hujan, pangkas bunga layu secara rutin.",
        color: "green-500",
      },
    ],
    plantStats: [
      { label: "Tingkat Perawatan", description: "Mudah" },
      { label: "Tinggi Maksimal", description: "30-60 cm" },
      { label: "Suhu", description: "20-30 °C" },
      { label: "Kelembapan", description: "Sedang" },
    ],
  },
  {
    id: 2,
    thumbnail: "photos/krokot0.jpeg",
    title: "Bunga Krokot",
    titleLatin: "Portulaca oleracea",
    description:
      "Tanaman sukulen kecil dengan daun tebal dan bunga warna-warni yang mekar di bawah sinar matahari — sempurna untuk pot gantung, tepi taman, atau area tanah kering dengan sedikit perawatan.",
    siram: "1-2 / minggu",
    funFacts: [
      {
        icon: Leaf,
        title: "Sayuran Liar",
        description: "Daun krokot bisa dimakan, kaya nutrisi, cocok untuk salad.",
        color: "green-500",
      },
      {
        icon: Activity,
        title: "Tahan Kering",
        description: "Bisa hidup di tanah kering dan kurang subur.",
        color: "orange-400",
      },
      {
        icon: Sun,
        title: "Mekar Pagi",
        description: "Bunga mekar di pagi hari dan layu sore hari.",
        color: "pink-400",
      },
    ],
    careGuide: [
      {
        icon: Droplet,
        title: "Watering",
        description: "Sirami 1-2 kali seminggu saat tanah benar-benar kering.",
        message: "Kurangi penyiraman di musim hujan.",
        color: "blue-400",
      },
      {
        icon: Sun,
        title: "Sunlight",
        description: "Matahari langsung penuh.",
        message: "Cahaya penuh mendukung pertumbuhan optimal.",
        color: "yellow-400",
      },
      {
        icon: Leaf,
        title: "Soil & Tips",
        description: "Tanah ringan, drainase bagus.",
        message: "Cocok untuk pot atau area tanah kering.",
        color: "green-500",
      },
    ],
    plantStats: [
      { label: "Tingkat Perawatan", description: "Mudah" },
      { label: "Tinggi Maksimal", description: "5-15 cm" },
      { label: "Suhu", description: "15-30 °C" },
      { label: "Kelembapan", description: "Rendah-Sedang" },
    ],
  },
  {
    id: 3,
    thumbnail: "photos/taiwan0.jpeg",
    title: "Bunga Taiwan",
    titleLatin: "Cuphea hyssopifolia",
    description:
      "Tanaman hias dengan bunga kecil berwarna cerah yang tumbuh rimbun — ideal untuk border taman, pinggir jalan taman, atau penghias halaman rumah.",
    siram: "2-3 / minggu",
    funFacts: [
      {
        icon: Leaf,
        title: "Border Rimbun",
        description: "Tumbuh rimbun, cocok sebagai tanaman border atau pinggir taman.",
        color: "green-600",
      },
      {
        icon: Activity,
        title: "Perawatan Ringan",
        description: "Mudah dirawat, cocok pemula.",
        color: "blue-400",
      },
      {
        icon: Sun,
        title: "Bunga Cerah",
        description: "Memberi aksen warna di taman dengan bunga kecil cerah.",
        color: "pink-500",
      },
    ],
    careGuide: [
      {
        icon: Droplet,
        title: "Watering",
        description: "Sirami 2-3 kali seminggu agar tanah tetap lembab.",
        message: "Pastikan drainase baik untuk mencegah genangan air.",
        color: "blue-400",
      },
      {
        icon: Sun,
        title: "Sunlight",
        description: "Cerah sampai teduh parsial.",
        message: "Cahaya cukup untuk bunga tetap rimbun.",
        color: "yellow-400",
      },
      {
        icon: Leaf,
        title: "Soil & Tips",
        description: "Tanah humus dengan drainase moderat.",
        message: "Pangkas bunga layu agar tanaman tetap rimbun.",
        color: "green-500",
      },
    ],
    plantStats: [
      { label: "Tingkat Perawatan", description: "Mudah-Menengah" },
      { label: "Tinggi Maksimal", description: "40-60 cm" },
      { label: "Suhu", description: "18-28 °C" },
      { label: "Kelembapan", description: "Sedang" },
    ],
  },
];

export default TANAMAN;