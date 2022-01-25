import React,{useEffect, useState} from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";

import swag from "./data.json";
import Values from "./Values";
import Line from "./Line";
import Content from "./Content";
import Header from "./Header";
import { Candle } from "./Candle";
import Chart from "./Chart";
import axios, {AxiosResponse} from "axios"
const ws = new WebSocket('ws://stream.binance.com:9443/ws/btcusdt@trade');




const { width: size } = Dimensions.get("window");
const apiUrl = 'https://dc4e-103-211-40-66.ngrok.io/api/candlestick/symbole/YFIUSDT/interval/1m';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

export default () => {


 
  

  const [data, setData] = useState([])


  const getdata = async ()=>{
     await axios
        .get(apiUrl)
        .then((response:AxiosResponse)=>{
          setData(response.data);
        })
  }

  useEffect(()=>{
      getdata();
      ws.onopen = () => {
        // connection opened
        ws.send('something'); 
        console.log("opened")// send a message
      };
    
    
      ws.onmessage = (event) => {
        // a message was received
        console.log(event.data + " message");
      };
    
    
      ws.onerror = (e) => {
        // an error occurred
        console.log(e);
      };
    
      ws.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
      };
      
  },[])

  const [slicer,setSlicer] = useState(20);

  
  const candles = data.slice(0, slicer);
  const bars = data.slice(0, slicer);
  if(data.length>0){
  const values = candles.map(candle=> [candle.low,candle.high]).flat();
  }
  const getDomain = (rows: Candle[]): [number, number] => {
    const values = rows.map(({ high, low }) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
  };
  const domain = getDomain(candles);
  const caliber = size / candles.length;




  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Header />
        {/* <Values {...{ caliber, candles }} /> */}
      </View>
      <View  style={{paddingTop: size/3}} />
      <Chart  slicer={slicer} {...{ candles, domain, bars, setSlicer}} />
      <Content />
      </ScrollView>
    </View>
  );
};
