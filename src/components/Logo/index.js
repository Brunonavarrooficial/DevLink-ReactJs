import './logo.css';

import { Link } from 'react-router-dom';

export function Logo(){
    return(
        <Link to={'/'}>
            <h1 className='logo'>Logo<span className='logo-text'>Marca</span></h1>
        </Link>
    )
}