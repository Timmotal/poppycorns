import Image from "next/image";

// export const revalidate = 12; //says, he kind of found this buggy and didn't work all of the time

// we want to pre-render the pages, serve them static
export  async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json()

  return res.results.map((movie) => ({
    movie: toString(movie.id),// so essentially we are going over each movie, get their ID
    // then go over each of them and render them out

    // so we are mapping the IDs to our URLs
    
    // these are benefits of pre-rendering unless we have revalidate somewhere
  }))
}


    
 


