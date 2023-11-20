import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet,ScrollView ,Image} from 'react-native';
import { Svg, Path, Line, Circle, Defs, Pattern, Use,  } from 'react-native-svg';
import { dataStore } from '../store.js';
import axios from 'axios';
import ADDRESS_IP from './API.js';

export default function _Dark_detailsbarberorsalonspecialist() {
    const [reservation, setReservation] = useState([]);
    const { userId } = dataStore();
    const [barber, setBarber] = useState([]);
    const [data,setData]=useState()
   const [tracker,setTracker]=useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${ADDRESS_IP}:3001/reservation/allUserReservations/${userId}`);
        const reservations = response.data;
        setReservation(reservations);

        // Fetch barber data for each reservation
        const barberData = await Promise.all(
          reservations.map((reservationItem) => axios.get(`http://${ADDRESS_IP}:3001/barbers/id/${reservationItem.barberId}`))
        );

        // Extract barber details from the responses
        const barbers = barberData.map((response) => response.data[0]);
        setBarber(barbers);

        // Combine reservation and barber data
        const reservationsWithBarbers = reservations.map((reservationItem, index) => ({
          ...reservationItem,
          barber: barbers[index],
        }));

        // Set the final data state
        setData(reservationsWithBarbers);
        console.log('data',data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function

  }, []); 
  
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
      <ScrollView>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_detailsbarberorsalonspecialist}>
      			<View style={styles.group24}>
        				{/* RN-Flow:: can be replaced with <Bottombar activeMenu={"darkProfile"} component={"bottomBar"} /> */}
        				<View style={styles.bottombar}>
                        <View style={styles.autoLayoutHorizontal}>
