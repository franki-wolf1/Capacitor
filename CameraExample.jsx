/*npm install @capacitor/camera*/

import React, { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const CameraExample: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    setPhoto(image.webPath || null);
  };

  return (
    <div>
      <button onClick={takePhoto}>Take Photo</button>
      {photo && <img src={photo} alt="Captured photo" />}
    </div>
  );
};

export default CameraExample;
