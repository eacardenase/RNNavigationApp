import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
];

export const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.containter}>
      <Text style={style.title}>Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            label={item.name}
            onPress={() => {
              navigation.navigate('Product' as never);
            }}
          />
        )}
      />

      <Text style={style.title}>Settings</Text>

      <PrimaryButton
        label="Settings"
        onPress={() => {
          navigation.navigate('Settings' as never);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
});
