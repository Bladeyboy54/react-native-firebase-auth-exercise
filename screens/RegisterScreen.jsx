// TODO: Create Register Screen & Register Functionality

import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleRegester } from '../services/authService'

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        handleRegester(email, password)
            .then((userCredential) =>{
                console.log('User Registered:', userCredential.user)
                navigation.navigate('Profile')
            })
            .catch((error) => {
                console.log('Error Registering user:', error)
            })
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Register</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="Your Email"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                />

                <TextInput
                    style={styles.inputField}
                    placeholder="Your Password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
        
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    inputField: {
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      marginTop: 15,
    },
    button: {
      backgroundColor: 'green',
      textAlign: 'center',
      padding: 10,
      marginTop: 30,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
    },
  });