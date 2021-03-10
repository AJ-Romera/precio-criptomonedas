import React from 'react';
import styled from '@emotion/styled';
import Formulario from './Formulario';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
`;

const Contenedor = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
    column-gap: 2rem;
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const GreenSpan = styled.span`
    color: green;
`;

const RedSpan = styled.span`
    color: red;
`;

const CriptoImg = styled.img`
    width: 70px;
`;

function Cotizacion({ resultado }) {
    if (Object.keys(resultado).length === 0) {
        return null;
    }

    // Imagen de la cripto
    const criptoImgUrl = `https://www.cryptocompare.com${resultado.IMAGEURL}`;

    return (
        <ResultadoDiv>
            <Precio>
                El precio es: <span>{resultado.PRICE}</span>
            </Precio>
            <Contenedor>
                <Info>
                    Variación Últimas 24h:{' '}
                    {resultado.CHANGEPCT24HOUR >= 0 ? (
                        <GreenSpan>{resultado.CHANGEPCT24HOUR}%</GreenSpan>
                    ) : (
                        <RedSpan>{resultado.CHANGEPCT24HOUR}%</RedSpan>
                    )}
                </Info>
                <CriptoImg src={criptoImgUrl} alt='Imagen criptomoneda' />
            </Contenedor>
            <Info>
                Precio más alto en las últimas 24h:{' '}
                <span>{resultado.HIGH24HOUR}</span>
            </Info>
            <Info>
                Precio más bajo en las últimas 24h:{' '}
                <span>{resultado.LOW24HOUR}</span>
            </Info>
            <Info>
                Volumen últimas 24h: <span>{resultado.VOLUME24HOURTO}</span>
            </Info>
        </ResultadoDiv>
    );
}

export default Cotizacion;
