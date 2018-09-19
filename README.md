# react-native-simple-popover-menu

<p>
  A simple popover menu component for React-Native.  
</p>

## Getting started

### Installing the package

`$ npm install react-native-simple-popover-menu`

### Usage

```javascript
import React, { Component } from 'react';
import { PopoverMenu, PopoverMenuRow } from 'react-native-simple-popover-menu';

export default class Example extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      isVisible: false
    };
    
    // Binding the function in the constructor is simply a best practise for better performance.
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
      this.setState({
          popupMenuIsVisible: !this.state.popupMenuIsVisible
      });
  };
  
  render() {
      // Should be just a little bigger than the height of the header.
      let topOffsett = 60;
  
      return (
        <PopoverMenu showMenu={this.state.isVisible} closeMenu={this.toggleMenu} topOffset={topOffset}>
            <PopoverMenuRow title='Menu Item 1' onPress={() => console.log("Pressed Menu Item 1")} />
            <PopoverMenuRow title='Menu Item 2' onPress={() => console.log("Pressed Menu Item 2")} />
            // <MyCustomMenuRow /> 
        </PopoverMenu>
      );
  };

};
```
### Props
#### PopoverMenu

##### `showMenu` bool 
- The boolean switch that controls the visibility of the component.

##### `closeMenu` function 
- This toggle function 
##### `topOffset` number/int (default: 60)
- Essentially defines the 'MarginTop' of the menu component. This is used to simulate an anchor point from a button for example. This does in fact limit the component as it is absolutley positioned via this property.
##### `rightOffset` number/int (default: 0)
 - Defined the right position of the menu component. This does in fact limit the component as it is absolutley positioned via this property.

#### PopoverMenuRow

##### `title` string
- Defines the menu item display text for the `PopoverMenuRow`.

#### `onPress` function
- The function that handles the onPress event of the `PopoverMenuRow`. This is directly linked to the React Native TouchableOpacity container onPress event handler. 
