import {useEffect, useState} from "react";
import Quote from "./Quote.tsx";
import NewQuoteBtn from "./NewQuoteBtn.tsx";
import TweetQuote from "./TweetQuote.tsx";
import fetchQuote from "../services/quoteService.ts"


export default function QuoteBox() {
    const [quote, setQuote] = useState({
        text: "",
        author: "",
    });
    async function updateQuote(){
        const quote = await fetchQuote();
        setQuote(quote);
        console.log("Quote Updated")
    }
    useEffect(() => {
        updateQuote();
    }, []);
    return (
        <div id = "quote-box">
            <Quote text={quote.text} author={quote.author} />
            <NewQuoteBtn newQuoteHandle={() => updateQuote()}/>
            <TweetQuote text={quote.text} author={quote.author}/>
        </div>
    );
}