import React,{useState,useEffect}from 'react'
import axios from 'axios'
import './Coins.css'



const Coins = () => {
    const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])
    
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map(coins => {
                    return (
                        
                        <div className='coin-row'>
           
                        <div className='img-symbol'>
                            <img src={coins.image} alt='' />
                            <p>{coins.symbol.toUpperCase()}</p>
                        </div>
                        <p>${coins.current_price.toLocaleString()}</p>
                        <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                        <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>
                        <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
                    </div>
                  

                    )
                })}

            </div>
        </div>
    )
}

export default Coins