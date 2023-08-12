const { hash } =window.location;

const message=atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML=message;
}

document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();

    document.querySelector("#message-form").classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input=document.querySelector('#message-input');
    const encrypted=btoa(input.value);

    const linkInput=document.querySelector('#link-input')
    
    linkInput.value=`${window.location}#${encrypted}`;

    linkInput.select();

});

function myFunc(){
    const copyText=document.querySelector("#link-input");
    copyText.select();
    copyText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyText.value);
    document.querySelector("#copy").innerHTML="Copied";
}