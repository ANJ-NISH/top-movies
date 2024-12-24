import React from 'react'

export const GenreFilter = ({genres}) => {

    const btnclick=({genre})=>
    {
       console.log(`${genre} genre has been selected for filtering`);
    }


  return (
    <div style={{width: '70%', margin: 'auto', backgroundColor: '#eeeeee', marginBottom: '30px', display: 'flex', flexDirection: 'column'}}>

     <h2 style={{fontWeight: 'bold', fontFamily: 'consolas', marginLeft: '15px'}}>Filter By Genre</h2>   

     <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginBottom: '20px',}}>
        
        {genres.map((genre,index)=> {return(<button className='btns' key={index} onClick={()=>btnclick({genre})} style={{border: 'none',borderRadius: '4px',  fontSize: '17px', padding: '5px'}}>{genre}</button>)})}
     </div>
    </div>
  )
}
