import proverbs from "@/data/MyanmarProverbs.json"
import {notFound} from "next/navigation"
import Info from "@/components/Info"
import Link from "next/link"
export default function Detail({
    params: {charId, proverb_Id},
}: {
    params: {charId: string; proverb_Id: string}
}) {
    const findChar = proverbs.Tbl_MMProverbsTitle.find(
        (pb) => pb.TitleId === Number(charId)
    )

    if (!findChar) {
        notFound()
    }

    const result = proverbs.Tbl_MMProverbs.find(
        (x) =>
            x.TitleId === Number(charId) && x.ProverbId === Number(proverb_Id)
    )
    if (!result) {
        notFound()
    }
    return (
        <>
            <div className=" text-sm mt-8">
                <Link href={"/"} className=" underline">
                    Home
                </Link>{" "}
                /{" "}
                <Link href={`/characters/${charId}`} className=" underline">
                    Back
                </Link>
            </div>
            <h1 className=" text-xl my-4 font-semibold">
                {result.ProverbName}
            </h1>
            <p className=" text-center my-4">(စကားပုံ)</p>
            <Info result={result} />
        </>
    )
}
