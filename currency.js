

//const apiUrl =`https://v6.exchangerate-api.com/v6/3741b0546cf333636f3aa937/latest/USD`

async function converte(){
  const fromCurrency = document.querySelector('.from-currency').value
const toCurrency = document.querySelector('.to-currency').value
  const amount = document.querySelector('.input-amount').value
  const para = document.querySelector('.paragraph')

  const res = await fetch(`https://v6.exchangerate-api.com/v6/3741b0546cf333636f3aa937/latest/${fromCurrency}`
  )
  .then(res => res.json())
  .then(data => {
    console.log(data)
  
    const exchangeRate = data.conversion_rates[toCurrency];
    
    const rates = amount * exchangeRate;
    para.innerText = `${amount} ${fromCurrency} = ${rates.toFixed(2)} ${toCurrency}`
  })
  .catch(error => {
    console.error('wrong exchange rate')
  })


}
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
  converte()
})

