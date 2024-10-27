/*npm install @capacitor/push-notifications
*/

import React, { useEffect } from 'react';
import { PushNotifications } from '@capacitor/push-notifications';

const PushNotificationsExample: React.FC = () => {
  useEffect(() => {
    const registerNotifications = async () => {
      await PushNotifications.requestPermissions();
      await PushNotifications.register();
      
      PushNotifications.addListener('pushNotificationReceived', (notification) => {
        alert(`Push Notification: ${notification.body}`);
      });
    };

    registerNotifications();
  }, []);

  return <div>Push Notifications Example</div>;
};

export default PushNotificationsExample;
