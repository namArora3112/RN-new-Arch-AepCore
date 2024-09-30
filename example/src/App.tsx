import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { multiply, extensionVersion } from 'react-native-aep-core';

const result = multiply(2, 7);

export default function App() {

  const [version, setVersion] = useState('');

  useEffect(() => {
    // Call the native extensionVersion method
    extensionVersion().then((ver) => {
      setVersion(ver);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result} {version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
