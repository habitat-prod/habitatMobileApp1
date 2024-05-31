import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

import PendingLogCard from '../../../components/pendingLogCard';
import useStyles from './styles';

const PendingLogArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const pendingLogCardData = [
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    },
    {
      title: 'Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum  Loreum Ipsum  Loreum Ipsum Loreum Ipsum Loreum Ipsum ',
      date: '22nd February 2024',
      onAccept: () => { },
      onReject: () => { },
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pendingLogCardData.map((item, index) =>
        <PendingLogCard
          key={index}
          title={item.title}
          date={item.date}
          onAccept={item.onAccept}
          onReject={item.onReject}
        />
      )}
    </ScrollView>
  );
};

export default PendingLogArea;
