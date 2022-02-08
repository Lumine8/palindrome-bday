var date = document.querySelector("#date")
var output = document.querySelector("#output")
var button = document.querySelector("#btn")

button.addEventListener("click", ispalindrome)

function ispalindrome(){
    var arrayValue1 = date.value

    var arrayValue = ""
    for(var i = 0; i < arrayValue1.length; i++){
        if(i >= 0 && i<=1){
            continue;
        }
        else{
            arrayValue+=arrayValue1[i].toString();
        }
    }

    var arrayValue2 = arrayValue.split('')
    var reverseArrayValue = arrayValue2.reverse();
    var reverseString = reverseArrayValue.join('');
    if (arrayValue==reverseString){
        output.innerText = "Your birthday is a palindrome"
    }
    else{
        output.innerText = "Your birthday is not a palindrome"
    }
}
