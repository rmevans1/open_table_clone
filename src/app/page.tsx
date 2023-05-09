import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import {Cuisine, Location, PRICE, PrismaClient} from "@prisma/client";

export interface RestaurantCardType {
    id: number;
    name: string;
    main_image: string;
    slug: string;
    cuisine: Cuisine;
    location: Location;
    price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
    const restaurants = await prisma.restaurant.findMany({
        select: {
            id: true,
            name: true,
            main_image: true,
            cuisine: true,
            location: true,
            slug: true,
            price: true,
        }
    });

    return restaurants
}


export const metadata = {
    title: 'Home | OpenTable',
    description: 'Generated by create next app',
}

const inter = Inter({subsets: ['latin']})

export default async function Home() {
    const restaurants = await fetchRestaurants();

    console.log({restaurants})
  return (
      <>
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
              {restaurants.map((restaurant) => (
                  <RestaurantCard restaurant={restaurant}/>
              ))}

          </div>
        </main>
      </>
  )
}
