import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router';

const Register = () => {
  const [form, setForm]=useState({
    email: '',
    password:'',
    username:'',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
          <View className='p-2 w-full'>
                <FormField
                  title="Email:"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  keyboardType="email-address"
                />
              </View>

              <View className='p-2 w-full'>
                <FormField
                  title="Username:"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  keyboardType="email-address"
                />
              </View>
              
              <View className='p-2 w-full'>
                <FormField
                  title="Password:"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  keyboardType="password"
                />
              </View>

              <CustomButton
                  title="LOGIN"
                  handlePress={()=>router.push('/home')}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />
              
              
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
  },
});
