import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { getDocs, collection, orderBy, query, getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseconnection';

import { Social } from '../../components/Social';
import HomeHeader from '../../components/homeHeader';

import './home.css';

export default function Home() {

    const [links, setLinks] = useState([]);
    const [socialIconsLinks, setSocialIconsLinks] = useState({});

    useEffect(() => {

        function loadLinks() {
            const linksRef = collection(db, 'links');
            const queryRef = query(linksRef, orderBy('created', 'asc'));

            getDocs(queryRef)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            name: doc.data().name,
                            url: doc.data().url,
                            bg: doc.data().bg,
                            color: doc.data().color
                        })
                    })

                    setLinks(lista);
                })
        }

        loadLinks();

    }, []);

    useEffect(() => {

        function loadSocialLinks() {
            const docRef = doc(db, 'social', 'link');

            getDoc(docRef)
                .then((snapshot) => {

                    if (snapshot.data() !== undefined) {
                        setSocialIconsLinks({
                            facebook: snapshot.data().facebook,
                            instagram: snapshot.data().instagram,
                            youtube: snapshot.data().youtube
                        })
                    }
                })
        }

        loadSocialLinks();

    }, []);


    return (
        <div className="home-container">
            <HomeHeader />
            <h1>Bruno Navarro Oficial</h1>
            <span>Veja Meus Links 👇</span>
            <main className="link">

                {links.map((item) => (
                    <section key={item.id} className="link-area" style={{ backgroundColor: item.bg }}>
                        <a href={item.url} target='blank'>
                            <p className="link-text" style={{ color: item.color }}>{item.name}</p>
                        </a>
                    </section>

                ))}

                {links.length !== 0 && Object.keys(socialIconsLinks).length > 0 && (
                    <footer>
                        <Social url={socialIconsLinks?.facebook}>
                            <FaFacebook size={35} color="#fff" />
                        </Social>
                        <Social url={socialIconsLinks?.youtube}>
                            <FaYoutube size={35} color="#fff" />
                        </Social>
                        <Social url={socialIconsLinks?.instagram}>
                            <FaInstagram size={35} color="#fff" />
                        </Social>
                    </footer>
                )}
            </main>
        </div>

    )
}