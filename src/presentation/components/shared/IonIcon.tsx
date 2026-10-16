import Icon, { IoniconsIconName } from '@react-native-vector-icons/ionicons';

interface Props {
  name: IoniconsIconName;
  color?: string;
  size?: number;
}

export const IonIcon = ({ name, size = 25, color = '#000' }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
