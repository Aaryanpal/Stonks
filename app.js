var intialPrice = document.querySelector('#initial-Price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitButton = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#outputbox');

function profitandloss(intial,quantity,current)
{
    if(intial>current)
    {
        var loss=(intial-current)*quantity;
        var lossPercentage = (loss/intial)*100;
      showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    }
    else if(currentPrice>intialPrice)
    {
        var profit = (current - intial) * quantity;
        var profitPercentage = (profit/intial)*100;
      showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);

    }
    else{
        showOutput(`No pain no gain no gain no pain`);
    }
}
submitButton.addEventListener('click', submitHandler);

function submitHandler()
{
    var ip = Number(intialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    profitandloss(ip,qty,curr);
}
function showOutput(message)
{
    outputBox.innerHTML=message
}