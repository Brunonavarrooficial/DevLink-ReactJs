import './header.css';

import { BiLogOut } from 'react-icons/bi';
import { CiStar } from 'react-icons/ci';
import { DiCode } from 'react-icons/di';

import { Link } from 'react-router-dom';

import { auth } from '../../services/firebaseconnection';
import { signOut } from 'firebase/auth';

async function handleLogout() {
    await signOut(auth)
}

export default function Header() {
    return (
        <header className='admin-header'>
            <nav className='nav-header'>
                <button onClick={handleLogout}>
                    <BiLogOut size={28} color="#DB2629" />
                    Logout
                </button>

                <Link to={'/admin'}>
                    Links <DiCode color='#DB2629' />
                </Link>
                <Link to={'/admin/social'}>
                    Redes Sociais <CiStar color='#DB2629' />
                </Link>

            </nav>
        </header>
    )
}