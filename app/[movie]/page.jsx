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

export default async function MovieDetail({ params }) {

    const { movie } = params // this is  amazes me
    // but when I actually remember how params work, I am now understanding it better
    // we are destructuring movie from the params
    const imagePath = "https://image.tmdb.org/t/p/w1280/"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    // { next: { revalidate: 60}} // since cache is by default, we can refresh the page every 60 seconds, we re-fetch movies
    )

    // DevEd says, we might not work with fetch API, you cannot re-fetch {revalidate} here
    // const data = await prisma.posts.findMany()
    // // console.log(params)
    
    const res = await data.json()


    return <div> 
        <div>
        <h1 className="text-2xl">{res.title}</h1>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>{res.runtime} minutes</h2>
        <h2 className="bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md"></h2>
      
        </div>
    </div>
}