import './globals.css'
import { Montserrat } from 'next/font/google'
import { Poppins } from 'next/font/google'

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-montserrat', //this is how we hook it up with tailwind
})

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-poppins', //this is how we hook it up with tailwind
})


export const metadata = {
  
}


