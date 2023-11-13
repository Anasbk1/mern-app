import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Svg, Path, Line, Circle, Defs, Pattern, Use, Image } from 'react-native-svg';
import axios from 'axios';
import ADDRESS_IP from '../API';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dataStore } from '../../store';
export default function _Dark_detailsbarberorsalonspecialist({route}) {
  const {barberId}=dataStore()
  const nonVerifiedFromRoute = route.params.nonVerified; // Extract nonVerified from route.params
  console.log(nonVerifiedFromRoute);

  const [nonVerified, setNonVerified] = useState([]); // Store nonVerified in local state

  const [tracker, setTracker] = useState(true); // State to trigger re-render

  const getAllNonVerifiedAppointments = () =>{
    axios.get(`http://${ADDRESS_IP}:3001/reservation/getAllNonVerfiedBarberReservations/${barberId}`)
    .then((response) => setNonVerified(response.data))
    .catch((err)=>console.error("err getting verified",err))
  }

  const verify = (id) => {
    axios
      .put(`http://${ADDRESS_IP}:3001/reservation/updateReservation/${id}`, {
        verified: true,
      })
      .then((response) => setTracker(!tracker)) // Update tracker state
      .catch((error) => console.error(error));
  };

  const decline = (id) => {
    axios
      .delete(`http://${ADDRESS_IP}:3001/reservation/deletereservation/${id}`)
      .then((response) => setTracker(!tracker)) // Update tracker state
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllNonVerifiedAppointments()
  }, [nonVerified]); 

  function formatDateTime(dateTimeString) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(dateTimeString).toLocaleDateString('en-US', options);

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const time = new Date(dateTimeString).toLocaleTimeString('en-US', timeOptions);

    return `${date} at ${time}`;
  }
    return (
        < ScrollView >
        
{nonVerified.map((el)=>{
  
  return(
    <View key={el.id} style={{justifyContent:"center",alignItems:"center",...styles.typeSendListComponentAccountList,marginTop: 120}}>
      
      <Text >{el.userName}</Text>
      
      <Text>{formatDateTime(el.date)}</Text>
      <View style={{ flexDirection: 'column', marginTop: 20 }}>
      <TouchableOpacity onPress={()=>verify(el.id)}>
      <View style={styles.sizeSmallTypeFilledIconNoneComponentChips}>
<Text style={styles.chips}>
{`Accept`}
</Text>
</View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>decline(el.id)}>
      <View style={styles.decline}>
<Text style={styles.chips}>
{`decline`}
</Text>
</View>
      </TouchableOpacity>
    </View>
    </View>
  )
})}     				
                 
        </ScrollView>
    )
}

const styles = StyleSheet.create({

  
 
  	
  
  	
 
 
  
  



typeSendListComponentAccountList: {
  flexShrink: 0,
  width: 380,
  flexDirection: "row",
  alignItems: "center",
  columnGap: 12
  },
  autoLayoutHorizontal: {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  flexDirection: "row",
  alignItems: "center",
  columnGap: 20
  },
  typeDefaultComponentAvatar: {
  flexShrink: 0,
  height: 60,
  width: 60,
  alignItems: "flex-start",
  rowGap: 0
  },
  ellipse: {
  position: "absolute",
  flexShrink: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: "visible"
  },
  autoLayoutVertical: {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  alignItems: "flex-start",
  rowGap: 4
  },
  name: {
  alignSelf: "stretch",
  flexShrink: 0,
  textAlign: "left",
  color: "rgba(255, 255, 255, 1)",
  
  fontSize: 18,
  fontWeight: "700",
  letterSpacing: 0,
  lineHeight: 21.600000858306885
  },
  information: {
  alignSelf: "stretch",
  flexShrink: 0,
  textAlign: "left",
  color: "rgba(224, 224, 224, 1)",

  fontSize: 18,
  fontWeight: "500",
  letterSpacing: 0.20000000298023224,
  lineHeight: 19.59999966621399
  },
  sizeSmallTypeFilledIconNoneComponentChips: {
    flexShrink: 0,
    backgroundColor: "rgba(74, 222, 128, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 100
    },
    chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
    },
    decline: {
      flexShrink: 0,
      backgroundColor: "rgba(247, 85, 85, 1)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      columnGap: 4,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 100
      },
      chips: {
      flexShrink: 0,
      textAlign: "center",
      color: "rgba(255, 255, 255, 1)",
     
      fontSize: 14,
      fontWeight: "600",
      letterSpacing: 0.20000000298023224,
      lineHeight: 19.59999966621399
      }
  	

  	

})