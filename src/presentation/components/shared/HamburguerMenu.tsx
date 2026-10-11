import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        MenuButton({
          onPress: () => navigation.dispatch(DrawerActions.toggleDrawer),
        }),
        // <MenuButton
        //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        // />
    });
  });

  return <></>;
};

interface Props {
  onPress: () => void;
}

const MenuButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>Menu</Text>
    </Pressable>
  );
};
