import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import { Svg, Path, Line,Defs ,Stop,LinearGradient} from 'react-native-svg';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { getReactNativePersistence } from "@firebase/auth";
import { FIREBASE_AUTH } from "../Firebase/index";
import ADDRESS_IP from './API';
import { ScrollView } from 'react-native-gesture-handler';


export default function _Dark_signupblankform({navigation}) {

  const [displayName, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [loading, setLoading] = useState(false);
  console.log(email,password); 
  const handleSignIn = () => {
    navigation.navigate("Login"); 
  };
  const signUp = async () => {
  console.log(email,password,FIREBASE_AUTH); 
    try {

     const credentials =  await createUserWithEmailAndPassword(FIREBASE_AUTH ,email, password);
     const user = credentials.user
     
     
      await axios
        .post(`http://${ADDRESS_IP}:3001/users/register`, {
          
          name: displayName,
          email: email,
          
        })
        .then((res) => {
          console.log(res.data);
          navigation.navigate("Login")
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert(`Sign-up failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }



    return (
        <ScrollView>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
              <View style={styles._Dark_signupblankform}>
                  <View style={styles.autoLayoutVertical}>
                      {/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
                      <View style={styles.themeDarkComponentNavbar}>
                          <View style={styles.autoLayoutHorizontal}>
                              {/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft  /> */}
                              <View style={styles.iconlyLightOutlineArrowLeft}>
      <Svg style={styles.group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
      <Path d="M19.334 8.32007C19.334 8.76305 19.0048 9.12914 18.5777 9.18708L18.459 9.19507L0.958982 9.19507C0.475735 9.19507 0.0839825 8.80332 0.0839825 8.32007C0.0839825 7.87709 0.413162 7.511 0.840252 7.45306L0.958982 7.44507L18.459 7.44507C18.9422 7.44507 19.334 7.83682 19.334 8.32007Z" fill="white"/>
      <Path d="M8.63496 14.7284C8.97741 15.0694 8.9786 15.6234 8.63763 15.9658C8.32765 16.2771 7.84161 16.3064 7.49851 16.053L7.40019 15.9685L0.34186 8.94048C0.0296164 8.62958 0.00121212 8.14178 0.256659 7.79869L0.341808 7.70043L7.40014 0.671262C7.74256 0.330261 8.29658 0.331408 8.63758 0.673824C8.94758 0.985111 8.97481 1.47128 8.71994 1.8133L8.63501 1.91126L2.19964 8.32078L8.63496 14.7284Z" fill="white"/>
      </Svg>
      
                              </View>
                          </View>
                      </View>
                      <Text style={styles.createyourAccount}>
                          {`Create your\nAccount`}
                      </Text>
                      {/* RN-Flow:: can be replaced with <StatusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField status={"default"} type={"default"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                      <View style={styles.statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField}>
                          <TextInput style={styles.fullname}
                              placeholder='Full Name' 
                              value={displayName}
                              onChangeText={(text)=>setName(text)}
                          />
                      </View>
                      <View style={styles._autoLayoutVertical}>
                          {/* RN-Flow:: can be replaced with <StatusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField status={"default"} type={"email"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                          <View style={styles.statusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField}>
                              {/* RN-Flow:: can be replaced with <IconlyBoldMessage  /> */}
                              <View style={styles.iconlyBoldMessage}>
      <Svg style={styles._group} width="18" height="16" viewBox="0 0 18 16" fill="none" >
      <Path fillRule="evenodd" clipRule="evenodd" d="M13.1171 0.300049C14.2346 0.300049 15.3096 0.741715 16.1005 1.53422C16.8921 2.32505 17.3346 3.39172 17.3346 4.50838V11.0917C17.3346 13.4167 15.443 15.3 13.1171 15.3H4.88464C2.5588 15.3 0.667969 13.4167 0.667969 11.0917V4.50838C0.667969 2.18338 2.55047 0.300049 4.88464 0.300049H13.1171ZM14.443 5.75005L14.5096 5.68338C14.7088 5.44172 14.7088 5.09172 14.5005 4.85005C14.3846 4.72588 14.2255 4.65005 14.0596 4.63338C13.8846 4.62422 13.718 4.68338 13.5921 4.80005L9.83464 7.80005C9.3513 8.20088 8.6588 8.20088 8.16797 7.80005L4.41797 4.80005C4.1588 4.60838 3.80047 4.63338 3.58464 4.85838C3.35964 5.08338 3.33464 5.44172 3.52547 5.69172L3.63464 5.80005L7.4263 8.75838C7.89297 9.12505 8.4588 9.32505 9.0513 9.32505C9.64214 9.32505 10.218 9.12505 10.6838 8.75838L14.443 5.75005Z" fill="#9E9E9E"/>
      </Svg>
      
                              </View>
                              <TextInput style={styles.email}
                                  placeholder='Email'
                                  value={email}
                                  onChangeText={(text)=>setEmail(text)}
                              /> 
                          </View>
                          {/* RN-Flow:: can be replaced with <StatusDefaultTypePasswordStateDefaultInputThemeDarkComponentInputField status={"default"} type={"password"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                          <View style={styles.statusDefaultTypePasswordStateDefaultInputThemeDarkComponentInputField}>
                              {/* RN-Flow:: can be replaced with <IconlyBoldLock  /> */}
                              <View style={styles.iconlyBoldLock}>
      <Svg style={styles.__group} width="16" height="18" viewBox="0 0 16 18" fill="none" >
      <Path fillRule="evenodd" clipRule="evenodd" d="M12.6016 4.96335V6.24113C14.0369 6.68914 15.0827 7.98845 15.0827 9.54034V13.6544C15.0827 15.5757 13.4899 17.1333 11.5262 17.1333H4.47335C2.50881 17.1333 0.916016 15.5757 0.916016 13.6544V9.54034C0.916016 7.98845 1.96264 6.68914 3.39709 6.24113V4.96335C3.40556 2.479 5.46324 0.466675 7.98665 0.466675C10.5439 0.466675 12.6016 2.479 12.6016 4.96335ZM8.00358 1.91588C9.72255 1.91588 11.1197 3.28227 11.1197 4.96335V6.06143H4.87896V4.94678C4.88742 3.27399 6.28462 1.91588 8.00358 1.91588ZM8.74028 12.5125C8.74028 12.9182 8.41004 13.2412 7.99511 13.2412C7.58866 13.2412 7.25841 12.9182 7.25841 12.5125V10.674C7.25841 10.2765 7.58866 9.95357 7.99511 9.95357C8.41004 9.95357 8.74028 10.2765 8.74028 10.674V12.5125Z" fill="#9E9E9E"/>
      </Svg>
      
                              </View>
                              <TextInput style={styles.password}
                                  placeholder='Password'
                                  value={password}
                                  onChangeText={(text)=>setPassword(text)}
                              /> 
                              {/* RN-Flow:: can be replaced with <IconlyBoldHide  /> */}
                              <View style={styles.iconlyBoldHide}>
      <Svg style={styles.___group} width="18" height="15" viewBox="0 0 18 15" fill="none" >
      <Path fillRule="evenodd" clipRule="evenodd" d="M7.16874 10.5105C7.68914 10.8633 8.32337 11.0766 8.99825 11.0766C10.7871 11.0766 12.2426 9.60802 12.2426 7.80309C12.2426 7.12213 12.0312 6.4822 11.6815 5.95713L10.7952 6.85139C10.9416 7.13034 11.0229 7.45851 11.0229 7.80309C11.0229 8.92707 10.1122 9.84594 8.99825 9.84594C8.65674 9.84594 8.3315 9.7639 8.05504 9.61622L7.16874 10.5105ZM14.3567 3.25794C15.5357 4.3409 16.5358 5.80125 17.2839 7.55696C17.3489 7.71284 17.3489 7.89333 17.2839 8.04101C15.5438 12.1267 12.4459 14.5716 8.99825 14.5716H8.99012C7.42081 14.5716 5.91654 14.0547 4.59117 13.1112L3.01372 14.7028C2.89176 14.8259 2.73726 14.8833 2.58277 14.8833C2.42828 14.8833 2.26566 14.8259 2.15182 14.7028C1.94854 14.4977 1.91602 14.1696 2.07864 13.9317L2.10303 13.8988L14.129 1.76477L14.129 1.76476C14.1453 1.74835 14.1615 1.73195 14.1697 1.71554L14.1697 1.71554C14.1859 1.69913 14.2022 1.68272 14.2103 1.66632L14.9746 0.895117C15.2186 0.657194 15.6007 0.657194 15.8366 0.895117C16.0805 1.13304 16.0805 1.52684 15.8366 1.76477L14.3567 3.25794ZM5.74799 7.80628C5.74799 8.0196 5.77238 8.2329 5.8049 8.42981L2.79638 11.4654C1.98326 10.5137 1.27585 9.36509 0.714803 8.04421C0.649753 7.89653 0.649753 7.71604 0.714803 7.56016C2.45487 3.47445 5.55284 1.03779 8.99232 1.03779H9.00045C10.1632 1.03779 11.2934 1.31673 12.3342 1.8418L9.61841 4.58202C9.42327 4.5492 9.21186 4.52459 9.00045 4.52459C7.20346 4.52459 5.74799 5.99315 5.74799 7.80628Z" fill="#9E9E9E"/>
      </Svg>
      
                              </View>
                          </View>
                          {/* RN-Flow:: can be replaced with <StyleTextThemeDarkStateUncheckedComponentCheckbox style={"text"} theme={"dark"} state={"unchecked"} component={"checkbox"} /> */}
                          <View style={styles.styleTextThemeDarkStateUncheckedComponentCheckbox}>
                              <View style={styles.rectangle}/>
                              <Text style={styles.unchecked}>
                                  {`Remember me`}
                              </Text>
                          </View>
                          {/* RN-Flow:: can be replaced with <TypeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton type={"button"} type2={"secondary"} type3={"rounded"} style={"default"} state={"disabled"} theme={"dark"} component={"button"} /> */}
                          <View style={styles.typeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton}>
                              <Text style={styles.button} onPress={()=>signUp(email,password)}>
                                  {`Sign up`}
                              </Text>
                          </View>
                      </View>
                      <View style={styles.__autoLayoutVertical}>
                          <View style={styles._autoLayoutHorizontal}>
                              {/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
                              <View style={styles.themeDarkDivider}>
      <Svg style={styles.line} width="96" height="2" viewBox="0 0 96 2" fill="none" >
      <Line y1="1.40002" x2="96" y2="1.40002" stroke="#35383F"/>
      </Svg>
      
                              </View>
                              <Text style={styles.orcontinuewith}>
                                  {`or continue with`}
                              </Text>
                              {/* RN-Flow:: can be replaced with <_themeDarkDivider theme={"darkDivider"} /> */}
                              <View style={styles._themeDarkDivider}>
      <Svg style={styles._line} width="96" height="2" viewBox="0 0 96 2" fill="none" >
      <Line y1="1.40002" x2="96" y2="1.40002" stroke="#35383F"/>
      </Svg>
      
                              </View>
                          </View>
                          <View style={styles.__autoLayoutHorizontal}>
                              {/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"facebook"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
                              <View style={styles.typeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton}>
                                  <View style={styles.___autoLayoutHorizontal}>
                                      <View style={styles.frame}>
      <Svg style={styles.vector} width="25" height="25" viewBox="0 0 25 25" fill="none" >
      <Path d="M12.5 0.400024C5.8724 0.400024 0.5 5.77242 0.5 12.4C0.5 19.0276 5.8724 24.4 12.5 24.4C19.1276 24.4 24.5 19.0276 24.5 12.4C24.5 5.77242 19.1276 0.400024 12.5 0.400024Z" fill="url(#paint0_linear_1233_8842)"/>
      <Defs>
      <LinearGradient id="paint0_linear_1233_8842" x1="4.0958" y1="3.99582" x2="22.469" y2="22.369" gradientUnits="userSpaceOnUse">
      <Stop stopColor="#2AA4F4"/>
      <Stop offset="1" stopColor="#007AD9"/>
      </LinearGradient>
      </Defs>
      </Svg>
      
      <Svg style={styles._vector} width="12" height="19" viewBox="0 0 12 19" fill="none" >
      <Path d="M7.22805 11.2578H10.4846L10.9961 7.94967H7.22805V6.14144C7.22805 4.76734 7.67728 3.54864 8.96267 3.54864H11.0282V0.662015C10.6652 0.61294 9.89761 0.505981 8.44738 0.505981C5.41856 0.505981 3.64305 2.10533 3.64305 5.74947V7.9503H0.529297V11.2585H3.64242V20.3512C4.25901 20.4431 4.88377 20.506 5.52489 20.506C6.10436 20.506 6.66998 20.4531 7.22805 20.3776V11.2578Z" fill="white"/>
      </Svg>
      
                                      </View>
                                  </View>
                              </View>
                              {/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"google"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
                              <View style={styles.typeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton}>
                                  <View style={styles.____autoLayoutHorizontal}>
                                      <View style={styles._frame}>
      <Svg style={styles.__vector} width="12" height="12" viewBox="0 0 12 12" fill="none" >
      <Path d="M11.5088 2.62457C11.5088 1.64131 11.4304 0.923779 11.2608 0.179688H0.230469V4.61767H6.70503C6.57454 5.72057 5.86965 7.38152 4.30318 8.49761L4.28122 8.64619L7.76881 11.3964L8.01044 11.4209C10.2295 9.33477 11.5088 6.26534 11.5088 2.62457Z" fill="#4285F4"/>
      </Svg>
      
      <Svg style={styles.___vector} width="19" height="11" viewBox="0 0 19 11" fill="none" >
      <Path d="M11.2296 10.3176C14.4016 10.3176 17.0645 9.25455 19.0095 7.42093L15.3023 4.49759C14.3102 5.20184 12.9787 5.69347 11.2296 5.69347C8.1228 5.69347 5.48598 3.60739 4.54603 0.723999L4.40825 0.735908L0.7818 3.59274L0.734375 3.72694C2.6663 7.63345 6.63462 10.3176 11.2296 10.3176Z" fill="#34A853"/>
      </Svg>
      
      <Svg style={styles.____vector} width="6" height="12" viewBox="0 0 6 12" fill="none" >
      <Path d="M5.54719 8.72395C5.29917 7.97985 5.15564 7.18254 5.15564 6.35876C5.15564 5.53488 5.29917 4.73766 5.53414 3.99356L5.52757 3.83509L1.85568 0.932373L1.73554 0.990541C0.939305 2.61164 0.482422 4.43207 0.482422 6.35876C0.482422 8.28544 0.939305 10.1058 1.73554 11.7269L5.54719 8.72395Z" fill="#FBBC05"/>
      </Svg>
      
      <Svg style={styles._____vector} width="20" height="10" viewBox="0 0 20 10" fill="none" >
      <Path d="M11.2295 5.02405C13.4356 5.02405 14.9237 5.99404 15.7722 6.80463L19.0878 3.50931C17.0515 1.58262 14.4015 0.400024 11.2295 0.400024C6.63462 0.400024 2.6663 3.08408 0.734375 6.99059L4.53297 9.99361C5.48597 7.11022 8.12279 5.02405 11.2295 5.02405Z" fill="#EB4335"/>
      </Svg>
      
                                      </View>
                                  </View>
                              </View>
                              {/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3AppleStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"apple"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
                              <View style={styles.typeLoginType2SocialType3AppleStyleDefaultStateDefaultThemeDarkComponentButton}>
                                  <View style={styles._____autoLayoutHorizontal}>
                                      <View style={styles.__frame}>
      <Svg style={styles.____group} width="21" height="25" viewBox="0 0 21 25" fill="none" >
      <Path d="M15.2729 0.412035C15.2219 0.355035 13.3844 0.434535 11.7854 2.17003C10.1864 3.90403 10.4324 5.89303 10.4684 5.94404C10.5044 5.99504 12.7484 6.07453 14.1809 4.05703C15.6134 2.03953 15.3239 0.470535 15.2729 0.412035ZM20.2439 18.0115C20.1719 17.8675 16.7564 16.1605 17.0744 12.8785C17.3924 9.59503 19.5869 8.69503 19.6214 8.59754C19.6559 8.50004 18.7259 7.41254 17.7404 6.86204C17.0168 6.47391 16.216 6.25155 15.3959 6.21103C15.2339 6.20653 14.6714 6.06853 13.5149 6.38503C12.7529 6.59353 11.0354 7.26854 10.5629 7.29554C10.0889 7.32254 8.67889 6.51253 7.16239 6.29803C6.19189 6.11053 5.16289 6.49454 4.42639 6.79004C3.69139 7.08404 2.29339 7.92104 1.31539 10.1455C0.337389 12.3685 0.848889 15.8905 1.21489 16.9855C1.58089 18.079 2.15239 19.8715 3.12439 21.1795C3.98839 22.6555 5.13439 23.68 5.61289 24.028C6.09139 24.376 7.44139 24.607 8.37739 24.1285C9.13039 23.6665 10.4894 23.401 11.0264 23.4205C11.5619 23.44 12.6179 23.6515 13.6994 24.229C14.5559 24.5245 15.3659 24.4015 16.1774 24.0715C16.9889 23.74 18.1634 22.483 19.5344 19.9345C20.0549 18.7495 20.2919 18.109 20.2439 18.0115Z" fill="white"/>
      <Path d="M15.2729 0.412035C15.2219 0.355035 13.3844 0.434535 11.7854 2.17003C10.1864 3.90403 10.4324 5.89303 10.4684 5.94404C10.5044 5.99504 12.7484 6.07453 14.1809 4.05703C15.6134 2.03953 15.3239 0.470535 15.2729 0.412035ZM20.2439 18.0115C20.1719 17.8675 16.7564 16.1605 17.0744 12.8785C17.3924 9.59503 19.5869 8.69503 19.6214 8.59754C19.6559 8.50004 18.7259 7.41254 17.7404 6.86204C17.0168 6.47391 16.216 6.25155 15.3959 6.21103C15.2339 6.20653 14.6714 6.06853 13.5149 6.38503C12.7529 6.59353 11.0354 7.26854 10.5629 7.29554C10.0889 7.32254 8.67889 6.51253 7.16239 6.29803C6.19189 6.11053 5.16289 6.49454 4.42639 6.79004C3.69139 7.08404 2.29339 7.92104 1.31539 10.1455C0.337389 12.3685 0.848889 15.8905 1.21489 16.9855C1.58089 18.079 2.15239 19.8715 3.12439 21.1795C3.98839 22.6555 5.13439 23.68 5.61289 24.028C6.09139 24.376 7.44139 24.607 8.37739 24.1285C9.13039 23.6665 10.4894 23.401 11.0264 23.4205C11.5619 23.44 12.6179 23.6515 13.6994 24.229C14.5559 24.5245 15.3659 24.4015 16.1774 24.0715C16.9889 23.74 18.1634 22.483 19.5344 19.9345C20.0549 18.7495 20.2919 18.109 20.2439 18.0115Z" fill="white"/>
      </Svg>
      
                                      </View>
                                  </View>
                              </View>
                          </View>
                      </View>
                      <View style={styles.______autoLayoutHorizontal}>
                          <Text style={styles.alreadyhaveanaccount}>
                              {`Already have an account?`}
                          </Text>
                          <Text style={styles.signin} onPress={handleSignIn} >
                              {`Sign in`}
                          </Text>
                      </View>
                  </View>
              </View>
              </View>
              </ScrollView>
          )
      }
      
      const styles = StyleSheet.create({
          _Dark_signupblankform: {
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
          top: 44,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: 24,
          paddingBottom: 48,
          alignItems: "center",
          justifyContent: "space-between",
          rowGap: 28,
          paddingHorizontal: 24
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
          iconlyLightOutlineArrowLeft: {
          flexShrink: 0,
          height: 28,
          width: 28,
          alignItems: "flex-start",
          rowGap: 0
      },
          group: {
          position: "absolute",
          flexShrink: 0,
          top: 5,
          height: 19,
          left: 6,
          width: 16
      },
          createyourAccount: {
          alignSelf: "stretch",
          flexShrink: 0,
          textAlign: "left",
          color: "rgba(255, 255, 255, 1)",
          //fontFamily: "Urbanist",
          fontSize: 48,
          fontWeight: "700",
          letterSpacing: 0,
          lineHeight: 52.80000114440918
      },
          statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField: {
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
          label: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          textAlign: "left",
          color: "rgba(158, 158, 158, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "400",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      },
          _autoLayoutVertical: {
          alignSelf: "stretch",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          rowGap: 20
      },
          statusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField: {
          alignSelf: "stretch",
          flexShrink: 0,
          height: 60,
          backgroundColor: "rgba(31, 34, 42, 1)",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 12,
          paddingVertical: 0,
          paddingHorizontal: 20,
          borderRadius: 12
      },
          iconlyBoldMessage: {
          flexShrink: 0,
          height: 20,
          width: 20,
          alignItems: "flex-start",
          rowGap: 0
      },
          _group: {
          position: "absolute",
          flexShrink: 0,
          top: 3,
          height: 15,
          left: 2,
          width: 17
      },
          _label: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          textAlign: "left",
          color: "rgba(158, 158, 158, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "400",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      },
          statusDefaultTypePasswordStateDefaultInputThemeDarkComponentInputField: {
          alignSelf: "stretch",
          flexShrink: 0,
          height: 60,
          backgroundColor: "rgba(31, 34, 42, 1)",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 12,
          paddingVertical: 0,
          paddingHorizontal: 20,
          borderRadius: 12
      },
          iconlyBoldLock: {
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
          height: 17,
          left: 3,
          width: 14
      },
          __label: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          textAlign: "left",
          color: "rgba(158, 158, 158, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "400",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      },
          iconlyBoldHide: {
          flexShrink: 0,
          height: 20,
          width: 20,
          alignItems: "flex-start",
          rowGap: 0
      },
          ___group: {
          position: "absolute",
          flexShrink: 0,
          top: 3,
          height: 14,
          left: 2,
          width: 17
      },
          styleTextThemeDarkStateUncheckedComponentCheckbox: {
          alignSelf: "stretch",
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 12
      },
          rectangle: {
          flexShrink: 0,
          width: 24,
          height: 24,
          borderWidth: 3,
          borderColor: "rgba(251, 148, 0, 1)",
          borderRadius: 8
      },
          unchecked: {
          flexShrink: 0,
          textAlign: "left",
          color: "rgba(255, 255, 255, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "600",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      },
          typeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton: {
          alignSelf: "stretch",
          flexShrink: 0,
          backgroundColor: "rgba(233, 163, 63, 1)",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 10,
          paddingVertical: 18,
          paddingHorizontal: 16,
          borderRadius: 100
      },
          button: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          height: 22,
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
          //fontFamily: "Urbanist",
          fontSize: 16,
          fontWeight: "700",
          letterSpacing: 0.20000000298023224,
          lineHeight: 22.399999618530273,
          textShadowColor: "rgba(251, 148, 0, 0.25)",
          textShadowOffset: {
              width: 4,
              height: 8
          },
          textShadowRadius: 24
      },
          __autoLayoutVertical: {
          alignSelf: "stretch",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          rowGap: 20
      },
          _autoLayoutHorizontal: {
          alignSelf: "stretch",
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 16,
          padding: 10
      },
          themeDarkDivider: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
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
          orcontinuewith: {
          flexShrink: 0,
          textAlign: "center",
          color: "rgba(245, 245, 245, 1)",
          //fontFamily: "Urbanist",
          fontSize: 18,
          fontWeight: "600",
          letterSpacing: 0.20000000298023224,
          lineHeight: 25.199999570846558
      },
          _themeDarkDivider: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
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
          __autoLayoutHorizontal: {
          alignSelf: "stretch",
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 20
      },
          typeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton: {
          flexShrink: 0,
          backgroundColor: "rgba(31, 34, 42, 1)",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 10,
          paddingVertical: 18,
          paddingHorizontal: 32,
          borderWidth: 1,
          borderColor: "rgba(53, 56, 63, 1)",
          borderRadius: 16
      },
          ___autoLayoutHorizontal: {
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 12
      },
          frame: {
          flexShrink: 0,
          height: 24,
          width: 24,
          alignItems: "flex-start",
          rowGap: 0
      },
          vector: {
          position: "absolute",
          flexShrink: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: "visible"
      },
          _vector: {
          position: "absolute",
          flexShrink: 0,
          top: 6,
          right: 6,
          bottom: -2,
          left: 7,
          overflow: "visible"
      },
          typeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton: {
          flexShrink: 0,
          width: 87,
          backgroundColor: "rgba(31, 34, 42, 1)",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 10,
          paddingVertical: 18,
          paddingHorizontal: 32,
          borderWidth: 1,
          borderColor: "rgba(53, 56, 63, 1)",
          borderRadius: 16
      },
          ____autoLayoutHorizontal: {
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 12
      },
          _frame: {
          flexShrink: 0,
          height: 24,
          width: 23,
          alignItems: "flex-start",
          rowGap: 0
      },
          __vector: {
          position: "absolute",
          flexShrink: 0,
          top: 10,
          right: 0,
          bottom: 3,
          left: 12,
          overflow: "visible"
      },
          ___vector: {
          position: "absolute",
          flexShrink: 0,
          top: 14,
          right: 4,
          bottom: 0,
          left: 1,
          overflow: "visible"
      },
          ____vector: {
          position: "absolute",
          flexShrink: 0,
          top: 7,
          right: 18,
          bottom: 7,
          left: 0,
          overflow: "visible"
      },
          _____vector: {
          position: "absolute",
          flexShrink: 0,
          top: 0,
          right: 3,
          bottom: 14,
          left: 1,
          overflow: "visible"
      },
          typeLoginType2SocialType3AppleStyleDefaultStateDefaultThemeDarkComponentButton: {
          flexShrink: 0,
          backgroundColor: "rgba(31, 34, 42, 1)",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 10,
          paddingVertical: 18,
          paddingHorizontal: 32,
          borderWidth: 1,
          borderColor: "rgba(53, 56, 63, 1)",
          borderRadius: 16
      },
          _____autoLayoutHorizontal: {
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 12
      },
          __frame: {
          flexShrink: 0,
          height: 24,
          width: 24,
          alignItems: "flex-start",
          rowGap: 0
      },
          ____group: {
          position: "absolute",
          flexShrink: 0,
          height: 24,
          left: 2,
          width: 19
      },
          ______autoLayoutHorizontal: {
          alignSelf: "stretch",
          flexShrink: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 8
      },
          alreadyhaveanaccount: {
          flexShrink: 0,
          textAlign: "right",
          color: "rgba(245, 245, 245, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "400",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      },
          signin: {
          flexShrink: 0,
          textAlign: "left",
          color: "rgba(251, 148, 0, 1)",
          //fontFamily: "Urbanist",
          fontSize: 14,
          fontWeight: "600",
          letterSpacing: 0.20000000298023224,
          lineHeight: 19.59999966621399
      }
      })