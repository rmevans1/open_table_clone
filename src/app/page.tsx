import {Inter} from 'next/font/google'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import Head from "next/head";


const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
      <>
        <Head>
          <title>OpenTable</title>
        </Head>
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </>
  )
}
