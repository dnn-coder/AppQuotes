import React, { useState }from 'react';
import Quote from './components/Quote'


const initialQuote = {
  quote: "Life isn’t about getting and having, it’s about giving and being.",
  author: "Kevin Kruse"
}


function App() {

  const [quote, setQuote] = useState(initialQuote);
  return (
    <div className="app">
      <img src="" alt=""/>
      <button>Next Quote</button>
      <Quote quote={quote}/>
    </div>
  );
}

export default App;
