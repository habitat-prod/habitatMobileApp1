import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';

const ReserveAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View>
      <Text style={styles.textStyle}> Reserve Common Area Details Coming Soon...</Text>
    </View>
  );
};

export default ReserveAreaDetails;
