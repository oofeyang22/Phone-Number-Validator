let input= document.querySelector("input");
const verifyBtn= document.querySelector("button");
const carrier= document.querySelector(".carrier");
const country= document.querySelector(".country");
const validity= document.querySelector(".validity");
            
            
verifyBtn.addEventListener("click", verify);

function verify(){

    let url= `https://phonevalidation.abstractapi.com/v1/?api_key=2169571ca2de4357945be6dfbe1900fc&phone=${input.value}`

    fetch(url).then(res => res.json()).then(result => {

        carrier.innerHTML= `Carrier: ${result.carrier}`;
        country.innerHTML= `Country: ${result.country.name}`
        validity.innerHTML= `Valid: ${result.valid}`

    });
};