import Header from "@/app/restaurant/components/Header";

export default function RestaurantLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
            <Header/>
            {/* DESCRIPTION PORTION */}
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
            {/* DESCRIPTION PORTION */}
        </>
    )
}