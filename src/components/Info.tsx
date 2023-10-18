export default function Info({
    result,
}: {
    result: {
        TitleId: number
        ProverbId: number
        ProverbName: string
        ProverbDesp: string
    }
}) {
    return (
        <>
            <p>{result.ProverbDesp}</p>
        </>
    )
}
