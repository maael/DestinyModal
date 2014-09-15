function DestinyModal(options) {
  options = options || {};
  this.title = options.title || "";
  this.text = options.text || "";
  this.type = options.type || "default";
  this.iconName = "fa-"+options.iconName || null;
  this.buttons = options.buttons || [];
  this.add = function () {
    //Create basic nodes  
    var overlay = document.createElement('div'),
        content = document.createElement('div'),
        row = document.createElement('div'),
        icon = document.createElement('div'),
        iclass = document.createElement('i'),
        text = document.createElement('div'),
        textTitle = document.createElement('h1'),
        textMain = document.createElement('p'),
        buttons = document.createElement('div'),
        textTitleNode = document.createTextNode(this.title),
        textMainNode = document.createTextNode(this.text);
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
    //Add buttons
    for(var i = 0; i<this.buttons.length; i++) {
      var buttonText = document.createTextNode(this.buttons[i].text),
          button = document.createElement('p');
      button.appendChild(buttonText);
      if(this.buttons[i].class){
        button.className = this.buttons[i].class;
      }
      if(this.buttons[i].function){
        button.addEventListener('click',this.buttons[i].function,false);
      }
      buttons.appendChild(button);
    }
    //Add classes and ids
    overlay.className = "destiny-overlay destiny-"+this.type;
    content.className = "destiny-content";
    row.className = "destiny-row";
    icon.className = "destiny-icon";
    iclass.className = "fa "+this.iconName;
    text.className = "destiny-text";
    buttons.className = "destiny-buttons";
    //Nesting
    text.appendChild(textTitle);
    text.appendChild(textMain);
    icon.appendChild(iclass);
    row.appendChild(icon);
    row.appendChild(text);
    content.appendChild(row);
    content.appendChild(buttons);
    overlay.appendChild(content);
    //Add overlay to document
    document.body.appendChild(overlay);
    //Add dismissal events
    var dismisses = document.getElementsByClassName('destiny-dismiss'),
        dismissAlls = document.getElementsByClassName('destiny-dismiss-all');
    for(var j = 0; j<dismisses.length; j++) {
      dismisses[j].addEventListener('click',this.remove,false);
    }
    for(var k = 0; k<dismissAlls.length; k++) {
      dismissAlls[k].addEventListener('click',this.removeAll,false);
    }
  };
  this.remove = function () {
    var overlays = document.getElementsByClassName('destiny-overlay'),
        index = (overlays.length>1) ? (overlays.length-1) : 0;
    if(overlays[index]){
      overlays[index].parentNode.removeChild(overlays[index]);
    }
  };
  this.removeAll = function () {
    while(document.getElementsByClassName('destiny-overlay').length>0){
      var overlays = document.getElementsByClassName('destiny-overlay');
      overlays[0].parentNode.removeChild(overlays[0]);
    }
  };
  return this;
}