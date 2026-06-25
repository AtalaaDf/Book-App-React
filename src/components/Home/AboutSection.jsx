import { Library, Moon, Search, Smartphone, UserCheck, Wallet, Zap } from "lucide-react"

const arr = [
    {
    id: 1,
    title : "Cari mudah",
    icon : Search,
    desc: "Kamu bisa mencari buku yang kamu inginkan dengan mudah!"
    },
    {
    id: 2,
    title : "Tanpa Biaya",
    icon : Wallet,
    desc: "Akses ribuan buku tanpa bayar sepeserpun"
    },
    {
    id: 3,
    title : "Mode Gelap",
    icon : Moon,
    desc: "Nyaman dibaca siang atau malam dengan dark mode"
    },
    {
    id: 4,
    title : "Cepat & ringan",
    icon : Zap,
    desc: "Performa cepat tanpa loading bertele-tele"
    },
    {
    id: 5,
    title : "Database lengkap",
    icon : Library,
    desc: "Terhubung dengan Open Library, jutaan judul tersedia"
    },
    {
    id: 6,
    title : "Responsive",
    icon : Smartphone,
    desc: "Nyaman diakses dari HP, tablet, maupun laptop"
    },
    {
    id: 7,
    title : "Tanpa akun",
    icon : UserCheck,
    desc: "Langsung pakai, tidak perlu daftar dulu"
    },
]

export function AboutSection(){
    return(
        <div>
        {arr.map((about)=>(
            <div key={about.id}>
            <about.icon/>
            <h1>{about.title}</h1>
            <p>{about.desc}</p>
            </div>
        ))} 
        </div>
    )
}