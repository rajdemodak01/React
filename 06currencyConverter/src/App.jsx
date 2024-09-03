import { useState } from 'react'
import {InputBox} from './components/input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount]=useState()
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState()

  const currencyInfo=useCurrencyInfo(from)

  //getting the keys of the data
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  const BackgroundImage='./src/assets/backgroundImage.jpg'
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=>setAmount(amount)}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            
                            currencyOptions={options}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            // onAmountChange={convert}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            currencyOptions={options}
                            selectCurrency={to}
                            amountDisable//by default in this way amountDisable is set to true
                            //same as amountDisable=true
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App



