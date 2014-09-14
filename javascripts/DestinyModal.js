function DestinyModal(title,main,type,iconName) {
  this.title = title || "";
  this.main = main || "";
  this.type = type || "default";
  this.iconName = "fa-"+iconName || null;
  this.add = function () {
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
        textTitleNode = document.createTextNode(this.title),
        textMainNode = document.createTextNode(this.main);
    //Add text to nodes
    textTitle.appendChild(textTitleNode);
    textMain.appendChild(textMainNode);
    //Choose icon based on modal type if not already set
    if(this.iconName !== null){
      switch(this.type){
        case "success":
          this.iconName = "fa-check-circle";
          break;
        case "info":
          this.iconName = "fa-info-circle";
          break;
        default:
          this.iconName = "fa-exclamation-circle";
      }
    }
    //Add classes and ids
    overlay.className = "destiny-overlay destiny-"+this.type;
    content.className = "destiny-content";
    row.className = "destiny-row";
    icon.className = "destiny-icon";
    i.className = "fa "+this.iconName;
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
  };
  this.remove = function () {
    var overlays = document.getElementsByClassName('destiny-overlay'),
        index = (overlays.length>1) ? (overlays.length-1) : 0;
    overlays[index].parentNode.removeChild(overlays[index]);
  };
  this.removeAll = function () {
    while(document.getElementsByClassName('destiny-overlay').length>0){
      var overlays = document.getElementsByClassName('destiny-overlay');
      overlays[0].parentNode.removeChild(overlays[0]);
    }
  };
  return this;
}