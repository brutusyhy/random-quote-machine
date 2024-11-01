export default function tweetQuote({text, author}: {text: string; author: string}) {
    return (<a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text+"\n"+author)}`}>
        Tweet this quote
    </a>);
}