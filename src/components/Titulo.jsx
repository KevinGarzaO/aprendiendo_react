import React from 'react'

 const Titulo = ({usuario = 'Usuario', color = 'grey'}) => {
    return (
        <div>
             <h1 className='titulo' style={{color: color}} >Hola {usuario}!!</h1>
        </div>
    )
}


export {Titulo}