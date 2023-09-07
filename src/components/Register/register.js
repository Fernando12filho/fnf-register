import Form from '../Form/form';
import './register.css';

function Register(){
    return(
        <div className='body'>
            <div className='container'>
                <img src='#' alt='logo'/>
                <h1>Entrar para</h1>
                <h2>melhor experiencia digital</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
            <Form />
        </div>
    )
}

export default Register;