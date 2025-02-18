import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Citius',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      style: 'LIGHT',
      overlaysWebView: true,
      backgroundColor: '#ffffff00'
    }
  },
  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;
