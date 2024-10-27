/*npm install @capacitor/filesystem
*/

import React, { useState } from 'react';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const FileSystemExample: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const writeFile = async () => {
    await Filesystem.writeFile({
      path: 'myFile.txt',
      data: 'Hello from Capacitor!',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  };

  const readFile = async () => {
    const result = await Filesystem.readFile({
      path: 'myFile.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    setFileContent(result.data);
  };

  return (
    <div>
      <button onClick={writeFile}>Write File</button>
      <button onClick={readFile}>Read File</button>
      {fileContent && <p>File Content: {fileContent}</p>}
    </div>
  );
};

export default FileSystemExample;
