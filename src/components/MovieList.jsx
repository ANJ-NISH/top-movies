import React from 'react'

export const MovieList = (props) => {

    const movies=props.movies;

  return (
    <>
    <div style={{width: '100%', margin: 'auto',}}>
        <table style={{width: '70%', margin: 'auto', border: '1px solid gray'}}>

            <tbody>
            <tr style={{fontWeight: 'bold', backgroundColor: '#dddddd'}}>
                <td>Title</td>
                <td>Genre</td>
                <td>Year</td>
            </tr>

            {movies.map((movie, index)=> {return(
                <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                </tr>
            )})}
            </tbody>
        </table>
    </div>
    </>
  )
}
