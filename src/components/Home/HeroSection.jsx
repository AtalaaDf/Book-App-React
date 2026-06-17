import { useNavigate } from "react-router-dom"

export function HeroSection(){
    const navigate = useNavigate()
    return(
        <div>
        <span>Selamat Datang</span>
        <h1>Temukan buku favoritmu 
            <br />
            di satu tempat</h1>
            <p>
                Jelajahi ribuan buku dari berbagai genre. Simpan yang kamu suka dan temukan yang baru setiap hari.
            </p>
            
            <div>
                <button onClick={() => navigate('/discover')}>
                    Mulai Jelajahi
                </button>
                <button onClick={() => navigate('/saved')}>
                    Lihat Tersimpan
                </button>
            </div>

            <div>
                <div>
                    10k Buku Tersedia
                </div>
                <div>
                    50+ genre
                </div>
                <div>
                    gratis selamanya
                </div>
            </div>

        </div>
    )
}