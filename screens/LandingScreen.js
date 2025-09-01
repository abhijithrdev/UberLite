import React from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products } from "../data/products";

export default function LandingScreen() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <View>
      <Text>Welcome, {user.username} ({user.email})</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Offer: {item.offer}</Text>
            <Text>Trip Options: {item.tripOptions.join(", ")}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        )}
      />
    </View>
  );
}
