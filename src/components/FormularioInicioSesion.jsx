import React, {useState} from "react";
import Boton from "../elementos/Boton";
import styles from './FormularioInicioSesion.module.css'

const FormularioInicioSesion = (props) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

   
    const onChange = (e) => {
        if(e.target.name === "usuario"){
            setUsuario(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(usuario === 'Kevin' && password === '123'){
            props.setSesion(true)
        }else{
            alert('Datos Incorrectos')
            setUsuario ('');
            setPassword('');
        }

    }
   

    return (
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No Has Iniciado Sesion</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario: </label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario" 
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>contraseña: </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                    />
            </div>
            <div>
                <Boton largo type="submit">Iniciar Sesion</Boton>
            </div>
        </form>
    );
}

export default FormularioInicioSesion;