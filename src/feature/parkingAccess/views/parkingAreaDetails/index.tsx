import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';

const ParkingAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View>
      <Text style={styles.textStyle}> Parking Area Coming Soon...</Text>
    </View>
  );
};

export default ParkingAreaDetails;
