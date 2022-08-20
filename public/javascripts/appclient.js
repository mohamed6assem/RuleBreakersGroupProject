// Filename: appclient.js
// Student: Mohamed Assem
// StudentId: 301163010
// Date: Jun 25, 2022

//let { tournamentList } = require("../../controllers/tournament");


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
    let confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    let password = document.querySelector('input[name=password]');
    let confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}


if(getTitle == "Add a New Tournament" || getTitle == "Edit Tournament" ){
    let inputPlayer1 = document.querySelector('input[name=player1]');
    let inputPlayer2 = document.querySelector('input[name=player2]');
    let match1WinnerSelect = document.querySelector('winner1'); 
    
    let inputPlayer3 = document.querySelector('input[name=player3]');
    let inputPlayer4 = document.querySelector('input[name=player4]');
    let match2WinnerSelect = document.querySelector('winner2'); 

    let inputPlayer5 = document.querySelector('input[name=player5]');
    let inputPlayer6 = document.querySelector('input[name=player6]');
    let match3WinnerSelect = document.querySelector('winner3'); 

    let inputPlayer7 = document.querySelector('input[name=player7]');
    let inputPlayer8 = document.querySelector('input[name=player8]');
    let match4WinnerSelect = document.querySelector('winner4'); 

    let semiPlayer1 = document.querySelec

    let selectSemiFinal1Winner = document.querySelector('winnersf1');
    let selectSemiFinal2Winner = document.querySelector('winnersf2');
    let selectFinalWinner = document.querySelector('winnerfinal');

    inputPlayer1.addEventListener('change', () =>{
        let optionPlayer1 = document.querySelector('option[id=match1optn1]');
        optionPlayer1.text = "Player 1: " + inputPlayer1.value;
        optionPlayer1.value = 1;
        match1WinnerSelect.add(optionPlayer1);
    });
    inputPlayer2.addEventListener('change', () =>{
        let optionPlayer2 = document.querySelector('option[id=match1optn2]');
        optionPlayer2.text = "Player 2: " + inputPlayer2.value;
        optionPlayer2.value = 2;
        match1WinnerSelect.add(optionPlayer2);
    });
    inputPlayer3.addEventListener('change', () =>{
        let optionPlayer3 = document.querySelector('option[id=match2optn3]');
        optionPlayer3.text = "Player 3: " + inputPlayer3.value;
        optionPlayer3.value = 3;
        match2WinnerSelect.add(optionPlayer3);
    });
    inputPlayer4.addEventListener('change', () =>{
        let optionPlayer4 = document.querySelector('option[id=match2optn4]');
        optionPlayer4.text = "Player 4: " + inputPlayer4.value;
        optionPlayer4.value = 4;
        match2WinnerSelect.add(optionPlayer4);
    });
    inputPlayer5.addEventListener('change', () =>{
        let optionPlayer5 = document.querySelector('option[id=match3optn5]');
        optionPlayer5.text = "Player 5: " + inputPlayer5.value;
        optionPlayer5.value = 5;
        match3WinnerSelect.add(optionPlayer5);
    });
    inputPlayer6.addEventListener('change', () =>{
        let optionPlayer6 = document.querySelector('option[id=match3optn6]');
        optionPlayer6.text = "Player 6: " + inputPlayer6.value;
        optionPlayer6.value = 6;
        match3WinnerSelect.add(optionPlayer6);
    });
    inputPlayer7.addEventListener('change', () =>{
        let optionPlayer7 = document.querySelector('option[id=match4optn7]');
        optionPlayer7.text = "Player 7: " + inputPlayer7.value;
        optionPlayer7.value = 7;
        match4WinnerSelect.add(optionPlayer7);
    });
    inputPlayer8.addEventListener('change', () =>{
        let optionPlayer8 = document.querySelector('option[id=match4optn8]');
        optionPlayer8.text = "Player 8: " + inputPlayer8.value;
        optionPlayer8.value = 8;
        match4WinnerSelect.add(optionPlayer8);
    });
}//end
    // match1WinnerSelect.addEventListener('change', () =>{
    //     let value = match1WinnerSelect.value;
    //     if (value === '1'){
    //         let option = document.querySelector('optionSF1');
    //         option.disabled = true;
    //         //option.text = "Player 8: " + inputPlayer8.value;
    //         //option.value = 8;
    //         selectSemiFinal1Winner.add(option);
    //     }
    //});

//end
    // match1WinnerSelect.addEventListener('change', () =>{
    //     let option = document.querySelector('optionSF1');
    //     option.text = "Player " + match1WinnerSelect.value;
    //     option.value = match1WinnerSelect.value;
    //     selectSemiFinal1Winner.add(option);
    // });
    //}

    //let btnAddSemiplayer1 = document.querySelector('button[name=btnFirstWinner]');
    //let valueSemiplayer1 = document.querySelector('select[name=winner1]');
    // let btnAddSemiplayer2 = document.querySelector('button[name=btnSecondWinner]');
    // let valueSemiplayer2 = document.querySelector('select[name=winner2]');
    // let btnAddSemiplayer3 = document.querySelector('button[name=btnThirdWinner]');
    // let valueSemiplayer3 = document.querySelector('select[name=winner3]');
    // let btnAddSemiplayer4 = document.querySelector('button[name=btnFourthWinner]');
    // let valueSemiplayer4 = document.querySelector('select[name=winner4]');
//     let selectSemi1Player1 = document.getElementByName('winnersf1');
//     let match1WinnerSelect = document.getElementByName('winner1');
//     match1WinnerSelect.addEventListener('change', onChangeWinner1());
//  } 
//  function onChangeWinner1(){
//     let selectSemi1Player1 = document.getElementByName('winnersf1');
//     let match1WinnerSelect = document.getElementByName('winner1');
//         let optionSemiPlayer1 = document.createElement('option');
//         optionSemiPlayer1.value = match1WinnerSelect.value;
//         optionSemiPlayer1.text = match1WinnerSelect.text;
//         selectSemi1Player1.add(optionSemiPlayer1); 
//     }

    // let selectSemi1Player1 = document.querySelector('select[name=winnersf1]');
    // btnAddSemiplayer1.addEventListener('click', () =>{
    //     let optionSemiPlayer1 = document.createElement('option');
    //     optionSemiPlayer1.value = valueSemiplayer1.value;
    //     optionSemiPlayer1.text = valueSemiplayer1.value;
    //     selectSemi1Player1.add(optionSemiPlayer1); 
    // })


    //let 
//     let submitButton = document.querySelector('button[type=submit]');

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
    // let inputFields = document.querySelectorAll(".form-control");
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

    
