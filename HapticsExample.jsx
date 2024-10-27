/*npm install @capacitor/haptics
*/

import React from 'react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const HapticsExample: React.FC = () => {
  const vibrate = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  };

  return (
    <div>
      <button onClick={vibrate}>Vibrate</button>
    </div>
  );
};

export default HapticsExample;
