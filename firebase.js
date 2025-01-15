// firebase.js
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken(); // Call token retrieval after permission is granted
    }
};

const getFCMToken = async () => {
    try {
        const token = await messaging().getToken();
        if (token) {
            console.log('FCM Token:', token);
        } else {
            console.log('Failed to get FCM token');
        }
    } catch (error) {
        console.log('Error retrieving FCM token:', error);
    }
};

export const onMessageListener = messaging().onMessage(async (remoteMessage) => {
    console.log('Foreground message received:', remoteMessage);
});