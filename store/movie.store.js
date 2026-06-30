import { useState } from 'react'
import { create } from 'zustand'


// const [movieObject, setMovieObject] = useState(null)

// setMovieObject(data)



const useMovieStore = create((set)=>(
    {
        movieObject :null,
        setMovieObject : (data)=> set({
            movieObject: data

        })
    }
))

export default useMovieStore;