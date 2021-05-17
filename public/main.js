function main() {
  const fullName = ['Brady', 'Grapentine']
  const numberOfCupsOfCoffee = 4
  console.log(fullName[0], fullName[1], numberOfCupsOfCoffee)

  const person = {
    fullName: `${fullName[0]} ${fullName[1]}`,
    luckyNumber: 3,
    favoriteMovies: ['Reservoir Dogs', 'The Hateful Eight', 'Django Unchained'],
  }

  let userName = window.prompt('Tell me your name: ')
  console.log(`Hello ${userName}!`)

  let userNum1 = window.prompt('Enter a number: ')
  let userNum2 = window.prompt('Enter a smaller number: ')
  let firstOperand = parseFloat(userNum1)
  let secondOperand = parseFloat(userNum2)

  let sum = firstOperand + secondOperand
  let difference = firstOperand - secondOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand

  console.log(`If you add ${firstOperand} and ${secondOperand} you get ${sum}`)
  console.log(
    `If you subtract  ${secondOperand} from ${firstOperand} you get ${difference}`
  )
  console.log(
    `If you multiply ${firstOperand} and ${secondOperand} you get ${product}`
  )
  console.log(
    `If you divide ${firstOperand} by ${secondOperand} you get ${quotient}`
  )
  console.log(
    `The remainder after ${firstOperand} is divided by ${secondOperand} is ${remainder}`
  )

  let numbers = [
    29982,
    11746,
    37486,
    14456,
    28329,
    33678,
    31048,
    28215,
    21805,
    46073,
    15348,
    22945,
    18708,
    40220,
    14473,
    11745,
    36285,
    27414,
    33560,
    23343,
    23658,
    42389,
    20530,
    43580,
    35234,
    45962,
    17463,
    45781,
    38140,
    41533,
    23903,
    18486,
    41224,
    21151,
    34147,
    47544,
    30164,
    35006,
    31494,
    45769,
    49325,
    41441,
    41352,
    25282,
    31494,
    41679,
    43832,
    18200,
    16553,
    46546,
    33926,
    19201,
    18361,
    12395,
    24884,
    10580,
    40903,
    33150,
    45213,
    44454,
    18840,
    48211,
    20801,
    33667,
    27215,
    18017,
    26559,
    21616,
    30935,
    20302,
    38313,
    25288,
    20482,
    11202,
    26096,
    27362,
    39885,
    33583,
    29150,
    16045,
    19515,
    44398,
    18560,
    48169,
    39467,
    34882,
    44589,
    17102,
    23501,
    26432,
    18730,
    20804,
    39273,
    32093,
    31270,
    39157,
    38588,
    38993,
    38721,
    34534,
  ]

  let smallest = numbers[0];
  let arraySum = 0;
  let largest = numbers[0];
  for (var i = 0; i < numbers.length; i++){
    arraySum += numbers[i]
    if (numbers[i] >= largest){
      largest = numbers[i]
    }
    if (numbers[i <= smallest]){
      smallest = numbers[i]
    }
  }
  let average = arraySum/numbers.length;

  let stats = {
    smallest = smallest,
    largest = largest,
    sum = arraySum,
    average = average,
  }

  // Adventure Mode
  let sumOfOdd = 0
  let countOfEven = 0
  for (var i = 0; i < numbers.length; i++){
    arraySum += numbers[i]
    if (numbers[i] % 2 === 1){
      sumOfOdd += numbers[i]    
    } else {
      countOfEven += 1
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
