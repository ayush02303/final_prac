import React, { useEffect, useState } from 'react'
import axios from "axios"


const Movie = () => {

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=c9abc99b"
    const [data , setData] = useState([])

   
    const getMovieData = async ()=>{
        try{

         const res = await axios.get(API)
        //  console.log(res)
         setData(res.data)
        }
        catch(err){
            console.log(err)
        }

    }

    useEffect( ()=>{
        getMovieData()
    } , [])
  return (
    <div>
      <h2>Hii from movie</h2>

        {data && (
        <div>
          <h3>{data.Title}</h3>
          <p><strong>Year:</strong> {data.Year}</p>
          <p><strong>Genre:</strong> {data.Genre}</p>
          <p><strong>Plot:</strong> {data.Plot}</p>
          <img src={data.Poster} alt={data.Title} width="200" />
        </div>
      )}
    </div>
  )
}

export default Movie
