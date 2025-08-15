
var usersList = [];


function addUser() {
    let id = Number(prompt("Enter your id"));
    let fname = prompt("Enter your name");
     let balance = Number(prompt("Enter your balance"));

    
    if (usersList.some(ele => ele.id === id)) {
        console.log(" ID already exists, please use another ID.");
        return;
    }

    let obj = { id, fname, balance };
    usersList.push(obj);
    console.log(" User added successfully!");
    console.log("User added:", obj);
    console.log("All users now:",[...usersList] );

    //

}

function deleteUserById() {
    let id = Number(prompt("Enter your id to delete user"));
    let userInd = usersList.findIndex(ele => ele.id === id);

    if (userInd === -1) {
        console.log(" User not found.");
        return;
    }

    usersList.splice(userInd, 1);
    console.log(" User deleted successfully!");
    console.log([...usersList]); 

}
function editUserBalanceById(){
  

    var id = Number(prompt("enter your id to edit your balance"));
    var userInd = usersList.findIndex(ele => ele.id === id);
    
    
    var newbal=Number(prompt("enter your new balance"));
    usersList[userInd].balance=newbal;
    console.log([...usersList]); 


}


addUser();
addUser();
deleteUserById();
editUserBalanceById();


