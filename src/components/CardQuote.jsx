import quotes from '../quotes.json'
import ButtonQuote from './ButtonQuote';


const CardQuote = ({index, randomIndex , changedQuotes, colors, randomColor} ) => {
   


    return(
        <div className='QuoteBox' style={{color: colors[randomColor]}}  >
        <h3> <i class="fa-solid fa-quote-left"></i> {quotes[index].quote}</h3>
        <p>{quotes[index].author}</p>
        < ButtonQuote  changedQuotes={changedQuotes} colors={colors} randomColor={randomColor} />
    </div>
    )
}

export default CardQuote; 