import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const PopupMenuRow = ({ title, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.containerButton}>
            <View style={styles.menuRow}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    containerButton: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
    },
    menuRow: {
        height: 30,
        flexDirection: 'row',
        margin: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 14
    }
})

PopupMenuRow.PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
}

export default PopupMenuRow;