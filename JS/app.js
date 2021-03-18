
//Variables - portfolio filter
const cssButton = document.getElementById('css');
const javascriptButton = document.getElementById('javascript');
const apiButton = document.getElementById('api');
const allButton = document.getElementById('all');
const portPics = document.getElementsByClassName('mypic');
const portOverlay = document.getElementsByClassName('overlay');

//Variables - Contact Validation
  //Name Field
  const nameField = document.getElementById('name');
  const popNameField = document.getElementById('popName');
  //email Field
  const emailField = document.getElementById('email');
  const popEmail = document.getElementById('popEmail');
  //message Field
  const messageField = document.getElementById('message');
  const popMessageField = document.getElementById('popMessage');
  //submit button
  const submit = document.getElementById('submit');
  const popSubmit = document.getElementById('popSubmit');

  //Variables - contact button modal
  const contactModal = document.getElementById('contactButton');
  const overlay = document.getElementById('overlayInfo');
  const modalClose = document.getElementById('modalClose');

//Portfolio Filter

//user clicks CSS filter button
cssButton.addEventListener('click', () => {
  //loops through portfolio items
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    //removes any previously hidden items
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    //if item label not "css", remove from list
    if (portItem.dataset.filterType !== "css"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});

//user clicks JSfilter button
javascriptButton.addEventListener('click', () => {
  //loops through portfolio items
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    //removes hidden items
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    //hides non JS items
    if (portItem.dataset.filterType !== "javascript"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});

//API filter button
apiButton.addEventListener('click', () => {
  //loops through portfolio items
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    //removes hidden items
    portItem.classList.remove('hidden');
    overlaySelect.classList.remove('hidden');
    //if not api, hide
    if (portItem.dataset.filterType !== "api"){
      portItem.classList.add('hidden');
      overlaySelect.classList.add('hidden');
    }
  }
});
//Show all button
allButton.addEventListener('click', () => {
  //loops through portfolio items
  for(let i = 0; i < portPics.length; i ++) {
    let portItem = portPics[i];
    let overlaySelect = portOverlay[i];
    //removes hidden items
      portItem.classList.remove('hidden');
      overlaySelect.classList.remove('hidden');
  }
});


  //**********Contact Button Modal ******


    //display modal callback function
    function displayModal() {
      overlay.classList.remove("hidden");
    }

    //shows modal on button press
    contactModal.addEventListener('click', () =>{
      displayModal();
      });
    //hides modal
    modalClose.addEventListener('click', ()=>{
      overlay.classList.add('hidden');
    });
      // **********Contact Validation*******


        //Instructions:
    //callback function to determine if a field has been filled out
    function sayValue(field){
      if (field.value === "") {
        return false;
      } else {
      return true;
      }
    }

        //click handler to advise user on if the form was successful or not
        submit.addEventListener('click', () => {
          //calls function to test input on each field, stores in a variable
          let name = sayValue(nameField);
          let email = sayValue(emailField);
          let message = sayValue(messageField);
          //if all fields are filled then let the user know the submission was made
          if (name === true && email === true && message === true){
            alert("Thanks " + `${nameField.value}` + "! Your message has been sent.");
            //Otherwise alert user to retry the form
          } else {
            alert("It looks like you're missing something in the contact form.");
          }
        });

        popSubmit.addEventListener('click', () => {
          //calls function to test input on each field, stores in a variable
          let name = sayValue(popNameField);
          let email = sayValue(popEmail);
          let message = sayValue(popMessageField);
          //if all fields are filled then let the user know the submission was made
          if (name === true && email === true && message === true){
            alert("Thanks " + `${popNameField.value}` + "! Your message has been sent.");
            //Otherwise alert user to retry the form
          } else {
            alert("It looks like you're missing something in the contact form.");
          }
        });
