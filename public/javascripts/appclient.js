// Filename: appclient.js
// Student: Mohamed Assem
// StudentId: 301163010
// Date: Jun 25, 2022

const { tournamentList } = require("../../controllers/tournament");


console.log('app script is working.');

if(getTitle == "Tournaments List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}


if(getTitle == "Add a New Tournament" || getTitle == "Edit Tournament" ){
    //let btnAddSemiplayer1 = document.querySelector('button[name=btnFirstWinner]');
    //let valueSemiplayer1 = document.querySelector('select[name=winner1]');
    // let btnAddSemiplayer2 = document.querySelector('button[name=btnSecondWinner]');
    // let valueSemiplayer2 = document.querySelector('select[name=winner2]');
    // let btnAddSemiplayer3 = document.querySelector('button[name=btnThirdWinner]');
    // let valueSemiplayer3 = document.querySelector('select[name=winner3]');
    // let btnAddSemiplayer4 = document.querySelector('button[name=btnFourthWinner]');
    // let valueSemiplayer4 = document.querySelector('select[name=winner4]');
    const selectSemi1Player1 = document.getElementByName('winnersf1');
    const match1WinnerSelect = document.getElementByName('winner1');
    match1WinnerSelect.addEventListener('change', onChangeWinner1);
 } 
 function onChangeWinner1(){
    const selectSemi1Player1 = document.getElementByName('winnersf1');
    const match1WinnerSelect = document.getElementByName('winner1');
        let optionSemiPlayer1 = document.createElement('option');
        optionSemiPlayer1.value = match1WinnerSelect.value;
        optionSemiPlayer1.text = match1WinnerSelect.text;
        selectSemi1Player1.add(optionSemiPlayer1); 
    }

    // let selectSemi1Player1 = document.querySelector('select[name=winnersf1]');
    // btnAddSemiplayer1.addEventListener('click', () =>{
    //     let optionSemiPlayer1 = document.createElement('option');
    //     optionSemiPlayer1.value = valueSemiplayer1.value;
    //     optionSemiPlayer1.text = valueSemiplayer1.value;
    //     selectSemi1Player1.add(optionSemiPlayer1); 
    // })


    //const 
//     const submitButton = document.querySelector('button[type=submit]');

//     submitButton.addEventListener('click', onClick);
// }
// function onClick(){
//     var semip1 = document.getElementById("semi1Player1TextField");
//     var semip2 = document.getElementById("semi1Player2TextField");
//     var semip3 = document.getElementById("semi2Player1TextField");
//     var semip4 = document.getElementById("semi2Player2TextField");
//     var finalp1 = document.getElementById("finalPlayer1TextField");
//     var finalp2 = document.getElementById("finalplayer2TextField");
//     if(semip1.value !== null && semip2 !== null &&
//     semip3.value !== null &&
//     semip4.value !== null &&
//     finalp1.value !== null &&
//     finalp2.value !== null)
//     {
//         document.querySelector('select[name=status]').value = 'Complete';
//     }else{
//         document.querySelector('select[name=status]').value = 'In progress';
//     }
// }
    // if(document.getElementById("radioStatusComplete").checked = true)
    // {
    // document.getElementById("semi1Player1TextField").required = true;
    // document.getElementById("semi1Player2TextField").required = true;
    // document.getElementById("semi2Player1TextField").required = true;
    // document.getElementById("semi2Player2TextField").required = true;
    // document.getElementById("finalPlayer1TextField").required = true;
    // document.getElementById("finalplayer2TextField").required = true;
    // }else
    // {
    // document.getElementById("semi1Player1TextField").required = false;
    // document.getElementById("semi1Player2TextField").required = false;
    // document.getElementById("semi2Player1TextField").required = false;
    // document.getElementById("semi2Player2TextField").required = false;
    // document.getElementById("finalPlayer1TextField").required = false;
    // document.getElementById("finalplayer2TextField").required = false;
    // }
    // const inputFields = document.querySelectorAll(".form-control");
    // for (let i = 0; i < inputFields.length; i++){
    //     if(inputFields[i].value === null){

    //     }
    // }
    
    // function sendRadioValue() {
    //     var status = document.getElementsByName("flexRadioDefault");
    //     for(i =0; i < status.length; i++){
    //         if(status[i].checked){
    //              status[i].value == <%= tournament.status %>;
    //         }
    //     }
//}

    
