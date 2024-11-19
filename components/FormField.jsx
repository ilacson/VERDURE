import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image ,StyleSheet} from "react-native";
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.input}>
        <TextInput 
          value={value}
          placeholder={title+':'}
          placeholderTextColor="green"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      color: 'white',
    },
    input: {
        padding:5,
        justifyContent:'center',
         height:50,
      width:320,
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