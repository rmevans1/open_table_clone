import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const fetchCities = async () => {
    const cities = prisma.location.findMany({
        select: {
            id: true,
            name: true,
        }
    });

    return cities;
}

const fetchCuisines = async () => {
    const cuisines = prisma.cuisine.findMany({
        select: {
            id: true,
            name: true,
        }
    });

    return cuisines;
}
export default async function SideBar() {
    const cities = await fetchCities();
    const cuisines = await fetchCuisines();
    return (
        <div className="w-1/5">
            <div className="border-b pb-4">
                <h1 className="mb-2">Region</h1>
                {cities.map((city => (
                    <p className="font-light text-reg capitalize" key={city.id}>{city.name}</p>
                )))}
            </div>
            <div className="border-b pb-4 mt-3">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map((cuisine => (
                    <p className="font-light text-reg capitalize" key={cuisine.id}>{cuisine.name}</p>
                )))}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    <button className="border w-full text-reg font-light rounded-l p-2">
                        $
                    </button>
                    <button
                        className="border-r border-t border-b w-full text-reg font-light p-2"
                    >
                        $$
                    </button>
                    <button
                        className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
                    >
                        $$$
                    </button>
                </div>
            </div>
        </div>
    )
}