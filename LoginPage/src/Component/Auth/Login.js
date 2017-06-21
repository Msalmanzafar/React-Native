import React from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Content, Button } from 'native-base';

class Login extends React.PureComponent {
    render() {
        return (
            <View style={styles.form}>
                <View style={styles.round}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#808080'
                        style={styles.input}
                        onSubmitEditing={()=>this.passwordInput.focus()}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.round}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#808080'
                        style={styles.input}
                        secureTextEntry
                        ref={(input) => this.passwordInput= input}
                    />
                </View>
                <View style={styles.button}>
                    <Button block  rounded>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 18,
        width: 280,
        paddingHorizontal: 4
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 310,
        // marginTop: 10,
        marginBottom: 30,
        
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
    },
    round: {
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        shadowColor: '#e6e6e6',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',

    }
});
export default Login;