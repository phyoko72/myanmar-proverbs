import proverbs from "@/data/MyanmarProverbs.json"
import Link from "next/link"
import {notFound} from "next/navigation"
export default function Proverb({
    params: {charId},
}: {
    params: {charId: string}
}) {
    const findChar = proverbs.Tbl_MMProverbsTitle.find(
        (pb) => pb.TitleId === Number(charId)
    )

    if (!findChar) {
        notFound()
    }

    const filteredByChar = proverbs.Tbl_MMProverbs.filter(
        (pb) => pb.TitleId === Number(charId)
    )

    return (
        <>
            <div className=" text-sm mt-8">
                <Link href={"/"} className=" underline">
                    Home
                </Link>
            </div>
            <h1 className=" text-xl my-4">{findChar.TitleName} (စကားပုံ) </h1>

            {filteredByChar.length > 0 ? (
                <ul className="ms-5">
                    {filteredByChar.map((char, index) => (
                        <li key={index} className=" mb-3 list-disc">
                            <Link
                                className=" underline underline-offset-4"
                                href={`/characters/${char.TitleId}/proverbs/${char.ProverbId}`}
                            >
                                {char.ProverbName}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1 className=" text-lg text-center">စကားပုံ မရှိပါ။</h1>
            )}
        </>
    )
}
