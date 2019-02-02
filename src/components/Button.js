import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

// class Button extends Component {
//     render() {
//         const { buttonStyle, textStyle } = styles;
//         return (
//             <TouchableOpacity onPress={this.props.onPress} style={buttonStyle}>
//                 <Text style={textStyle}>
//                     {this.props.children}
//                 </Text>
//             </TouchableOpacity>
//         );
//     }
// }

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f2f207',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#f2f207',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        width: '70%',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
