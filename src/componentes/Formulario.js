import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

function Formulario() {
    const [listaCripto, setListaCripto] = useState([]);

    const MONEDAS = [
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'KRW', nombre: 'Won Surcoreano' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    ];

    // Utilizar Custom Hook useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda: ', '', MONEDAS);

    // Utilizar Custom Hook useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda(
        'Elige tu Criptomoneda: ',
        '',
        listaCripto
    );

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            setListaCripto(resultado.data.Data);
        };
        consultarAPI();
    }, []);

    return (
        <form>
            <SelectMonedas />
            <SelectCripto />
            <Boton type='submit' value='Calcular Ahora' />
        </form>
    );
}

export default Formulario;
