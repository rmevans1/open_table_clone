import Header from "@/app/reserve/components/Header";
import Form from "@/app/reserve/components/Form";
import Head from "next/head";


export default function ReserveRestaurant() {
    return (
        <>
            <Head>
                <title>Make a reservation | Test Restaurant | OpenTable</title>
            </Head>
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    <Header/>
                    <Form/>
                </div>
            </div>
        </>
    )
}