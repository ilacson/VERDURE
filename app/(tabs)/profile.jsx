import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
  // Mock data for user profile
  const userDetails = {
    name: 'Lyca',
    email: 'lyca@gmail.com',
    phone: '+639123456789',
  };

  // Mock data for order history
  const orderHistory = [
    { id: 1, item: 'Coleus (Plectranthus scutellarioides)', date: '2024-010-01', status: 'Delivered' },
    { id: 2, item: 'Money Trees', date: '2024-10-6', status: 'In Transit' },
  ];

  // Mock data for saved addresses
  const savedAddresses = [
    { id: 1, address: '123 Plant St, Balamban, GC 12345' },
    { id: 2, address: '456 Flora Ave, Toledo City, BT 67890' },
  ];

  // Mock data for payment methods
  const paymentMethods = [
    { id: 1, type: 'Credit Card', lastFour: '**** **** **** 1234' },
    { id: 2, type: 'PayPal', email: 'lyca@gmail.com' },
  ];

  // Function to handle logout
  const handleLogout = () => {
    Alert.alert(
        'Logout',
        'Are you sure you want to log out?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', onPress: () => navigation.navigate('index') }, // Navigate to Login screen
        ]
      );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* User Account Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <Text style={styles.detail}>Name: {userDetails.name}</Text>
        <Text style={styles.detail}>Email: {userDetails.email}</Text>
        <Text style={styles.detail}>Phone: {userDetails.phone}</Text>
      </View>

      {/* Order History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        {orderHistory.map(order => (
          <View key={order.id} style={styles.orderCard}>
            <Text style={styles.orderItem}>{order.item}</Text>
            <Text style={styles.orderDate}>Date: {order.date}</Text>
            <Text style={styles.orderStatus}>Status: {order.status}</Text>
          </View>
        ))}
      </View>

      {/* Saved Addresses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Addresses</Text>
        {savedAddresses.map(address => (
          <View key={address.id} style={styles.addressCard}>
            <Text style={styles.addressText}>{address.address}</Text>
          </View>
        ))}
      </View>

      {/* Payment Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        {paymentMethods.map(method => (
          <View key={method.id} style={styles.methodCard}>
            <Text style={styles.methodText}>{method.type}</Text>
            {method.type === 'Credit Card' ? (
              <Text style={styles.methodText}>Card Number: {method.lastFour}</Text>
            ) : (
              <Text style={styles.methodText}>PayPal Email: {method.email}</Text>
            )}
          </View>
        ))}
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity style={styles.settingsOption}>
          <Text style={styles.settingsText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsOption}>
          <Text style={styles.settingsText}>Notification Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#364a32',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bbf6a0',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  orderCard: {
    backgroundColor: '#e5eae1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  orderItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderStatus: {
    fontSize: 14,
    color: '#008000',
  },
  addressCard: {
    backgroundColor: '#e5eae1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    color: 'black',
  },
  methodCard: {
    backgroundColor: '#e5eae1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  methodText: {
    fontSize: 16,
    color: 'black',
  },
  settingsOption: {
    backgroundColor: '#bbf6a0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Profile;
