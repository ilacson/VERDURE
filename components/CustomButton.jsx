import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-web'

const CustomButton = ({title,handlePress, contentContainerStyle,textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    style={styles.button}
    onPress={handlePress}
    activeOpacity={0.7}
    className={` ${contentContainerStyle}${isLoading}'opcity-50':''}`}
    >
        <Text 
        style={styles.buttonText}
        className={` ${textStyles}`}>
            {title}
        </Text>
        { isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color='#fff'
            size='small'
          />
        )}
    </TouchableOpacity>
  )
}

export default CustomButton

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
