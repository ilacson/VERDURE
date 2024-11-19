import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Assuming you are using Expo Router

// Main Index Page Component
export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/image/plow.jpg')}  // Update the image path if necessary
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay for better text contrast */}
      <View style={styles.overlay}></View>
      
      {/* Container for Title and Button */}
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.title}>VERDURE</Text>
        
        {/* Get Started Button */}
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/register" style={[styles.button, styles.buttonPink]}>
          <Text style={styles.buttonText}>Register</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay for better contrast
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    marginBottom:10,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
