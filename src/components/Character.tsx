import Link from "next/link"

export default function Character({
    title,
}: {
    title: {
        TitleId: number
        TitleName: string
    }
}) {
    return (
        <Link href={`/characters/${title.TitleId}`} className=" border ">
            <div className=" w-10 h-10 md:w-12 md:h-12 flex justify-center items-center">
                <span>{title.TitleName}</span>
            </div>
        </Link>
    )
}
