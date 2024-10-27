# Capacitor

Cómo usar Capacitor en una aplicación Ionic con React para acceder a funcionalidades nativas.

Primero, si aún no has instalado Capacitor en tu proyecto Ionic React, configúralo con estos comandos:

bash
Copiar código
npm install @capacitor/core @capacitor/cli
npx cap init
⚠️ Nota: Si planeas realizar pruebas en dispositivos móviles o emuladores, asegúrate de instalar las plataformas necesarias (por ejemplo, @capacitor/android o @capacitor/ios), y ejecuta npx cap add android o npx cap add ios respectivamente.


Recuerda
Sincronizar Capacitor: Cada vez que instales un nuevo plugin de Capacitor, asegúrate de ejecutar npx cap sync para sincronizar las dependencias en todas las plataformas añadidas.
Compilar para Dispositivo o Emulador: Los plugins nativos solo funcionarán correctamente en dispositivos físicos o emuladores, así que asegúrate de probar las funcionalidades directamente en estos.
