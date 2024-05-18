import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SecurityApprovalListingCard from '../securityApprovalListingCard';


const securityApprovalListingCardData = [
  {
    title: 'Cab',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Bus',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Bike',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Truck',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Scooty',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Auto',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Richsaw',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'BMW',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Ferrari',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  }
];

const SecurityApprovalListSection: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <ScrollView>
      {securityApprovalListingCardData.map((item, index) =>
        <SecurityApprovalListingCard
          key={index}
          title={item.title}
          imageUri={item.imageUri}
          onReject={item.onReject}
          onApprove={item.onAccept}
        />
      )}
    </ScrollView>
  );
};

export default SecurityApprovalListSection;
