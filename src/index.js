import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import FormularioInicioSesion from './components/FormularioInicioSesion';
import './index.css'
import Boton from './elementos/Boton';
import EjemploUseReducer from './components/EjemploUseReduce';
import Blog from './components/Blog';

const App = () => {
  const [sesion, setSesion] = useState(true);
    
    //componentDidMount y componentDidUpdate
    //Este hook se ejecuta cada ciclo de renderizado
    // useEffect(() => {
    //   console.log('El componente se renderizo')
    // })

    //ComponenDidMount.
    //Se ejecuta solamente al primer renderizado.
    // useEffect(() => {
    //   console.log('El Componente cargo por primera vez');
    // }, [])

    //Se ejecuta cuando cambia el estado de
    //la dependencia que le pasemos, en este caso 'contador' 
    // useEffect(() => {
    //   console.log('El estado del contador cambio');
    // }, [sesion])

    // useEffect(() => {
    //       return(() => {
    //         console.log('Adios Componente!');
    //       });
    // }, []);

    


  return (
    <div className='contenedor'>
      { sesion === true ? 
      <>
        <Usuario/>
        <Blog />
        <EjemploUseReducer />
        
        <Boton negro largo onClick={() => setSesion(false)}>Cerrar Sesion</Boton>
      </>
      : 
      <>
        <FormularioInicioSesion setSesion={setSesion} />
        {/* <button onClick={() => setSesion(true)}>Iniciar Sesion</button> */}
      </>
      }
    </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
, document.getElementById('root'));