<View style={styles.autoLayoutVertical}>
{/* Vigma RN:: can be replaced with <IconlyLightHome /> */}
<View style={styles.iconlyLightHome}>
<Svg style={styles.group} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path d="M7.958 19.7714V16.7047C7.95798 15.9246 8.5939 15.2908 9.38179 15.2856H12.2679C13.0595 15.2856 13.7013 15.9209 13.7013 16.7047V16.7047V19.7809C13.7011 20.4432 14.235 20.9845 14.9038 21H16.8279C18.7459 21 20.3008 19.4607 20.3008 17.5618V17.5618V8.83784C20.2905 8.09083 19.9363 7.38935 19.3388 6.93303L12.7585 1.6853C11.6057 0.771566 9.96699 0.771566 8.8142 1.6853L2.26281 6.94256C1.66304 7.39702 1.30817 8.09967 1.30078 8.84736V17.5618C1.30078 19.4607 2.85566 21 4.77369 21H6.69774C7.38314 21 7.93876 20.4499 7.93876 19.7714V19.7714" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.home}>
{`Home`}
</Text>
</View>
<View style={styles._autoLayoutVertical}>
{/* Vigma RN:: can be replaced with <IconlyLightLocation /> */}
<View style={styles.iconlyLightLocation}>
<Svg style={styles._group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M10.9004 8.50051C10.9004 7.11924 9.78115 6 8.4009 6C7.01963 6 5.90039 7.11924 5.90039 8.50051C5.90039 9.88076 7.01963 11 8.4009 11C9.78115 11 10.9004 9.88076 10.9004 8.50051Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.3999 19C7.20143 19 0.900391 13.8984 0.900391 8.56329C0.900391 4.38664 4.25749 1 8.3999 1C12.5423 1 15.9004 4.38664 15.9004 8.56329C15.9004 13.8984 9.59838 19 8.3999 19Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.explore}>
{`Explore`}
</Text>
</View>
<View style={styles.__autoLayoutVertical}>
{/* Vigma RN:: can be replaced with <IconlyLightDocument /> */}
<View style={styles.iconlyLightDocument}>
<Svg style={styles.__group} width="19" height="20" viewBox="0 0 19 20" fill="none" >
<Path d="M12.7161 14.2236H5.49609" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.7161 10.0371H5.49609" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.25109 5.86035H5.49609" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.75C12.908 0.75 5.231 0.754 5.219 0.754C2.459 0.771 0.75 2.587 0.75 5.357V14.553C0.75 17.337 2.472 19.16 5.256 19.16C5.256 19.16 12.932 19.157 12.945 19.157C15.705 19.14 17.415 17.323 17.415 14.553V5.357C17.415 2.573 15.692 0.75 12.908 0.75Z" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.myBooking}>
{`My Booking`}
</Text>
</View>
<View style={styles.___autoLayoutVertical}>
{/* Vigma RN:: can be replaced with <IconlyLightChat /> */}
<View style={styles.iconlyLightChat}>
<Svg style={styles.___group} width="23" height="22" viewBox="0 0 23 22" fill="none" >
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
<View style={styles.____autoLayoutVertical}>
{/* Vigma RN:: can be replaced with <IconlyBoldProfile /> */}
<View style={styles.iconlyBoldProfile}>
<Svg style={styles.____group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.4952 5.29105C13.4952 8.22808 11.1403 10.5831 8.20117 10.5831C5.26307 10.5831 2.90719 8.22808 2.90719 5.29105C2.90719 2.35402 5.26307 0 8.20117 0C11.1403 0 13.4952 2.35402 13.4952 5.29105ZM8.20117 20C3.86355 20 0.201172 19.295 0.201172 16.575C0.201172 13.8539 3.88655 13.1739 8.20117 13.1739C12.5398 13.1739 16.2012 13.8789 16.2012 16.599C16.2012 19.32 12.5158 20 8.20117 20Z" fill="#9E9E9E"/>
</Svg>
</View>
<Text style={styles.profile}>
{`Profile`}
</Text>
</View>
</View>
          					{/* RN-Flow:: can be replaced with <HomeIndicator  /> */}
          					<View style={styles.homeIndicator}>
<Svg style={styles.vector} width="134" height="5" viewBox="0 0 134 5" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H131.5C132.881 0 134 1.11929 134 2.5C134 3.88071 132.881 5 131.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#424242"/>
</Svg>

          					</View>
        				</View>
        				{/* RN-Flow:: can be replaced with <IconlyLightNotification  /> */}
        				
      			</View>
      			{/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
      			<View style={styles.themeDarkDivider}>
<Svg style={styles.line} width="380" height="1" viewBox="0 0 380 1" fill="none" >
<Line y1="0.5" x2="380" y2="0.5" stroke="#35383F"/>
</Svg>

      			</View>
      			<View style={styles.group26}>
        				{/* RN-Flow:: can be replaced with <TypeSendListComponentAccountList type={"sendList"} component={"accountList"} /> */}
        				<View style={styles.typeSendListComponentAccountList}>
          					<View style={styles.__autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <TypeDefaultComponentAvatar type={"default"} component={"avatar"} /> */}
                                    <View style={styles.autoLayoutHorizontal}>
                                    {data &&
  data
    .filter((el) => el.verified === true)
    .map((el) => (
      <View style={styles.container} key={el.id}>
        <Image
          style={styles.typeDefaultComponentAvatar}
          source={{ uri: el.barber.image }}
          onError={() => console.log('Image failed to load')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{el.userName}</Text>
          <Text style={styles.information}>{`you have a rendez-vous with ${el.barber.name}: ${formatDateTime(
            el.date
          )}`}</Text>
        </View>
        <View style={styles.space} /> 
      </View>
    ))}
</View>
            					
          					</View>
        				</View>
      			</View>
      	
      		
      			{/* RN-Flow:: can be replaced with <_typeSendListComponentAccountList type={"sendList"} component={"accountList"} /> */}
      			
      			{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
      			<View style={styles.themeDarkComponentNavbar}>
        				<View style={styles.___autoLayoutHorizontal}>
          					{/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft  /> */}
          					<View style={styles.iconlyLightOutlineArrowLeft}>
<Svg style={styles.__group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
<Path d="M19.3333 8.31995C19.3333 8.76292 19.0041 9.12902 18.577 9.18696L18.4583 9.19495L0.95825 9.19495C0.475002 9.19495 0.08325 8.80319 0.08325 8.31995C0.08325 7.87697 0.41243 7.51087 0.83952 7.45293L0.95825 7.44495L18.4583 7.44495C18.9415 7.44495 19.3333 7.8367 19.3333 8.31995Z" fill="white"/>
<Path d="M8.63374 14.7284C8.97619 15.0694 8.97738 15.6234 8.63641 15.9658C8.32643 16.2771 7.84039 16.3064 7.49729 16.053L7.39897 15.9685L0.340639 8.94048C0.0283957 8.62958 -8.58307e-06 8.14178 0.255438 7.79869L0.340588 7.70043L7.39892 0.671262C7.74134 0.330261 8.29535 0.331408 8.63636 0.673824C8.94636 0.985111 8.97359 1.47128 8.71872 1.8133L8.63379 1.91126L2.19842 8.32078L8.63374 14.7284Z" fill="white"/>
</Svg>

          					</View>
          					<Text style={styles.titleSection}>
            						{`My schedule`}
          					</Text>
        				</View>
      			</View>
    		</View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

  	_Dark_detailsbarberorsalonspecialist: {
    flexShrink: 0,
    height: 926,
    width: 428,
    backgroundColor: "rgba(24, 26, 32, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeDefaultComponentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  	group24: {
    position: "absolute",
    flexShrink: 0,
    top: 836,
    height: 90,
    width: 428
},
  	bottombar: {
    position: "absolute",
    flexShrink: 0,
    width: 428,
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
  	autoLayoutHorizontal: {
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
  	autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyLightHome: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	group: {
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
    color: "rgba(158, 158, 158, 1)",
    
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_autoLayoutVertical: {
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
  	explore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	__autoLayoutVertical: {
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
  	document: {
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
    color: "rgba(251, 148, 0, 1)",
    
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	___autoLayoutVertical: {
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
  	chat: {
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

    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	____autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "center",
    rowGap: 2
},
  	iconlyBoldProfile: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 4,
    width: 16
},
  	profile: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
   
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224
},
  	homeIndicator: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 34,
    alignItems: "flex-start",
    rowGap: 0
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    right: 147,
    bottom: 8,
    left: 147,
    height: 5,
    overflow: "visible"
},
  	
  
  	themeDarkDivider: {
    position: "absolute",
    flexShrink: 0,
    top: 424,
    height: 0,
    left: 24,
    width: 380,
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
  	group26: {
    position: "absolute",
    flexShrink: 0,
    top: 277,
    height: 60,
    left: 24,
    width: 380
},
  	typeSendListComponentAccountList: {
    position: "absolute",
    flexShrink: 0,
    width: 380,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	_autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 80,
    width: 80,
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius:37,
},
ellipse: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "hidden",
    borderRadius: 100 ,

},
  	_____autoLayoutVertical: {
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
  
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_themeDarkDivider: {
    position: "absolute",
    flexShrink: 0,
    top: 258,
    height: 0,
    left: 24,
    width: 380,
    alignItems: "flex-start",
    rowGap: 0
},
  	_line: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	_typeSendListComponentAccountList: {
    position: "absolute",
    flexShrink: 0,
    top: 142,
    left: 24,
    width: 380,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	__autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	_typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 60,
    width: 60,
    alignItems: "flex-start",
    rowGap: 0
},
  	_ellipse: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	______autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	_name: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
   
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21.600000858306885
},
  	_information: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
  
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	themeDarkComponentNavbar: {
    position: "absolute",
    flexShrink: 0,
    top: 68,
    height: 48,
    left: 24,
    width: 187,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingVertical: 12,
    paddingHorizontal: 0
},
  	___autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	iconlyLightOutlineArrowLeft: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	__group: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    height: 19,
    left: 6,
    width: 16
},
  	titleSection: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
}
})