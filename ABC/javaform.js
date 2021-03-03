const form=document.getElementById("form");
const name1=document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const lane=document.getElementById('lane');
const dist=document.getElementById('dist');
const pin=document.getElementById('pin');
const state=document.getElementById('state');
const post=document.getElementById('post');
//Add-events
form.addEventListener('submit', function () {
    const m = 'Entered';
        //event.preventDefault();
        console.log(m)
        validate();
    });
const isEmail = (emailVal)=>{
    let atSymbol=emailVal.indexof('@')
    if(atSymbol<1) return false;
    let dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+3) return false;
    if(dot===emailVal.length - 1) return false;
    return true;
}
function validate() {
    

    
    
        const nameVal= name1.value.trim();
        console.log(nameVal);
        const emailVal= email.value.trim();
        console.log(emailVal);
        const phoneVal= phone.value.trim();
        const laneVal= lane.value.trim();
        const distVal= dist.value.trim();
        const pinVal= pin.value.trim();
        const stateVal= state.value.trim();
        const postVal= post.value.trim();
        
        if(nameVal==='')
        {
            setErrorMsg(nameVal,'User Name Cannot be blank ');
        }
        else if(nameVal.length<=2){
            setErrorMsg(nameVal,'User Name Cannot be 2 char');
        }
        else{
            setSuccessMsg(nameVal)
        }

        
        if(emailVal==='')
        {
            setErrorMsg(emailVal,'User Name Cannot be blank ');
        }
        else if(emailVal.length<=2){
            setErrorMsg(nameVal,'User Name Cannot be 2 char');
        }
        else{
            setSuccessMsg(emailVal)
        }
        if(phoneVal==='')
        {
            setErrorMsg(phoneVal,'phone Cannot be blank ');
        }
        else if(phoneVal.length===10){
            setErrorMsg(phoneVal,'Not a valid phone no');
        }
        else{
            setSuccessMsg(phoneVal)
        }
        
    
};

function setErrorMsg(input,errormsg) {
    const formControl = input.parentElement;
    console.log(typeof formControl);
    element = document.querySelector('.formControl'); 
    const small = formControl.querySelector("small");
    formControl.className = "formControl error";
    
    small.innerText = errormsg; 
    console.log(errormsg);
    

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

