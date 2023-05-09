import Header from "@/app/restaurant/components/Header";
import RestaurantNav from "@/app/restaurant/components/RestaurantNav";
import Title from "@/app/restaurant/components/Title";
import Rating from "@/app/restaurant/components/Rating";
import Description from "@/app/restaurant/components/Description";
import Images from "@/app/restaurant/components/Images";
import Reviews from "@/app/restaurant/components/Reviews";
import Reservations from "@/app/restaurant/components/Reservations";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
    id: number;
    name: string
    images: string[];
    description: string;
    slug:string;
}
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true
        }
    })

    if(!restaurant) {
        throw new Error();
    }

    return restaurant;
}

export const metadata = {
    title: 'Test Restaurant | OpenTable',
    description: 'Generated by create next app',
}

export default async function RestaurantDetails({params}: {params: {slug: string}}) {
    const restaurant = await fetchRestaurantBySlug(params.slug);
    console.log(restaurant);
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNav/>
                <Title/>
                <Rating/>
                <Description/>
                <Images/>
                <Reviews/>
            </div>
            <div className="w-[27%] relative text-reg">
                <Reservations/>
            </div>
        </>
    )
}