

export default function NewQuoteBtn({newQuoteHandle} : {newQuoteHandle: () => void}) {
    return (
        <button id="new-quote" onClick={() => newQuoteHandle()}>Get new quote!</button>
    )
}