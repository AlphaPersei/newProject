function generateRandomNumber(num){
    //random number 
    return Math.floor(Math.random() * num)
}

const monthlyMessage ={
    messagecategory: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    messageMonthly: ['transformative','adventurous', 'resilient', 'growing', 'supportive', 'team player', 'balanced', 'mature', 'confident', 'energetic', 'curious', 'creative', 'optimistic'],

    messageMotovation: ['Motivate someone', 'Car Pay Deum', 'smile', 'enjoy life']
}

//Store messages in an Array
let personalMessage = []

for( let message in monthlyMessage) {
    let motiveSay = generateRandomNumber(monthlyMessage[message].length)
switch(message){
    case 'messagecategory':
        personalMessage.push(`For the Month of "${monthlyMessage[message][motiveSay]}".`)
        break
        case 'messageMonthly':
            personalMessage.push(`You're Qoute is "${monthlyMessage[message][motiveSay]}".`)
            break
            case 'messageMotovation':
            personalMessage.push(`Try to "${monthlyMessage[message][motiveSay]}".`) 
            break
            default:
            personalMessage.push('There is not enough info please stand by or try again.')    
}

}
function bringTogether(sayings) {
   
    const together = personalMessage.join('\n')
    console.log(together)
  }
  
  bringTogether(personalMessage);
  console.log('second branch add')
  console.log('branch third third thord')
  what