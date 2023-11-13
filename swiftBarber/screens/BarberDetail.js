import React, { useEffect ,useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';
import { Svg, Path, Line, Circle, Defs, Pattern, Use, Image, LinearGradient, Stop } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { dataStore } from '../store';
import MapView,{Marker} from "react-native-maps"
import Icon  from 'react-native-vector-icons/MaterialIcons'
export default function _Dark_detailsreviews({route}) {
  const {ApointementDate,setBarberId}=dataStore()
  const navigation = useNavigation()
  const [showService, setShowService] = useState(true);
  const barber=route.params.barber
    console.log("zustand date",)
    console.log(barber)
    useEffect(()=>{
      setBarberId(barber.id)
    },[barber])
  const location = JSON.parse(barber.location) 
  console.log(location)

  const handlePhonePress = () => {
    Linking.openURL(`tel:${barber.phoneNumber}`);
  };
  const toggleVisibility = () => {
    setShowService(!showService);
  };
    return (
        <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_detailsreviews}>
      			<View style={styles.autoLayoutVertical}>
        				<View style={styles.maskGroup}>
          					<View style={styles.mask}/>
          					<ImageBackground style={styles.rectangle} source={{uri: barber.image}}/>
                   
          					<View style={styles.autoLayoutHorizontal}>
            						<View style={styles._rectangle}/>
            						<View style={styles.__rectangle}/>
            						<View style={styles.___rectangle}/>
            						<View style={styles.____rectangle}/>
            						<View style={styles._____rectangle}/>
          					</View>
        				</View>
        				<View style={styles._autoLayoutVertical}>
          					<View style={styles.__autoLayoutVertical}>
            						<View style={styles.___autoLayoutVertical}>
              							<View style={styles._autoLayoutHorizontal}>
                								<Text style={styles.barbarellaInova}>
                  									{barber.name}
                								</Text>
                								{/* RN-Flow:: can be replaced with <SizeSmallTypeFilledIconNoneComponentChips size={"small"} type={"filled"} icon={"none"} component={"chips"} /> */}
                                <TouchableOpacity onPress={()=>navigation.navigate("Appointement")}>
                								<View style={styles.sizeSmallTypeFilledIconNoneComponentChips}>
                  									<Text style={styles.chips}>
                    										{`Book Appointement`}
                  									</Text>
                								</View>
                                </TouchableOpacity>
              							</View>
              							<View style={styles.__autoLayoutHorizontal}>
                								{/* RN-Flow:: can be replaced with <IconlyBoldLocation  /> */}
                								<View style={styles.iconlyBoldLocation}>
{/* <Svg style={styles.group} width="16" height="18" viewBox="0 0 16 18" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.916016 7.59797C0.916016 3.76475 4.11925 0.666504 7.99389 0.666504C11.8794 0.666504 15.0827 3.76475 15.0827 7.59797C15.0827 9.52958 14.3802 11.3229 13.2239 12.8428C11.9484 14.5194 10.3761 15.9802 8.60647 17.1269C8.20144 17.3919 7.83591 17.4119 7.39139 17.1269C5.61163 15.9802 4.03942 14.5194 2.77477 12.8428C1.61767 11.3229 0.916016 9.52958 0.916016 7.59797ZM5.66121 7.8138C5.66121 9.09793 6.70906 10.1079 7.99389 10.1079C9.27955 10.1079 10.3375 9.09793 10.3375 7.8138C10.3375 6.53967 9.27955 5.48053 7.99389 5.48053C6.70906 5.48053 5.66121 6.53967 5.66121 7.8138Z" fill="#FB9400"/>
</Svg> */}

                								</View>
                								<Text style={styles.meadowValleyTerraceNewYork}>
                  									{barber.description}
                								</Text>
              							</View>
              							<View style={styles.___autoLayoutHorizontal}>
                								{/* RN-Flow:: can be replaced with <IconlyBulkStar  /> */}
                								<View style={styles.iconlyBulkStar}>
<Svg style={styles._group} width="18" height="16" viewBox="0 0 18 16" fill="none" >
<Path opacity="0.4" d="M9.81293 0.594841L11.6683 4.3234C11.805 4.59354 12.0659 4.78114 12.3668 4.82282L16.5344 5.4298C16.7778 5.46398 16.9986 5.59238 17.1478 5.78831C17.2954 5.98175 17.3587 6.22687 17.3229 6.46783C17.2937 6.66793 17.1995 6.85302 17.0553 6.99476L14.0355 9.92208C13.8146 10.1264 13.7146 10.429 13.768 10.725L14.5114 14.8404C14.5906 15.3373 14.2614 15.8059 13.768 15.9001C13.5646 15.9326 13.3562 15.8985 13.1728 15.8051L9.45536 13.8683C9.17947 13.729 8.85356 13.729 8.57767 13.8683L4.8602 15.8051C4.40344 16.0477 3.83748 15.8826 3.58326 15.4324C3.48908 15.2531 3.45574 15.0489 3.48658 14.8496L4.23007 10.7333C4.28341 10.4382 4.18256 10.1339 3.96251 9.92959L0.942696 7.00393C0.583452 6.65709 0.572617 6.08597 0.918524 5.72662C0.926026 5.71911 0.934361 5.71078 0.942696 5.70244C1.08606 5.55653 1.27443 5.46398 1.47781 5.4398L5.64537 4.832C5.94544 4.78947 6.20633 4.60355 6.34386 4.33174L8.13257 0.594841C8.29177 0.274678 8.62184 0.0754104 8.98026 0.0837479H9.09195C9.40285 0.121267 9.67374 0.313865 9.81293 0.594841Z" fill="#FB9400"/>
<Path d="M8.99269 13.7644C8.83127 13.7694 8.67402 13.8128 8.53257 13.8904L4.83328 15.8228C4.38065 16.0388 3.83898 15.8712 3.58521 15.4383C3.49119 15.2615 3.45707 15.0588 3.48869 14.8603L4.22755 10.7528C4.27747 10.4542 4.17763 10.1506 3.96046 9.94046L0.939297 7.01556C0.580684 6.66444 0.574027 6.08813 0.925152 5.72867C0.930144 5.72367 0.934304 5.7195 0.939297 5.71533C1.08241 5.57354 1.26712 5.48013 1.46598 5.45094L5.63704 4.83711C5.93907 4.79874 6.20117 4.61025 6.3343 4.3367L8.14733 0.552761C8.31957 0.247511 8.64989 0.0656953 8.99935 0.0848777C8.99269 0.332581 8.99269 13.596 8.99269 13.7644Z" fill="#FB9400"/>
</Svg>

                								</View>
                								<Text style={styles._83279reviews}>
                  									{`4.8 (3,279 reviews)`}
                								</Text>
              							</View>
            						</View>
            						<View style={styles.____autoLayoutHorizontal}>
              							<View style={styles.____autoLayoutVertical}>
                								<View style={styles._____autoLayoutHorizontal}>
                  									{/* RN-Flow:: can be replaced with <IconlyBoldDiscovery  /> */}
                                    <TouchableOpacity onPress={toggleVisibility}>
                  									<View style={styles.iconlyBoldDiscovery}>
                                   
<Svg style={styles.__group} width="20" height="20" viewBox="0 0 20 20" fill="none" >
  
<Icon name='list' size={28} color={'#FB9400'} />

</Svg>

                  									</View>
                                    </TouchableOpacity>
                								</View>
                								<Text style={styles.website}>
                  									{`Services`}
                								</Text>
              							</View>
              							<View style={styles._____autoLayoutVertical}>
                								<View style={styles.______autoLayoutHorizontal}>
                  									{/* RN-Flow:: can be replaced with <IconlyBoldChat  /> */}
                  									<View style={styles.iconlyBoldChat}>
                                      
<Svg style={styles.___group} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.message}>
                  									{`Message`}
                								</Text>
              							</View>
              							<View style={styles.______autoLayoutVertical}>
                								<View style={styles._______autoLayoutHorizontal}>
                  									{/* RN-Flow:: can be replaced with <_iconlyBoldLocation  /> */}
                  									<View style={styles._iconlyBoldLocation}>
<Svg style={styles.____group} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.5 8.31776C0.5 3.71789 4.34388 0 8.99345 0C13.6561 0 17.5 3.71789 17.5 8.31776C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.72854 19.7524C9.24251 20.0704 8.80387 20.0944 8.27045 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.31776ZM6.19423 8.57675C6.19423 10.1177 7.45166 11.3297 8.99345 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.57675C11.8058 7.0478 10.5362 5.77683 8.99345 5.77683C7.45166 5.77683 6.19423 7.0478 6.19423 8.57675Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.direction}>
                  									{`Localisation`}
                								</Text>
              							</View>
              							<View style={styles._______autoLayoutVertical}>
                								<View style={styles.________autoLayoutHorizontal}>
                  									{/* RN-Flow:: can be replaced with <IconlyBoldSend  /> */}
                                    <TouchableOpacity onPress={handlePhonePress}>
                  									<View style={styles.iconlyBoldSend}>
                                    <Icon name='phone' size={30} color={'#FB9400'} />
