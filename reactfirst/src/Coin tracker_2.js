import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [usd,setUsd] =useState(0);
  const onChange= (e) => {
    setUsd(e.target.value);
    console.log(usd);
  }
  useEffect( ()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})` }</h1>
      {loading ? <strong>Loading...</strong> :
      (<div>
        <input 
        type="number" 
        placeholder="How mush do you have" 
        value={usd}
        onChange={onChange}></input>
        <br></br>
        {(usd !== 0) ? (`You have ${usd}$`) : ""}
        <select>
          {coins.map((coin) => <option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>
      </div>
      )}
      
    </div>
  );
}

export default App;

// { <div>
//       <h1>The Coins!{coins.length}</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (<div><input
//         value={dollar}
//         onChange={onChange}
//         type='number'
//         placeholder='How much do you have'
//       ></input>
//      <div>{dollar}</div> 
//         <select>
//           {coins.map((coin) => (
//             <option>
//               {coin.name}({coin.symbol}):${dollar / coin.quotes.USD.price}USD
//             </option>
//           ))}
//         </select>
//         </div>
//       )}
      
//     </div> }