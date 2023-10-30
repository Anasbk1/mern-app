import React,{useState} from 'react';
import { View, Text, StyleSheet,TextInput, } from 'react-native';
import { Svg, Path, Line, Defs, LinearGradient, Stop } from 'react-native-svg';
import { signInWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged } from "firebase/auth";
import { auth, googleAuthProvider } from "../Firebase/index.js";
import { FIREBASE_AUTH } from '../Firebase/index.js';
import { ScrollView } from 'react-native-gesture-handler';



export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[hide,setHide]=useState(false);
    console.log(email,password);

    
    const hided=()=>{
      setHide(!hide)
    }

      const handleSignUp = () => {
        navigation.navigate("Signup"); 
      };
      const resetPassword = () => {
        sendPasswordResetEmail(FIREBASE_AUTH, email)
          .then((res) => {
            console.log(email, "email")
            alert('password reset email has been sent successfully')
          })
          .catch((error) => {
            alert('Please enter a valid email', error);
          });
      }
     
      const signIn = async () => {
        console.log(email, password);
        try {
          const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

          onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log("userFromAuth", user);
          });
      
          console.log(response);
          // userGetter(response.user.uid);
          navigation.navigate("Home",{emailUser:email});
        } catch (error) {
          console.log(error);
          alert(`Sign-in failed: ${error.message}`);
        }
      };
      

    return (
      <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_signinblankform}>
      			<View style={styles.autoLayoutVertical}>
        				{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
        				<View style={styles.themeDarkComponentNavbar}>
          					<View style={styles.autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft  /> */}
            						<View style={styles.iconlyLightOutlineArrowLeft}>
<Svg style={styles.group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
<Path d="M19.334 8.31995C19.334 8.76292 19.0048 9.12902 18.5777 9.18696L18.459 9.19495L0.958982 9.19495C0.475735 9.19495 0.0839825 8.80319 0.0839825 8.31995C0.0839825 7.87697 0.413162 7.51087 0.840252 7.45293L0.958982 7.44495L18.459 7.44495C18.9422 7.44495 19.334 7.8367 19.334 8.31995Z" fill="white"/>
<Path d="M8.63496 14.7284C8.97741 15.0694 8.9786 15.6234 8.63763 15.9658C8.32765 16.2771 7.84161 16.3064 7.49851 16.053L7.40019 15.9685L0.34186 8.94048C0.0296164 8.62958 0.00121212 8.14178 0.256659 7.79869L0.341808 7.70043L7.40014 0.671262C7.74256 0.330261 8.29658 0.331408 8.63758 0.673824C8.94758 0.985111 8.97481 1.47128 8.71994 1.8133L8.63501 1.91126L2.19964 8.32078L8.63496 14.7284Z" fill="white"/>
</Svg>

            						</View>
          					</View>
        				</View>
        				<Text style={styles.logintoyourAccount}  >
          					{`Login to your\nAccount`}
        				</Text>
        				<View style={styles._autoLayoutVertical}>
          					{/* RN-Flow:: can be replaced with <StatusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField status={"default"} type={"email"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
          					<View style={styles.statusDefaultTypeEmailStateDefaultInputThemeDarkComponentInputField}>
            						{/* RN-Flow:: can be replaced with <IconlyBoldMessage  /> */}
            						<View style={styles.iconlyBoldMessage}>
<Svg style={styles._group} width="18" height="15" viewBox="0 0 18 15" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.1171 0C14.2346 0 15.3096 0.441667 16.1005 1.23417C16.8921 2.025 17.3346 3.09167 17.3346 4.20833V10.7917C17.3346 13.1167 15.443 15 13.1171 15H4.88464C2.5588 15 0.667969 13.1167 0.667969 10.7917V4.20833C0.667969 1.88333 2.55047 0 4.88464 0H13.1171ZM14.443 5.45L14.5096 5.38333C14.7088 5.14167 14.7088 4.79167 14.5005 4.55C14.3846 4.42583 14.2255 4.35 14.0596 4.33333C13.8846 4.32417 13.718 4.38333 13.5921 4.5L9.83464 7.5C9.3513 7.90083 8.6588 7.90083 8.16797 7.5L4.41797 4.5C4.1588 4.30833 3.80047 4.33333 3.58464 4.55833C3.35964 4.78333 3.33464 5.14167 3.52547 5.39167L3.63464 5.5L7.4263 8.45833C7.89297 8.825 8.4588 9.025 9.0513 9.025C9.64214 9.025 10.218 8.825 10.6838 8.45833L14.443 5.45Z" fill="#9E9E9E"/>
</Svg>

            						</View>
            						<TextInput style={{color: 'gray'}}
                        
              							placeholder='Email'
                                        value={email}
                                        onChangeText={(text)=>setEmail(text)}
            						/>
          					</View>
          					{/* RN-Flow:: can be replaced with <StatusDefaultTypePasswordStateDefaultInputThemeDarkComponentInputField status={"default"} type={"password"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
          					<View style={styles.statusDefaultTypePasswordStateDefaultInputThemeDarkComponentInputField}>
            						{/* RN-Flow:: can be replaced with <IconlyBoldLock  /> */}
            						<View style={styles.iconlyBoldLock}>
<Svg style={styles.__group} width="16" height="17" viewBox="0 0 16 17" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.6016 4.66336V5.94114C14.0369 6.38915 15.0827 7.68847 15.0827 9.24036V13.3544C15.0827 15.2757 13.4899 16.8334 11.5262 16.8334H4.47335C2.50881 16.8334 0.916016 15.2757 0.916016 13.3544V9.24036C0.916016 7.68847 1.96264 6.38915 3.39709 5.94114V4.66336C3.40556 2.17901 5.46324 0.166687 7.98665 0.166687C10.5439 0.166687 12.6016 2.17901 12.6016 4.66336ZM8.00358 1.61589C9.72255 1.61589 11.1197 2.98228 11.1197 4.66336V5.76144H4.87896V4.6468C4.88742 2.974 6.28462 1.61589 8.00358 1.61589ZM8.74028 12.2125C8.74028 12.6182 8.41004 12.9412 7.99511 12.9412C7.58866 12.9412 7.25841 12.6182 7.25841 12.2125V10.374C7.25841 9.97655 7.58866 9.65359 7.99511 9.65359C8.41004 9.65359 8.74028 9.97655 8.74028 10.374V12.2125Z" fill="#9E9E9E"/>
</Svg>

            						</View>
            						<TextInput style={{color: 'white'}}
              							placeholder='Password' 
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
            						secureTextEntry={hide}
                        />
            						{/* RN-Flow:: can be replaced with <IconlyBoldHide  /> */}
            						<View style={styles.iconlyBoldHide}>
                          
<Svg style={styles.___group} width="18" height="15" viewBox="0 0 18 15" fill="none"  onPress={()=>hided()}>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.16874 10.2105C7.68914 10.5633 8.32337 10.7766 8.99825 10.7766C10.7871 10.7766 12.2426 9.30803 12.2426 7.5031C12.2426 6.82215 12.0312 6.18222 11.6815 5.65714L10.7952 6.55141C10.9416 6.83035 11.0229 7.15852 11.0229 7.5031C11.0229 8.62708 10.1122 9.54595 8.99825 9.54595C8.65674 9.54595 8.3315 9.46391 8.05504 9.31623L7.16874 10.2105ZM14.3567 2.95795C15.5357 4.04091 16.5358 5.50126 17.2839 7.25697C17.3489 7.41285 17.3489 7.59334 17.2839 7.74102C15.5438 11.8267 12.4459 14.2716 8.99825 14.2716H8.99012C7.42081 14.2716 5.91654 13.7547 4.59117 12.8112L3.01372 14.4029C2.89176 14.5259 2.73726 14.5834 2.58277 14.5834C2.42828 14.5834 2.26566 14.5259 2.15182 14.4029C1.94854 14.1978 1.91602 13.8696 2.07864 13.6317L2.10303 13.5988L14.129 1.46478L14.129 1.46477C14.1453 1.44837 14.1615 1.43196 14.1697 1.41555L14.1697 1.41555C14.1859 1.39914 14.2022 1.38273 14.2103 1.36633L14.9746 0.595129C15.2186 0.357206 15.6007 0.357206 15.8366 0.595129C16.0805 0.833052 16.0805 1.22686 15.8366 1.46478L14.3567 2.95795ZM5.74799 7.5063C5.74799 7.71961 5.77238 7.93292 5.8049 8.12982L2.79638 11.1654C1.98326 10.2137 1.27585 9.0651 0.714803 7.74422C0.649753 7.59654 0.649753 7.41605 0.714803 7.26017C2.45487 3.17446 5.55284 0.737801 8.99232 0.737801H9.00045C10.1632 0.737801 11.2934 1.01674 12.3342 1.54182L9.61841 4.28203C9.42327 4.24921 9.21186 4.2246 9.00045 4.2246C7.20346 4.2246 5.74799 5.69316 5.74799 7.5063Z" fill="#9E9E9E"/>
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
            						<Text style={styles.LOGIN} onPress={()=>signIn()}>
              							{`Sign in`}
            						</Text>
          					</View>
          					<Text style={styles.forgotthepassword} onPress={resetPassword} >
            						{`Forgot the password?`}
          					</Text>
        				</View>
        				<View style={styles.__autoLayoutVertical}>
          					<View style={styles._autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
            						<View style={styles.themeDarkDivider}>
<Svg style={styles.line} width="96" height="2" viewBox="0 0 96 2" fill="none" >
<Line y1="1.25" x2="96" y2="1.25" stroke="#35383F"/>
</Svg>

            						</View>
            						<Text style={styles.orcontinuewith}>
              							{`or continue with`}
            						</Text>
            						{/* RN-Flow:: can be replaced with <_themeDarkDivider theme={"darkDivider"} /> */}
            						<View style={styles._themeDarkDivider}>
<Svg style={styles._line} width="96" height="2" viewBox="0 0 96 2" fill="none" >
<Line y1="1.25" x2="96" y2="1.25" stroke="#35383F"/>
</Svg>

            						</View>
          					</View>
          					<View style={styles.__autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"facebook"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
            						<View style={styles.typeLoginType2SocialType3FacebookStyleDefaultStateDefaultThemeDarkComponentButton}>
              							<View style={styles.___autoLayoutHorizontal}>
                								<View style={styles.frame}>
<Svg style={styles.vector} width="25" height="25" viewBox="0 0 25 25" fill="none" >
<Path d="M12.5 0.25C5.8724 0.25 0.5 5.6224 0.5 12.25C0.5 18.8776 5.8724 24.25 12.5 24.25C19.1276 24.25 24.5 18.8776 24.5 12.25C24.5 5.6224 19.1276 0.25 12.5 0.25Z" fill="url(#paint0_linear_1228_6040)"/>
<Defs>
<LinearGradient id="paint0_linear_1228_6040" x1="4.0958" y1="3.8458" x2="22.469" y2="22.219" gradientUnits="userSpaceOnUse">
<Stop stopColor="#2AA4F4"/>
<Stop offset="1" stopColor="#007AD9"/>
</LinearGradient>
</Defs>
</Svg>

<Svg style={styles._vector} width="12" height="19" viewBox="0 0 12 19" fill="none" >
<Path d="M7.22805 11.1078H10.4846L10.9961 7.79965H7.22805V5.99142C7.22805 4.61731 7.67728 3.39861 8.96267 3.39861H11.0282V0.511991C10.6652 0.462916 9.89761 0.355957 8.44738 0.355957C5.41856 0.355957 3.64305 1.9553 3.64305 5.59944V7.80028H0.529297V11.1084H3.64242V20.2012C4.25901 20.293 4.88377 20.356 5.52489 20.356C6.10436 20.356 6.66998 20.3031 7.22805 20.2276V11.1078Z" fill="white"/>
</Svg>

                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"google"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
            						<View style={styles.typeLoginType2SocialType3GoogleStyleDefaultStateDefaultThemeDarkComponentButton}>
              							<View style={styles.____autoLayoutHorizontal}>
                								<View style={styles._frame}>
<Svg style={styles.__vector} width="12" height="12" viewBox="0 0 12 12" fill="none" >
<Path d="M11.5088 2.47452C11.5088 1.49125 11.4304 0.773724 11.2608 0.0296326H0.230469V4.46762H6.70503C6.57454 5.57052 5.86965 7.23146 4.30318 8.34756L4.28122 8.49613L7.76881 11.2463L8.01044 11.2709C10.2295 9.18472 11.5088 6.11528 11.5088 2.47452Z" fill="#4285F4"/>
</Svg>

<Svg style={styles.___vector} width="19" height="11" viewBox="0 0 19 11" fill="none" >
<Path d="M11.2296 10.1676C14.4016 10.1676 17.0645 9.10453 19.0095 7.2709L15.3023 4.34757C14.3102 5.05182 12.9787 5.54345 11.2296 5.54345C8.1228 5.54345 5.48598 3.45737 4.54603 0.573975L4.40825 0.585883L0.7818 3.44271L0.734375 3.57691C2.6663 7.48342 6.63462 10.1676 11.2296 10.1676Z" fill="#34A853"/>
</Svg>

<Svg style={styles.____vector} width="6" height="12" viewBox="0 0 6 12" fill="none" >
<Path d="M5.54719 8.57395C5.29917 7.82986 5.15564 7.03255 5.15564 6.20876C5.15564 5.38488 5.29917 4.58766 5.53414 3.84357L5.52757 3.6851L1.85568 0.782379L1.73554 0.840547C0.939305 2.46165 0.482422 4.28207 0.482422 6.20876C0.482422 8.13545 0.939305 9.95578 1.73554 11.5769L5.54719 8.57395Z" fill="#FBBC05"/>
</Svg>

<Svg style={styles._____vector} width="20" height="10" viewBox="0 0 20 10" fill="none" >
<Path d="M11.2295 4.87406C13.4356 4.87406 14.9237 5.84405 15.7722 6.65464L19.0878 3.35931C17.0515 1.43263 14.4015 0.250031 11.2295 0.250031C6.63462 0.250031 2.6663 2.93409 0.734375 6.84059L4.53297 9.84362C5.48597 6.96023 8.12279 4.87406 11.2295 4.87406Z" fill="#EB4335"/>
</Svg>

                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <TypeLoginType2SocialType3AppleStyleDefaultStateDefaultThemeDarkComponentButton type={"login"} type2={"social"} type3={"apple"} style={"default"} state={"default"} theme={"dark"} component={"button"} /> */}
            						<View style={styles.typeLoginType2SocialType3AppleStyleDefaultStateDefaultThemeDarkComponentButton}>
              							<View style={styles._____autoLayoutHorizontal}>
                								<View style={styles.__frame}>
<Svg style={styles.____group} width="21" height="25" viewBox="0 0 21 25" fill="none" >
<Path d="M15.2729 0.262011C15.2219 0.205011 13.3844 0.284511 11.7854 2.02001C10.1864 3.75401 10.4324 5.74301 10.4684 5.79401C10.5044 5.84501 12.7484 5.92451 14.1809 3.90701C15.6134 1.88951 15.3239 0.320511 15.2729 0.262011ZM20.2439 17.8615C20.1719 17.7175 16.7564 16.0105 17.0744 12.7285C17.3924 9.44501 19.5869 8.54501 19.6214 8.44751C19.6559 8.35001 18.7259 7.26251 17.7404 6.71201C17.0168 6.32389 16.216 6.10152 15.3959 6.06101C15.2339 6.05651 14.6714 5.91851 13.5149 6.23501C12.7529 6.44351 11.0354 7.11851 10.5629 7.14551C10.0889 7.17251 8.67889 6.36251 7.16239 6.14801C6.19189 5.96051 5.16289 6.34451 4.42639 6.64001C3.69139 6.93401 2.29339 7.77101 1.31539 9.99551C0.337389 12.2185 0.848889 15.7405 1.21489 16.8355C1.58089 17.929 2.15239 19.7215 3.12439 21.0295C3.98839 22.5055 5.13439 23.53 5.61289 23.878C6.09139 24.226 7.44139 24.457 8.37739 23.9785C9.13039 23.5165 10.4894 23.251 11.0264 23.2705C11.5619 23.29 12.6179 23.5015 13.6994 24.079C14.5559 24.3745 15.3659 24.2515 16.1774 23.9215C16.9889 23.59 18.1634 22.333 19.5344 19.7845C20.0549 18.5995 20.2919 17.959 20.2439 17.8615Z" fill="white"/>
<Path d="M15.2729 0.262011C15.2219 0.205011 13.3844 0.284511 11.7854 2.02001C10.1864 3.75401 10.4324 5.74301 10.4684 5.79401C10.5044 5.84501 12.7484 5.92451 14.1809 3.90701C15.6134 1.88951 15.3239 0.320511 15.2729 0.262011ZM20.2439 17.8615C20.1719 17.7175 16.7564 16.0105 17.0744 12.7285C17.3924 9.44501 19.5869 8.54501 19.6214 8.44751C19.6559 8.35001 18.7259 7.26251 17.7404 6.71201C17.0168 6.32389 16.216 6.10152 15.3959 6.06101C15.2339 6.05651 14.6714 5.91851 13.5149 6.23501C12.7529 6.44351 11.0354 7.11851 10.5629 7.14551C10.0889 7.17251 8.67889 6.36251 7.16239 6.14801C6.19189 5.96051 5.16289 6.34451 4.42639 6.64001C3.69139 6.93401 2.29339 7.77101 1.31539 9.99551C0.337389 12.2185 0.848889 15.7405 1.21489 16.8355C1.58089 17.929 2.15239 19.7215 3.12439 21.0295C3.98839 22.5055 5.13439 23.53 5.61289 23.878C6.09139 24.226 7.44139 24.457 8.37739 23.9785C9.13039 23.5165 10.4894 23.251 11.0264 23.2705C11.5619 23.29 12.6179 23.5015 13.6994 24.079C14.5559 24.3745 15.3659 24.2515 16.1774 23.9215C16.9889 23.59 18.1634 22.333 19.5344 19.7845C20.0549 18.5995 20.2919 17.959 20.2439 17.8615Z" fill="white"/>
</Svg>

                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
        				<View style={styles.______autoLayoutHorizontal}>
          					<Text style={styles.donthaveanaccount}>
            						{`Don’t have an account?`}
          					</Text>
          					<Text style={styles.signup} onPress={handleSignUp} >
            						{`Sign up`}
          					</Text>
        				</View>
      			</View>
    		</View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  	_Dark_signinblankform: {
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
  	logintoyourAccount: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist",
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
    rowGap: 24
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
  	label: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(158, 158, 158, 1)",
    fontFamily: "Urbanist",
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
  	_label: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(158, 158, 158, 1)",
    fontFamily: "Urbanist",
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
    rowGap: 0,
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
  	forgotthepassword: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(251, 148, 0, 1)",
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 22.399999618530273
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
    fontFamily: "Urbanist",
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
  	donthaveanaccount: {
    flexShrink: 0,
    textAlign: "right",
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	signup: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(251, 148, 0, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
}
})