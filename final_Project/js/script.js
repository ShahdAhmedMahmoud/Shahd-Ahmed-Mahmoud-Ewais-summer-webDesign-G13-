document.querySelectorAll('.carousel-indicators button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const colors = ['#84a7a9', '#cca786', '#db5847']; 
    document.querySelector('.carousel-inner').style.backgroundColor = colors[index];
  });
});





let nameValidation = (input)=>{
  let inputValue = input.value.trim();
  if(inputValue.length ==0){
    // let p =document.createElement("p");
    handleError( input , 'this field required');
    return false;

  }
  // console.log(inputValue.length);
  else if(inputValue.length < 3) {
    // let p =document.createElement("p");
    // input.nextElementSibling =p;

    // let parentInput = input.parentElement;
    // parentInput.appendChild(p);
    // console.log(input.parentElemet);
    handleError( input , 'please enter at least 3 character');
    return false;
    
  }
  else{
    handleError(input);
    return true;

  }
}

let handleError = (input , msg='') =>{
  let nextElement = input.nextElementSibling;
    nextElement.innerText=msg;  

}


let emailValidation = (input)=>{

  let emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(emailRegex.test(input.value))
   if(input.value.length ==0){
    // let p =document.createElement("p");
    handleError( input , 'this field required');
    return false;

  }
  else if(!emailRegex.test(input.value)){
    handleError(input,"please enter a valid email : Example@email.com");
    return false;
  }
  else{
    handleError(input);
    return true;
  }
  
    
}


let subjectValid = (input) =>{
  if(!input.value){
    handleError(input,'this field required');
    return false;
  }
  else{
    handleError(input)
    return true;
  }
}

let form = document.getElementById('myForm');
let formMessage = document.getElementById('form-message');


form.addEventListener('input',(e)=>{
  // console.log(e);

  if(e.target.id=='userName'){
    nameValidation(e.target);
    

  }
  else if(e.target.id == 'userEmail'){
    emailValidation(e.target);
    

  }
  else if (e.target.id == 'subject'){
    subjectValid(e.target);
  }
  
  
})


form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get input elements
    const userNameInput = document.getElementById('userName');
    const userEmailInput = document.getElementById('userEmail');
    const subjectInput = document.getElementById('subject');

    // Run all validation functions and check if they all return true
    const isNameValid = nameValidation(userNameInput);
    const isEmailValid = emailValidation(userEmailInput);
    const isSubjectValid = subjectValid(subjectInput);

    // If all fields are valid, you can submit the form
    if (isNameValid && isEmailValid && isSubjectValid) {
       formMessage.innerText = 'Form submitted successfully!';
        formMessage.style.color = 'green';
       
    } else {
       formMessage.innerText = 'Please fill out all fields correctly before submitting.';
        formMessage.style.color = 'red';
    }
});

function handleFilter(category) {

    let categories = document.querySelectorAll('.categories')

    categories.forEach((element) => {
        (category == 'All') ? element.classList.remove('d-none') : element.classList.add('d-none')
    })

    if (category != 'All') {
        let categoryItems = document.querySelectorAll(`[data-category=${category}]`)
        // console.log(categoryItems)
        categoryItems.forEach((element) => {
            element.classList.remove('d-none')
        })

    }
}








function handleChangeImg(element) {
  let img = document.getElementById('card-img');
  img.src=element.src;
}






// document.addEventListener('DOMContentLoaded', () => {

    
//     const productLinks = document.querySelectorAll('.product-link');

//     if (productLinks.length > 0) {
//         productLinks.forEach(link => {
//             link.addEventListener('click', (event) => {
//                 event.preventDefault();

//                 const productName = link.getAttribute('data-name');
//                 const productImage = link.getAttribute('data-image');
//                 const productDescription = link.getAttribute('data-description');
//                 const productCategory = link.closest('.categories').getAttribute('data-category');

//                 const url = `details.html?name=${encodeURIComponent(productName)}&image=${encodeURIComponent(productImage)}&category=${encodeURIComponent(productCategory)}&description=${encodeURIComponent(productDescription)}`;
                
//                 window.location.href = url;
//             });
//         });
//     }

    
//     const params = new URLSearchParams(window.location.search);
//     const name = params.get('name');
//     const image = params.get('image');
//     const category = params.get('category');
//     const description = params.get('description');

//     if (name && image) {
//         document.getElementById('product-name').textContent = name;
//         document.getElementById('product-image').src = image;
//         document.getElementById('product-category').textContent = `Category: ${category}`;
//         document.getElementById('product-description').textContent = description;
//     }

// });