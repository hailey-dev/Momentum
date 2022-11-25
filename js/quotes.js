const quotes = [
{
    quotes: "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been",
    author: "Eli cohen",
},
{
    quotes: "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.",
    author: "Simon Sinek",
},
{
    quotes: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
    author: "Brian Tracy",
},
{
    quotes: "Don't let the fear of losing be greater than the excitement of winning.",
    author: "Robert Kiyosaki",
},
{
    quotes: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
},
{
    quotes: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
},
{
    quotes: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    author: "Kenneth J Hutchins",
},
{
    quotes: "It is your determination and persistence that will make you a successful person.",
    author: "Vince Lombardi",
},
{
    quotes: "You can waste your life drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes",
},
{
    quotes: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
    author: "Alex Rodriguez",
}
];

const quote = document.querySelector("#quotes span:first-child");
const auth = document.querySelector("#quotes span:last-child");

function getQuotes(){
    let displaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = displaysQuote.quotes;
    auth.innerText = displaysQuote.author;
}
getQuotes();