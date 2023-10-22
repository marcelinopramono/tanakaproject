let submitbuttton = document.getElementById("submitbutton")
submitbuttton.addEventListener("click", () =>{
    event.preventDefault()
    let usrnm = document.getElementById("usrnm").value
    let EmL = document.getElementById("EmL").value
    let Gndr = document.getElementById("Gndr").checked
    let Pass = document.getElementById("Pass").value
    let agreement = document.getElementById("agreement")

    let errName = document.getElementById("errName")
    let errEml = document.getElementById("errEml")
    let errGndr = document.getElementById("errGndr")
    let errPass = document.getElementById("errPass")
    let errChk = document.getElementById("errChk")

    if(usrnm.length == 0){
        errName.innerHTML ="Username must Filled!"
        errName.style.display = "block"
        document.getElementById("usrnm").style.border = "1px solid red"
    }
    else if(!chk_nm(usrnm)){
        errName.innerHTML = "Username must be valid!"
        errName.style.display = "block"
        document.getElementById("usrnm").style.border = "1px solid red"
    }
    else{
        errName.innerHTML =""
        errName.style.display = "none"
        document.getElementById("usrnm").style.border = "1px solid black"
    }

    if(EmL.length == 0){
        errEml.innerHTML = "Email Must Be Filled!"
        errEml.style.display = "block"
        document.getElementById("EmL").style.border = "1px solid red"
    }
    else if(!chk_eml(EmL)){
        errEml.innerHTML = "Email Must Be Valid!"
        errEml.style.display = "block"
        document.getElementById("EmL").style.border = "1px solid red"
    }
    else{
        errEml.innerHTML = ""
        errEml.style.display = "none"
        document.getElementById("EmL").style.border = "2px solid grey"
    }

    if(Gndr == false){
        errGndr.innerHTML= "Gender must be chossen!"
        errGndr.style.display = "block"
    }
    else{
        errGndr.innerHTML= ""
        errGndr.style.display = "none"
    }

    if(Pass.length < 8){
        errPass.innerHTML = "Password Must Be At Least 8 Characters!"
        errPass.style.display = "block"
        document.getElementById("Pass").style.border = "1px solid red"
    }
    else{
        errPass.innerHTML = ""
        errPass.style.display = "none"
        document.getElementById("Pass").style.border = "1px solid grey"
    }

    if(agreement.checked == false){
        errChk.innerHTML = "Terms and Conditions Notice Must Be Checked!"
        errChk.style.display = "block"
    }
    else{
        errChk.innerHTML = ""
        errChk.style.display = "none"
    }
})


function chk_nm(name){
    return /^[a-zA-Z\s]+$/.test(name);
}

function chk_eml(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}