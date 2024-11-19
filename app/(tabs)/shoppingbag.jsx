import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Shop = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetching product data (simulated API call)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate fetching data without a timeout
        const productData = [
          {
            id: 1,
            name: 'Snake Plant (Sansevieria)',
            price: '$8.99',
            image: 'https://static.wixstatic.com/media/d48b63_f4cf347b8cdf43ecab36440e1ff5ffb9~mv2.png/v1/fill/w_503,h_283,al_c,lg_1,q_85,enc_auto/d48b63_f4cf347b8cdf43ecab36440e1ff5ffb9~mv2.png',
          },
          {
            id: 2,
            name: 'Ti Leaf',
            price: '$2.99',
            image: 'https://static.wixstatic.com/media/d48b63_791476da61154ce995af7914b8c39a2b~mv2.png/v1/fill/w_548,h_308,al_c,q_85,enc_auto/d48b63_791476da61154ce995af7914b8c39a2b~mv2.png',
          },
          {
            id: 3,
            name: 'Bangka-Bangkaan',
            price: '$4.99',
            image: 'https://static.wixstatic.com/media/d48b63_a7c50450ffa446feb8c7bff9d93bdc9e~mv2.png/v1/fill/w_555,h_312,al_c,q_85,enc_auto/d48b63_a7c50450ffa446feb8c7bff9d93bdc9e~mv2.png',
          },
          {
            id: 4,
            name: 'Pothos (Epipremnum aureum)',
            price: '$3.99',
            image: 'https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2024/04/Pothos.png?ssl=1',
          },
          {
            id: 5,
            name: 'ZZ Plant (Zamioculcas zamiifolia)',
            price: '$8.99',
            image: 'https://www.gardendesign.com/pictures/images/300x300Exact_46x0/site_3/zz-plant-in-clay-pot-zamioculcas-zamiifolia-shutterstock-com_16268.jpg',
          },
        ];
        setProducts(productData);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (products) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleOrder = (product) => {
    Alert.alert('Thank you', 'Your order is added to cart.', [
      { text: 'Go to Cart               ', onPress: () => navigation.navigate('cart') },
      { text: 'Order More' }
  ]);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder(item)}>
        <Text style={styles.orderButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bbf6a0" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Our Collection</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for plants..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filterProducts(products)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#bbf6a0',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e2c07',
  },
  productList: {
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#e5eae1',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#008000',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#bbf6a0',
    padding: 10,
    borderRadius: 5,
  },
  orderButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Shop;
