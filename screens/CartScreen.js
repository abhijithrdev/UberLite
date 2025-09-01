import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const items = useSelector((state) => state.cart.items);

  return (
    <View>
      <Text>Cart Items</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
            <Text>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
