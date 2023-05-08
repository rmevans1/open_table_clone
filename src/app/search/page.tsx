import Header from "@/app/search/components/Header";
import SideBar from "@/app/search/components/SideBar";
import RestaurantCard from "@/app/search/components/RestaurantCard";
import Head from "next/head";

export default function Search() {
    return (
        <>
            <Head>
                <title>Search Results | OpenTable</title>
            </Head>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SideBar/>
                <div className="w-5/6">
                    <RestaurantCard/>
                </div>
            </div>
        </>
    )
}