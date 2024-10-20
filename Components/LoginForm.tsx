import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  StyleSheet, Alert,  } from 'react-native';
import Checkboxx from './CheckBoxx';






const LoginForm = ({navigation }: {navigation: any}) => {

    const [isAgreed, setIsAgreed] = useState(false);
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');


    function BtnHandler () {
        if (userName === 'sejawal' && Password === 'sejawal') {
          navigation.navigate('Home')
            
        } else {
            Alert.alert('Your Username or Password is Incorrect')
        }
    } 
    
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
  style={styles.inputStyles}
  placeholder='Username'
  autoCapitalize='none'
  autoCorrect={false}
  value={userName}
  onChangeText={(uname) => setUserName(uname)}

  />
  
      <TextInput
     style={styles.inputStyles}
     placeholder='Password'
     secureTextEntry={true}
  value={Password} 
  onChangeText={(upass) => setPassword(upass) } 
   />
    
      

      <View style={styles.checkboxContainer}>
      <Checkboxx value={isAgreed} onValueChange={setIsAgreed} />
      <Text style={styles.checkboxText}> I agree to terms and conditions {isAgreed ? '👍' : '👎'} </Text>
      </View>

      <View>
      <TouchableOpacity onPress={BtnHandler} style={[styles.button , {
        backgroundColor: isAgreed ? '#0D92F4' : 'grey'
      }]} 
      disabled={!isAgreed}
      >
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  checkboxText: {
    
    fontSize: 16,
    marginBottom: 3
  },
 
  button: {
    backgroundColor: '#0D92F4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputStyles: {
    height: 50,
    borderColor: '##0D92F4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  
});

export default LoginForm;

