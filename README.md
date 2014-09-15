#Destiny Modal
A recreation of Destiny's modal windows in SASS and JavaScript.

###Modal Creation
```JavaScript
DestinyModal({
  'title': title,
  'text': text,
  'type': type,
  'iconName': iconName,
  'buttons': buttons
});
```
The above will return a DestinyModal object with the ```add()```, ```remove()```, and ```removeAll()``` functions. The object takes several optional parameters as an object. 

The ```title``` and ```text``` options are the for the respective pieces text. If left blank or not set, no title or text will be shown.

The ```type``` option is a value to denote the modals styles and icon. If it is not set, it will be set to default. It should be a value from the following list.
- default
- primary
- success
- info
- warning
- danger

The ```iconName``` option allows you to override the icon class that is automatically derived from the ```type``` option. If left blank, it will use the icon specified by the type.

The ```buttons``` options allows you to specify an array of button objects to display on the modal.

###Modal Functions
#####```add()```
This function will add the modal to the DOM and display it.
#####```remove()```
This function will remove the topmost modal from the DOM.
#####```removeAll()```
This function will remove all modals from the DOM.

###Button Object
Button objects are objects which have the properties text and class. Text is a required property, while class is optional. If the button object has the class ```destiny-dismiss```, it will automatically add an eventListener for the button's click event that will trigger the ```remove()``` function. If the button object has the class ```destiny-dismiss-all```, it will automatically add an eventListener for the button's click event that will trigger the ```removeAll()``` function.

```JavaScript
{'text': Button Text, 'class': Button Class, 'function': Function to call on click}
```