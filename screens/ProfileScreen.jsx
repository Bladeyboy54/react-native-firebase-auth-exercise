import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                console.log('No user Logged in')
            }
        })
        return unsubscribe;
    }, [])
    // TODO: handle logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("user signed out");
                navigation.navigate('LoginScreen');
        })
        .catch((error) => {
            console.log("Error signing out",error);
        })
    }

    return (
        <SafeAreaView>
            <View style= {styles.container}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                {user ? (
                    <>
                        <Text>Email: {user.email}</Text>
                        <Text>Username: {user.displayName || "Username Not Avaliable"} </Text>
                    </>
                ): (
                    <Text>No user Information Avaliable</Text>
                )}

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})