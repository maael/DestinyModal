#Destiny Modal
A recreation of Destiny's modal windows in SASS and JavaScript.

###Modal Creation and functions

```JavaScript
  DestinyModal('Title','Modal text.','Type',[Array of Button Objects]);
```

The above will return a DestinyModal object with the ```add()```, ```remove()```, and ```removeAll()``` functions.
####```add()```
This function will add the modal to the DOM and display it.
####```remove()```
This function will remove the topmost modal from the DOM.
####```removeAll()```
This function will remove all modals from the DOM.

###Button Object
Button objects are objects which have the properties text and class. Text is a required property, while class is optional. If the button object has the class destiny-dismiss, it will automatically add an eventListener for the button's click event that will trigger the ```remove()``` function.

```JavaScript
  {text:'Dismiss', class:'destiny-dismiss'}
```