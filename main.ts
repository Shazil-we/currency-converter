import inquirer from "inquirer";
let currency_array = ["PKR" , "USD" , "INR" , "GBP" , "SAR" , "AUD" , "CAD" , 'YEN', 'EURO']
let i = 0
while (i==0)
{
  let outer = await inquirer.prompt([
    {
      type: 'list',
      name: 'currency1',
      message: 'Select the first currency:',
      choices: currency_array
    }
  ])
  let revised_list = currency_array.filter(item => !outer.currency1.includes(item))
  let inner = await inquirer.prompt([
    {
      type: 'list',
      name: 'currency2',
      message: 'Select the second currency:',
      choices: revised_list
    },
    {
      type: 'number',
      name: 'currency1_amount',
      message: 'Enter the amount of first currency ',
    }
  ])
  function conversions(converting:string , converted:string , amount:number)
  {
    switch(converting)
    {
      case 'PKR':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is ${amount*0.0036}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into  ${converted} is  ${amount*0.30}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${amount*0.0028}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.013}`)
            break;
          case 'AUD': 
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0053}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0048}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.51}`)
            break;
          case 'EURO':  
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0033}`)
            break;
        }
      break;
      case 'USD':
        switch(converted)
        {
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${amount*279.72}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*83.14}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.79}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*3.75}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.49}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.34}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*142.89}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.92}`)
            break;
        }
      break;
      case 'INR':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0012}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*3.36}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0095}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.045}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.018}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0048}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.72}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.011}`)
            break;
        }
      break;
      case 'GBP':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.26}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*105.14}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*353.72}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*4.74}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.89}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.69}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*180.70}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.16}`)
            break;
        }
      break;
      case 'SAR':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.27}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*22.16}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.21}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*74.57}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.40}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.36}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*38.08}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.24}`)
            break;
        }
      break;
      case 'AUD':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.67}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*55.73}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.53}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*2.51}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*187.50}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.90}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*95.76}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.61}`)
            break;
        }
      break;
      case 'CAD':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.75}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*62.06}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.59}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*2.80}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.11}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*208.83}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*106.65}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.68}`)
            break;
        }
      break;
      case 'YEN':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0070}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.58}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0055}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.026}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.010}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0094}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.96}`)
            break;
          case 'EURO':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.0064}`)
            break;
        }
      break;
      case 'EURO':
        switch(converted)
        {
          case 'USD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.09}`)
            break;
          case 'INR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*90.84}`)
            break;
          case 'GBP':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*0.86}`)
            break;
          case 'SAR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*4.10}`)
            break;
          case 'AUD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.63}`)
            break;
          case 'CAD':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*1.46}`)
            break;
          case 'YEN':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*156.07}`)
            break;
          case 'PKR':
            console.log(`${converting} ${amount} converted into ${converted} is  ${ amount*305.5}`)
            break;
        }
      break;
    }
  }
  let answer = conversions(outer.currency1 , inner.currency2 , inner.currency1_amount)
  let confirming = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'yesORno',
      message: "Do you want to continue?"
    }
  ])
  if(confirming.yesORno == true)
  {
    continue;
  }else {
    console.log("Ending Program......")
    i++
  }  
}
