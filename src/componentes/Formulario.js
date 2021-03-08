import React from 'react';
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
        ''
    );

    return (
        <form>
            <SelectMonedas />
            <SelectCripto />
            <Boton type='submit' value='Calcular Ahora' />
        </form>
    );
}

export default Formulario;
