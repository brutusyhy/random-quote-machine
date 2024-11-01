interface singleQuote {
    text: string;
    author: string;
}

const API = "https://api.quotable.io/quotes/random"
export default async function fetchQuote(): Promise<singleQuote> {
    const response = await fetch(API);
    if(response.ok) {
        console.log("Successfully fetched quote");
        const json = await response.json();
        console.log(json[0]);
        return {
            text: json[0].content,
            author: json[0].author,
        };
    }
    console.log("Unable to fetch quote")
    throw new Error(response.statusText);
}