# UberLite - Uber-Like Mobile App

React Native app with authentication, product browsing, cart, and push notifications using Firebase.

## Features

- **Authentication**: Login/Signup with email & password
- **Home**: Product listing with add to cart
- **Cart**: Session-persistent shopping cart
- **Notifications**: FCM push notifications with read/unread status
- **Settings**: User profile and logout

## Tech Stack

- React Native
- Firebase (Auth, Firestore, FCM)
- Redux + Redux-Persist
- React Navigation

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Firebase Config**
   - Create Firebase project
   - Enable Auth, Firestore, FCM
   - Add `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)

3. **Run**
   ```bash
   npx react-native run-android
   npx react-native run-ios
   ```

## Usage

1. Sign up/Login with email & password
2. Browse products on home screen
3. Add items to cart
4. View notifications
5. Logout from settings

## Project Structure

```
src/
├── screens/        # App screens
├── navigation/     # React Navigation
├── redux/         # State management
├── services/      # Firebase config
└── data/         # Mock product data
```
