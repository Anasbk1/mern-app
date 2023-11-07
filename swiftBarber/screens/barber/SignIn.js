import React ,{useState}from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { Svg, Path, Line, Defs, LinearGradient, Stop } from 'react-native-svg';
import { FIREBASE_AUTH } from "../../Firebase/index.js";
import ADDRESS_IP from '../API.js';
import { ScrollView } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword } from "@firebase/auth";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function _Dark_signupblankform({navigation}) {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [loading, setLoading] = useState(false);
    console.log(email,password); 
    const handleSignIn = () => {
      navigation.navigate("loginBarber"); 
    };
    const signUp = async () => {
    console.log(email,password,FIREBASE_AUTH); 
      try {
  
       const credentials =  await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
       const user = credentials.user
       
       
        await axios
          .post(`http://${ADDRESS_IP}:3001/barbers/register`, {
            
            name: name,
            email: email,
            
          })
          .then((res) => {
            console.log(res.data);
            navigation.navigate("loginBarber")
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
        {/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft /> */}
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
        <View style={styles._autoLayoutVertical}>
        {/* RN-Flow:: can be replaced with <StatusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField status={"default"} type={"default"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
        <View style={styles.statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField}>
        <TextInput style={styles.fullname}
                              placeholder='Name' 
                              value={name}
                              onChangeText={(text)=>setName(text)}
                          />
        </View>
        {/* RN-Flow:: can be replaced with <StatusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField status={"default"} type={"email"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
        <View style={styles.statusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField}>
        {/* RN-Flow:: can be replaced with <IconlyBoldMessage /> */}
        <View style={styles.iconlyBoldMessage}>
        <Svg style={styles._group} width="18" height="15" viewBox="0 0 18 15" fill="none" >
        <Path fillRule="evenodd" clipRule="evenodd" d="M13.1171 0C14.2346 0 15.3096 0.441667 16.1005 1.23417C16.8921 2.025 17.3346 3.09167 17.3346 4.20833V10.7917C17.3346 13.1167 15.443 15 13.1171 15H4.88464C2.5588 15 0.667969 13.1167 0.667969 10.7917V4.20833C0.667969 1.88333 2.55047 0 4.88464 0H13.1171ZM14.443 5.45L14.5096 5.38333C14.7088 5.14167 14.7088 4.79167 14.5005 4.55C14.3846 4.42583 14.2255 4.35 14.0596 4.33333C13.8846 4.32417 13.718 4.38333 13.5921 4.5L9.83464 7.5C9.3513 7.90083 8.6588 7.90083 8.16797 7.5L4.41797 4.5C4.1588 4.30833 3.80047 4.33333 3.58464 4.55833C3.35964 4.78333 3.33464 5.14167 3.52547 5.39167L3.63464 5.5L7.4263 8.45833C7.89297 8.825 8.4588 9.025 9.0513 9.025C9.64214 9.025 10.218 8.825 10.6838 8.45833L14.443 5.45Z" fill="#9E9E9E"/>
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
        {/* RN-Flow:: can be replaced with <IconlyBoldLock /> */}
        <View style={styles.iconlyBoldLock}>
        <Svg style={styles.__group} width="16" height="17" viewBox="0 0 16 17" fill="none" >
        <Path fillRule="evenodd" clipRule="evenodd" d="M12.6016 4.6633V5.94108C14.0369 6.38909 15.0827 7.68841 15.0827 9.2403V13.3544C15.0827 15.2756 13.4899 16.8333 11.5262 16.8333H4.47335C2.50881 16.8333 0.916016 15.2756 0.916016 13.3544V9.2403C0.916016 7.68841 1.96264 6.38909 3.39709 5.94108V4.6633C3.40556 2.17895 5.46324 0.166626 7.98665 0.166626C10.5439 0.166626 12.6016 2.17895 12.6016 4.6633ZM8.00358 1.61583C9.72255 1.61583 11.1197 2.98222 11.1197 4.6633V5.76138H4.87896V4.64673C4.88742 2.97394 6.28462 1.61583 8.00358 1.61583ZM8.74028 12.2124C8.74028 12.6182 8.41004 12.9411 7.99511 12.9411C7.58866 12.9411 7.25841 12.6182 7.25841 12.2124V10.374C7.25841 9.97649 7.58866 9.65352 7.99511 9.65352C8.41004 9.65352 8.74028 9.97649 8.74028 10.374V12.2124Z" fill="#9E9E9E"/>
        </Svg>
        </View>
        <TextInput style={styles.password}
                                  placeholder='Password'
                                  value={password}
                                  onChangeText={(text)=>setPassword(text)}
                              />
        {/* RN-Flow:: can be replaced with <IconlyBoldHide /> */}
        <View style={styles.iconlyBoldHide}>
        <Svg style={styles.___group} width="18" height="15" viewBox="0 0 18 15" fill="none" >
        <Path fillRule="evenodd" clipRule="evenodd" d="M7.16874 10.2104C7.68914 10.5632 8.32337 10.7765 8.99825 10.7765C10.7871 10.7765 12.2426 9.30797 12.2426 7.50304C12.2426 6.82208 12.0312 6.18215 11.6815 5.65708L10.7952 6.55134C10.9416 6.83029 11.0229 7.15846 11.0229 7.50304C11.0229 8.62702 10.1122 9.54589 8.99825 9.54589C8.65674 9.54589 8.3315 9.46385 8.05504 9.31617L7.16874 10.2104ZM14.3567 2.95789C15.5357 4.04085 16.5358 5.5012 17.2839 7.25691C17.3489 7.41279 17.3489 7.59328 17.2839 7.74096C15.5438 11.8267 12.4459 14.2715 8.99825 14.2715H8.99012C7.42081 14.2715 5.91654 13.7547 4.59117 12.8112L3.01372 14.4028C2.89176 14.5259 2.73726 14.5833 2.58277 14.5833C2.42828 14.5833 2.26566 14.5259 2.15182 14.4028C1.94854 14.1977 1.91602 13.8695 2.07864 13.6316L2.10303 13.5988L14.129 1.46472L14.129 1.46471C14.1453 1.44831 14.1615 1.4319 14.1697 1.41549L14.1697 1.41549C14.1859 1.39908 14.2022 1.38267 14.2103 1.36627L14.9746 0.595068C15.2186 0.357145 15.6007 0.357145 15.8366 0.595068C16.0805 0.832991 16.0805 1.22679 15.8366 1.46472L14.3567 2.95789ZM5.74799 7.50624C5.74799 7.71955 5.77238 7.93286 5.8049 8.12976L2.79638 11.1653C1.98326 10.2136 1.27585 9.06504 0.714803 7.74416C0.649753 7.59648 0.649753 7.41599 0.714803 7.26011C2.45487 3.1744 5.55284 0.73774 8.99232 0.73774H9.00045C10.1632 0.73774 11.2934 1.01668 12.3342 1.54176L9.61841 4.28197C9.42327 4.24915 9.21186 4.22454 9.00045 4.22454C7.20346 4.22454 5.74799 5.6931 5.74799 7.50624Z" fill="#9E9E9E"/>
        </Svg>
        </View>
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
        <Line y1="0.75" x2="96" y2="0.75" stroke="#35383F"/>
        </Svg>
        </View>
        <Text style={styles.orcontinuewith}>
        {`or continue with`}
        </Text>
        {/* RN-Flow:: can be replaced with <_themeDarkDivider theme={"darkDivider"} /> */}
        <View style={styles._themeDarkDivider}>
        <Svg style={styles._line} width="96" height="2" viewBox="0 0 96 2" fill="none" >
        <Line y1="0.75" x2="96" y2="0.75" stroke="#35383F"/>
        </Svg>
        </View>
        </View>
        <View style={styles.__autoLayoutHorizontal}>
        {/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"facebook"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
        <View style={styles.typeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton}>
        <View style={styles.___autoLayoutHorizontal}>
        <View style={styles.frame}>
        <Svg style={styles.vector} width="25" height="25" viewBox="0 0 25 25" fill="none" >
        <Path d="M12.5 0.75C5.8724 0.75 0.5 6.1224 0.5 12.75C0.5 19.3776 5.8724 24.75 12.5 24.75C19.1276 24.75 24.5 19.3776 24.5 12.75C24.5 6.1224 19.1276 0.75 12.5 0.75Z" fill="url(#paint0_linear_1246_8681)"/>
        <Defs>
        <LinearGradient id="paint0_linear_1246_8681" x1="4.0958" y1="4.3458" x2="22.469" y2="22.719" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2AA4F4"/>
        <Stop offset="1" stopColor="#007AD9"/>
        </LinearGradient>
        </Defs>
        </Svg>
        <Svg style={styles._vector} width="12" height="19" viewBox="0 0 12 19" fill="none" >
        <Path d="M7.22805 11.6078H10.4846L10.9961 8.29965H7.22805V6.49142C7.22805 5.11731 7.67728 3.89861 8.96267 3.89861H11.0282V1.01199C10.6652 0.962916 9.89761 0.855957 8.44738 0.855957C5.41856 0.855957 3.64305 2.4553 3.64305 6.09944V8.30028H0.529297V11.6084H3.64242V20.7012C4.25901 20.793 4.88377 20.856 5.52489 20.856C6.10436 20.856 6.66998 20.8031 7.22805 20.7276V11.6078Z" fill="white"/>
        </Svg>
        </View>
        </View>
        </View>
        {/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"google"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
        <View style={styles.typeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton}>
        <View style={styles.____autoLayoutHorizontal}>
        <View style={styles._frame}>
        <Svg style={styles.__vector} width="12" height="12" viewBox="0 0 12 12" fill="none" >
        <Path d="M11.5088 2.97455C11.5088 1.99128 11.4304 1.27375 11.2608 0.529663H0.230469V4.96765H6.70503C6.57454 6.07055 5.86965 7.73149 4.30318 8.84759L4.28122 8.99617L7.76881 11.7464L8.01044 11.7709C10.2295 9.68475 11.5088 6.61531 11.5088 2.97455Z" fill="#4285F4"/>
        </Svg>
        <Svg style={styles.___vector} width="19" height="10" viewBox="0 0 19 10" fill="none" >
        <Path d="M11.2296 9.66758C14.4016 9.66758 17.0645 8.60453 19.0095 6.7709L15.3023 3.84757C14.3102 4.55182 12.9787 5.04345 11.2296 5.04345C8.1228 5.04345 5.48598 2.95737 4.54603 0.0739746L4.40825 0.0858835L0.7818 2.94271L0.734375 3.07691C2.6663 6.98342 6.63462 9.66758 11.2296 9.66758Z" fill="#34A853"/>
        </Svg>
        <Svg style={styles.____vector} width="6" height="12" viewBox="0 0 6 12" fill="none" >
        <Path d="M5.54719 8.07392C5.29917 7.32983 5.15564 6.53252 5.15564 5.70873C5.15564 4.88485 5.29917 4.08763 5.53414 3.34354L5.52757 3.18507L1.85568 0.282349L1.73554 0.340517C0.939305 1.96162 0.482422 3.78204 0.482422 5.70873C0.482422 7.63542 0.939305 9.45575 1.73554 11.0769L5.54719 8.07392Z" fill="#FBBC05"/>
        </Svg>
        <Svg style={styles._____vector} width="20" height="11" viewBox="0 0 20 11" fill="none" >
        <Path d="M11.2295 5.37403C13.4356 5.37403 14.9237 6.34401 15.7722 7.15461L19.0878 3.85928C17.0515 1.9326 14.4015 0.75 11.2295 0.75C6.63462 0.75 2.6663 3.43406 0.734375 7.34056L4.53297 10.3436C5.48597 7.4602 8.12279 5.37403 11.2295 5.37403Z" fill="#EB4335"/>
        </Svg>
        </View>
        </View>
        </View>
        </View>
        </View>
        <View style={styles._____autoLayoutHorizontal}>
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
        _autoLayoutVertical: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 20
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
        _____autoLayoutHorizontal: {
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