<Svg style={styles._____group} width="20" height="20" viewBox="0 0 20 20" fill="none" >

</Svg>

                  									</View>
                                    </TouchableOpacity>
                								</View>
                								<Text style={styles.share}>
                  									{`Number`}
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
                          {showService ? (
              							<Text style={styles.ourSpecialist}>
                								{`Our shop location`}
              							</Text>
                          ) : (
                            <Text style={styles.ourSpecialist}>
                								{`Our Services :`}
              							</Text>
                          )}

              							
            						</View>
            					
            					



            
          					</View>
        				</View>
      			</View>
      			{/* RN-Flow:: can be replaced with <TypeFullNavbarComponentTopBar type={"fullNavbar"} component={"topBar"} /> */}
      			<View style={styles.typeFullNavbarComponentTopBar}>
        				<View style={styles._________________________________autoLayoutHorizontal}>
          					<View style={styles.__________________________________autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyLightArrowLeft  /> */}
            						<View style={styles.iconlyLightArrowLeft}>
              							{/* RN-Flow:: can be replaced with <_iconlyLightArrowLeft  /> */}
              							<View style={styles._iconlyLightArrowLeft}>
<Svg style={styles.______________________group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
<Path d="M0.958985 8.32015L18.459 8.32015" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.01758 15.3487L0.959244 8.32067L8.01758 1.2915" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
            						</View>
          					</View>
          					<View style={styles.___________________________________autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyLightBookmark  /> */}
            						<View style={styles.iconlyLightBookmark}>
<Svg style={styles._______________________group} width="20" height="25" viewBox="0 0 20 25" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M19.029 6.17901C19.029 2.96966 16.8349 1.68311 13.6758 1.68311H6.25712C3.19513 1.68311 0.900391 2.88194 0.900391 5.96498V23.1428C0.900391 23.9895 1.8115 24.5229 2.54951 24.1088L9.99513 19.9322L17.3764 24.1018C18.1156 24.5182 19.029 23.9849 19.029 23.1369V6.17901Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M5.65039 9.53255H14.1884" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
          					</View>
        				</View>
      			</View>
    		</View>
        {/*///////////////////    Services    ///////////////// />*/}
        {showService ?(
        <  >
        
      <MapView
      style={styles.rectangle}
      region={location}
        // onPress={handleMapPress}
      >
        {location && (
          <Marker
            coordinate={location}
            title={barber.name}
            description="Barbershop location"
          />
        )}
      </MapView>
    </>
        ):(
          <View style={styles.rectangle}>
          {Object.keys(barber.service).map((key, index) => (
            <Text key={index} style={styles.service}>{barber.service[key]}</Text>
          ))}
        </View>
        )}
            </View>
            </ScrollView>
    )

}

