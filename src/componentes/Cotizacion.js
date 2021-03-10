import React from 'react';
import styled from '@emotion/styled';

const GreenSpan = styled.span`
    color: green;
`;

const RedSpan = styled.span`
    color: red;
`;

function Cotizacion({ resultado }) {
    if (Object.keys(resultado).length === 0) {
        return null;
    }
    console.log(resultado);

    // Imagen de la cripto
    const criptoImgUrl = `https://www.cryptocompare.com${resultado.IMAGEURL}`;

    return (
        <div>
            <p>
                El precio es: <span>{resultado.PRICE}</span>
            </p>
            <p>
                Variación Últimas 24h:{' '}
                {resultado.CHANGEPCT24HOUR >= 0 ? (
                    <GreenSpan>{resultado.CHANGEPCT24HOUR}%</GreenSpan>
                ) : (
                    <RedSpan>{resultado.CHANGEPCT24HOUR}%</RedSpan>
                )}
            </p>
            <img src={criptoImgUrl} alt='Imagen criptomoneda' />
            <p>
                Precio más bajo en las últimas 24h:{' '}
                <span>{resultado.HIGH24HOUR}</span>
            </p>
            <p>
                Precio más bajo en las últimas 24h:{' '}
                <span>{resultado.LOW24HOUR}</span>
            </p>
            <p>
                Volumen últimas 24h: <span>{resultado.VOLUME24HOURTO}</span>
            </p>
        </div>
    );
}

export default Cotizacion;
