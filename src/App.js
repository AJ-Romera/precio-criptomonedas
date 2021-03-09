import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario';
import Cotizacion from './componentes/Cotizacion';

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

    useEffect(() => {
        const obtenerCotizacion = async () => {
            // Evita la ejecución la primera vez que carga la web
            if (moneda === '') {
                return;
            }
            // Consulta la API para obtener la cotización
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const resultado = await axios.get(url);
            setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        };
        obtenerCotizacion();
    }, [moneda, criptomoneda]);

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

                <Cotizacion resultado={resultado} />
            </div>
        </Contenedor>
    );
}

export default App;
