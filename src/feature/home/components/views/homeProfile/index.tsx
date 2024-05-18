import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import useStyles from './styles';

const HomeProfile: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Habitat Mobile App Coming Soon </Text>
    </View>
  );
};

export default HomeProfile;
