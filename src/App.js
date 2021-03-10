import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario';
import Cotizacion from './componentes/Cotizacion';
import Spinner from './componentes/Spinner';

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading1 = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`;

function App() {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const obtenerCotizacion = async () => {
            // Evita la ejecución la primera vez que carga la web
            if (moneda === '') {
                return;
            }
            // Consulta la API para obtener la cotización
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const resultado = await axios.get(url);

            // Mostrar el Spinner
            setCargando(true);

            // Temporizador para que oculte el Spinner tras 2,5 segundos
            setTimeout(() => {
                //Guardar cotización
                setCargando(false);

                //Guardar cotización
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            }, 2500);
        };
        obtenerCotizacion();
    }, [moneda, criptomoneda]);

    // Muestra un componente u otro según unas condiciones
    const componente = cargando ? (
        <Spinner />
    ) : (
        <Cotizacion resultado={resultado} />
    );

    return (
        <Contenedor>
            <div>
                <Imagen src={imagen} alt='imagen cripto' />
            </div>
            <div>
                <Heading1>Cotiza Criptomonedas</Heading1>

                <Formulario
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                />

                {componente}
            </div>
        </Contenedor>
    );
}

export default App;
