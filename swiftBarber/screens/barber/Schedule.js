import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Svg, Path, Line, Circle, Defs, Pattern, Use, Image } from 'react-native-svg';

export default function _Dark_detailsbarberorsalonspecialist({route}) {
  const verified = route.params.verified;
  console.log(verified)

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
              							{/* RN-Flow:: can be replaced with <IconlyLightHome  /> */}
              							<View style={styles.iconlyLightHome}>
<Svg style={styles.group} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path d="M7.95726 19.7714V16.7047C7.95725 15.9246 8.59317 15.2908 9.38106 15.2856H12.2671C13.0588 15.2856 13.7006 15.9209 13.7006 16.7047V16.7047V19.7809C13.7004 20.4432 14.2343 20.9845 14.9031 21H16.8271C18.7452 21 20.3 19.4607 20.3 17.5618V17.5618V8.83784C20.2898 8.09083 19.9355 7.38935 19.338 6.93303L12.7578 1.6853C11.605 0.771566 9.96625 0.771566 8.81347 1.6853L2.26207 6.94256C1.66231 7.39702 1.30744 8.09967 1.30005 8.84736V17.5618C1.30005 19.4607 2.85492 21 4.77296 21H6.69701C7.3824 21 7.93802 20.4499 7.93802 19.7714V19.7714" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
              							<Text style={styles.home}>
                								{`Home`}
              							</Text>
            						</View>
            						<View style={styles._autoLayoutVertical}>
              							{/* RN-Flow:: can be replaced with <IconlyLightLocation  /> */}
              							<View style={styles.iconlyLightLocation}/>
              							<Text style={styles.explore}>
                								{`notification`}
              							</Text>
            						</View>
            						<View style={styles.__autoLayoutVertical}>
              							{/* RN-Flow:: can be replaced with <IconlyLightDocument  /> */}
              							<View style={styles.iconlyLightDocument}>
<Svg style={styles.document} width="19" height="20" viewBox="0 0 19 20" fill="none" >
<Path d="M12.7162 14.2234H5.49622" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.7162 10.0369H5.49622" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.25134 5.86011H5.49634" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.749817C12.9086 0.749817 5.23161 0.753817 5.21961 0.753817C2.45961 0.770817 0.75061 2.58682 0.75061 5.35682V14.5528C0.75061 17.3368 2.47261 19.1598 5.25661 19.1598C5.25661 19.1598 12.9326 19.1568 12.9456 19.1568C15.7056 19.1398 17.4156 17.3228 17.4156 14.5528V5.35682C17.4156 2.57282 15.6926 0.749817 12.9086 0.749817Z" stroke="#FB9400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
              							<Text style={styles.myBooking}>
                								{`My schedule`}
              							</Text>
            						</View>
            						<View style={styles.___autoLayoutVertical}>
              							{/* RN-Flow:: can be replaced with <IconlyLightChat  /> */}
              							<View style={styles.iconlyLightChat}>
<Svg style={styles.chat} width="23" height="22" viewBox="0 0 23 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6715 18.0699C15.6153 21.1263 11.0899 21.7867 7.38651 20.074C6.8398 19.8539 6.39158 19.676 5.96547 19.676C4.77859 19.683 3.30126 20.8339 2.53346 20.067C1.76565 19.2991 2.91736 17.8206 2.91736 16.6266C2.91736 16.2004 2.74651 15.7602 2.52642 15.2124C0.812928 11.5096 1.47421 6.98269 4.53036 3.92721C8.4317 0.0244319 14.7701 0.0244322 18.6715 3.9262C22.5798 7.83501 22.5728 14.1681 18.6715 18.0699Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.5394 11.413H15.5484" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5305 11.413H11.5395" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5215 11.413H7.5305" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

              							</View>
              							<Text style={styles.inbox}>
                								{`Inbox`}
              							</Text>
            						</View>
            						<View style={styles.____autoLayoutVertical}>
              							{/* RN-Flow:: can be replaced with <IconlyBoldProfile  /> */}
              							<View style={styles.iconlyBoldProfile}>
<Svg style={styles._group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.4941 5.29105C13.4941 8.22808 11.1392 10.5831 8.20007 10.5831C5.26197 10.5831 2.90609 8.22808 2.90609 5.29105C2.90609 2.35402 5.26197 0 8.20007 0C11.1392 0 13.4941 2.35402 13.4941 5.29105ZM8.20007 20C3.86245 20 0.200073 19.295 0.200073 16.575C0.200073 13.8539 3.88546 13.1739 8.20007 13.1739C12.5387 13.1739 16.2001 13.8789 16.2001 16.599C16.2001 19.32 12.5147 20 8.20007 20Z" fill="#9E9E9E"/>
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
        				<View style={styles.iconlyLightNotification}>
<Svg style={styles.notification} width="20" height="22" viewBox="0 0 20 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.3887 19.8572C11.0246 21.372 8.89659 21.3899 7.51941 19.8572" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

        				</View>
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
          					<View style={styles._autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <TypeDefaultComponentAvatar type={"default"} component={"avatar"} /> */}
            						<View style={styles.typeDefaultComponentAvatar}>
<Svg style={styles.ellipse} width="60" height="60" viewBox="0 0 60 60" fill="none"  xmlnsXlink="http://www.w3.org/1999/xlink">
<Circle cx="30" cy="30" r="30" fill="url(#pattern0)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlinkHref="#image0_85_263" transform="scale(0.005)"/>
</Pattern>



</Defs>
</Svg>

            						</View>
                        {verified.map((el)=>{
                          return(
                            <View style={styles._____autoLayoutVertical}>
              							<Text style={styles.name}>
                								{el.userName}
              							</Text>
              							<Text style={styles.information}>
                								{`is coming at :${formatDateTime(el.date)}`}
              							</Text>
            						</View>
                          )
                        })}
            					
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    left: 122,
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
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
    fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
}
})