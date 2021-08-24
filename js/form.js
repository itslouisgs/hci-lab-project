function validate(){
    function blur(){
        invalidName.innerHTML = ''
        invalidEmail.innerHTML = ''
        invalidGender.innerHTML = ''
        invalidLocation.innerHTML = ''
        invalidMsg.innerHTML = ''

        nameInput.blur()
        emailInput.blur()
        genderInput.blur()
        locInput.blur()
        msgInput.blur()
    }

    function charCount(txt){
        return txt.length
    }

    function emailInvalid(email){
        return (atIdx != atLIdx || atIdx < 1 || dotIdx < atIdx + 2 || dotIdx + 2 >= email.length) ? true : false;
    }

    function wordCount(txt){
        var count = 1;

        for (var i = 0; i < txt.length; i++){
            if (txt[i] === " " && txt[i+1] != " "){
                count++;
            }
        }

        return count;
    }

    var name = document.forms['contact']['name'].value
    var email = document.forms['contact']['email'].value
    var gender = document.forms['contact']['gender'].value
    var location = document.forms['contact']['location'].value
    var message = document.forms['contact']['message'].value

    var invalidName = document.getElementById("invalid-name")
    var invalidEmail = document.getElementById("invalid-email")
    var invalidGender = document.getElementById("invalid-gender")
    var invalidLocation = document.getElementById("invalid-location")
    var invalidMsg = document.getElementById("invalid-message")

    var nameInput = document.getElementById("name")
    var emailInput = document.getElementById("email")
    var genderInput = document.getElementById("gender")
    var locInput = document.getElementById("location")
    var msgInput = document.getElementById("message")

    var atIdx = email.indexOf("@")
    var dotIdx = email.lastIndexOf(".") 
    var atLIdx = email.lastIndexOf("@")

    if (name == ""){
        invalidName.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter your name'
        nameInput.focus()
    }
    else if (!isNaN(name)){
        invalidName.innerHTML = '<i class="fas fa-exclamation-circle"></i> Name must not be numeric'
        nameInput.focus()
    }
    else if (charCount(name) > 50){
        invalidName.innerHTML = '<i class="fas fa-exclamation-circle"></i> Name must consist of maximum 50 characters'
        nameInput.focus()
    }
    else if (email == ""){
        blur()
        invalidEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter your email address'
        emailInput.focus()
    }
    else if (emailInvalid(email)){
        blur()
        invalidEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> Your email address is invalid'
        emailInput.focus()
    }
    else if (gender == ""){
        blur()
        invalidGender.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please select your gender'
        genderInput.focus()
    }
    else if (location == ""){
        blur()
        invalidLocation.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please select the branch location'
        locInput.focus()
    }
    else if (message == ""){
        blur()
        invalidMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please write your message'
        msgInput.focus()
    }
    else if (wordCount(message) > 100){
        blur()
        invalidMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Your message must consist of maximum 250 words'
        msgInput.focus()
    }
    else{
        blur()
        invalidMsg.innerText= wordCount(message)
        alert('Your message has been sent.')
        document.getElementById('submit-button').click()
    }
}