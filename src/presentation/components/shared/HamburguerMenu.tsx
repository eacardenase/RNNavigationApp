import { useCallback, useLayoutEffect } from 'react';
import { Pressable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { IonIcon } from './IonIcon';
import { GlobalColors } from '../../theme/theme';

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
      <IonIcon name="menu" size={35} color={GlobalColors.primary} />
    </Pressable>
  );
};
