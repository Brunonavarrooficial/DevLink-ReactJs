import './homeHeader.css';

import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';


export default function HomeHeader() {
    return (
        <header className='home-header'>
            <nav className='nav-home-header'>
                <Link to={'/login'}>
                    <BiLogOut size={28} color="#DB2629" />
                    LogIn
                </Link>

            </nav>
        </header>
    )
}