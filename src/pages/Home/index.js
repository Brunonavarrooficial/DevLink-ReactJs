import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Bruno Navarro Oficial</h1>
            <span>Veja Meus Links 👇</span>
            <main className="link">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Canal no Youtube</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Perfil Linkdln</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Perfil Instagram</p>
                    </a>
                </section>
            </main>
        </div>
    )
}