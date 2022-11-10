import './header.css';

import { BiLogOut } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import { auth } from '../../services/firebaseconnection';
import { signOut } from 'firebase/auth';

async function handleLogout(){
    await signOut(auth)
}

export default function Header() {
    return (
        <header className='admin-header'>
            <nav className='nav-header'>                
                <button onClick={handleLogout}>
                    <BiLogOut size={28} color="#DB2629"/>
                </button>

                <Link to={'/admin'}>
                    Links
                </Link>
                <Link to={'/admin/social'}>
                    redes Sociais
                </Link>

            </nav>
        </header>
    )
}