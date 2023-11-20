import React, { useState,useEffect,useContext } from 'react';
import { View, Text, StyleSheet,ScrollView ,TouchableOpacity} from 'react-native';
import { Svg, Path, Circle, Defs, Pattern, Use, Image, Line, Mask, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ADDRESS_IP from '../API.js';
import { MyContext } from '../../useContext/useContext';
import { dataStore } from '../../store.js';

export default function _Dark_profilesettings({route}) {
  const {emailBarber} = route.params;
  const [barberName,setBarberName] = useState('');
  const [verified,setVerfied]=useState([])
  const [nonVerified,setNonVerfied]=useState([])
  const [image,setImage] = useState('')
  const navigation = useNavigation();
  const context = useContext(MyContext);
  const {setBarberId,barberId}=dataStore()
  const getAllVerifiedAppointments = (id) =>{
    axios.get(`http://${ADDRESS_IP}:3001/reservation/getAllVerfiedBarberReservations/${id}`)
    .then((response) => setVerfied(response.data))
    .catch((err)=>console.error("err getting verified",err))
  }
  const getAllNonVerifiedAppointments = (id) =>{
    axios.get(`http://${ADDRESS_IP}:3001/reservation/getAllNonVerfiedBarberReservations/${id}`)
    .then((response) => setNonVerfied(response.data))
    .catch((err)=>console.error("err getting verified",err))
  }
    useEffect(() => {
      const fetchBarberName = async () => {
        try {
          const response = await axios.get(`http://${ADDRESS_IP}:3001/barbers/email/${emailBarber}`);  
          const data = response.data;
  
          if (data.length > 0) {
            const barber = data[0];
            const name = barber.name;
            setBarberName(name);
            setBarberId(barber.id)
            setImage(barber.image)
            console.log(barber.id)
            getAllVerifiedAppointments(barber.id)
            getAllNonVerifiedAppointments(barber.id)
            context.barberName = name
          }
        } catch (error) {
          console.log('Error fetching user name:', error);
        }
      };
  
      fetchBarberName();
    }, [emailBarber,context]);
    const handleEditProfilePress = () => {
      navigation.navigate('EditProfile');

  };
  console.log("verified",verified)
    return (
      <ScrollView>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_profilesettings}>
      			<View style={styles.autoLayoutVertical}>
        				{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
        				<View style={styles.themeDarkComponentNavbar}>
          					<View style={styles.autoLayoutHorizontal}>
            						<Text style={styles.titleSection}>
              							{`Profile`}
            						</Text>
          					</View>
          					<View style={styles._autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyLightMoreCircle  /> */}
            						<View style={styles.iconlyLightMoreCircle}>
<Svg style={styles.group} width="24" height="24" viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0002 1.20844C17.9595 1.20844 22.7918 6.0396 22.7918 12.0001C22.7918 17.9594 17.9595 22.7918 12.0002 22.7918C6.03966 22.7918 1.2085 17.9594 1.2085 12.0001C1.2085 6.04077 6.04083 1.20844 12.0002 1.20844Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5959 12.0152H16.6064" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9187 12.0152H11.9292" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.24166 12.0152H7.25216" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
          					</View>
        				</View>
        				<View style={styles._autoLayoutVertical}>
          					{/* RN-Flow:: can be replaced with <TypeEditAvatarComponentAvatar type={"editAvatar"} component={"avatar"} /> */}
          					<View style={styles.typeEditAvatarComponentAvatar}>
<Svg style={styles.ellipse} width="120" height="120" viewBox="0 0 120 120" fill="none"  xmlnsXlink="http://www.w3.org/1999/xlink">
<Circle cx="60" cy="60" r="60" fill="url(#pattern0)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlinkHref="#image0_48_68" transform="scale(0.00333333)"/>
</Pattern>
<Image id="image0_48_68" width="300" height="300" xlinkHref={image}/>
</Defs>
</Svg>

          					</View>
          					<View style={styles.__autoLayoutVertical}>
            						<Text style={styles.danielAustin}>
              							{barberName}
            						</Text>
            						<Text style={styles.daniel_austinyourdomaincom}>
              							{emailBarber}
            						</Text>
          					</View>
        				</View>
        				{/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
        				<View style={styles.themeDarkDivider}>
<Svg style={styles.line} width="380" height="1" viewBox="0 0 380 1" fill="none" >
<Line y1="0.5" x2="380" y2="0.5" stroke="#35383F"/>
</Svg>

        				</View>
        				<View style={styles.___autoLayoutVertical}>
          					<View style={styles.__autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyCurvedProfile  /> */}
            						<View style={styles.iconlyCurvedProfile}>
<Svg style={styles._group} width="18" height="25" viewBox="0 0 18 25" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M8.81855 23.2722C4.51143 23.2722 0.833252 22.602 0.833252 19.9177C0.833252 17.2335 4.4881 14.7556 8.81855 14.7556C13.1257 14.7556 16.8039 17.2095 16.8039 19.8937C16.8039 22.5769 13.149 23.2722 8.81855 23.2722Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.81017 11.0359C11.6367 11.0359 13.9276 8.74499 13.9276 5.91847C13.9276 3.09196 11.6367 0.799988 8.81017 0.799988C5.98365 0.799988 3.69168 3.09196 3.69168 5.91847C3.68213 8.73544 5.95713 11.0264 8.7741 11.0359C8.78683 11.0359 8.7985 11.0359 8.81017 11.0359Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>




            						</View>

                        <TouchableOpacity onPress={handleEditProfilePress}>
      <Text style={styles.editProfile}>
        {`Edit Profile`}
      </Text>
    </TouchableOpacity>

            						{/* RN-Flow:: can be replaced with <IconlyLightArrowRight2  /> */}
            					
              							{/* RN-Flow:: can be replaced with <_iconlyLightArrowRight2  /> */}
              							<View style={styles._iconlyLightArrowRight2}>
                            <Svg
  style={{ ...styles.__group, marginLeft: 360 }} // Adjust the margin-left value as needed
  width="8"
  height="14"
  viewBox="0 0 8 14"
  fill="none"
>
  <Path
    d="M1.08325 1.16668L6.91659 7.00001L1.08325 12.8333"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</Svg>


              						
            						</View>
          					</View>
          					<View style={styles.___autoLayoutHorizontal}>
            						{/* component iconlyLightOutlineCalendar */}
            						<View style={styles.iconlyLightOutlineCalendar}>
<Svg style={styles.calendar} width="20" height="22" viewBox="0 0 20 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6665 9.4043H0.842529C0.428529 9.4043 0.0925293 9.0683 0.0925293 8.6543C0.0925293 8.2403 0.428529 7.9043 0.842529 7.9043H18.6665C19.0805 7.9043 19.4165 8.2403 19.4165 8.6543C19.4165 9.0683 19.0805 9.4043 18.6665 9.4043Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14.2013 13.3096C13.7873 13.3096 13.4473 12.9736 13.4473 12.5596C13.4473 12.1456 13.7783 11.8096 14.1923 11.8096H14.2013C14.6153 11.8096 14.9513 12.1456 14.9513 12.5596C14.9513 12.9736 14.6153 13.3096 14.2013 13.3096Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.76377 13.3096C9.34977 13.3096 9.00977 12.9736 9.00977 12.5596C9.00977 12.1456 9.34077 11.8096 9.75477 11.8096H9.76377C10.1778 11.8096 10.5138 12.1456 10.5138 12.5596C10.5138 12.9736 10.1778 13.3096 9.76377 13.3096Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5.31701 13.3096C4.90301 13.3096 4.56201 12.9736 4.56201 12.5596C4.56201 12.1456 4.89401 11.8096 5.30801 11.8096H5.31701C5.73101 11.8096 6.06701 12.1456 6.06701 12.5596C6.06701 12.9736 5.73101 13.3096 5.31701 13.3096Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14.2013 17.1963C13.7873 17.1963 13.4473 16.8603 13.4473 16.4463C13.4473 16.0323 13.7783 15.6963 14.1923 15.6963H14.2013C14.6153 15.6963 14.9513 16.0323 14.9513 16.4463C14.9513 16.8603 14.6153 17.1963 14.2013 17.1963Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.76377 17.1963C9.34977 17.1963 9.00977 16.8603 9.00977 16.4463C9.00977 16.0323 9.34077 15.6963 9.75477 15.6963H9.76377C10.1778 15.6963 10.5138 16.0323 10.5138 16.4463C10.5138 16.8603 10.1778 17.1963 9.76377 17.1963Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5.31701 17.1963C4.90301 17.1963 4.56201 16.8603 4.56201 16.4463C4.56201 16.0323 4.89401 15.6963 5.30801 15.6963H5.31701C5.73101 15.6963 6.06701 16.0323 6.06701 16.4463C6.06701 16.8603 5.73101 17.1963 5.31701 17.1963Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13.7935 5.291C13.3795 5.291 13.0435 4.955 13.0435 4.541V1.25C13.0435 0.836 13.3795 0.5 13.7935 0.5C14.2075 0.5 14.5435 0.836 14.5435 1.25V4.541C14.5435 4.955 14.2075 5.291 13.7935 5.291Z" fill="white"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5.71533 5.291C5.30133 5.291 4.96533 4.955 4.96533 4.541V1.25C4.96533 0.836 5.30133 0.5 5.71533 0.5C6.12933 0.5 6.46533 0.836 6.46533 1.25V4.541C6.46533 4.955 6.12933 5.291 5.71533 5.291Z" fill="white"/>
<Mask id="mask0_6_2858" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="2" width="20" height="20">
<Path fillRule="evenodd" clipRule="evenodd" d="M0 2.0791H19.5V22H0V2.0791Z" fill="white"/>
</Mask>
<G mask="url(#mask0_6_2858)">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.521 3.5791C2.928 3.5791 1.5 4.9621 1.5 7.4731V16.5221C1.5 19.0881 2.928 20.5001 5.521 20.5001H13.979C16.572 20.5001 18 19.1141 18 16.5981V7.4731C18.004 6.2381 17.672 5.2781 17.013 4.6181C16.335 3.9381 15.29 3.5791 13.988 3.5791H5.521ZM13.979 22.0001H5.521C2.116 22.0001 0 19.9011 0 16.5221V7.4731C0 4.1451 2.116 2.0791 5.521 2.0791H13.988C15.697 2.0791 17.11 2.5911 18.075 3.5581C19.012 4.4991 19.505 5.8521 19.5 7.4751V16.5981C19.5 19.9301 17.384 22.0001 13.979 22.0001Z" fill="white"/>
</G>
</Svg>

            						</View>
            						<Text style={styles.setschedule}>
              							{`Set schedule `}
            						</Text>
            						{/* RN-Flow:: can be replaced with <__iconlyLightArrowRight2  /> */}
            						<View style={styles.__iconlyLightArrowRight2}>
              							{/* RN-Flow:: can be replaced with <___iconlyLightArrowRight2  /> */}
              							<View style={styles.___iconlyLightArrowRight2}>
<Svg style={styles.___group} width="8" height="15" viewBox="0 0 8 15" fill="none" >
<Path d="M1.08325 1.66668L6.91659 7.50001L1.08325 13.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
            						</View>
          					</View>
          					<View style={styles.____autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyCurvedShow  /> */}
            						<View style={styles.iconlyCurvedShow}>
<Svg style={styles.____group} width="24" height="20" viewBox="0 0 24 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M15.6917 10.0608C15.6917 12.0978 14.0397 13.7498 12.0027 13.7498C9.96572 13.7498 8.31372 12.0978 8.31372 10.0608C8.31372 8.02261 9.96572 6.37178 12.0027 6.37178C14.0397 6.37178 15.6917 8.02261 15.6917 10.0608Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.20874 10.0608C1.20874 13.8874 6.04107 18.5798 12.0027 18.5798C17.9632 18.5798 22.7967 13.8909 22.7967 10.0608C22.7967 6.23061 17.9632 1.54178 12.0027 1.54178C6.04107 1.54178 1.20874 6.23411 1.20874 10.0608Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
            						<Text style={styles.darkMode}>
              							{`Dark Mode`}
            						</Text>
            						{/* RN-Flow:: can be replaced with <StateEnabledThemeDefaultComponentToggle state={"enabled"} theme={"default"} component={"toggle"} /> */}
            						<View style={styles.stateEnabledThemeDefaultComponentToggle}>
              							<View style={styles.frame}/>
            						</View>
          					</View>
          					<View style={styles._____autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyCurvedLock  /> */}
            						<View style={styles.iconlyCurvedLock}>
<Svg style={styles._____group} width="20" height="24" viewBox="0 0 20 24" fill="none" >
<Path d="M15.2161 8.97051V6.46335C15.18 3.52451 12.7673 1.17251 9.82962 1.20868C6.95145 1.24485 4.62395 3.56185 4.57495 6.44001V8.97051" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.89535 14.5156V17.1067" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.89541 8.29489C3.19291 8.29489 0.95874 10.1242 0.95874 15.6111C0.95874 21.0991 3.19291 22.9284 9.89541 22.9284C16.5979 22.9284 18.8332 21.0991 18.8332 15.6111C18.8332 10.1242 16.5979 8.29489 9.89541 8.29489Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
                        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
      <Text style={styles.privacyPolicy}>Privacy Policy</Text>
    </TouchableOpacity>
            						{/* RN-Flow:: can be replaced with <____iconlyLightArrowRight2  /> */}
            						<View style={styles.____iconlyLightArrowRight2}>
              							{/* RN-Flow:: can be replaced with <_____iconlyLightArrowRight2  /> */}
              							<View style={styles._____iconlyLightArrowRight2}>
<Svg style={styles.______group} width="8" height="14" viewBox="0 0 8 14" fill="none" >
<Path d="M1.08325 1.16666L6.91659 7L1.08325 12.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
            						</View>
          					</View>
          					<View style={styles.______autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyCurvedLogout  /> */}
            						<View style={styles.iconlyCurvedLogout}>
<Svg style={styles._______group} width="26" height="24" viewBox="0 0 26 24" fill="none" >
<Path d="M24.4228 12.1408H10.375" stroke="#F75555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.0083 8.73882L24.4243 12.1408L21.0083 15.5428" stroke="#F75555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.0864 6.90156C17.7014 2.72489 16.1381 1.20822 9.91976 1.20822C1.63526 1.20822 1.63526 3.90322 1.63526 11.9999C1.63526 20.0966 1.63526 22.7916 9.91976 22.7916C16.1381 22.7916 17.7014 21.2749 18.0864 17.0982" stroke="#F75555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

            						</View>
            						<Text style={styles.logout}>
              							{`Logout`}
            						</Text>
          					</View>
        				</View>
      			</View>
      			<View style={styles.group24}>
        				<View style={styles.group35}>
          					<View style={styles.group36}>
            						<View style={styles.group38}>
              							{/* RN-Flow:: can be replaced with <Bottombar activeMenu={"darkProfile"} component={"bottomBar"} /> */}
              							<View style={styles.bottombar}>
                								<View style={styles._______autoLayoutHorizontal}>
                  									<View style={styles.____autoLayoutVertical}>
                    										{/* RN-Flow:: can be replaced with <IconlyLightHome  /> */}
                    										<View style={styles.iconlyLightHome}/>
                    										<Text style={styles.gallery}>
                      											{`gallery`}
                    										</Text>
                  									</View>
                  									<View style={styles._____autoLayoutVertical}>
                    										{/* RN-Flow:: can be replaced with <IconlyLightLocation  /> */}
                    										<View style={styles.iconlyLightLocation}/>
                    										<Text style={styles.explore}>
                      											{`notification`}
                    										</Text>
                                        <Text style={styles.explore}>{nonVerified.length}</Text>
                  									</View>
                  									<View style={styles.______autoLayoutVertical}>
                    										{/* RN-Flow:: can be replaced with <IconlyLightDocument  /> */}
                    										<View style={styles.iconlyLightDocument}>
<Svg style={styles.document} width="19" height="20" viewBox="0 0 19 20" fill="none" >
<Path d="M12.7161 14.2234H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.7161 10.0369H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.25109 5.86011H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0.749802C12.9085 0.749802 5.23149 0.753802 5.21949 0.753802C2.45949 0.770802 0.750488 2.5868 0.750488 5.3568V14.5528C0.750488 17.3368 2.47249 19.1598 5.25649 19.1598C5.25649 19.1598 12.9325 19.1568 12.9455 19.1568C15.7055 19.1398 17.4155 17.3228 17.4155 14.5528V5.3568C17.4155 2.5728 15.6925 0.749802 12.9085 0.749802Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

                    										</View>
                                        <TouchableOpacity onPress={() => navigation.navigate('Schedule',{verified})}>
      <Text style={styles.myBooking}>My Schedule</Text>
    </TouchableOpacity>
                  									</View>
                  									<View style={styles._______autoLayoutVertical}>
                    										{/* RN-Flow:: can be replaced with <IconlyLightChat  /> */}
                    										<View style={styles.iconlyLightChat}>
<Svg style={styles.chat} width="23" height="22" viewBox="0 0 23 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6715 18.0699C15.6153 21.1263 11.0899 21.7867 7.38651 20.074C6.8398 19.8539 6.39158 19.676 5.96547 19.676C4.77859 19.683 3.30126 20.8339 2.53346 20.067C1.76565 19.2991 2.91736 17.8206 2.91736 16.6266C2.91736 16.2004 2.74651 15.7602 2.52642 15.2124C0.812928 11.5096 1.47421 6.98269 4.53036 3.92721C8.4317 0.0244319 14.7701 0.0244322 18.6715 3.9262C22.5798 7.83501 22.5728 14.1681 18.6715 18.0699Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.5394 11.413H15.5484" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5304 11.413H11.5394" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.52138 11.413H7.53038" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

                    										</View>
                    										<Text style={styles.inbox}>
                      											{`Inbox`}
                    										</Text>
                  									</View>
                  									<View style={styles.________autoLayoutVertical}>
                    										{/* RN-Flow:: can be replaced with <IconlyBoldProfile  /> */}
                    										<View style={styles.iconlyBoldProfile}>
<Svg style={styles.________group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.4939 5.29105C13.4939 8.22808 11.1391 10.5831 8.19995 10.5831C5.26185 10.5831 2.90597 8.22808 2.90597 5.29105C2.90597 2.35402 5.26185 0 8.19995 0C11.1391 0 13.4939 2.35402 13.4939 5.29105ZM8.19995 20C3.86232 20 0.199951 19.295 0.199951 16.575C0.199951 13.8539 3.88533 13.1739 8.19995 13.1739C12.5386 13.1739 16.2 13.8789 16.2 16.599C16.2 19.32 12.5146 20 8.19995 20Z" fill="#FB9400"/>
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
            						</View>
          					</View>
        				</View>
        				{/* RN-Flow:: can be replaced with <IconlyLightNotification  /> */}
                <TouchableOpacity onPress={()=>{navigation.navigate("Notification",{nonVerified})}}>  				
                <View style={styles.iconlyLightNotification}>
<Svg style={styles.notification} width="20" height="22" viewBox="0 0 20 22" fill= {nonVerified.length?"red":"none"} >
<Path fillRule="evenodd" clipRule="evenodd" d="M10 16.7367C15.6392 16.7367 18.2481 16.0132 18.5 13.1095C18.5 10.2078 16.6812 10.3944 16.6812 6.83415C16.6812 4.05318 14.0452 0.889038 10 0.889038C5.95477 0.889038 3.31885 4.05318 3.31885 6.83415C3.31885 10.3944 1.5 10.2078 1.5 13.1095C1.75295 16.0242 4.36177 16.7367 10 16.7367Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.3889 19.7463C11.0247 21.261 8.89672 21.2789 7.51953 19.7463" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

        				</View></TouchableOpacity>
      
<Svg style={styles.image} width="21" height="21" viewBox="0 0 21 21" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M19.46 6.149V14.3C19.46 17.32 17.57 19.45 14.55 19.45H5.9C2.88 19.45 1 17.32 1 14.3V6.149C1 3.129 2.89 1 5.9 1H14.55C17.57 1 19.46 3.129 19.46 6.149Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.53125 14.6807L5.05925 13.0677C5.59025 12.5047 6.47525 12.4777 7.03925 13.0077C7.05625 13.0247 7.97625 13.9597 7.97625 13.9597C8.53125 14.5247 9.43825 14.5337 10.0033 13.9797C10.0403 13.9437 12.3372 11.1577 12.3372 11.1577C12.9292 10.4387 13.9922 10.3357 14.7122 10.9287C14.7602 10.9687 16.9303 13.1957 16.9303 13.1957" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.56269 7.38291C8.56269 8.35191 7.77769 9.13691 6.80869 9.13691C5.83969 9.13691 5.05469 8.35191 5.05469 7.38291C5.05469 6.41391 5.83969 5.62891 6.80869 5.62891C7.77769 5.62991 8.56269 6.41391 8.56269 7.38291Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

      			</View>
    		</View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  	_Dark_profilesettings: {
    flexShrink: 0,
    height: 926,
    width: 428,
    backgroundColor: "rgba(24, 26, 32, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	autoLayoutVertical: {
    position: "absolute",
    flexShrink: 0,
    top: 68,
    left: 24,
    width: 380,
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
  	iconlyLightMoreCircle: {
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
    left: 3,
    width: 22
},
  	_autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    rowGap: 12
},
  	typeEditAvatarComponentAvatar: {
    flexShrink: 0,
    height: 120,
    width: 120,
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
  	__autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	danielAustin: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
},
  	daniel_austinyourdomaincom: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
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
  	___autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    rowGap: 24
},
  	__autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	iconlyCurvedProfile: {
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
    left: 6,
    width: 16
},
  	editProfile: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 25.199999570846558
},
  	iconlyLightArrowRight2: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	_iconlyLightArrowRight2: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	__group: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 6,
    left: 4,
    width: 12
},
  	___autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	iconlyLightOutlineCalendar: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	calendar: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 22,
    left: 2,
    width: 20
},
  	setschedule: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 25.199999570846558
},
  	__iconlyLightArrowRight2: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	___iconlyLightArrowRight2: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	___group: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 6,
    left: 4,
    width: 12
},
  	____autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	iconlyCurvedShow: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	____group: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    height: 17,
    left: 3,
    width: 22
},
  	darkMode: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 25.199999570846558
},
  	stateEnabledThemeDefaultComponentToggle: {
    flexShrink: 0,
    height: 24,
    width: 44,
    backgroundColor: "rgba(251, 148, 0, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 1000
},
  	frame: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    left: 20,
    width: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderWidth: 2,
    borderColor: "rgba(251, 148, 0, 1)",
    borderRadius: 1000
},
  	_____autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	iconlyCurvedLock: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 22,
    left: 5,
    width: 18
},
  	privacyPolicy: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 25.199999570846558
},
  	____iconlyLightArrowRight2: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____iconlyLightArrowRight2: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	______group: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 6,
    left: 4,
    width: 12
},
  	______autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
},
  	iconlyCurvedLogout: {
    flexShrink: 0,
    height: 28,
    width: 28,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 22,
    left: 3,
    width: 23
},
  	logout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(247, 85, 85, 1)",
    //fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 25.199999570846558
},
  	group24: {
    position: "absolute",
    flexShrink: 0,
    top: 836,
    height: 90,
    width: 428
},
  	group35: {
    position: "absolute",
    flexShrink: 0,
    height: 90,
    width: 428
},
  	group36: {
    position: "absolute",
    flexShrink: 0,
    height: 90,
    width: 428
},
  	group38: {
    position: "absolute",
    flexShrink: 0,
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
  	_______autoLayoutHorizontal: {
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
  	____autoLayoutVertical: {
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
  	gallery: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_____autoLayoutVertical: {
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
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	______autoLayoutVertical: {
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
    color: "rgba(158, 158, 158, 1)",
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	_______autoLayoutVertical: {
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
    //fontFamily: "Urbanist",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224
},
  	________autoLayoutVertical: {
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
  	________group: {
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
    color: "rgba(251, 148, 0, 1)",
    //fontFamily: "Urbanist",
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
  	iconlyLightNotification: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    height: 24,
    left: 123,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	notification: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
    left: 4,
    width: 17
},
  	image: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    height: 18,
    left: 47,
    width: 18
}
})