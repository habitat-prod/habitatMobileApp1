import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native"

interface PaymentDue {
  id: string;
  title: string;
  description: string;
  amount: string;
  status: "Due" | "Paid";
}

const PaymentDuesScreen: React.FC = () => {
    const navigation = useNavigation()
  const paymentData: PaymentDue[] = [
    {
      id: "1",
      title: "Electricity Bill",
      description: "Bill due on 21-9-2024",
      amount: "₹5000",
      status: "Due",
    },
    {
      id: "2",
      title: "Water Bill",
      description: "Bill due on 21-9-2024",
      amount: "₹5000",
      status: "Due",
    },
    {
      id: "3",
      title: "Maintenance Charges",
      description: "Bill due on 21-9-2024",
      amount: "₹5000",
      status: "Due",
    },
    {
      id: "4",
      title: "Maintenance Charges",
      description: "Bill paid on 21-9-2024",
      amount: "Paid",
      status: "Paid",
    },
  ];

  const renderPaymentItem = ({ item }: { item: PaymentDue }) => (
    <TouchableOpacity style={styles.card}>
        
      <View style={styles.iconContainer}>
        <Image
          source={ require('../../assets/png/payment_dues_icon.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.amountContainer}>
        {item.status === "Due" ? (
            <View style={styles.dueBadge}>
          <Text style={styles.amount}>{item.amount}</Text>
            </View>
        ) : (
          <View style={styles.paidBadge}>
            <Text style={styles.paidText}>Paid</Text>
          </View>
        )}
      </View>

      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header} >
        <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
            <Text style={styles.headerText}>Payment Dues</Text>
                </TouchableOpacity>
          </View>
          
      <View style = {{marginTop:-100,marginHorizontal:12, backgroundColor:'#fff',borderTopLeftRadius:12,borderTopRightRadius:12}}>
        
      <FlatList
        data={paymentData}
        keyExtractor={(item) => item.id}
        renderItem={renderPaymentItem}
        contentContainerStyle={styles.listContainer}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: '#06B8C3',
    // paddingVertical: 15,
    // alignItems: 'center',
    flexDirection:'row',
    elevation:-9,
    height:200,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
    marginTop:36,
  },
  listContainer: {
    marginTop: 12,
    elevation:12,
    marginHorizontal:19
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  amountContainer: {
    alignItems: "flex-end",
    marginRight: 16,
  },
  amount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  paidBadge: {
    backgroundColor: "blue",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  paidText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  dueBadge: {
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth:1,
    borderColor:'grey',
  },
  arrowContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    fontSize: 16,
    color: "#777",
  },
});

export default PaymentDuesScreen;
