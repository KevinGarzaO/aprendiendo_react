import { useState, useEffect } from "react";

export default function useObtenerArticulo() {
    const [articulos, setArticulos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setArticulos([
                {
                    id: 1,
                    titulo: 'Titulo del primer articulo'
                },
                {
                    id: 2,
                    titulo: 'Titulo del segundo articulo'
                },
                {
                    id: 3,
                    titulo: 'Titulo del tercer articulo'
                }
            ])
            setCargando(false)
        }, 3000);
    }, []);

    return [articulos, cargando];
}
