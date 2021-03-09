import React from 'react';

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
            {/* AQUI PONER EL PORCENTAJE EN ROJO O EN VERDE SEGÚN SI SUBE O SI BAJA */}
            {/* AQUI PONER EL PORCENTAJE EN ROJO O EN VERDE SEGÚN SI SUBE O SI BAJA */}
            {/* AQUI PONER EL PORCENTAJE EN ROJO O EN VERDE SEGÚN SI SUBE O SI BAJA */}
            {/* PONER     TAMBIEN     UNA     INFO        NUEVA */}
            <p>
                Variación Últimas 24h: <span>{resultado.CHANGEPCT24HOUR}%</span>
            </p>
            <img src={criptoImgUrl} alt='img url' />
            <p>
                Precio más bajo en las últimas 24h:{' '}
                <span>{resultado.HIGH24HOUR}</span>
            </p>
            <p>
                Precio más bajo en las últimas 24h:{' '}
                <span>{resultado.LOW24HOUR}</span>
            </p>
        </div>
    );
}

export default Cotizacion;
