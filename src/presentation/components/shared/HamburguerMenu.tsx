import { useCallback, useLayoutEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  const renderMenuButton = useCallback(
    () => <MenuButton onPress={handlePress} />,
    [handlePress],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: renderMenuButton,
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