const styles = StyleSheet.create({
  	_Dark_detailsreviews: {
    flexShrink: 0,
    height: 1700,
    width: 428,
    backgroundColor: "rgba(24, 26, 32, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
service: {
  color: 'white',
  fontSize: 18, // Adjust the font size as needed
  textAlign: 'center', 
  backgroundColor: 'rgba(24,26,32,1)',

},
  	autoLayoutVertical: {
    position: "absolute",
    flexShrink: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	maskGroup: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 300
},
  	mask: {
    position: "absolute",
    flexShrink: 0,
    width: 428,
    height: 300,
    backgroundColor: "rgba(196, 196, 196, 1)"
},
  	rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 428,
    height: 300,
    backgroundColor: 'rgba(24,26,32,1)'
},
  	autoLayoutHorizontal: {
    position: "absolute",
    flexShrink: 0,
    top: 282,
    left: 164,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 5
},
  	_rectangle: {
    flexShrink: 0,
    width: 32,
    height: 6,
    borderRadius: 100
},
  	__rectangle: {
    flexShrink: 0,
    width: 6,
    height: 6,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	___rectangle: {
    flexShrink: 0,
    width: 6,
    height: 6,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	____rectangle: {
    flexShrink: 0,
    width: 6,
    height: 6,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	_____rectangle: {
    flexShrink: 0,
    width: 6,
    height: 6,
    backgroundColor: "rgba(224, 224, 224, 1)",
    borderRadius: 100
},
  	_autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    paddingTop: 24,
    paddingBottom: 48,
    alignItems: "flex-start",
    rowGap: 32,
    paddingHorizontal: 24
},
  	__autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	___autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12
},
  	_autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	barbarellaInova: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 35.20000076293945
},
  	sizeSmallTypeFilledIconNoneComponentChips: {
    flexShrink: 0,
    backgroundColor: "rgba(251, 148, 0, 1)",
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
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	__autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	iconlyBoldLocation: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 17,
    left: 3,
    width: 14
},
  	meadowValleyTerraceNewYork: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	___autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	iconlyBulkStar: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	_group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 16,
    left: 2,
    width: 17
},
  	_83279reviews: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	____autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 20
},
  	____autoLayoutVertical: {
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
  	iconlyBoldDiscovery: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	__group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 2,
    width: 20
},
  	website: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_____autoLayoutVertical: {
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
  	iconlyBoldChat: {
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
  	message: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	______autoLayoutVertical: {
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
  	_iconlyBoldLocation: {
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
    width: 17
},
  	direction: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______autoLayoutVertical: {
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
  	iconlyBoldSend: {
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
    left: 2,
    width: 20
},
  	share: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
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
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12
},
  	ourSpecialist: {
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
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
  	________autoLayoutVertical: {
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 60,
    shadowColor: "rgb(4, 6, 15)",
    shadowOpacity: 0.05,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
    padding: 12,
    borderRadius: 24
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
    borderRadius: 20
},
  	image: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 20
},
  	_________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2
},
  	nathan: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	srBarber: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	__________autoLayoutVertical: {
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 60,
    shadowColor: "rgb(4, 6, 15)",
    shadowOpacity: 0.05,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
    padding: 12,
    borderRadius: 24
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
    borderRadius: 20
},
  	_image: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 20
},
  	___________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2
},
  	jenny: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	hairStylist: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	____________autoLayoutVertical: {
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 60,
    shadowColor: "rgb(4, 6, 15)",
    shadowOpacity: 0.05,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
    padding: 12,
    borderRadius: 24
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
    borderRadius: 20
},
  	__image: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 20
},
  	_____________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2
},
  	sarah: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	makeupArtist: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	______________autoLayoutVertical: {
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 60,
    shadowColor: "rgb(4, 6, 15)",
    shadowOpacity: 0.05,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 6,
    padding: 12,
    borderRadius: 24
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
    borderRadius: 20
},
  	___image: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 20
},
  	_______________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2
},
  	mike: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	sxBaber: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	___________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 12
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
  	________________autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	____________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	_iconlyBulkStar: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	______group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 2,
    width: 20
},
  	__83279reviews: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(245, 245, 245, 1)",
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
  	_themeDarkDivider: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 0,
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
  	typeCommentsComponentCommentsList: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
    borderRadius: 12
},
  	_____________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	______________autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 48,
    width: 48,
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
  	_________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	fullName: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	sizeSmallTypeBorderIconLeftComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	iconlyBoldStar: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 10,
    left: 1,
    width: 10
},
  	______chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	iconlyLightMoreCircle: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19
},
  	adipiscingelitseddoeiusmodtemporincididuntutlaboreetdolore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24
},
  	________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	iconlyBoldHeart: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 2,
    width: 20
},
  	text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	hoursago: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_typeCommentsComponentCommentsList: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
    borderRadius: 12
},
  	_________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	__________________autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	_typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 48,
    width: 48,
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
  	__________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	_fullName: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	_sizeSmallTypeBorderIconLeftComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	_iconlyBoldStar: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 10,
    left: 1,
    width: 10
},
  	_______chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_iconlyLightMoreCircle: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19
},
  	_adipiscingelitseddoeiusmodtemporincididuntutlaboreetdolore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	___________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24
},
  	____________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	iconlyLightHeart: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 3,
    width: 19
},
  	_text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_hoursago: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	__typeCommentsComponentCommentsList: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
    borderRadius: 12
},
  	_____________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	______________________autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	__typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 48,
    width: 48,
    alignItems: "flex-start",
    rowGap: 0
},
  	__ellipse: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	___________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	__fullName: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	__sizeSmallTypeBorderIconLeftComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	__iconlyBoldStar: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 10,
    left: 1,
    width: 10
},
  	________chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	__iconlyLightMoreCircle: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	______________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19
},
  	__adipiscingelitseddoeiusmodtemporincididuntutlaboreetdolore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24
},
  	________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	_iconlyBoldHeart: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 2,
    width: 20
},
  	__text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	__hoursago: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	___typeCommentsComponentCommentsList: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
    borderRadius: 12
},
  	_________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	__________________________autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	___typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 48,
    width: 48,
    alignItems: "flex-start",
    rowGap: 0
},
  	___ellipse: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	____________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	___fullName: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	___sizeSmallTypeBorderIconLeftComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	___iconlyBoldStar: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 10,
    left: 1,
    width: 10
},
  	_________chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	___iconlyLightMoreCircle: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19
},
  	___adipiscingelitseddoeiusmodtemporincididuntutlaboreetdolore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	___________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24
},
  	____________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	_iconlyLightHeart: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 3,
    width: 19
},
  	___text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	___hoursago: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	____typeCommentsComponentCommentsList: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 12,
    borderRadius: 12
},
  	_____________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
},
  	______________________________autoLayoutHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	____typeDefaultComponentAvatar: {
    flexShrink: 0,
    height: 48,
    width: 48,
    alignItems: "flex-start",
    rowGap: 0
},
  	____ellipse: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
},
  	_____________________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 4
},
  	____fullName: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
},
  	____sizeSmallTypeBorderIconLeftComponentChips: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 100
},
  	____iconlyBoldStar: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 10,
    left: 1,
    width: 10
},
  	__________chips: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	____iconlyLightMoreCircle: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19
},
  	____adipiscingelitseddoeiusmodtemporincididuntutlaboreetdolore: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_______________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24
},
  	________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8
},
  	__iconlyLightHeart: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 18,
    left: 3,
    width: 19
},
  	____text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	____hoursago: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	typeFullNavbarComponentTopBar: {
    position: "absolute",
    flexShrink: 0,
    left: 0,
    right: 0,
    paddingTop: 0,
    paddingBottom: 8,
    alignItems: "flex-start",
    rowGap: 24,
    paddingHorizontal: 0
},
  	_________________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 12,
    paddingVertical: 12,
    paddingHorizontal: 24
},
  	__________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    width: 244,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
},
  	iconlyLightArrowLeft: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_iconlyLightArrowLeft: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	______________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    height: 18,
    left: 7,
    width: 14
},
  	___________________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 20
},
  	iconlyLightBookmark: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 23,
    left: 5,
    width: 18
},

})