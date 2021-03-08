import React, { useState } from 'react';

function useMoneda(label, stateInicial, opciones) {
    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    function Seleccionar() {
        return (
            <>
                <label>{label}</label>
                <select>
                    <option value=''>-- Seleccione Moneda --</option>
                    {opciones.map((opcion) => {
                        return (
                            <option key={opcion.codigo} value={opcion.codigo}>
                                {opcion.nombre}
                            </option>
                        );
                    })}
                </select>
            </>
        );
    }

    // Retornar state, interfaz y función que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;
