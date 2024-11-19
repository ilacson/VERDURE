import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Snake Plant', price: 8.99, quantity: 1, image: 'https://static.wixstatic.com/media/d48b63_f4cf347b8cdf43ecab36440e1ff5ffb9~mv2.png/v1/fill/w_503,h_283,al_c,lg_1,q_85,enc_auto/d48b63_f4cf347b8cdf43ecab36440e1ff5ffb9~mv2.png' },
    { id: 2, name: 'Pothos', price: 3.99, quantity: 2, image: 'https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2024/04/Pothos.png?ssl=1' },
    { id: 3, name: 'Ti Leaf', price: 2.99, quantity: 2, image: 'https://static.wixstatic.com/media/d48b63_791476da61154ce995af7914b8c39a2b~mv2.png/v1/fill/w_548,h_308,al_c,q_85,enc_auto/d48b63_791476da61154ce995af7914b8c39a2b~mv2.png' },
    { id: 4, name: 'ZZ Plant', price: 8.99, quantity: 2, image: 'https://www.gardendesign.com/pictures/images/300x300Exact_46x0/site_3/zz-plant-in-clay-pot-zamioculcas-zamiifolia-shutterstock-com_16268.jpg' },
    { id: 5, name: 'Bangka-Bangkaan', price: 4.99, quantity: 2, image: 'https://static.wixstatic.com/media/d48b63_a7c50450ffa446feb8c7bff9d93bdc9e~mv2.png/v1/fill/w_555,h_312,al_c,q_85,enc_auto/d48b63_a7c50450ffa446feb8c7bff9d93bdc9e~mv2.png' },
  ]);

  const incrementQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    Alert.alert("Thank you!","Your Order is being processed");
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyCartText}>Your cart is empty</Text>}
      />
      {cartItems.length > 0 && (
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Order Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#364a32',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#e5eae1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#008000',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#bbf6a0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#333',
  },
  removeButton: {
    alignSelf: 'flex-start',
  },
  removeText: {
    color: '#ff6347',
    fontSize: 14,
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  checkoutButton: {
    backgroundColor: '#008000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
