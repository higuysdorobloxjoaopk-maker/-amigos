const chats = DB.get("chats") || [
  {id:1,name:"Ana",streak:4,group:false,messages:[
    {me:false,text:"Oi"},
    {me:true,text:"Tudo bem?"}
  ]}
]

const friendsList = document.getElementById("friendsList")

function renderFriends(){
  friendsList.innerHTML=""
  chats.forEach(c=>{
    const div=document.createElement("div")
    div.className="friend"
    div.innerHTML=`<img src="assets/avatar.png" width="40"><span>${c.name}</span>`
    div.onclick=()=>openChat(c)
    friendsList.appendChild(div)
  })
}

document.getElementById("sendBtn").onclick=()=>{
  const input=document.getElementById("messageInput")
  if(input.value){
    sendMessage(input.value)
    notify("Mensagem enviada")
    input.value=""
  }
}

document.getElementById("inviteBtn").onclick=()=>{
  navigator.clipboard.writeText(location.origin+"?invite=XYZ")
  notify("Link de convite copiado")
}

renderFriends()
