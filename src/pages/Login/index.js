import { useState } from 'react';
import { Logo } from '../../components/Logo/';
import { auth } from '../../services/firebaseconnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Input } from '../../components/Input';

import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (email === '' || password === '') {
            toast.error('Preencha todos os campos')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Logado com sucesso!')
                navigate('/admin', { replace: true })
                console.log('USUARIO LOGADO COM SUCESSO!')
            })
            .catch(() => {
                toast.error('Erro ao tentar fazer login')
                console.log('ERRO AO FAZER SEU LOGIN')
            })

        console.log(email);
        console.log(password);
    }

    return (
        <div className='login-container'>
            <Logo />

            <form className='form' onSubmit={handleLogin}>
                <Input
                    type={'email'}
                    placeholder="Digite seu e-mail.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type={'password'}
                    placeholder="**********"
                    autoComplete='on'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Acessar</button>
            </form>
        </div>
    )
}