import Header from "@/app/restaurant/components/Header";
import RestaurantNav from "@/app/restaurant/components/RestaurantNav";
import Title from "@/app/restaurant/components/Title";
import Rating from "@/app/restaurant/components/Rating";
import Description from "@/app/restaurant/components/Description";
import Images from "@/app/restaurant/components/Images";
import Reviews from "@/app/restaurant/components/Reviews";
import Reservations from "@/app/restaurant/components/Reservations";
import Head from "next/head";

export default function RestaurantDetails() {
    return (
        <>
            <Head>
                <title>Test Restaurant | OpenTable</title>
            </Head>
            <Header/>
            {/* DESCRIPTION PORTION */}
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
            </div>
            {/* DESCRIPTION PORTION */}
        </>
    )
}