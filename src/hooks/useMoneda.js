import React, { useState } from 'react';

function useMoneda() {
    // State de nuestro custom hook
    const [state, setState] = useState('');

    function Seleccionar() {
        return (
            <>
                <label>Moneda</label>
                <select>
                    <option value='MXN'>Peso Mexicano</option>
                </select>
            </>
        );
    }

    // Retornar state, interfaz y función que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;
