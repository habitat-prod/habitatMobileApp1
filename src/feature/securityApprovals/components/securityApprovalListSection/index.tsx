import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';

import SecurityApprovalListingCard from '../securityApprovalListingCard';
import { MaintainanceAreasScreens } from '../../../../constants/screens';
import { SecurityApprovalList } from '../../navigation';
import Cab from '../../../../assets/svgv1/Cab';
import useStyles from './styles';


const securityApprovalListingCardData = [
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onReject: () => { },
    onAccept: () => { },
  },
  {
    title: 'Cab',
    iconSvg: <Cab />,
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
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {securityApprovalListingCardData.map((item, index) =>
        <SecurityApprovalListingCard
          key={index}
          title={item.title}
          iconSvg={item.iconSvg}
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
