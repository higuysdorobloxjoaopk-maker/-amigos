function notify(text){
  if(Notification.permission==="granted"){
    new Notification("+ Amigos",{body:text})
  }
}

if(Notification.permission!=="granted"){
  Notification.requestPermission()
}
