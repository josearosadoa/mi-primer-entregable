import React from 'react';

const ButtonQuote = ({changedQuotes,colors, randomColor}) => {
    return (
        
        <button style={{background: colors[randomColor]}} onClick={changedQuotes} className='button'> <i class="fa-solid fa-angle-right"></i> </button>
    
        
    );
};

export default ButtonQuote;