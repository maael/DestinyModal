function addDestinyModal(title,main,type) {
  //Create basic nodes  
  var overlay = document.createElement('div'),
      content = document.createElement('div'),
      row = document.createElement('div'),
      icon = document.createElement('div'),
      i = document.createElement('i'),
      text = document.createElement('div'),
      textTitle = document.createElement('h1'),
      textMain = document.createElement('p'),
      buttons = document.createElement('div'),
      textTitleNode = document.createTextNode(title),
      textMainNode = document.createTextNode(main),
      iconName = "fa-";
  //Add text to nodes
  textTitle.appendChild(textTitleNode);
  textMain.appendChild(textMainNode);
  //Choose icon based on modal type
  switch(type){
    case "success":
      iconName += "check-circle";
      break;
    case "info":
      iconName += "info-circle";
      break;
    default:
      iconName += "exclamation-circle";
  }
  //Add classes
  overlay.className = "destiny-overlay destiny-"+type;
  content.className = "destiny-content";
  row.className = "destiny-row";
  icon.className = "destiny-icon";
  i.className = "fa "+iconName;
  text.className = "destiny-text";
  buttons.className = "destiny-buttons";
  //Nesting
  text.appendChild(textTitle);
  text.appendChild(textMain);
  icon.appendChild(i);
  row.appendChild(icon);
  row.appendChild(text);
  content.appendChild(row);
  content.appendChild(buttons);
  overlay.appendChild(content);

  document.body.appendChild(overlay);
}