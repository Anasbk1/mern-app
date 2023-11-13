import { StyleSheet, Text, View,Platform, TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import moment from "moment-timezone"
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    ANDROID_MODE,
    DAY_OF_WEEK,
    IOS_MODE,
    ANDROID_DISPLAY,
    IOS_DISPLAY,
  } from './src/constants';
import { dataStore } from '../store';
import { useNavigation } from '@react-navigation/native';
import ADDRESS_IP from './API';
import axios from 'axios';
import { MyContext } from '../useContext/useContext.js';
const MODE_VALUES = Platform.select({
    ios: Object.values(IOS_MODE),
    android: Object.values(ANDROID_MODE),
    windows: [],
  });
  const DISPLAY_VALUES = Platform.select({
    ios: Object.values(IOS_DISPLAY),
    android: Object.values(ANDROID_DISPLAY),
    windows: [],
  });
  const MINUTE_INTERVALS = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30];
const Appointement = () => {
    const context = useContext(MyContext);
    const navigation = useNavigation()
    const sourceMoment = moment.unix(1636765200);
  const sourceDate = sourceMoment.local().toDate();
  const [date, setDate] = useState(sourceDate);
  const [appointement,setAppointement]=useState(undefined);
  const [display, setDisplay] = useState(DISPLAY_VALUES[0]);
  const [time, setTime] = useState(undefined);
  const [tzOffsetInMinutes, setTzOffsetInMinutes] = useState(undefined);
  const {setAppointementDate,barberId,userId,appointementDate}=dataStore()
  console.log(appointement);
  console.log("time",time);
  const setAppointementTime= async(selected)=>{
      await  setAppointementDate(selected)
      await axios.post(`http://${ADDRESS_IP}:3001/reservation/addOne`,{
        date:time,
        barberId:barberId,
        userId:userId,
        userName:context.userName
      }).then(()=>navigation.navigate("Home")).catch(err=>console.error(err))  
    }
          return (
    <View style={styles.container}>
        {appointement?<DateTimePicker 
mode='time'
value={appointement}
onChange={(e,selected)=>{setTime(selected)}}
/>
:<DateTimePicker is24Hour={true}
value={date}
minimumDate={new Date()}
maximumDate={new Date('2024')}
onChange={(e,selected)=>setAppointement(selected)}
dateFormat={"longdate"}
display={display}
/> }
<View style={styles.confirmButtonContainer}>
<TouchableOpacity onPress={()=>setAppointementTime(time)}>
    <Text >Confirm</Text>
</TouchableOpacity>
</View>
    </View>
  )
}

export default Appointement

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "rgba(24, 26, 32, 1)",
    },
    confirmButtonContainer:{
        alignItems:"center",
        justifyContent:"center",
        
    }
})