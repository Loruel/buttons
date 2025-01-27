import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1); // Página actual
  const [clicks, setClicks] = useState([]); // Registro de clics

  const handleClick = (buttonId) => {
    const timestamp = new Date();
    setClicks((prev) => [
      ...prev,
      { buttonId, timestamp },
    ]);
  };

  const goToPage = (pageNumber) => setPage(pageNumber);

  const getFirstClick = () => {
    if (clicks.length === 0) return 'No se ha presionado ningún botón.';
    const firstClick = clicks.reduce((prev, current) =>
      prev.timestamp < current.timestamp ? prev : current
    );
    return `El botón presionado primero fue el Botón ${firstClick.buttonId}, a las ${firstClick.timestamp.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
    })}`;
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {page <= 8 ? (
        <div className="flex flex-col items-center">
          <h1 className="text-xl mb-4">Página {page}</h1>
          <button
            className="bg-red-600 w-72 h-72 rounded-full m-5 border-4"
            onClick={() => handleClick(page)}
          >
            Botón {page}
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded mt-4"
            onClick={() => goToPage(page + 1)}
          >
            Siguiente página
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-xl mb-4">Página 9</h1>
          <p className="mb-4">{getFirstClick()}</p>
          <button
            className="bg-blue-500 px-4 py-2 rounded"
            onClick={() => goToPage(1)}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}
