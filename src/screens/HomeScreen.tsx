import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContext } from 'react-navigation';
import image from '../../assets/Saly-1.png'
import { useNavigation } from '../utils'
import AppContext from "../utils/AppContext";
import formatMoney from "../utils/formatMoney";
import PortfolioCoin from '../components/PortfolioCoin';


const image1 = 'https://cdn-icons-png.flaticon.com/512/4843/4843036.png';


const portfolioCoins=[{
  id: '1',
  image: image1,
  name: 'Rupees',
  symbol: 'INR',
  amount: 69,
  currentPrice: 788
},
{
  id: '2',
  image: image1,
  name: 'Bitcoin',
  symbol: 'INR',
  amount: 699,
  currentPrice: 7828
},
{
  id: '3',
  image: image1,
  name: 'Doge coin',
  symbol: 'INR',
  amount: 469,
  currentPrice: 27838
},
{
  id: '4',
  image: image1,
  name: 'Doge coin',
  symbol: 'INR',
  amount: 469,
  currentPrice: 27838
},
{
  id: '5',
  image: image1,
  name: 'Doge coin',
  symbol: 'INR',
  amount: 469,
  currentPrice: 27838
},
{
  id: '6',
  image: image1,
  name: 'Doge coin',
  symbol: 'INR',
  amount: 469,
  currentPrice: 27838
},

]



export const HomeScreen = () => {     //{navigation}: any and onPress{()=>navigation.navigate(Home)}
  const { navigate } = useNavigation();
  
  return (
    <View style={styles.root}>
      <ScrollView>
<View style={styles.row}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={image} />
      </View>
      
      <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>₹700</Text>
      </View>
</View>

      <Text style={styles.header1}>Welcome to The App</Text>
      <Text style={styles.header2}>Invest your Crypto and complete your others</Text>

      {/* <TouchableOpacity onPress={()=>navigate('Account')}>
        <Text>Swag</Text>
      </TouchableOpacity> */}

      <>
           
            
          </>

      <FlatList
        style={{width: '100%'}}
        data={portfolioCoins}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item}  />}
        // onRefresh={fetchPortfolio}
        // refreshing={loading}
        // showsVerticalScrollIndicator={false}
        // ListHeaderComponentStyle={{alignItems: 'center'}}
        // ListHeaderComponent={() => (
          
        // )}
      />


</ScrollView>
    </View>
  );
};





const styles = StyleSheet.create({

  container:
   { 
     backgroundColor: '#000000'
    },
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 10, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 1, backgroundColor: 'cyan' },
  root: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '40%',
    aspectRatio: 1,
    alignItems: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -100,
    marginBottom: 15,
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center'
  },
  header2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707070',
  },
  root2: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '50%',
  },
  balanceContainer: {
    marginVertical: 20,
    width: '50%',
    alignItems: 'center'
    
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777777'
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

