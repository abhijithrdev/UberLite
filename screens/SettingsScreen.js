import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { clearUser  } from "../store/authSlice";
import { clearCart } from "../store/cartSlice";
import { clearNotifications } from "../store/notificationsSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function SettingsScreen() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser ());
    dispatch(clearCart());
    dispatch(clearNotifications());
  };

  return (
    <View>
      <Text>Email: {user.email}</Text>
      <Text>Username: {user.username}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
