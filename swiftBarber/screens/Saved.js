import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

export default function _Dark_homemybookmark({route}) {
  let data = route.params.barbersData;
  console.log(data,"hello");
    return (
        <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_homemybookmark}>
      			<View style={styles.autoLayoutVertical}>
        				<View style={styles._autoLayoutVertical}>
          					{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
          					<View style={styles.themeDarkComponentNavbar}>
            						<View style={styles.autoLayoutHorizontal}>
              							{/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft  /> */}
              							<View style={styles.iconlyLightOutlineArrowLeft}>
<Svg style={styles.group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
<Path d="M19.334 8.31995C19.334 8.76293 19.0048 9.12902 18.5777 9.18696L18.459 9.19495L0.958984 9.19495C0.475737 9.19495 0.0839844 8.8032 0.0839844 8.31995C0.0839844 7.87697 0.413164 7.51087 0.840252 7.45293L0.958984 7.44495L18.459 7.44495C18.9422 7.44495 19.334 7.8367 19.334 8.31995Z" fill="white"/>
<Path d="M8.63496 14.7284C8.97741 15.0694 8.9786 15.6234 8.63763 15.9658C8.32765 16.2771 7.84161 16.3064 7.49851 16.053L7.40019 15.9685L0.34186 8.94048C0.0296164 8.62958 0.00121212 8.14178 0.256659 7.79869L0.341808 7.70043L7.40014 0.671262C7.74256 0.330261 8.29658 0.331408 8.63758 0.673824C8.94758 0.985111 8.97481 1.47128 8.71994 1.8133L8.63501 1.91126L2.19964 8.32078L8.63496 14.7284Z" fill="white"/>
</Svg>

              							</View>
              							<Text style={styles.titleSection}>
                								{`My Bookmark`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles._autoLayoutHorizontal}>
            						{/* RN-Flow:: can be replaced with <SizeMediumTypeFilledIconNoneComponentChips size={"medium"} type={"filled"} icon={"none"} component={"chips"} /> */}
            						<View style={styles.sizeMediumTypeFilledIconNoneComponentChips}>
              							<Text style={styles.chips}>
                								{`All`}
              							</Text>
            						</View>
            						{/* RN-Flow:: can be replaced with <SizeMediumTypeBorderIconNoneComponentChips size={"medium"} type={"border"} icon={"none"} component={"chips"} /> */}
            						<View style={styles.sizeMediumTypeBorderIconNoneComponentChips}>
              							<Text style={styles._chips}>
                								{`Haircuts`}
              							</Text>
            						</View>
            						{/* RN-Flow:: can be replaced with <_sizeMediumTypeBorderIconNoneComponentChips size={"medium"} type={"border"} icon={"none"} component={"chips"} /> */}
            						<View style={styles._sizeMediumTypeBorderIconNoneComponentChips}>
              							<Text style={styles.__chips}>
                								{`Make up`}
              							</Text>
            						</View>
            						{/* RN-Flow:: can be replaced with <__sizeMediumTypeBorderIconNoneComponentChips size={"medium"} type={"border"} icon={"none"} component={"chips"} /> */}
            						<View style={styles.__sizeMediumTypeBorderIconNoneComponentChips}>
              							<Text style={styles.___chips}>
                								{`Manicure`}
              							</Text>
            						</View>
            						{/* RN-Flow:: can be replaced with <___sizeMediumTypeBorderIconNoneComponentChips size={"medium"} type={"border"} icon={"none"} component={"chips"} /> */}
            						<View style={styles.___sizeMediumTypeBorderIconNoneComponentChips}>
              							<Text style={styles.____chips}>
                								{`Massage`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.__autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <ThemeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
                        {data.map((barber, index) => (
  <View key={index} style={styles.themeDarkComponentBarberandSalonList}>
    <View style={styles.maskGroup}>
      <View style={styles.mask} />
      <ImageBackground style={styles.rectangle} source={{ uri: barber.imageUri }} />
    </View>
    <View style={styles.___autoLayoutVertical}>
      <View style={styles.__autoLayoutHorizontal}>
        <Text style={styles.barberSalonName}>
          {barber.name}
        </Text>
        {/* Your bookmark icon */}
        <View style={styles.iconlyBoldBookmark}>
          {/* Your bookmark icon */}
        </View>
      </View>
      <Text style={styles.barberSalonAddress}>
        {barber.address}
      </Text>
      <View style={styles.___autoLayoutHorizontal}>
        <View style={styles.____autoLayoutHorizontal}>
          <View style={styles.iconlyBoldLocation}>
            {/* Your location icon */}
          </View>
          <Text style={styles.km}>
            {`${barber.distance} km`}
          </Text>
        </View>
        <View style={styles._____autoLayoutHorizontal}>
          <View style={styles.______autoLayoutHorizontal}>
            <View style={styles.iconlyBulkStar}>
              {/* Your star icon */}
            </View>
          </View>
          <Text style={styles._8}>
            {barber.rating}
          </Text>
        </View>
      </View>
    </View>
  </View>
))}

            						
            					
          					</View>
        				</View>
      			</View>
    		</View>
            
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
  	_Dark_homemybookmark: {
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
  	__autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 24
},
  	themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
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
  	rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	___autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	__autoLayoutHorizontal: {
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
  	_group: {
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
  	___autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	____autoLayoutHorizontal: {
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
  	__group: {
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
  	_____autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	______autoLayoutHorizontal: {
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
  	___group: {
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
  	_rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	____autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	_______autoLayoutHorizontal: {
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
  	_iconlyBoldBookmark: {
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
  	________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	_________autoLayoutHorizontal: {
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
  	_____group: {
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
  	__________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	___________autoLayoutHorizontal: {
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
  	______group: {
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
  	__rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_____autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	____________autoLayoutHorizontal: {
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
  	__iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
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
  	_____________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	______________autoLayoutHorizontal: {
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
  	________group: {
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
  	_______________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	________________autoLayoutHorizontal: {
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
  	_________group: {
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
  	___themeDarkComponentBarberandSalonList: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(31, 34, 42, 1)",
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
  	___rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	______autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	_________________autoLayoutHorizontal: {
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
  	___iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
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
  	__________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	___________________autoLayoutHorizontal: {
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
  	___________group: {
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
  	____________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_____________________autoLayoutHorizontal: {
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
  	____________group: {
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
  	____rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	_______autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	______________________autoLayoutHorizontal: {
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
  	____iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________group: {
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
  	_______________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	________________________autoLayoutHorizontal: {
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
  	______________group: {
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
  	_________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	__________________________autoLayoutHorizontal: {
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
  	_______________group: {
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
  	_____rectangle: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 80,
    backgroundColor: "rgba(189, 189, 189, 1)",
    borderRadius: 16
},
  	________autoLayoutVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 8
},
  	___________________________autoLayoutHorizontal: {
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
  	_____iconlyBoldBookmark: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0
},
  	________________group: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    height: 20,
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
  	____________________________autoLayoutHorizontal: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 12
},
  	_____________________________autoLayoutHorizontal: {
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
  	______________________________autoLayoutHorizontal: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6
},
  	_______________________________autoLayoutHorizontal: {
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
  	______8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(224, 224, 224, 1)",
    //fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
}
})