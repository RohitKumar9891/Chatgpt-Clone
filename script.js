let prompt=document.querySelector("#prompt")
let btn=document.querySelector("#btn")
let chatContainer=document.querySelector(".chat-container")
let userMessage=null;

function createChatBox(html,className){
    let div=document.createElement("div")
    div.classList.add(className)
    div.innerHTML=html
    return div
}

function showLoading(){
    let html=`<div class="chatbot">
                <img src="chatbot.png" alt="chatbot">
            </div>
            <p class="text"></p>
            <img src="loading.gif" alt="loading" class="loading">`
            let aiChatBox=createChatBox(html,"ai-chatbox")
            chatContainer.appendChild(aiChatBox)
}

btn.addEventListener("click",()=>{
    userMessage=prompt.value
    if(!userMessage) return;
    let html=`<div class="img">
                <img src="user.svg" alt="user">
            </div>
            <p class="text"></p>`;
    let userChatBox=createChatBox(html,"user-chatbox")       
    userChatBox.querySelector(".text").innerText=userMessage 
    chatContainer.appendChild(userChatBox)
    prompt.value=""
    setTimeout(showLoading,500)
})