import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" h-screen flex justify-center items-center">
            <div>
                <h1 className=" text-2xl mb-2 font-semibold">
                    404 || Page Not Found
                </h1>
                <p className=" text-base text-center">
                    Go back
                    <Link href={"/"} className=" ms-2 underline">
                        Home
                    </Link>
                </p>
            </div>
        </div>
    )
}
