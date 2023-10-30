import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Line, Path } from 'react-native-svg';

export default function AutoLayoutVertical() {
    return (
    		<View style={styles.autoLayoutVertical}>
      			<View style={styles.frame}>
        				<View style={styles.rectangle}/>
      			</View>
      			<Text style={styles.removefromBookmark}>
        				{`Remove from Bookmark?`}
      			</Text>
      			{/* RN-Flow:: can be replaced with <ThemeDarkDivider theme={"darkDivider"} /> */}
      			<View style={styles.themeDarkDivider}>
<Svg style={styles.line} width="380" height="1" viewBox="0 0 380 1" fill="none" >
<Line y1="0.5" x2="380" y2="0.5" stroke="#35383F"/>
</Svg>

      			</View>
      			{/* RN-Flow:: can be replaced with <ThemeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
      			<View style={styles.themeDarkComponentBarberandSalonList}>
        				<View style={styles.maskGroup}>
          					<View style={styles.mask}/>
          					<ImageBackground style={styles._rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
        				</View>
        				<View style={styles._autoLayoutVertical}>
          					<View style={styles.autoLayoutHorizontal}>
            						<Text style={styles.barberSalonName}>
              							{`Belle Curls`}
            						</Text>
            						{/* RN-Flow:: can be replaced with <IconlyBoldBookmark  /> */}
            						<View style={styles.iconlyBoldBookmark}>
<Svg style={styles.group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles.barberSalonAddress}>
            						{`0993 Novick Parkway`}
          					</Text>
          					<View style={styles._autoLayoutHorizontal}>
            						<View style={styles.__autoLayoutHorizontal}>
              							{/* RN-Flow:: can be replaced with <IconlyBoldLocation  /> */}
              							<View style={styles.iconlyBoldLocation}>
<Svg style={styles._group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

              							</View>
              							<Text style={styles.km}>
                								{`1.2 km`}
              							</Text>
            						</View>
            						<View style={styles.___autoLayoutHorizontal}>
              							<View style={styles.____autoLayoutHorizontal}>
                								{/* RN-Flow:: can be replaced with <IconlyBulkStar  /> */}
                								<View style={styles.iconlyBulkStar}>
<Svg style={styles.__group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path opacity="0.4" d="M7.65152 1.07582L9.13584 4.05867C9.24519 4.27478 9.45391 4.42486 9.69462 4.45821L13.0287 4.94379C13.2234 4.97114 13.4001 5.07386 13.5194 5.2306C13.6375 5.38535 13.6881 5.58145 13.6595 5.77421C13.6361 5.93429 13.5608 6.08237 13.4454 6.19576L11.0296 8.53762C10.8529 8.70103 10.7729 8.94316 10.8155 9.17994L11.4103 12.4723C11.4737 12.8698 11.2103 13.2447 10.8155 13.3201C10.6528 13.3461 10.4861 13.3187 10.3394 13.244L7.36546 11.6946C7.14474 11.5832 6.88402 11.5832 6.66331 11.6946L3.68933 13.244C3.32392 13.4381 2.87116 13.306 2.66778 12.9459C2.59243 12.8025 2.56576 12.639 2.59043 12.4796L3.18523 9.18661C3.2279 8.95049 3.14722 8.70704 2.97118 8.54362L0.555329 6.2031C0.267934 5.92562 0.259265 5.46872 0.535991 5.18124C0.541993 5.17524 0.548661 5.16857 0.555329 5.1619C0.67002 5.04518 0.820719 4.97114 0.983421 4.95179L4.31747 4.46555C4.55752 4.43153 4.76623 4.28279 4.87626 4.06534L6.30723 1.07582C6.43459 0.819694 6.69865 0.660279 6.98538 0.66695H7.07473C7.32345 0.696965 7.54016 0.851043 7.65152 1.07582Z" fill="#FB9400"/>
<Path d="M6.99533 11.6115C6.86619 11.6155 6.74039 11.6502 6.62723 11.7122L3.6678 13.2582C3.30569 13.431 2.87236 13.2969 2.66934 12.9506C2.59412 12.8091 2.56683 12.647 2.59213 12.4882L3.18321 9.20218C3.22315 8.96332 3.14327 8.72045 2.96954 8.55232L0.552609 6.2124C0.265719 5.9315 0.260394 5.47046 0.541293 5.18289C0.545287 5.17888 0.548615 5.17555 0.552609 5.17221C0.667099 5.05879 0.814871 4.98406 0.973958 4.96071L4.3108 4.46964C4.55243 4.43894 4.76211 4.28815 4.86861 4.06931L6.31904 1.04216C6.45682 0.79796 6.72108 0.652507 7.00065 0.667853C6.99533 0.866016 6.99533 11.4767 6.99533 11.6115Z" fill="#FB9400"/>
</Svg>

                								</View>
              							</View>
              							<Text style={styles._8}>
                								{`4.8`}
              							</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={styles._____autoLayoutHorizontal}>
        				{/* RN-Flow:: can be replaced with <TypeButtonType2SecondaryType3RoundedStyleDefaultStateActiveThemeDarkComponentButton type={"button"} type2={"secondary"} type3={"rounded"} style={"default"} state={"active"} theme={"dark"} component={"button"} /> */}
        				<View style={styles.typeButtonType2SecondaryType3RoundedStyleDefaultStateActiveThemeDarkComponentButton}>
          					<Text style={styles.button}>
            						{`Cancel`}
          					</Text>
        				</View>
        				{/* RN-Flow:: can be replaced with <TypeButtonType2PrimaryType3RoundedStyleDefaultStateActiveThemeDefaultComponentButton type={"button"} type2={"primary"} type3={"rounded"} style={"default"} state={"active"} theme={"default"} component={"button"} /> */}
        				<View style={styles.typeButtonType2PrimaryType3RoundedStyleDefaultStateActiveThemeDefaultComponentButton}>
          					<Text style={styles._button}>
            						{`Yes, Remove`}
          					</Text>
        				</View>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	autoLayoutVertical: {
    flexShrink: 0,
    width: 428,
    paddingTop: 8,
    paddingBottom: 48,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 24,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "rgba(53, 56, 63, 1)"
},
  	frame: {
    flexShrink: 0,
    height: 3,
    width: 38,
    alignItems: "flex-start",
    rowGap: 0
},
  	rectangle: {
    position: "absolute",
    flexShrink: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 3,
    backgroundColor: "rgba(53, 56, 63, 1)",
    borderRadius: 100
},
  	removefromBookmark: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
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
  	themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(53, 56, 63, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 60,
    shadowColor: "rgb(4, 6, 15)",
    shadowOpacity: 0.05,
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
  	_rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	autoLayoutHorizontal: {
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
    fontFamily: "Urbanist",
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
  	group: {
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
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	__autoLayoutHorizontal: {
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
  	_group: {
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
    color: "rgba(238, 238, 238, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	___autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	____autoLayoutHorizontal: {
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
  	__group: {
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
    color: "rgba(238, 238, 238, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_____autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	typeButtonType2SecondaryType3RoundedStyleDefaultStateActiveThemeDarkComponentButton: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(53, 56, 63, 1)",
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
  	typeButtonType2PrimaryType3RoundedStyleDefaultStateActiveThemeDefaultComponentButton: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(251, 148, 0, 1)",
    shadowOffset: {
        width: 4,
        height: 8
    },
    shadowRadius: 24,
    shadowColor: "rgb(251, 148, 0)",
    shadowOpacity: 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 100
},
  	_button: {
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
}
})