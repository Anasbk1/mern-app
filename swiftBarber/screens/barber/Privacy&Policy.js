import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function _Dark_settingsprivacypolicy({navigation}) {
    return (
        <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_settingsprivacypolicy}>
      			<View style={styles.autoLayoutVertical}>
        				<View style={styles._autoLayoutVertical}>
          					{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
          					<View style={styles.themeDarkComponentNavbar}>
            						<View style={styles.autoLayoutHorizontal}>
              							{/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft  /> */}
                                          <View style={styles.iconlyLightOutlineArrowLeft}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Svg style={styles.group} width="20" height="17" viewBox="0 0 20 17" fill="none">
          <Path d="M19.334 8.31934C19.334 8.76231 19.0048 9.12841 18.5777 9.18635L18.459 9.19434L0.958984 9.19434C0.475737 9.19434 0.0839844 8.80259 0.0839844 8.31934C0.0839844 7.87636 0.413164 7.51026 0.840252 7.45232L0.958984 7.44434L18.459 7.44434C18.9422 7.44434 19.334 7.83609 19.334 8.31934Z" fill="white" />
          <Path d="M8.63496 14.7281C8.97741 15.0691 8.9786 15.6231 8.63763 15.9656C8.32765 16.2769 7.84161 16.3062 7.49851 16.0527L7.40019 15.9682L0.34186 8.94023C0.0296164 8.62933 0.00121212 8.14153 0.256659 7.79845L0.341808 7.70018L7.40014 0.671018C7.74256 0.330017 8.29658 0.331164 8.63758 0.67358C8.94758 0.984866 8.97481 1.47103 8.71994 1.81305L8.63501 1.91101L2.19964 8.32053L8.63496 14.7281Z" fill="white" />
        </Svg>
      </TouchableOpacity>
    </View>
              							<Text style={styles.titleSection}>
                								{`Privacy Policy`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.__autoLayoutVertical}>
            						<Text style={styles.typesofDataWeCollect}>
              							{`1. Types of Data We Collect`}
            						</Text>
            						<Text style={styles.loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariaturExcepteursintoccaecatcupidatatnonproidentsuntinculpaquiofficiadeseruntmollitanimidestlaborum}>
              							{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            						</Text>
            						<Text style={styles.useofYourPersonalData}>
              							{`2. Use of Your Personal Data`}
            						</Text>
            						<Text style={styles.magnaetiamtempororcieulobortiselementumnibhVulputateenimnullaaliquetporttitorlacusOrcisagittiseuvolutpatodioCrassemperauctornequevitaetempusquampellentesquenecNonquamlacussuspendissefaucibusinterdumposuereloremipsumdolorCommodoelitatimperdietduiNisivitaesuscipittellusmaurisadiamEratpellentesqueadipiscingcommodoelitatimperdietduiMiipsumfaucibusvitaealiquetnecullamcorperPellentesquepulvinarpellentesquehabitantmorbitristiquesenectuset}>
              							{`Magna etiam tempor orci eu lobortis elementum nibh. Vulputate enim nulla aliquet porttitor lacus. Orci sagittis eu volutpat odio. Cras semper auctor neque vitae tempus quam pellentesque nec. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Commodo elit at imperdiet dui. Nisi vitae suscipit tellus mauris a diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Mi ipsum faucibus vitae aliquet nec ullamcorper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.`}
            						</Text>
            						<Text style={styles.disclosureofYourPersonalData}>
              							{`3. Disclosure of Your Personal Data`}
            						</Text>
            						<Text style={styles.consequatidportanibhvenenatiscrassedIpsumnuncaliquetbibendumenimfacilisisgravidanequeNibhtellusmolestienuncnonblanditmassaQuampellentesquenecnamaliquamsemettortorconsequatidFaucibusvitaealiquetnecullamcorpersitametrisusNuncconsequatinterdumvariussitametEgetmagnafermentumiaculiseunondiamphasellusvestibulumPulvinarpellentesquehabitantmorbitristiquesenectusetLoremdonecmassasapienfaucibusetmolestieMassatempornecfeugiatnislpretiumfusceidLaciniaatquisrisussedvulputateodioIntegervitaejustoegetmagnafermentumiaculisEgetgravidacumsociisnatoquepenatibusetmagnis}>
              							{`Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nibh tellus molestie nunc non blandit massa. Quam pellentesque nec nam aliquam sem et tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nunc consequat interdum varius sit amet. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et. Lorem donec massa sapien faucibus et molestie. Massa tempor nec feugiat nisl pretium fusce id. Lacinia at quis risus sed vulputate odio. Integer vitae justo eget magna fermentum iaculis. Eget gravida cum sociis natoque penatibus et magnis.`}
            						</Text>
          					</View>
        				</View>
      			</View>
    		</View>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
  	_Dark_settingsprivacypolicy: {
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
    rowGap: 28,
    paddingHorizontal: 24
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
    fontFamily: "Urbanist",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 28.80000114440918
},
  	__autoLayoutVertical: {
    alignSelf: "stretch",
    flexShrink: 0,
    alignItems: "center",
    rowGap: 24
},
  	typesofDataWeCollect: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24.000000953674316
},
  	loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariaturExcepteursintoccaecatcupidatatnonproidentsuntinculpaquiofficiadeseruntmollitanimidestlaborum: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	useofYourPersonalData: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24.000000953674316
},
  	magnaetiamtempororcieulobortiselementumnibhVulputateenimnullaaliquetporttitorlacusOrcisagittiseuvolutpatodioCrassemperauctornequevitaetempusquampellentesquenecNonquamlacussuspendissefaucibusinterdumposuereloremipsumdolorCommodoelitatimperdietduiNisivitaesuscipittellusmaurisadiamEratpellentesqueadipiscingcommodoelitatimperdietduiMiipsumfaucibusvitaealiquetnecullamcorperPellentesquepulvinarpellentesquehabitantmorbitristiquesenectuset: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	disclosureofYourPersonalData: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24.000000953674316
},
  	consequatidportanibhvenenatiscrassedIpsumnuncaliquetbibendumenimfacilisisgravidanequeNibhtellusmolestienuncnonblanditmassaQuampellentesquenecnamaliquamsemettortorconsequatidFaucibusvitaealiquetnecullamcorpersitametrisusNuncconsequatinterdumvariussitametEgetmagnafermentumiaculiseunondiamphasellusvestibulumPulvinarpellentesquehabitantmorbitristiquesenectusetLoremdonecmassasapienfaucibusetmolestieMassatempornecfeugiatnislpretiumfusceidLaciniaatquisrisussedvulputateodioIntegervitaejustoegetmagnafermentumiaculisEgetgravidacumsociisnatoquepenatibusetmagnis: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
}
})