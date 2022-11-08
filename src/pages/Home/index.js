import './home.css';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import { Social } from '../../components/Social';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Bruno Navarro Oficial</h1>
            <span>Veja Meus Links 👇</span>
            <main className="link">
                <section className="link-area">
                    <a href="https://www.instagram.com/p/CjgockuOsEO/">
                        <p className="link-text">Canal no Youtube</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="https://www.instagram.com/p/CjgockuOsEO/">
                        <p className="link-text">Perfil Linkdln</p>
                    </a>
                </section>
                <section className="link-area">
                    <a href="https://www.instagram.com/p/CjgockuOsEO/">
                        <p className="link-text">Perfil Instagram</p>
                    </a>
                </section>
                <footer>
                    <Social url="https://www.instagram.com/mamaefalei">
                        <FaFacebook size={35} color="#fff" />
                    </Social>
                    <Social url="https://www.instagram.com/mbl">
                        <FaYoutube size={35} color="#fff" />
                    </Social>
                    <Social url="https://www.instagram.com/brunonavarrooficial">
                        <FaInstagram size={35} color="#fff" />
                    </Social>
                </footer>
            </main>
        </div>
    )
}