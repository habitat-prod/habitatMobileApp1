import React from 'react';
import { ScrollView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';

import SecurityApprovalListingCard from '../securityApprovalListingCard';
import { MaintainanceAreasScreens } from '../../../../constants/screens';
import { SecurityApprovalList } from '../../navigation';
import Cab from '../../../../assets/svgv1/Cab';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store/configureStore';
import { Toaster } from '../../../../utils/common';


const securityApprovalListingCardData: any[] = [
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
  let response = useSelector((state: RootState)=> state.securityApprovalReducer);

  // console.log(`Data render screen aprovalList is: ${JSON.stringify(approvalList)}`);
  // const updatedList = approvalList.data ? approvalList : [];
  // console.log(`Data render screen updatedList is: ${JSON.stringify(updatedList)}`);

    // here i'm checking the valid list to map the data
    const approvalList = response?.data?.data?.length? response.data.data 
    :
    [];

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      
      {approvalList.length>0? approvalList.map((item:any, index:any) =>
        <SecurityApprovalListingCard
          key={index}
          title={item.type}
          iconSvg={item.s3Path ? <Cab /> : <Cab />}
          imageUri={ item.s3Path || 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png'}
          onReject={()=>{Toaster(`Rejected items Id is=> ${item.id}`,3000)}}
          onApprove={()=>{Toaster(`Approved item's id is=> ${item.id}`,4000)}}
          selectedTab={selectedTab}
        />
      ):
      <Text style={{marginTop:12,fontSize:16}}>Oops! No Logs Available :(</Text>
    }
    </ScrollView>
  );
};

export default SecurityApprovalListSection;
