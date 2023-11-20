import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView ,Dimensions} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import MapView,{Marker} from "react-native-maps"
import ADDRESS_IP from './API';

export default function ActiveMenuDarkProfileComponentBottomBar() {


    const [barbers, setBarbers] = useState([]);
  const [region, setRegion] = useState(); 
  const [name, setName] = useState([])

  useEffect(() => {
    const getAllBarbers = async () => {
      try {
        const response = await fetch(`http://${ADDRESS_IP}:3001/barbers/getAllBarber`);
        const data = await response.json();
        const locations = data.map((barber) => barber.location);
        setBarbers(locations);
        const names = data.map((barber) => barber.name);
        setName(names);
        calculateRegion();
      } catch (error) {
        console.error('Error fetching barbers:', error);
      }
    };
  
    getAllBarbers();
  }, [barbers]);

  const calculateRegion = () => {
    if (barbers.length > 0) {
      const latitudes = barbers.map((location) => parseFloat(JSON.parse(location).latitude));
      const longitudes = barbers.map((location) => parseFloat(JSON.parse(location).longitude));
      

      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLong = Math.min(...longitudes);
      const maxLong = Math.max(...longitudes);

      setRegion({
        latitude: (minLat + maxLat) / 2,
        longitude: (minLong + maxLong) / 2,
        latitudeDelta: 0.6,
        longitudeDelta: 0.6
      });
    }

  };



    return (
        <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

        <View style={styles.container}>
      
        <MapView style={styles.map} 
        region={region}>
          {barbers.map((location, index) => {
            const barberName = name[index]
            const coordinate = {
              latitude: parseFloat(JSON.parse(location).latitude),
              longitude: parseFloat(JSON.parse(location).longitude),
              
            };

            return (
              <Marker
                key={barberName}
                coordinate={coordinate}
                title={` ${barberName} salon `} // Customize the title as needed
              />
            );
          })}
        </MapView>
       
      
    </View>
  

          
    		<View style={styles.activeMenuDarkProfileComponentBottomBar}>
            
      			<View style={styles.autoLayoutHorizontal}>
        				<View style={styles.autoLayoutVertical}>
          					{/* Vigma RN:: can be replaced with <IconlyLightHome  /> */}
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
          					{/* Vigma RN:: can be replaced with <IconlyLightLocation  /> */}
          					<View style={styles.iconlyLightLocation}>
<Svg style={styles._group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M10.9004 8.50051C10.9004 7.11924 9.78115 6 8.4009 6C7.01963 6 5.90039 7.11924 5.90039 8.50051C5.90039 9.88076 7.01963 11 8.4009 11C9.78115 11 10.9004 9.88076 10.9004 8.50051Z" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.3999 19C7.20143 19 0.900391 13.8984 0.900391 8.56329C0.900391 4.38664 4.25749 1 8.3999 1C12.5423 1 15.9004 4.38664 15.9004 8.56329C15.9004 13.8984 9.59838 19 8.3999 19Z" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

          					</View>
          					<Text style={styles.explore}>
            						{`Explore`}
          					</Text>
        				</View>
        				<View style={styles.__autoLayoutVertical}>
          					{/* Vigma RN:: can be replaced with <IconlyLightDocument  /> */}
          					<View style={styles.iconlyLightDocument}>
<Svg style={styles.__group} width="19" height="20" viewBox="0 0 19 20" fill="none" >
<Path d="M12.7161 14.2236H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.7161 10.0371H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.25109 5.86035H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.908 0.75C12.908 0.75 5.231 0.754 5.219 0.754C2.459 0.771 0.75 2.587 0.75 5.357V14.553C0.75 17.337 2.472 19.16 5.256 19.16C5.256 19.16 12.932 19.157 12.945 19.157C15.705 19.14 17.415 17.323 17.415 14.553V5.357C17.415 2.573 15.692 0.75 12.908 0.75Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

          					</View>
          					<Text style={styles.myBooking}>
            						{`My Booking`}
          					</Text>
        				</View>
        				<View style={styles.___autoLayoutVertical}>
          					{/* Vigma RN:: can be replaced with <IconlyLightChat  /> */}
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
          					{/* Vigma RN:: can be replaced with <IconlyBoldProfile  /> */}
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
      			{/* Vigma RN:: can be replaced with <HomeIndicator  /> */}
      			<View style={styles.homeIndicator}>
<Svg style={styles.vector} width="134" height="5" viewBox="0 0 134 5" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H131.5C132.881 0 134 1.11929 134 2.5V2.5C134 3.88071 132.881 5 131.5 5H2.5C1.11929 5 0 3.88071 0 2.5V2.5Z" fill="#424242"/>
</Svg>

      			</View>
    		</View>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
  	activeMenuDarkProfileComponentBottomBar: {
    flexShrink: 0,
    width: 428,
    paddingTop: 744,
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
  	_group: {
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
    color: "rgba(251, 148, 0, 1)",
  
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
  	__group: {
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
  	___group: {
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
  	____group: {
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
}
})