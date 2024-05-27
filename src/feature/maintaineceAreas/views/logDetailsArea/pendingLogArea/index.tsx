import React from 'react';
import { Image, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import PendingLogCard from '../../../components/pendingLogCard';

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
    <ScrollView>
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
