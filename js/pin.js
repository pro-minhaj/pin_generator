function generatePin(){
    const generatePin = Math.round(Math.random() * 10000);
    return generatePin;
}

function getPin(){
    const getPin = generatePin();
    const setPin = getPin + '';
    if(setPin.length === 4){
        return setPin;
    }
    else{
        getPin();
    }
}

function pinFiled(elementId){
    const displayPin = document.getElementById(elementId);
    const displayPinValue = displayPin.value;
    return displayPinValue;
}

document.getElementById('generate-pin').addEventListener('click', function(){

    const displayPin = document.getElementById('display-pin');
    displayPin.value = getPin();

});

document.getElementById('calculetor').addEventListener('click', function(event){
    const calculetorValue = event.target.innerText;
    const typePin = document.getElementById('type-pin');
    const typePinValue = typePin.value;
    const calculetorValueString = typePinValue + calculetorValue;

    if(isNaN(calculetorValue)){
        if(calculetorValue === 'C'){
            typePin.value = '';
        }
        else if(calculetorValue === '<'){
            const valueSplit = typePinValue.split('');
            valueSplit.pop();
            typePin.value = valueSplit.join('');
        }
    }
    else{
        typePin.value = calculetorValueString;
    }
});

document.getElementById('submit-btn').addEventListener('click', function(){
    const pinFiledValue = pinFiled('display-pin');
    const typePinValue = pinFiled('type-pin');
    const successPin = document.getElementById('notify-success');
    const wrongPin = document.getElementById('notify-wrong');
    const typePin = document.getElementById('type-pin');

    if(typePinValue === ''){
        alert('Enter Type Generate Pin Number');
        return;
    }
    else if(pinFiledValue === typePinValue){
        successPin.style.display = 'block';
        wrongPin.style.display = 'none';
    }
    else{
        wrongPin.style.display = 'block';
        successPin.style.display = 'none';
        typePin.value = '';

        const tryLeft = document.getElementById('try-left');
        const tryLeftString = tryLeft.innerText;
        const tryLeftValue = parseInt(tryLeftString);
        
        if(tryLeftValue <= 0){
            alert('You Are All Ready 3 Times Try Places Try 5 Min');
            tryLeft.innerText = 3;
        }
        else{
            tryLeft.innerText = tryLeftValue - 1;
        }
        
    }
    
});