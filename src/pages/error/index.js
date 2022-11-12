import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

import './error.css';

export default function Error() {
    return (
        <div className='error'>
            <Logo />
            <h1>Página não encontrada!</h1>
            <p>Está Pagina não existe</p>

            <Link className='link' to={'/'}>
                Voltar para Home
            </Link>
        </div>

    )
}