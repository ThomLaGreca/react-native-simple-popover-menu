import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Left, Text } from '.';
import { colors } from '../constants';

class PopOverMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            //animation: new Animated.Value(0),
           // childrenCount: React.Children.count(this.props.children),
            initialHeight: 0,
            //finalHeight:  * 100,
            window: null,
        }

        this.releaseTouchEvent = this.releaseTouchEvent.bind(this);
    }

    releaseTouchEvent(evt) {
        this.props.closeMenu()
    }

    render() {


        const styles = {
            container: {
                marginTop: 60,
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: 'transparent',
                alignItems: 'flex-end'
            },
            menu: {         
                padding: 5,
                width: '60%',
                backgroundColor: colors.white,
                borderRadius: 5,
                borderColor: '#c1c1c1',
                borderWidth: 1
            }

        }




        if (this.props.showMenu) {
            return (
                <View
                    style={styles.container}
                    onStartShouldSetResponder={evt => true}
                    onResponderRelease={this.releaseTouchEvent}>
                    <View
                        style={styles.menu}>
                        {this.props.children}
                    </View>
                </View>

            );
        } else {
            return null
        }

    }
}





export default PopOverMenu;