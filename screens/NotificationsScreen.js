import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { markAsRead } from "../store/notificationsSlice";

export default function NotificationsScreen() {
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();

  const handlePress = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <View>
      <Text>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={{ padding: 10, backgroundColor: item.read ? "#eee" : "#fff" }}>
              <Text style={{ fontWeight: item.read ? "normal" : "bold" }}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
