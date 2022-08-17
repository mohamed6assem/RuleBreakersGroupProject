// Filename: appclient.js
// Student: Mohamed Assem
// StudentId: 301163010
// Date: Jun 25, 2022

const { tournamentList } = require("../../controllers/tournaments");

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


// if(getTitle == "Add a New Tournament" || getTitle == "Edit Tournament" )
// {
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

    
