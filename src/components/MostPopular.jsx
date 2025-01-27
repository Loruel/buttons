import React, { useState, useEffect } from 'react';

const PeliculasPopulares = () => {
    const [peliculas, setPeliculas] = useState([]);
    const apiKey = 'a7bc9140d9ecd072507c86605ce73d69'; // Reemplaza con tu clave de API

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                setPeliculas(data.results); // Almacena las películas en el estado
            })
            .catch(error => console.error('Error:', error));
    }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

    return (
        <div
            className='p-5'>
            {peliculas.length > 0 && (
                <div
                    className='relative bg-purple-400 rounded-md h-56 flex items-end justify-start'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${peliculas[0].backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    key={peliculas[0].id}>
                    <h2 className='text-white p-3 text-xl font-bold'>
                        {peliculas[0].original_title}
                    </h2>
                </div>

            )}
        </div>
    );
};

export default PeliculasPopulares;
