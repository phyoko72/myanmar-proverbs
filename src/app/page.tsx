import proverbs from "@/data/MyanmarProverbs.json"
import Character from "@/components/Character"
export default function Home() {
    return (
        <>
            <div className=" mt-8">
                <h1 className=" text-center text-xl">
                    မိမိကြည့်ရှုလိုသော သက်ဆိုင်ရာ အက္ခရာကိုနှိပ်၍
                    ရှာဖွေဖတ်ရှုနိုင်ပါသည်။
                </h1>
                <div className=" w-11/12 md:w-3/4 m-auto">
                    <h2 className=" text-center my-4 underline underline-offset-4">
                        မြန်မာစကားပုံအက္ခရာစဉ်ဇယား
                    </h2>
                    <div className=" flex flex-wrap gap-1 md:gap-2 justify-center">
                        {proverbs.Tbl_MMProverbsTitle.map((char) => (
                            <Character key={char.TitleId} title={char} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
