import React, { Component } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

class PopoverMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            initialHeight: 0,
            finalHeight: 0
        }

        this.animatedHeightOpen = new Animated.Value(0);
        this.animatedHeightClose = new Animated.Value(0);

        this.releaseTouchEvent = this.releaseTouchEvent.bind(this);
    }


    componentDidMount() {
        let finalHeight = React.Children.count(this.props.children) * this.props.rowHeight;

        this.setState({
            finalHeight
        }, this.animateMenuOpen());
  
    }

    componentDidUpdate() {
        this.animateMenuOpen();
    }

    componentWillUnmount() {
        this.animateMenuClose();
    }

    animateMenuOpen() { 
        this.animatedHeightOpen.setValue(0);

        Animated.timing(this.animatedHeightOpen, {
            toValue: this.state.finalHeight,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }

    animateMenuClose() {
        this.animatedHeightClose.setValue(this.state.finalHeight);

        Animated.timing(this.animatedHeightClose, {
            toValue: this.state.initialHeight,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }


    // The function responsible for closing the menu. The container
    // of the component is a full screen view with a touch event 
    // listener attached. This acts as the touch-outside-to-close function. 

    releaseTouchEvent(evt) {
        this.props.closeMenu()
    }

    render() {
        if (!this.props.showMenu) return null;

        let rightOffset = this.props.rightOffset || 0;
        let topOffset = this.props.topOffset || 60;

        return (
            <View
                style={[styles.container, { marginTop: topOffset, marginRight: rightOffset }]}
                onStartShouldSetResponder={evt => true}
                onResponderRelease={this.releaseTouchEvent}>
                <Animated.View
                    style={[styles.menu, { height: this.animatedHeightOpen }]}>
                    {this.props.children}
                </Animated.View>
            </View>

        );


    }
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'flex-end'
    },
    menu: {
        padding: 2.5,
        margin: 2.5,
        width: '60%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#c1c1c1',
        borderWidth: 1
    }
})

PopoverMenu.propTypes = {
    showMenu: PropTypes.bool,
    closeMenu: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    topOffset: PropTypes.number,
    rightOffset: PropTypes.number
}


export default PopoverMenu;