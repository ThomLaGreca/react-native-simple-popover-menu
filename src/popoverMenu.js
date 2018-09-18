import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

class PopoverMenu extends Component {
    constructor(props) {
        super(props);
        this.releaseTouchEvent = this.releaseTouchEvent.bind(this);
    }

    static defaultProps = {
        topOffset: 60,
        rightOffset: 0,

    }
    // The function responsible for closing the menu. The container
    // of the component is a full screen view with a touch event 
    // listener attached. This acts as the touch-outside-to-close function. 

    releaseTouchEvent(evt) {
        this.props.closeMenu()
    }

    render() {
        if (!this.props.showMenu) return <View />;

        let rightOffset = this.props.rightOffset || 0;
        let topOffset = this.props.topOffset || 60;

        return (
            <View
                style={[styles.container, { marginTop: topOffset, marginRight: rightOffset }]}
                onStartShouldSetResponder={evt => true}
                onResponderRelease={this.releaseTouchEvent}>
                <View
                    style={styles.menu}>
                    {this.props.children}
                </View>
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