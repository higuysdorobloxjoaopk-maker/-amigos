let currentChat = null

function openChat(chat){
  currentChat = chat
  document.getElementById("chatName").innerText = chat.name
  document.getElementById("chatStreak").innerText = "🔥 "+chat.streak+" dias"
  renderMessages()
}

function renderMessages(){
  const box = document.getElementById("messages")
  box.innerHTML = ""
  currentChat.messages.forEach(m=>{
    const div = document.createElement("div")
    div.className = "msg "+(m.me?"mine":"other")
    div.innerText = m.text
    box.appendChild(div)
  })
  box.scrollTop = box.scrollHeight
}

function sendMessage(text){
  currentChat.messages.push({me:true,text})
  DB.set("chats",chats)
  renderMessages()
}
