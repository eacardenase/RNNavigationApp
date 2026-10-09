import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { GlobalStyles } from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  return (
    <View style={GlobalStyles.containter}>
      <Text style={style.title}>Product Screen</Text>

      <Text style={style.product}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  product: {
    fontSize: 20,
    textAlign: 'center',
  },
});
