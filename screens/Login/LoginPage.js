import { StyleSheet, Text, View, Button } from 'react-native';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                <View>
                    <Button
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                        color={'red'}
                        title="Go to Home"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('CreateAccount')
                        }
                        color={'red'}
                        title="Go to CreateAccount"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('CreateJob')
                        }
                        color={'red'}
                        title="Go to CreateJob"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Jobs')
                        }
                        color={'red'}
                        title="Go to Jobs"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Matchs')
                        }
                        color={'red'}
                        title="Go to Matchs"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('MyPostulations')
                        }
                        color={'red'}
                        title="Go to MyPostulations"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Postulations')
                        }
                        color={'red'}
                        title="Go to Postulations"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Profile')
                        }
                        color={'red'}
                        title="Go to Profile"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Subscriptions')
                        }
                        color={'red'}
                        title="Go to Subscriptions"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Vacancies')
                        }
                        color={'red'}
                        title="Go to Vacancies"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate('Login')
                        }
                        color={'red'}
                        title="Go to Login"
                    />
                </View>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoginPage;