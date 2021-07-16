// Create a random quote genarator app

function randomQuote(){
    var randomNumber = Math.floor(Math.random() * 5  + 1 )
    console.log(randomNumber)
    // if(randomNumber == 1){
    //     console.log("Life Is Beautiful , But Akhirah is the best!")
    // }else if(randomNumber == 2){
    //     console.log("Never Stop Learning")
    // }else if(randomNumber == 3){
    //     console.log("Take the first one!")
    // }else if(randomNumber == 4){
    //     console.log("Anger can\'t give man anything")
    // }else if(randomNumber == 5){
    //     console.log("Allah Is Most Powerful & Merciful")
    // }else {
    //     console.log("can't found anything")
    // }
    switch(randomNumber){
        case 1:
            console.log("Allah is The Most Powerful")
                break;
        case 2:
            console.log("Hazrat Muhammad \(sm\) is the messenger of Allah")
                break;
        case 3:
            console.log("Believe in YourSelf ")
                break;
        case 4:
            console.log("Islam is the best Religion")
                break;
        case 5:
            console.log("Don\'t lose hope!")
                break;
        default:
            console.log("Nothing Found Man!")

    }
}
randomQuote()