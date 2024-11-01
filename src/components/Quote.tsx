
export default function Quote({text, author}: {text: string; author: string}) {
    return (
        <div>
            <p id="text">{text}</p>
            <p id="author">{author}</p>
        </div>
    )
}