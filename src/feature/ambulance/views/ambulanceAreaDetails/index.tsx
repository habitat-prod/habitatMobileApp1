import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';

const AmbulanceAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View>
      <Text style={styles.textStyle}> Ambulance Area Coming Soon...</Text>
    </View>
  );
};

export default AmbulanceAreaDetails;
