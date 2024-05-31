import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';

import SecurityApprovalListingCard from '../securityApprovalListingCard';
import { MaintainanceAreasScreens } from '../../../../constants/screens';
import { SecurityApprovalList } from '../../navigation';
import useStyles from './styles';


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
    title: 'Horn',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Honda',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Gonda',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Monda',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  }
];

interface ISecurityApprovalListSection {
  route: RouteProp<SecurityApprovalList, MaintainanceAreasScreens.SecurityApprovals>;
}

const SecurityApprovalListSection: React.FC<ISecurityApprovalListSection> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const selectedTab = props.route.params.selectedTab;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {securityApprovalListingCardData.map((item, index) =>
        <SecurityApprovalListingCard
          key={index}
          title={item.title}
          imageUri={item.imageUri}
          onReject={item.onReject}
          onApprove={item.onAccept}
          selectedTab={selectedTab}
        />
      )}
    </ScrollView>
  );
};

export default SecurityApprovalListSection;
