import './social.css';

export function Social({children, url}) {
    return(
        <a className='social' href={url} rel="noreferrer" target="_blank" >
            {children}
        </a>
    )
}