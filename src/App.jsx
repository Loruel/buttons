import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [clicks, setClicks] = useState([]); // Registro de clics
  const [isClicked, setIsClicked] = useState(false); // Estado para cambiar el color del botón

  const handleClick = async () => {
    const timestamp = new Date();
    setClicks((prev) => [...prev, { timestamp }]);
    setIsClicked(true); // Cambiar color del botón a verde

    // Enviar clic al backend
    try {
      await axios.post('http://localhost:4000/api/clicks', { timestamp });
    } catch (error) {
      console.error('Error al guardar el clic:', error);
    }
  };

  const handleReset = () => {
    setClicks([]); // Reiniciar el estado de los clics
    setIsClicked(false); // Resetear el color del botón
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center">
      <button
        className={`w-72 h-72 rounded-full m-5 border-4 ${
          isClicked ? 'bg-green-600' : 'bg-red-600'
        }`}
        onClick={handleClick}
      >
        {clicks.map((click, index) => (
          <p key={index} className="text-white mt-2">
            Clic a las {click.timestamp.toLocaleTimeString('es-ES', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              fractionalSecondDigits: 3,
            })}
          </p>
        ))}
      </button>

      <button
        className="bg-blue-500 px-4 py-2 rounded mt-4"
        onClick={handleReset}
      >
        Reiniciar
      </button>
    </div>
  );
}
