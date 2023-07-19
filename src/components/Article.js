import React from "react";

function Article({ title, date = "January 1, 1970", preview, readingTime }) {
// const defaultDate = "January 1, 1970"

const computeReadingSymbols = (readingTime) => {
    let symbols = "";
    if (readingTime < 30) {
        let coffeeCups = Math.ceil(readingTime / 5);
        symbols = "☕️".repeat(coffeeCups);
    } else {
        let bentoBoxes = Math.ceil(readingTime / 10);
        symbols = "🍱".repeat(bentoBoxes);
    }
    return symbols;
};
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{computeReadingSymbols(readingTime)} {readingTime} min read</p>
            <p>{preview}</p>
        </article>
    )
}

export default Article;