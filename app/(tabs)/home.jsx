import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for popular products and new arrivals
  const popularProducts = [
    { id: 1, title: 'Coleus (Plectranthus scutellarioides)', price: '$50', image: require('../../assets/image/flower.png') },
    { id: 2, title: 'Impatiens (Impatiens SPP)', price: '$40', image: require('../../assets/image/green.png') },
  ];

  const newArrivals = [
    { id: 4, title: 'Money Trees', price: '$60', image: require('../../assets/image/mayana.png') },
    { id: 5, title: 'Basin', price: '$55', image: require('../../assets/image/tree.png') },
  ];

  const blogPosts = [
    { id: 1, title: '5 Tips for Caring for Your Indoor Plants', excerpt: 'Learn how to keep your plants thriving...' },
    { id: 2, title: 'Choosing the Right Plants for Your Home', excerpt: 'Find the perfect plants for every space...' },
  ];

  // Function to filter products based on search query
  const filterProducts = (products) => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to VERDURE, Lyca!</Text>

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

      {/* Featured Image */}
      <Image
        source={require('../../assets/bg1.png')}
        style={styles.featuredImage}
      />

      {/* Popular Products Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Products</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
          {filterProducts(popularProducts).map(item => (
            <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => alert(`View details for ${item.title}`)}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* New Arrivals Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
          {filterProducts(newArrivals).map(item => (
            <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => alert(`View details for ${item.title}`)}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Blog Posts Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Blog Posts</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.blogList}>
          {blogPosts.map(post => (
            <TouchableOpacity key={post.id} style={styles.blogCard} onPress={() => alert(`Read more about ${post.title}`)}>
              <Image source={require('../../assets/bg2.png')} style={styles.blogImage} />
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bbf6a0',
  },
  viewAll: {
    fontSize: 14,
    color: '#bbf6a0',
    textDecorationLine: 'underline',
  },
  productList: {
    flexDirection: 'row',
  },
  productCard: {
    backgroundColor: '#e5eae1',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 150,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#008000',
  },
  blogList: {
    flexDirection: 'row',
  },
  blogCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    alignItems: 'center',
  },
  blogImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  blogTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blogExcerpt: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default Home;
