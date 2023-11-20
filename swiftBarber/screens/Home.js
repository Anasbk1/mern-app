import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';
import { Svg, Path, Circle, G, Defs, LinearGradient, Stop, Line } from 'react-native-svg';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { ScrollView  } from 'react-native-gesture-handler';
import axios from 'axios';
import ADDRESS_IP from './API.js';
import { dataStore } from '../store.js';
import { MyContext } from '../useContext/useContext.js';
import * as Location from 'expo-location'

import { FIREBASE_AUTH } from "../Firebase/index";
export default function _Dark_homefullpage({ route }) {
  const {setUserId,userMail,setUserMail}= dataStore()
  const {userId}= dataStore()
  const navigation = useNavigation();
  const context = useContext(MyContext);
  const [ userName, setUserName ] = useState('');
  const [barbers, setBarbers] = useState([]);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);
  const [selectedBarbers, setSelectedBarbers] = useState({});
  const [barbersData, setSelectedBarbersData] = useState([]);
  const [position , setPosition] = useState({})
  const [searched,setSearched]=useState("")
  const [filteredData, setFilteredData] = useState([]);
  const [serviceType, setServiceType] = useState("all");
  // Function to toggle the bookmark style
  const toggleBookmark = (barberId) => {
    setSelectedBarbers((prevSelectedBarbers) => ({
      ...prevSelectedBarbers,
      [barberId]: !prevSelectedBarbers[barberId],
    }));
  }
  const search = (e) => {
    setSearched(e);
    const filtered = filteredData.filter((data) =>
      data.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const logOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  useEffect(() => {
    if(route.params.emailUser){
      const { emailUser } = route.params;
      setUserMail(emailUser)
    }
    (function async () {
        axios.get(`http://${ADDRESS_IP}:3001/users/email/${userMail}`).then((response) => { 
        const data = response.data;
      
          const user = data[0];
          const name = user.name;
          setUserName(name);
          console.log(user.id);
          setUserId(user.id);
          context.userName = name})
       .catch((error)=>
        console.error('Error fetching user name:', error));
      }
    )()
  }, [context]);
  
  

 

  useEffect(() => {
    fetch(`http://${ADDRESS_IP}:3001/barbers/getAllBarber`)
      .then(response => response.json())
      .then(data => {
        setBarbers(data);
        setFilteredData(data);
       
        
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    let selectedBarberIds = selectedBarbers
     selectedBarberIds = Object.keys(selectedBarbers)
      .filter(barberId => selectedBarbers[barberId]);
     
    const barbersData = barbers.filter(barber => selectedBarberIds.includes(String(barber.id)));
    setSelectedBarbersData(barbersData);
  }, [selectedBarbers, barbers]);


  

  const getUserLocation = async () => {
    try {
        // Request permission to access location
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        // Get the user's current position
        const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        // Extract latitude and longitude
        const { latitude, longitude } = location.coords;

        // Update the position state
        setPosition({ latitude, longitude });
    } catch (error) {
        console.error('Error getting user location:', error.message);
    }
};

// Call getUserLocation when the component mounts
useEffect(() => {
    getUserLocation();
  
      
  
}, []);



const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;


  return distance.toFixed(1) ;
}


const filterByServiceType = (type) => {
  setServiceType(type);
  const filtered = barbers.filter((barber) => {
    const service = barber.service;

    // Check if service is not null and has the specified type
    return type === "all" || (service && service.hasOwnProperty(type));
  });
  console.log('filtered',filtered);
  setFilteredData(filtered);  // Update the state with the filtered data
};

 
    return (
     
      
    
      <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    
    		<View style={styles._Dark_homefullpage}>
      			<View style={styles.autoLayoutVertical}>
        				<View style={styles._autoLayoutVertical}>
          					{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
          					<View style={styles.themeDarkComponentNavbar}>
            						<View style={styles.autoLayoutHorizontal}>
              							{/* RN-Flow:: can be replaced with <TypeLogoDefaultComponentLogo type={"logoDefault"} component={"logo"} /> */}
              							<View style={styles.typeLogoDefaultComponentLogo}>
                								<View style={styles.rectangle}/>
<Svg style={styles.vector} width="19" height="18" viewBox="0 0 19 18" fill="none" >
<Path d="M6.90879 17.5333C5.41499 17.5333 4.28333 17.0824 3.51379 16.1806C2.84988 15.4141 2.51793 14.3695 2.51793 13.0469C2.51793 12.1601 2.66127 11.2583 2.94796 10.3414C3.23465 9.40958 3.64959 8.47771 4.19279 7.54585C3.30255 7.24525 2.54056 6.75677 1.90683 6.08041C1.258 5.374 0.933594 4.59995 0.933594 3.75826C0.933594 2.78131 1.37872 2.04483 2.26896 1.54884C2.97814 1.15806 3.80803 0.962668 4.75863 0.962668C6.4184 0.962668 7.86694 1.49624 9.10422 2.56337C11.3525 1.16557 13.5932 0.466675 15.8263 0.466675C17.8784 0.466675 18.9045 1.00776 18.9045 2.08993C18.9045 3.14203 18.067 4.2768 16.3922 5.49424C14.0383 7.20767 11.0884 8.06438 7.54253 8.06438C7.3011 8.06438 7.05968 8.05687 6.81826 8.04184C6.59193 8.02681 6.37314 8.00427 6.16189 7.9742C4.90952 9.97321 4.28333 11.8219 4.28333 13.5203C4.28333 14.4973 4.49457 15.2863 4.91706 15.8875C5.46026 16.6691 6.2826 17.0599 7.38409 17.0599C9.39091 17.0599 11.3751 15.8875 13.3367 13.5429C14.3325 12.3404 14.8305 11.2883 14.8305 10.3865C14.8305 9.55988 14.4004 9.14655 13.5404 9.14655C12.5898 9.14655 11.3977 9.66509 9.96429 10.7022C8.69682 11.634 7.76131 12.5734 7.15776 13.5203C7.11249 13.5955 7.05968 13.633 6.99933 13.633C6.8937 13.633 6.84089 13.5579 6.84089 13.4076C6.84089 13.3475 6.84844 13.3099 6.86353 13.2949C7.33128 12.2578 8.22907 11.2357 9.55689 10.2287C10.9149 9.20667 12.1371 8.69565 13.2235 8.69565C13.9478 8.69565 14.4985 8.9211 14.8757 9.372C15.2228 9.80788 15.3963 10.3339 15.3963 10.9502C15.3963 11.4612 15.2982 11.9872 15.1021 12.5283C14.9059 13.0694 14.589 13.603 14.1515 14.129C13.3216 15.1811 12.2427 16.0078 10.9149 16.609C9.55689 17.2252 8.22153 17.5333 6.90879 17.5333ZM7.58779 7.50076C8.35733 7.50076 9.1344 7.43312 9.91902 7.29785C12.0767 6.89204 14.1137 5.99775 16.03 4.61498C17.3126 3.69814 17.9539 2.77379 17.9539 1.84193C17.9539 1.22569 17.4408 0.917577 16.4148 0.917577C14.4231 0.917577 12.3106 1.81187 10.0775 3.60045C10.2133 3.79584 10.3415 3.99123 10.4622 4.18662C10.5829 4.38201 10.6961 4.58492 10.8017 4.79534C10.8621 4.90055 10.8319 4.96819 10.7112 4.99825H10.6433C10.5226 4.99825 10.4396 4.95316 10.3943 4.86298C10.3189 4.75777 10.2208 4.63001 10.1001 4.47971C9.97938 4.31438 9.83604 4.13402 9.67006 3.93863C8.44786 4.99073 7.39918 6.15556 6.52403 7.43312C6.88616 7.47821 7.24075 7.50076 7.58779 7.50076ZM4.55493 6.95967C5.59606 5.36648 6.93897 4.01378 8.58366 2.90155C7.28601 1.8795 5.92047 1.36848 4.48703 1.36848C3.77785 1.36848 3.16675 1.54133 2.65373 1.88702C2.05017 2.30786 1.74839 2.91658 1.74839 3.71317C1.74839 5.18612 2.6839 6.26829 4.55493 6.95967Z" fill="white"/>
</Svg>

              							</View>
              							<Text style={styles.titleSection}>
                								{`SwiftB`}
              							</Text>
            						</View>
            						<View style={styles._autoLayoutHorizontal}>
              							{/* RN-Flow:: can be replaced with <IconlyCurvedNotification  /> */}
              							<View style={styles.iconlyCurvedNotification}>
<Svg style={styles.group} width="20" height="24" viewBox="0 0 20 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M9.99472 0.933228C4.82139 0.933228 2.57361 5.61767 2.57361 8.71434C2.57361 11.0288 2.90917 10.3477 1.62806 13.171C0.0636125 17.1943 6.35472 18.8388 9.99472 18.8388C13.6336 18.8388 19.9247 17.1943 18.3614 13.171C17.0803 10.3477 17.4158 11.0288 17.4158 8.71434C17.4158 5.61767 15.1669 0.933228 9.99472 0.933228Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.6888 21.9309C11.1788 23.6176 8.82327 23.6376 7.29883 21.9309" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
              							{/* RN-Flow:: can be replaced with <IconlyCurvedBookmark  /> */}
              							<View style={styles.iconlyCurvedBookmark}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Saved',{ barbersData,getUserLocation,calculateDistance,position })}>
      <Svg style={styles._group} width="20" height="24" viewBox="0 0 20 24" fill="none">
        <Path d="M5.9668 8.75399H13.9643" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M9.96528 0.916626C2.51378 0.916626 1.25495 2.00396 1.25495 10.7505C1.25495 20.5423 1.07178 23.0833 2.93378 23.0833C4.79462 23.0833 7.83378 18.7853 9.96528 18.7853C12.0968 18.7853 15.1359 23.0833 16.9968 23.0833C18.8588 23.0833 18.6756 20.5423 18.6756 10.7505C18.6756 2.00396 17.4168 0.916626 9.96528 0.916626Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </TouchableOpacity>
    {/* <TouchableOpacity onPress={()=>logOut()}><Icon name='logout' size={30} color="white"/></TouchableOpacity> */}
              							</View>
            						</View>
          					</View>
          					<Text style={styles.morningDaniel}>
            						{`Hello, ${userName} 👋`}
          					</Text>
          					{/* RN-Flow:: can be replaced with <StateDefaultSearchThemeDarkComponentSearch state={"defaultSearch"} theme={"dark"} component={"search"} /> */}
          					<View style={styles.stateDefaultSearchThemeDarkComponentSearch}>
            						{/* RN-Flow:: can be replaced with <IconlyLightSearch  /> */}
            						<View style={styles.iconlyLightSearch}>
<Svg style={styles.__group} width="18" height="19" viewBox="0 0 18 19" fill="none" >
<Circle cx="8.80492" cy="8.80553" r="7.49047" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.0156 14.4043L16.9523 17.3334" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
                     
            						{/* RN-Flow:: can be replaced with <IconlyLightFilter  /> */}
    
                        <TextInput
      value={searched}
      placeholder="Search"
      onChangeText={(e) => search(e)}
      style={{ width: 200, height: 40, borderColor: 'gray', }}
    />
            						
          					</View>
          			
          					<View style={styles.____autoLayoutHorizontal}>  
            						<View style={styles._____autoLayoutVertical}>
              							<View style={styles._____autoLayoutHorizontal}>
                								<View style={styles._frame}>
<Svg style={styles._vector} width="11" height="9" viewBox="0 0 11 9" fill="none" >
<Path d="M4.66003 8.25C5.54953 8.25068 6.41279 7.94866 7.10785 7.39359L9.37738 8.31726L9.75035 7.62656C9.81746 7.50296 9.8966 7.38628 9.9866 7.2782L10.7643 6.48961L8.51277 5.1257C8.68082 4.32957 8.59809 3.50093 8.27598 2.75373C7.95386 2.00654 7.40818 1.37748 6.71396 0.953067C6.01974 0.528655 5.21109 0.329734 4.39921 0.383659C3.58732 0.437584 2.81208 0.741706 2.18009 1.2542C1.5481 1.7667 1.09041 2.4624 0.869944 3.24564C0.64948 4.02888 0.677077 4.86118 0.94894 5.62809C1.2208 6.395 1.72358 7.05886 2.38813 7.52836C3.05268 7.99787 3.84636 8.24997 4.66003 8.25ZM4.66003 2.125C5.09268 2.125 5.51561 2.2533 5.87534 2.49366C6.23508 2.73403 6.51545 3.07567 6.68102 3.47538C6.84659 3.87509 6.88991 4.31493 6.8055 4.73926C6.7211 5.16359 6.51276 5.55337 6.20683 5.8593C5.9009 6.16522 5.51113 6.37356 5.08679 6.45797C4.66246 6.54237 4.22263 6.49905 3.82291 6.33349C3.4232 6.16792 3.08156 5.88754 2.84119 5.52781C2.60083 5.16808 2.47253 4.74515 2.47253 4.3125C2.47253 3.73234 2.703 3.17594 3.11324 2.7657C3.52347 2.35547 4.07987 2.125 4.66003 2.125Z" fill="url(#paint0_linear_849_13587)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13587" x1="10.7643" y1="8.31726" x2="-0.654374" y2="4.13143" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

<Svg style={styles.__vector} width="26" height="17" viewBox="0 0 26 17" fill="none" >
<Path d="M25.2499 2.24219L24.948 1.55422C24.703 0.984374 24.1419 0.679218 23.1554 0.578047C22.6019 0.523359 21.6815 0.510234 20.4379 0.786406C19.3442 1.02977 13.7584 2.32859 11.4172 3.99219C10.3098 4.77914 10.1015 5.83352 9.9374 6.68062C9.78537 7.45391 9.66396 8.06476 8.95303 8.59469C8.13271 9.20391 7.4617 9.49047 7.11662 9.61187C6.38701 9.03263 5.47509 8.73191 4.54404 8.76353C3.61299 8.79515 2.72357 9.15704 2.03494 9.78445C1.3463 10.4119 0.903398 11.2638 0.785474 12.1879C0.66755 13.112 0.882304 14.0479 1.39131 14.8282C1.90031 15.6084 2.67034 16.1821 3.56362 16.4465C4.45689 16.7109 5.41511 16.6488 6.2668 16.2714C7.11849 15.8939 7.80809 15.2257 8.21217 14.3863C8.61626 13.5469 8.70848 12.5912 8.47232 11.69L25.2499 2.24219ZM12.9715 7C12.7984 7 12.6292 6.94868 12.4853 6.85254C12.3414 6.75639 12.2293 6.61973 12.1631 6.45985C12.0968 6.29996 12.0795 6.12403 12.1133 5.9543C12.147 5.78456 12.2304 5.62865 12.3527 5.50628C12.4751 5.38391 12.631 5.30057 12.8008 5.26681C12.9705 5.23305 13.1464 5.25038 13.3063 5.3166C13.4662 5.38283 13.6029 5.49498 13.699 5.63888C13.7951 5.78277 13.8465 5.95194 13.8465 6.125C13.8465 6.35706 13.7543 6.57962 13.5902 6.74372C13.4261 6.90781 13.2035 7 12.9715 7ZM4.65896 14.875C4.22632 14.875 3.80339 14.7467 3.44366 14.5063C3.08392 14.266 2.80355 13.9243 2.63798 13.5246C2.47241 13.1249 2.42909 12.6851 2.5135 12.2607C2.5979 11.8364 2.80624 11.4466 3.11217 11.1407C3.4181 10.8348 3.80787 10.6264 4.2322 10.542C4.65654 10.4576 5.09637 10.5009 5.49608 10.6665C5.8958 10.8321 6.23744 11.1125 6.4778 11.4722C6.71817 11.8319 6.84646 12.2549 6.84646 12.6875C6.84646 13.2677 6.616 13.8241 6.20576 14.2343C5.79552 14.6445 5.23913 14.875 4.65896 14.875Z" fill="url(#paint0_linear_849_13588)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13588" x1="25.2499" y1="16.6078" x2="-1.18028" y2="4.92038" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

<Svg style={styles.___vector} width="13" height="6" viewBox="0 0 13 6" fill="none" >
<Path d="M4.80024 0.21167L0.220703 2.84651L1.73172 3.56183L1.92969 3.65698C2.95234 4.1519 5.6725 5.46878 8.45008 5.63284C8.66281 5.64542 8.85859 5.65143 9.03961 5.65143C10.1711 5.64979 10.7727 5.3594 11.1418 5.14065L12.2492 4.37503L4.80024 0.21167Z" fill="url(#paint0_linear_849_13589)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13589" x1="12.2492" y1="5.65144" x2="1.25301" y2="-1.39849" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

                								</View>
              							</View>
              							<Text style={styles.haircuts}>
                								{`Haircuts`}
              							</Text>
            						</View>
            						<View style={styles.______autoLayoutVertical}>
              							<View style={styles.______autoLayoutHorizontal}>
                								<View style={styles.__frame}>
<Svg style={styles.____vector} width="24" height="26" viewBox="0 0 24 26" fill="none" >
<Path d="M0.581448 19.8445C1.27865 20.3709 2.81305 18.1953 3.30025 18.5635C3.78745 18.9317 2.15225 21.0303 2.56105 21.3383C2.96985 21.6463 4.67925 19.6037 5.15385 19.9607C5.62705 20.3177 4.02965 22.4443 4.54205 22.8321C5.05585 23.2199 6.72885 21.1493 7.13485 21.4559C7.54085 21.7625 6.05265 23.9717 6.52305 24.3259C6.99345 24.6815 8.59645 22.5577 8.98705 22.8531C9.37905 23.1485 7.80545 25.2933 8.50265 25.8197C9.19985 26.3447 16.0206 13.2701 16.0206 13.2701L10.5942 9.15553C10.5942 9.15553 -0.115752 19.3195 0.581448 19.8445ZM16.232 0.16333L11.5252 7.38173L17.2946 11.7343L23.449 5.78993C22.7112 3.68573 18.633 0.40973 16.232 0.16333Z" fill="url(#paint0_linear_849_13594)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13594" x1="23.449" y1="25.8351" x2="-4.23874" y2="18.674" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

                								</View>
              							</View>
              							<Text style={styles.makeup}>
                								{`Make up`}
              							</Text>
            						</View>
            						<View style={styles._______autoLayoutVertical}>
              							<View style={styles._______autoLayoutHorizontal}>
                								<View style={styles.___frame}>
<Svg style={styles._____vector} width="24" height="28" viewBox="0 0 24 28" fill="none" >
<Path d="M8.91258 8.14494C7.83327 7.58188 6.77977 7.39419 6.11477 7.86625C5.64489 8.20094 5.43708 8.82437 5.42702 9.57862C4.33262 8.52647 3.44768 7.27632 2.81908 5.89444V0.875H0.814892V5.89619H0.824955C0.479767 7.08444 0.184892 8.47788 0.187517 9.78731C0.191017 12.4298 2.26039 13.7598 3.94389 13.7598C3.96795 13.7598 3.98983 13.7546 4.01389 13.7541C4.29512 13.7511 4.57419 13.7046 4.8412 13.6163L4.85652 13.6102C5.13258 13.5144 5.3802 13.3752 5.57752 13.1819C5.57752 13.1819 5.28527 12.9758 4.85039 12.5571C5.12295 12.5768 5.42133 12.5703 5.71927 12.5379C5.9472 13.615 6.44027 14.7678 6.8327 15.2998L15.4488 27.125H17.5528L9.75652 15.792C10.359 15.7784 10.9408 15.5409 11.4807 15.1568C12.8129 14.2109 13.3878 12.7588 11.8679 10.6912C11.515 10.2189 11.1156 9.78334 10.6757 9.39094C11.2108 9.73044 11.867 10.2935 12.581 11.2206C15.2489 14.6781 23.8125 26.5046 23.8125 26.5046V24.9537C23.8125 24.9537 15.9778 14.1676 13.3025 10.6991C11.4584 8.30813 9.64495 7.77394 8.91258 8.14494ZM2.23852 11.5828C2.67164 12.6766 4.45752 13.1963 4.45752 13.1963C3.32352 13.8337 0.522642 12.3021 0.519142 9.78688C0.517392 8.48488 0.82058 7.08138 1.17102 5.89575H1.69558C2.78233 9.63594 5.42614 10.6024 5.42614 10.6024C4.30789 10.6024 2.99583 10.2668 2.99583 10.2668C4.10664 11.5386 6.47177 11.7915 6.47177 11.7915C4.40108 12.243 2.23852 11.5828 2.23852 11.5828ZM11.3753 10.8977C12.7381 12.7496 12.158 13.7935 11.7135 14.1094C11.2698 14.4248 11.3066 13.7677 9.94377 11.9149C8.58008 10.0634 6.58027 8.41663 7.02477 8.10119C7.46883 7.78662 10.0125 9.04575 11.3753 10.8977ZM22.6514 10.1561C22.7485 10.3123 23.8125 12.1796 23.8125 12.18V10.3429C23.8125 10.3429 23.5211 9.86344 23.421 9.70506C22.2673 7.861 20.7456 6.84644 19.8383 6.797C19.6322 6.78737 19.476 6.82762 19.3605 6.8845C18.4076 6.30131 17.4574 6.062 16.8064 6.447C16.0381 6.90112 15.8535 8.11956 16.074 9.47013C15.7936 10.6343 16.3877 12.7693 16.879 13.5712L23.8125 24.5219V21.4931L19.6554 14.2708C20.2167 14.2957 20.7771 14.1164 21.3105 13.8014C22.6536 13.0069 23.3203 11.6729 22.0428 9.5865C21.7765 9.15706 21.4713 8.75301 21.1311 8.37944C21.6036 8.7675 22.1386 9.33756 22.6514 10.1561ZM21.6171 12.8244C21.1705 13.0883 21.2593 12.4661 20.1148 10.598C18.9698 8.72944 17.2045 7.00612 17.6512 6.74187C18.0988 6.47719 20.4136 7.87587 21.5572 9.744C22.7026 11.6126 22.0669 12.5593 21.6171 12.8244Z" fill="url(#paint0_linear_849_13599)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13599" x1="23.8125" y1="27.125" x2="-4.71952" y2="19.6797" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

<Svg style={styles.______vector} width="14" height="10" viewBox="0 0 14 10" fill="none" >
<Path d="M3.40715 0.407447L3.41327 0.415321C2.3204 -0.0641788 1.27258 -0.180116 0.66446 0.327384C-0.0184779 0.898759 0.0020847 2.13207 0.443085 3.4297C0.360835 4.6232 1.29927 6.63263 1.91702 7.34532L3.35902 9.12507H5.71408L4.54333 7.60738C5.18777 7.5982 5.78933 7.31339 6.32658 6.86407C7.52052 5.86526 7.95715 4.44163 6.35152 2.58838C6.01071 2.19463 5.60996 1.82276 5.18165 1.48851C5.70883 1.78995 6.35896 2.28476 7.04977 3.05432C8.37408 4.53045 12.3063 9.12507 12.3063 9.12507H13.4508C13.4508 9.12507 9.0614 3.96651 7.72921 2.48295C6.1389 0.711072 4.24277 -0.200678 3.40715 0.407447ZM5.89958 2.82113C7.33765 4.48188 6.86602 5.51745 6.46877 5.8517C6.07065 6.18332 6.05533 5.55551 4.6164 3.89476C3.17833 2.23401 1.1514 0.816947 1.54777 0.483135C1.94502 0.150197 4.46065 1.16126 5.89958 2.82113Z" fill="url(#paint0_linear_849_13600)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13600" x1="13.4508" y1="9.12507" x2="-1.12378" y2="2.95757" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

                								</View>
              							</View>
              							<Text style={styles.manicure}>
                								{`Manicure`}
              							</Text>
            						</View>
            						<View style={styles.________autoLayoutVertical}>
              							<View style={styles.________autoLayoutHorizontal}>
                								<View style={styles.____frame}>
<Svg style={styles._______vector} width="28" height="24" viewBox="0 0 28 24" fill="none" >
<Path d="M26.4499 20.9601H17.3605V23.2001H26.5429C26.7453 23.21 26.945 23.1501 27.1084 23.0303C27.2719 22.9105 27.3891 22.7381 27.4405 22.5421V21.9989C27.4405 21.9989 27.4338 20.9601 26.4499 20.9601ZM25.1927 20.5177C25.7894 20.5168 26.3613 20.279 26.7828 19.8567C27.2043 19.4344 27.4408 18.862 27.4405 18.2653C27.4405 17.0182 26.4325 16.0125 25.1927 16.0125C24.8974 16.013 24.6052 16.0717 24.3326 16.1852C24.0601 16.2987 23.8125 16.4648 23.6042 16.674C23.3959 16.8833 23.2308 17.1315 23.1184 17.4045C23.0061 17.6776 22.9486 17.9701 22.9493 18.2653C22.9493 19.508 23.9545 20.5177 25.1927 20.5177ZM20.4585 20.4001C21.6378 20.4001 22.5865 19.569 22.5865 18.3913C22.5859 17.2159 21.6339 16.5993 20.4635 16.5904L17.3605 16.9835V20.4001H20.4585ZM10.3734 5.80253C11.7505 5.80253 12.8643 4.68253 12.8643 3.30101C12.8643 1.91949 11.7505 0.800049 10.3734 0.800049C8.99751 0.800049 7.88199 1.91949 7.88199 3.30101C7.88199 4.68253 8.99751 5.80253 10.3734 5.80253ZM7.82991 13.8979L7.80751 13.8654L6.67855 11.2368L6.67687 16.4801H10.0509L10.7878 15.6961L8.78919 14.9266C8.31543 14.7485 7.97887 14.3453 7.82991 13.8979ZM8.54503 13.6621C8.65423 13.9074 8.85639 14.1062 9.11063 14.1975L12.9617 15.6249C13.0791 15.6766 13.2054 15.7045 13.3336 15.7072C13.4618 15.7098 13.5892 15.6871 13.7086 15.6404C13.8279 15.5937 13.9369 15.5238 14.0292 15.4349C14.1215 15.3459 14.1953 15.2396 14.2464 15.1221C14.3506 14.8838 14.3564 14.614 14.2624 14.3715C14.1684 14.129 13.9822 13.9336 13.7446 13.8279L10.1914 12.4861L9.09383 9.85357L9.80951 9.58701L10.7397 11.8427L13.4405 12.844V10.0876L14.8741 10.9405L15.5887 14.5402C15.6299 14.662 15.6947 14.7744 15.7796 14.871C15.8645 14.9676 15.9676 15.0463 16.0831 15.1028C16.1986 15.1592 16.3242 15.1922 16.4525 15.1999C16.5808 15.2075 16.7094 15.1896 16.8308 15.1473C17.0752 15.0603 17.2755 14.8805 17.3882 14.6468C17.5009 14.4131 17.5169 14.1444 17.4328 13.899L16.632 10.4321C16.5795 10.2401 16.4697 10.0688 16.3173 9.94093C15.9068 9.48621 13.8309 7.16501 13.683 7.00989C13.4663 6.79261 12.9707 6.40005 12.0344 6.40005H8.67439C6.76479 6.40005 6.39743 8.34885 6.78775 9.34005L8.54503 13.6621ZM16.8005 17.0401H1.66207C1.11103 17.0401 0.560547 17.3509 0.560547 18.0346V23.2001H16.8005V17.0401Z" fill="url(#paint0_linear_849_13605)"/>
<Defs>
<LinearGradient id="paint0_linear_849_13605" x1="27.4405" y1="23.2011" x2="-3.48923" y2="12.4403" gradientUnits="userSpaceOnUse">
<Stop stopColor="#FB9400"/>
<Stop offset="1" stopColor="#FFAB38"/>
</LinearGradient>
</Defs>
</Svg>

                								</View>
              							</View>
              							<Text style={styles.massage}>
                								{`Massage`}
              							</Text>
            						</View>
          					</View>
          					{/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
          					<View style={styles.themeDarkDivider}>
<Svg style={styles.line} width="380" height="1" viewBox="0 0 380 1" fill="none" >
<Line y1="0.5" x2="380" y2="0.5" stroke="#35383F"/>
</Svg>

          					</View>
          					<View style={styles._________autoLayoutHorizontal}>
            						<Text style={styles.nearbyYourLocation}>
              							{`Our barbers`}
            						</Text>
            						<Text style={styles.seeAll}>
              							{`See All`}
            						</Text>
          					</View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          					<View style={styles.__________autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <SizeMediumTypeFilledIconNoneComponentChips size={"medium"} type={"filled"} icon={"none"} component={"chips"} /> */}
                        
                        <View style={styles.sizeMediumTypeFilledIconNoneComponentChips}>
  <TouchableOpacity onPress={() => filterByServiceType("all")}>
    <Text style={styles.chips}>
      {`All`}
    </Text>
  </TouchableOpacity>
</View>

<View style={styles.sizeMediumTypeBorderIconNoneComponentChips}>
  <TouchableOpacity onPress={() => filterByServiceType("haircut")}>
    <Text style={styles._chips}>
      {`Haircuts`}
    </Text>
  </TouchableOpacity>
</View>

<View style={styles._sizeMediumTypeBorderIconNoneComponentChips}>
  <TouchableOpacity onPress={() => filterByServiceType("makeUp")}>
    <Text style={styles.__chips}>
      {`Make up`}
    </Text>
  </TouchableOpacity>
</View>

<View style={styles.__sizeMediumTypeBorderIconNoneComponentChips}>
  <TouchableOpacity onPress={() => filterByServiceType("manicure")}>
    <Text style={styles.___chips}>
      {`Manicure`}
    </Text>
  </TouchableOpacity>

</View>


<View style={styles.___sizeMediumTypeBorderIconNoneComponentChips}>
  <TouchableOpacity onPress={() => filterByServiceType("massage")}>
    <Text style={styles.____chips}>
      {`Massage`}
    </Text>
  </TouchableOpacity>
</View>
</View>
</ScrollView>

                    {filteredData.map((barber) => (
      <View style={styles.themeDarkComponentBarberandSalonList} key={barber.id}>
        <View style={styles.maskGroup}>  
        <View style={styles.mask} />
          <TouchableOpacity onPress={() => navigation.navigate('BarberDetail',barber={barber})}>
          
            <ImageBackground
              style={styles.______rectangle}
              source={{ uri: barber.image }}
            />
          </TouchableOpacity>
          </View>
        <View style={styles.__________autoLayoutVertical}>
          <View style={styles.___________autoLayoutHorizontal}>
            <Text style={styles.barberSalonName}>{barber.name}</Text>
            <TouchableHighlight onPress={() => toggleBookmark(barber.id)}>
      <View style={selectedBarbers[barber.id] ? styles.iconlyBoldBookmark : styles.iconlyLightBookmark}>
        <Svg style={styles.group} width="16" height="20" viewBox="0 0 16 20" fill="none">
          <Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill={ selectedBarbers[barber.id]? '#FB9400' : 'none'} stroke={selectedBarbers[barber.id] ? 'none' : '#FB9400'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
    </TouchableHighlight>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Svg style={{...styles.group, marginLeft: -17}} width="12" height="14" viewBox="0 0 12 14" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87867C0.333984 2.81209 2.89657 0.333496 5.99628 0.333496C9.10473 0.333496 11.6673 2.81209 11.6673 5.87867C11.6673 7.42396 11.1053 8.85858 10.1803 10.0745C9.15985 11.4158 7.90209 12.5845 6.48635 13.5018C6.16233 13.7138 5.8699 13.7298 5.51428 13.5018C4.09047 12.5845 2.83271 11.4158 1.82098 10.0745C0.895307 8.85858 0.333984 7.42396 0.333984 5.87867ZM4.13014 6.05133C4.13014 7.07863 4.96842 7.88661 5.99628 7.88661C7.02481 7.88661 7.87117 7.07863 7.87117 6.05133C7.87117 5.03203 7.02481 4.18472 5.99628 4.18472C4.96842 4.18472 4.13014 5.03203 4.13014 6.05133Z" fill="#FB9400" />
  </Svg>
  <Text style={styles.barberSalonAddress}> {calculateDistance( position.latitude, position.longitude, parseFloat(JSON.parse(barber.location).latitude), parseFloat(JSON.parse(barber.location).longitude) )} km </Text>
</View>

          <View style={styles.____________autoLayoutHorizontal}>
            {/* Your other components */}
          </View>
        </View>
      </View>
    ))}

          				
          					
          					<View style={styles._____________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <___themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						
            						{/* RN-Flow:: can be replaced with <____themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            					
            						{/* RN-Flow:: can be replaced with <_____themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            					
          					</View>
        				</View>
      			</View>
      			{/* RN-Flow:: can be replaced with <ActiveMenuDarkHomeComponentBottomBar activeMenu={"darkHome"} component={"bottomBar"} /> */}
      			<View style={styles.activeMenuDarkHomeComponentBottomBar}>
        				<View style={styles.___________________________________________autoLayoutHorizontal}>
          					<View style={styles._________________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <IconlyBoldHome  /> */}
            						<View style={styles.iconlyBoldHome}>
<Svg style={styles._______________________group} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M6.93556 18.7733V15.7156C6.93556 14.9351 7.57295 14.3023 8.35922 14.3023H11.2334C11.611 14.3023 11.9731 14.4512 12.2401 14.7163C12.5071 14.9813 12.657 15.3408 12.657 15.7156V18.7733C12.6547 19.0978 12.7828 19.4099 13.0132 19.6402C13.2435 19.8705 13.5568 20 13.8837 20H15.8446C16.7604 20.0023 17.6395 19.6428 18.288 19.0008C18.9364 18.3588 19.3008 17.487 19.3008 16.5778V7.86686C19.3008 7.13246 18.9729 6.43584 18.4054 5.96467L11.7348 0.675869C10.5744 -0.251438 8.91189 -0.221498 7.78617 0.746979L1.26779 5.96467C0.673522 6.42195 0.318334 7.12064 0.300781 7.86686V16.5689C0.300781 18.4639 1.84816 20 3.75695 20H5.67307C6.35201 20 6.90378 19.4562 6.9087 18.7822L6.93556 18.7733Z" fill="#FB9400"/>
</Svg>

            						</View>
            						<Text style={styles.home}>
              							{`Home`}
            						</Text>
          					</View>
          					<View style={styles.__________________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <IconlyLightLocation  /> */}
            					  <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
      <View style={styles.iconlyLightLocation}>
        <Svg style={styles.________________________group} width="17" height="20" viewBox="0 0 17 20" fill="none">
          <Path fillRule="evenodd" clipRule="evenodd" d="M10.9004 8.50051C10.9004 7.11924 9.78115 6 8.4009 6C7.01963 6 5.90039 7.11924 5.90039 8.50051C5.90039 9.88076 7.01963 11 8.4009 11C9.78115 11 10.9004 9.88076 10.9004 8.50051Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M8.3999 19C7.20143 19 0.900391 13.8984 0.900391 8.56329C0.900391 4.38664 4.25749 1 8.3999 1C12.5423 1 15.9004 4.38664 15.9004 8.56329C15.9004 13.8984 9.59838 19 8.3999 19Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
    </TouchableOpacity>
            						<Text style={styles.explore}>
              							{`Explore`}
            						</Text>
          					</View>
          					<View style={styles.___________________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <IconlyLightDocument  /> */}
                        <TouchableOpacity onPress={()=> navigation.navigate('MySchedule')}>
      <View style={styles.iconlyLightDocument}>
        <Svg style={styles._________________________group} width="19" height="20" viewBox="0 0 19 20" fill="none">
          <Path d="M12.7161 14.2234H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M12.7161 10.0369H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M8.25109 5.86011H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.749756C12.908 0.749756 5.231 0.753756 5.219 0.753756C2.459 0.770756 0.75 2.58676 0.75 5.35676V14.5528C0.75 17.3368 2.472 19.1598 5.256 19.1598C5.256 19.1598 12.932 19.1568 12.945 19.1568C15.705 19.1398 17.415 17.3228 17.415 14.5528V5.35676C17.415 2.57276 15.692 0.749756 12.908 0.749756Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
    </TouchableOpacity>
            						<Text style={styles.myBooking}>
              							{`My Booking`}
            						</Text>
          					</View>
          					<View style={styles.____________________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <IconlyLightChat  /> */}
            						<View style={styles.iconlyLightChat}>
<Svg style={styles.__________________________group} width="23" height="22" viewBox="0 0 23 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6729 18.0699C15.6168 21.1263 11.0913 21.7867 7.38798 20.074C6.84127 19.8539 6.39305 19.676 5.96693 19.676C4.78005 19.683 3.30273 20.8339 2.53492 20.067C1.76712 19.2991 2.91883 17.8206 2.91883 16.6266C2.91883 16.2004 2.74798 15.7602 2.52789 15.2124C0.814393 11.5096 1.47567 6.98269 4.53182 3.92721C8.43316 0.0244319 14.7716 0.0244322 18.6729 3.9262C22.5813 7.83501 22.5743 14.1681 18.6729 18.0699Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.5404 11.4131H15.5494" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5326 11.4131H11.5416" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.52284 11.4131H7.53184" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
            						<Text style={styles.inbox}>
              							{`Inbox`}
            						</Text>
          					</View>
          					<View style={styles._____________________autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <IconlyLightProfile  /> */}
                        <TouchableOpacity onPress={()=> navigation.navigate('UpdateUser')}>
            						<View style={styles.iconlyLightProfile} >
<Svg style={styles.___________________________group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M8.1861 13.3462C4.31848 13.3462 1.01562 13.931 1.01562 16.2729C1.01562 18.6148 4.29753 19.2205 8.1861 19.2205C12.0537 19.2205 15.3556 18.6348 15.3556 16.2938C15.3556 13.9529 12.0747 13.3462 8.1861 13.3462Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.18606 10.0059C10.7242 10.0059 12.7813 7.94779 12.7813 5.40969C12.7813 2.8716 10.7242 0.814453 8.18606 0.814453C5.64797 0.814453 3.58987 2.8716 3.58987 5.40969C3.5813 7.93922 5.62511 9.99731 8.15368 10.0059H8.18606Z" stroke="#9E9E9E" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
            						<Text style={styles.profile}>
              							{`Profile`}
            						</Text>
                      </TouchableOpacity>
          					</View>
        				</View>
                           
        				{/* RN-Flow:: can be replaced with <HomeIndicator  /> */}
        				<View style={styles.homeIndicator}>
<Svg style={styles.________vector} width="134" height="5" viewBox="0 0 134 5" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H131.5C132.881 0 134 1.11929 134 2.5C134 3.88071 132.881 5 131.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#424242"/>
</Svg>

        				</View>
      			</View>
    		</View>  
        </View> 
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
  	_Dark_homefullpage: {
    flexShrink: 0,
    height: 1760,
    width: 428,
    backgroundColor: "rgba(24, 26, 32, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	autoLayoutVertical: {
    position: "absolute",
    flexShrink: 0,
    top: 44,
    left: 0,
    right: 0,
    alignItems: "center",
    rowGap: 24,
    padding: 24
},
  	_autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	themeDarkComponentNavbar: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingVertical: 12,
    paddingHorizontal: 0
},
  	autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	typeLogoDefaultComponentLogo: {
    flexShrink: 0,
    height: 32,
    width: 32,
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 360
},
  	rectangle: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 12
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    right: 7,
    bottom: 7,
    left: 7,
    overflow: "visible"
},
  	titleSection: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
},
  	_autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 20
},
  	iconlyCurvedNotification: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 22,
    left: 5,
    width: 17
},
  	iconlyCurvedBookmark: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 22,
    left: 5,
    width: 17
},
  	morningDaniel: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 35.20000076293945
},
  	stateDefaultSearchThemeDarkComponentSearch: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 56,
    backgroundColor: "rgba(31, 34, 42, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 12
},
  	iconlyLightSearch: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	__group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 16,
    left: 2,
    width: 16
},
  	search: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(117, 117, 117, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	iconlyLightFilter: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	___group: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    height: 12,
    left: 3,
    width: 13
},
  	frame: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 181,
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 32
},
  	____group: {
    position: "absolute",
    flexShrink: 0,
    top: -109,
    height: 400,
    left: -50,
    width: 480
},
  	__autoLayoutVertical: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 16,
    padding: 32,
    borderRadius: 32
},
  	__autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12
},
  	___autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	oFF: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	todaysSpecial: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
},
  	____autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    rowGap: 8
},
  	myVar: {
    flexShrink: 0,
    textAlign: "right",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 52.80000114440918
},
  	getadiscountforeveryserviceorderOnlyvalidfortoday: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	___autoLayoutHorizontal: {
    position: "absolute",
    flexShrink: 0,
    bottom: 12,
    left: 164,
    right: 164,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5
},
  	_rectangle: {
    flexShrink: 0,
    width: 16,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 100
},
  	__rectangle: {
    flexShrink: 0,
    width: 4,
    height: 4,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	___rectangle: {
    flexShrink: 0,
    width: 4,
    height: 4,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	____rectangle: {
    flexShrink: 0,
    width: 4,
    height: 4,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	_____rectangle: {
    flexShrink: 0,
    width: 4,
    height: 4,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	____autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 20
},
  	_____autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 12
},
  	_____autoLayoutHorizontal: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 100
},
  	_frame: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 16,
    bottom: 16,
    left: 2,
    overflow: "visible"
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 2,
    bottom: 4,
    left: 2,
    overflow: "visible"
},
  	___vector: {
    position: "absolute",
    flexShrink: 0,
    top: 14,
    right: 2,
    bottom: 8,
    left: 14,
    overflow: "visible"
},
  	haircuts: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	______autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 12
},
  	______autoLayoutHorizontal: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 100
},
  	__frame: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	____vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 3,
    bottom: 1,
    left: 3,
    overflow: "visible"
},
  	makeup: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_______autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 12
},
  	_______autoLayoutHorizontal: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 100
},
  	___frame: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 2,
    bottom: 1,
    left: 2,
    overflow: "visible"
},
  	______vector: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    right: 12,
    bottom: 1,
    left: 3,
    overflow: "visible"
},
  	manicure: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 12
},
  	________autoLayoutHorizontal: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    padding: 16,
    borderRadius: 100
},
  	____frame: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______vector: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 1,
    bottom: 3,
    left: 1,
    overflow: "visible"
},
  	massage: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	themeDarkDivider: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	line: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	_________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	nearbyYourLocation: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24.000000953674316
},
  	seeAll: {
    flexShrink: 0,
    textAlign: "right",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	__________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	sizeMediumTypeFilledIconNoneComponentChips: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 100
},
  	chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	_chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	__chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	__sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	___chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	___sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	____chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	______rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	__________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	___________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 4,
    width: 16
},
  	barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	____________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	_____________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	______group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	______________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_______________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	_8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	_maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	_mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_______rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	___________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	_barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	iconlyLightBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 19,
    left: 4,
    width: 16
},
  	_barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	__________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	_km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	___________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	____________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	_iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	__8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	__themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	__maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	__mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	________rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	____________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	_____________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	__barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	_iconlyLightBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 19,
    left: 4,
    width: 16
},
  	__barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	______________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	_______________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	__iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	__km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	__iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	___8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	__________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	mostPopular: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24.000000953674316
},
  	_seeAll: {
    flexShrink: 0,
    textAlign: "right",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	___________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	_sizeMediumTypeFilledIconNoneComponentChips: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 100
},
  	_____chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	____sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	______chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_____sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	_______chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	______sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	________chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_______sizeMediumTypeBorderIconNoneComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	_________chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_____________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	___themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	___maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	___mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_________rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	______________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	____________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	___barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	__iconlyLightBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	______________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 19,
    left: 4,
    width: 16
},
  	___barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_____________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	______________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	___iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	___km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	___iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	____8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	____themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	____maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	____mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	__________rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_______________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	_________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	____barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	_iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 4,
    width: 16
},
  	____barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	__________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	___________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	____iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	____km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	____________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_____________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	____iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	_____8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_____themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    padding: 16,
    borderRadius: 20
},
  	_____maskGroup: {
    flexShrink: 0,
    height: 80,
    width: 80
},
  	_____mask: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	___________rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	______________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 40
},
  	_____barberSalonName: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	___iconlyLightBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 19,
    left: 4,
    width: 16
},
  	_____barberSalonAddress: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(189, 189, 189, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	________________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_____iconlyBoldLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 13,
    left: 2,
    width: 11
},
  	_____km: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_________________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	__________________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 8
},
  	_____iconlyBulkStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0
},
  	______________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 13,
    left: 1,
    width: 13
},
  	______8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	activeMenuDarkHomeComponentBottomBar: {
    position: "absolute",
    flexShrink: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 8,
    paddingBottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(24, 26, 32, 0.85)",
    alignItems: "center",
    rowGap: 0,
    paddingHorizontal: 0
},
  	___________________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 19,
    paddingVertical: 0,
    paddingHorizontal: 32
},
  	_________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyBoldHome: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 3,
    width: 19
},
  	home: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224
},
  	__________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyLightLocation: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	________________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 5,
    width: 15
},
  	explore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	___________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyLightDocument: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 4,
    width: 17
},
  	myBooking: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	____________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyLightChat: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 2,
    width: 20
},
  	inbox: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_____________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyLightProfile: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 5,
    width: 14
},
  	profile: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	homeIndicator: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 34,
    alignItems: "flex-start",
    rowGap: 0
},
  	________vector: {
    position: "absolute",
    flexShrink: 0,
    right: 147,
    bottom: 8,
    left: 147,
    height: 5,
    overflow: "visible"
}
})