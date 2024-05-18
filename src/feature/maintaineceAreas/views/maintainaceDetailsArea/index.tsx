import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';

const MaintainaceDetailsArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View>
      <Text style={styles.textStyle}> Maintainance Area Coming Soon...</Text>
    </View>
  );
};

export default MaintainaceDetailsArea;
