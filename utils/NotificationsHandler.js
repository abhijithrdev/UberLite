import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Platform, PermissionsAndroid } from "react-native";
import { addNotification } from "../store/notificationsSlice";
import { messaging } from "../firebaseConfig";
import { onMessage } from "firebase/messaging";

export default function NotificationsHandler() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Request permission for Android
    const requestAndroidPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            {
              title: 'UberLite Notification Permission',
              message: 'Allow UberLite to send you notifications about your trips and offers',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn('Permission request error:', err);
          return false;
        }
      }
      return true; // iOS handles permissions differently
    };

    const initializeMessaging = async () => {
      const hasPermission = await requestAndroidPermission();
      
      if (hasPermission) {
        // Get FCM token
        try {
          const token = await messaging.getToken();
          console.log('FCM Token:', token);
        } catch (error) {
          console.error('Failed to get FCM token:', error);
        }
      }
    };

    initializeMessaging();

    const unsubscribe = onMessage(messaging, (payload) => {
      const { notification } = payload;
      dispatch(
        addNotification({
          id: Date.now().toString(),
          title: notification?.title || 'New Notification',
          body: notification?.body || '',
          timestamp: new Date().toISOString(),
          isRead: false,
        })
      );
    });

    return unsubscribe;
  }, [dispatch]);

  return null;
}