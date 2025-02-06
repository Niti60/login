let main = document.querySelector(".main");
let mains = document.querySelector(".mainS");

// let userN = document.querySelector("#userN").value;
// let passW = document.querySelector("#passW").value;

function registr(){
mains.style.display = "block";
main.style.display = "none";
}

function lon(){
mains.style.display = "none";
main.style.display = "block";    
}
function redone(){
    // getting values
    let userid = document.querySelector("#userid").value.trim();//username
    let pass = document.querySelector("#userpass").value.trim();//confirm password
    let en = document.querySelector("#en").value.trim();//number
    let em = document.querySelector("#email").value.trim();//email
    let password = document.querySelector("#pas").value.trim();//password
    
    // errors
    let erru = document.querySelector(".errU");//Username error
    let erre = document.querySelector(".errE");//Email error
    let errn = document.querySelector(".errN")//Number error
    let errp = document.querySelector(".errP")//password error
    let errcp = document.querySelector(".errCP")//confirm password error
    

if (userid == "") {
    erru.innerHTML = "you can't leave this blank"
    erru.style.color = "red";
} else {
     erru.innerHTML = ""
    if (pass == "") {
        errcp.innerHTML = "you can't leave this blank"
        errcp.style.color = "red"
    } else {
         errcp.innerHTML = ""
        if (en == "") {
        errn.innerHTML = "you can't leave this blank"
        errn.style.color = "red"
        } else {
             errn.innerHTML = ""
            if (em == "") {
                erre.innerHTML = "you can't leave this blank"
                erre.style.color = "red"
            } else {
                erre.innerHTML = ""
                if (password == "") {
                errp.innerHTML = "you can't leave this blank"
                errp.style.color = "red"
                } else {
               errp.innerHTML = ""
                if (pass !== password) {
                    alert("password did not matched")
                } else {
                    if (!em.includes('@')) {
                        erre.innerHTML = "@ missing"
                        erre.style.color = "red"
                    } else {
                        localStorage.setItem(userid,pass);
                        alert("you can now login!")
                        mains.style.display = "none";
                        main.style.display = "block";
                    }
                }
            }
            }
        }
    }
}
             
}
function saved(){
    let wel = document.querySelector(".conf");
    let userN = document.querySelector("#userN").value;
    let pas = document.querySelector("#passW").value;
    let erru = document.querySelector("#errofu");
    let errp = document.querySelector("#errofp");
    let stor = localStorage.getItem(userN);
    let ji = document.querySelector("#username");
    if(userN === ""){
        erru.innerHTML = "you can't leave this blank"
        erru.style.color = "red"
        return;
    }
    else{
        erru.innerHTML = "";
        if (pas === "") {
            errp.innerHTML = "you can't leave this blank";
            errp.style.color = "red"
            return;
        } else {
            errp.innerHTML = "";
            if (!stor) {
                alert("User not found please register!")
                return;
            } else {
            alert("login successfull");
            main.style.display = "none";
            wel.style.display = "flex";
            ji.innerHTML = userN.toUpperCase();
            }
        }
    }
    
    }
