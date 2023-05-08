import Link from "next/link";

export default function RestaurantNav() {
    return (
        <nav className="flex text-reg border-b pb-2">
            <Link href="/restaurant/test-restaurant" className="mr-7"> Overview </Link>
            <Link href="/restaurant/test-restaurant/menu" className="mr-7"> Menu </Link>
        </nav>
    )
}