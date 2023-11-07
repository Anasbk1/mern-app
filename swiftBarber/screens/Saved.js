import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

export default function _Dark_homemybookmark() {
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
            						<View style={styles.themeDarkComponentBarberandSalonList}>
              							<View style={styles.maskGroup}>
                								<View style={styles.mask}/>
                								<ImageBackground style={styles.rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles.___autoLayoutVertical}>
                								<View style={styles.__autoLayoutHorizontal}>
                  									<Text style={styles.barberSalonName}>
                    										{`Belle Curls`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <IconlyBoldBookmark  /> */}
                  									<View style={styles.iconlyBoldBookmark}>
<Svg style={styles._group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.barberSalonAddress}>
                  									{`0993 Novick Parkway`}
                								</Text>
                								<View style={styles.___autoLayoutHorizontal}>
                  									<View style={styles.____autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <IconlyBoldLocation  /> */}
                    										<View style={styles.iconlyBoldLocation}>
<Svg style={styles.__group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

                    										</View>
                    										<Text style={styles.km}>
                      											{`1.2 km`}
                    										</Text>
                  									</View>
                  									<View style={styles._____autoLayoutHorizontal}>
                    										<View style={styles.______autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <IconlyBulkStar  /> */}
                      											<View style={styles.iconlyBulkStar}>
<Svg style={styles.___group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
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
            						{/* RN-Flow:: can be replaced with <_themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						<View style={styles._themeDarkComponentBarberandSalonList}>
              							<View style={styles._maskGroup}>
                								<View style={styles._mask}/>
                								<ImageBackground style={styles._rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles.____autoLayoutVertical}>
                								<View style={styles._______autoLayoutHorizontal}>
                  									<Text style={styles._barberSalonName}>
                    										{`Serenity Salon`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <_iconlyBoldBookmark  /> */}
                  									<View style={styles._iconlyBoldBookmark}>
<Svg style={styles.____group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles._barberSalonAddress}>
                  									{`88 Commercial Plaza`}
                								</Text>
                								<View style={styles.________autoLayoutHorizontal}>
                  									<View style={styles._________autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <_iconlyBoldLocation  /> */}
                    										<View style={styles._iconlyBoldLocation}>
<Svg style={styles._____group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

                    										</View>
                    										<Text style={styles._km}>
                      											{`4.2 km`}
                    										</Text>
                  									</View>
                  									<View style={styles.__________autoLayoutHorizontal}>
                    										<View style={styles.___________autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <_iconlyBulkStar  /> */}
                      											<View style={styles._iconlyBulkStar}>
<Svg style={styles.______group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path opacity="0.4" d="M7.65152 1.07582L9.13584 4.05867C9.24519 4.27478 9.45391 4.42486 9.69462 4.45821L13.0287 4.94379C13.2234 4.97114 13.4001 5.07386 13.5194 5.2306C13.6375 5.38535 13.6881 5.58145 13.6595 5.77421C13.6361 5.93429 13.5608 6.08237 13.4454 6.19576L11.0296 8.53762C10.8529 8.70103 10.7729 8.94316 10.8155 9.17994L11.4103 12.4723C11.4737 12.8698 11.2103 13.2447 10.8155 13.3201C10.6528 13.3461 10.4861 13.3187 10.3394 13.244L7.36546 11.6946C7.14474 11.5832 6.88402 11.5832 6.66331 11.6946L3.68933 13.244C3.32392 13.4381 2.87116 13.306 2.66778 12.9459C2.59243 12.8025 2.56576 12.639 2.59043 12.4796L3.18523 9.18661C3.2279 8.95049 3.14722 8.70704 2.97118 8.54362L0.555329 6.2031C0.267934 5.92562 0.259265 5.46872 0.535991 5.18124C0.541993 5.17524 0.548661 5.16857 0.555329 5.1619C0.67002 5.04518 0.820719 4.97114 0.983421 4.95179L4.31747 4.46555C4.55752 4.43153 4.76623 4.28279 4.87626 4.06534L6.30723 1.07582C6.43459 0.819694 6.69865 0.660279 6.98538 0.66695H7.07473C7.32345 0.696965 7.54016 0.851043 7.65152 1.07582Z" fill="#FB9400"/>
<Path d="M6.99533 11.6115C6.86619 11.6155 6.74039 11.6502 6.62723 11.7122L3.6678 13.2582C3.30569 13.431 2.87236 13.2969 2.66934 12.9506C2.59412 12.8091 2.56683 12.647 2.59213 12.4882L3.18321 9.20218C3.22315 8.96332 3.14327 8.72045 2.96954 8.55232L0.552609 6.2124C0.265719 5.9315 0.260394 5.47046 0.541293 5.18289C0.545287 5.17888 0.548615 5.17555 0.552609 5.17221C0.667099 5.05879 0.814871 4.98406 0.973958 4.96071L4.3108 4.46964C4.55243 4.43894 4.76211 4.28815 4.86861 4.06931L6.31904 1.04216C6.45682 0.79796 6.72108 0.652507 7.00065 0.667853C6.99533 0.866016 6.99533 11.4767 6.99533 11.6115Z" fill="#FB9400"/>
</Svg>

                      											</View>
                    										</View>
                    										<Text style={styles.__8}>
                      											{`4.0`}
                    										</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <__themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						<View style={styles.__themeDarkComponentBarberandSalonList}>
              							<View style={styles.__maskGroup}>
                								<View style={styles.__mask}/>
                								<ImageBackground style={styles.__rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles._____autoLayoutVertical}>
                								<View style={styles.____________autoLayoutHorizontal}>
                  									<Text style={styles.__barberSalonName}>
                    										{`Serenity Salon`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <__iconlyBoldBookmark  /> */}
                  									<View style={styles.__iconlyBoldBookmark}>
<Svg style={styles._______group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.__barberSalonAddress}>
                  									{`9 Evergreen Drive`}
                								</Text>
                								<View style={styles._____________autoLayoutHorizontal}>
                  									<View style={styles.______________autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <__iconlyBoldLocation  /> */}
                    										<View style={styles.__iconlyBoldLocation}>
<Svg style={styles.________group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

                    										</View>
                    										<Text style={styles.__km}>
                      											{`2.3 km`}
                    										</Text>
                  									</View>
                  									<View style={styles._______________autoLayoutHorizontal}>
                    										<View style={styles.________________autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <__iconlyBulkStar  /> */}
                      											<View style={styles.__iconlyBulkStar}>
<Svg style={styles._________group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path opacity="0.4" d="M7.65152 1.07582L9.13584 4.05867C9.24519 4.27478 9.45391 4.42486 9.69462 4.45821L13.0287 4.94379C13.2234 4.97114 13.4001 5.07386 13.5194 5.2306C13.6375 5.38535 13.6881 5.58145 13.6595 5.77421C13.6361 5.93429 13.5608 6.08237 13.4454 6.19576L11.0296 8.53762C10.8529 8.70103 10.7729 8.94316 10.8155 9.17994L11.4103 12.4723C11.4737 12.8698 11.2103 13.2447 10.8155 13.3201C10.6528 13.3461 10.4861 13.3187 10.3394 13.244L7.36546 11.6946C7.14474 11.5832 6.88402 11.5832 6.66331 11.6946L3.68933 13.244C3.32392 13.4381 2.87116 13.306 2.66778 12.9459C2.59243 12.8025 2.56576 12.639 2.59043 12.4796L3.18523 9.18661C3.2279 8.95049 3.14722 8.70704 2.97118 8.54362L0.555329 6.2031C0.267934 5.92562 0.259265 5.46872 0.535991 5.18124C0.541993 5.17524 0.548661 5.16857 0.555329 5.1619C0.67002 5.04518 0.820719 4.97114 0.983421 4.95179L4.31747 4.46555C4.55752 4.43153 4.76623 4.28279 4.87626 4.06534L6.30723 1.07582C6.43459 0.819694 6.69865 0.660279 6.98538 0.66695H7.07473C7.32345 0.696965 7.54016 0.851043 7.65152 1.07582Z" fill="#FB9400"/>
<Path d="M6.99533 11.6115C6.86619 11.6155 6.74039 11.6502 6.62723 11.7122L3.6678 13.2582C3.30569 13.431 2.87236 13.2969 2.66934 12.9506C2.59412 12.8091 2.56683 12.647 2.59213 12.4882L3.18321 9.20218C3.22315 8.96332 3.14327 8.72045 2.96954 8.55232L0.552609 6.2124C0.265719 5.9315 0.260394 5.47046 0.541293 5.18289C0.545287 5.17888 0.548615 5.17555 0.552609 5.17221C0.667099 5.05879 0.814871 4.98406 0.973958 4.96071L4.3108 4.46964C4.55243 4.43894 4.76211 4.28815 4.86861 4.06931L6.31904 1.04216C6.45682 0.79796 6.72108 0.652507 7.00065 0.667853C6.99533 0.866016 6.99533 11.4767 6.99533 11.6115Z" fill="#FB9400"/>
</Svg>

                      											</View>
                    										</View>
                    										<Text style={styles.___8}>
                      											{`4.7`}
                    										</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <___themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						<View style={styles.___themeDarkComponentBarberandSalonList}>
              							<View style={styles.___maskGroup}>
                								<View style={styles.___mask}/>
                								<ImageBackground style={styles.___rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles.______autoLayoutVertical}>
                								<View style={styles._________________autoLayoutHorizontal}>
                  									<Text style={styles.___barberSalonName}>
                    										{`Serenity Salon`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <___iconlyBoldBookmark  /> */}
                  									<View style={styles.___iconlyBoldBookmark}>
<Svg style={styles.__________group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.___barberSalonAddress}>
                  									{`65220 Holy Cross Pass`}
                								</Text>
                								<View style={styles.__________________autoLayoutHorizontal}>
                  									<View style={styles.___________________autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <___iconlyBoldLocation  /> */}
                    										<View style={styles.___iconlyBoldLocation}>
<Svg style={styles.___________group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

                    										</View>
                    										<Text style={styles.___km}>
                      											{`3.6 km`}
                    										</Text>
                  									</View>
                  									<View style={styles.____________________autoLayoutHorizontal}>
                    										<View style={styles._____________________autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <___iconlyBulkStar  /> */}
                      											<View style={styles.___iconlyBulkStar}>
<Svg style={styles.____________group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path opacity="0.4" d="M7.65152 1.07582L9.13584 4.05867C9.24519 4.27478 9.45391 4.42486 9.69462 4.45821L13.0287 4.94379C13.2234 4.97114 13.4001 5.07386 13.5194 5.2306C13.6375 5.38535 13.6881 5.58145 13.6595 5.77421C13.6361 5.93429 13.5608 6.08237 13.4454 6.19576L11.0296 8.53762C10.8529 8.70103 10.7729 8.94316 10.8155 9.17994L11.4103 12.4723C11.4737 12.8698 11.2103 13.2447 10.8155 13.3201C10.6528 13.3461 10.4861 13.3187 10.3394 13.244L7.36546 11.6946C7.14474 11.5832 6.88402 11.5832 6.66331 11.6946L3.68933 13.244C3.32392 13.4381 2.87116 13.306 2.66778 12.9459C2.59243 12.8025 2.56576 12.639 2.59043 12.4796L3.18523 9.18661C3.2279 8.95049 3.14722 8.70704 2.97118 8.54362L0.555329 6.2031C0.267934 5.92562 0.259265 5.46872 0.535991 5.18124C0.541993 5.17524 0.548661 5.16857 0.555329 5.1619C0.67002 5.04518 0.820719 4.97114 0.983421 4.95179L4.31747 4.46555C4.55752 4.43153 4.76623 4.28279 4.87626 4.06534L6.30723 1.07582C6.43459 0.819694 6.69865 0.660279 6.98538 0.66695H7.07473C7.32345 0.696965 7.54016 0.851043 7.65152 1.07582Z" fill="#FB9400"/>
<Path d="M6.99533 11.6115C6.86619 11.6155 6.74039 11.6502 6.62723 11.7122L3.6678 13.2582C3.30569 13.431 2.87236 13.2969 2.66934 12.9506C2.59412 12.8091 2.56683 12.647 2.59213 12.4882L3.18321 9.20218C3.22315 8.96332 3.14327 8.72045 2.96954 8.55232L0.552609 6.2124C0.265719 5.9315 0.260394 5.47046 0.541293 5.18289C0.545287 5.17888 0.548615 5.17555 0.552609 5.17221C0.667099 5.05879 0.814871 4.98406 0.973958 4.96071L4.3108 4.46964C4.55243 4.43894 4.76211 4.28815 4.86861 4.06931L6.31904 1.04216C6.45682 0.79796 6.72108 0.652507 7.00065 0.667853C6.99533 0.866016 6.99533 11.4767 6.99533 11.6115Z" fill="#FB9400"/>
</Svg>

                      											</View>
                    										</View>
                    										<Text style={styles.____8}>
                      											{`4.6`}
                    										</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <____themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						<View style={styles.____themeDarkComponentBarberandSalonList}>
              							<View style={styles.____maskGroup}>
                								<View style={styles.____mask}/>
                								<ImageBackground style={styles.____rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles._______autoLayoutVertical}>
                								<View style={styles.______________________autoLayoutHorizontal}>
                  									<Text style={styles.____barberSalonName}>
                    										{`Serenity Salon`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <____iconlyBoldBookmark  /> */}
                  									<View style={styles.____iconlyBoldBookmark}>
<Svg style={styles._____________group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles.____barberSalonAddress}>
                  									{`6 Eagle Crest Alley`}
                								</Text>
                								<View style={styles._______________________autoLayoutHorizontal}>
                  									<View style={styles.________________________autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <____iconlyBoldLocation  /> */}
                    										<View style={styles.____iconlyBoldLocation}>
<Svg style={styles.______________group} width="12" height="14" viewBox="0 0 12 14" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.333984 5.87842C0.333984 2.81185 2.89657 0.333252 5.99628 0.333252C9.10473 0.333252 11.6673 2.81185 11.6673 5.87842C11.6673 7.42371 11.1053 8.85834 10.1803 10.0743C9.15985 11.4156 7.90209 12.5842 6.48635 13.5015C6.16233 13.7135 5.8699 13.7295 5.51428 13.5015C4.09047 12.5842 2.83271 11.4156 1.82098 10.0743C0.895307 8.85834 0.333984 7.42371 0.333984 5.87842ZM4.13014 6.05109C4.13014 7.07839 4.96842 7.88637 5.99628 7.88637C7.02481 7.88637 7.87117 7.07839 7.87117 6.05109C7.87117 5.03178 7.02481 4.18447 5.99628 4.18447C4.96842 4.18447 4.13014 5.03178 4.13014 6.05109Z" fill="#FB9400"/>
</Svg>

                    										</View>
                    										<Text style={styles.____km}>
                      											{`4.4 km`}
                    										</Text>
                  									</View>
                  									<View style={styles._________________________autoLayoutHorizontal}>
                    										<View style={styles.__________________________autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <____iconlyBulkStar  /> */}
                      											<View style={styles.____iconlyBulkStar}>
<Svg style={styles._______________group} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path opacity="0.4" d="M7.65152 1.07582L9.13584 4.05867C9.24519 4.27478 9.45391 4.42486 9.69462 4.45821L13.0287 4.94379C13.2234 4.97114 13.4001 5.07386 13.5194 5.2306C13.6375 5.38535 13.6881 5.58145 13.6595 5.77421C13.6361 5.93429 13.5608 6.08237 13.4454 6.19576L11.0296 8.53762C10.8529 8.70103 10.7729 8.94316 10.8155 9.17994L11.4103 12.4723C11.4737 12.8698 11.2103 13.2447 10.8155 13.3201C10.6528 13.3461 10.4861 13.3187 10.3394 13.244L7.36546 11.6946C7.14474 11.5832 6.88402 11.5832 6.66331 11.6946L3.68933 13.244C3.32392 13.4381 2.87116 13.306 2.66778 12.9459C2.59243 12.8025 2.56576 12.639 2.59043 12.4796L3.18523 9.18661C3.2279 8.95049 3.14722 8.70704 2.97118 8.54362L0.555329 6.2031C0.267934 5.92562 0.259265 5.46872 0.535991 5.18124C0.541993 5.17524 0.548661 5.16857 0.555329 5.1619C0.67002 5.04518 0.820719 4.97114 0.983421 4.95179L4.31747 4.46555C4.55752 4.43153 4.76623 4.28279 4.87626 4.06534L6.30723 1.07582C6.43459 0.819694 6.69865 0.660279 6.98538 0.66695H7.07473C7.32345 0.696965 7.54016 0.851043 7.65152 1.07582Z" fill="#FB9400"/>
<Path d="M6.99533 11.6115C6.86619 11.6155 6.74039 11.6502 6.62723 11.7122L3.6678 13.2582C3.30569 13.431 2.87236 13.2969 2.66934 12.9506C2.59412 12.8091 2.56683 12.647 2.59213 12.4882L3.18321 9.20218C3.22315 8.96332 3.14327 8.72045 2.96954 8.55232L0.552609 6.2124C0.265719 5.9315 0.260394 5.47046 0.541293 5.18289C0.545287 5.17888 0.548615 5.17555 0.552609 5.17221C0.667099 5.05879 0.814871 4.98406 0.973958 4.96071L4.3108 4.46964C4.55243 4.43894 4.76211 4.28815 4.86861 4.06931L6.31904 1.04216C6.45682 0.79796 6.72108 0.652507 7.00065 0.667853C6.99533 0.866016 6.99533 11.4767 6.99533 11.6115Z" fill="#FB9400"/>
</Svg>

                      											</View>
                    										</View>
                    										<Text style={styles._____8}>
                      											{`4.5`}
                    										</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <_____themeDarkComponentBarberandSalonList theme={"dark"} component={"barberandSalonList"} /> */}
            						<View style={styles._____themeDarkComponentBarberandSalonList}>
              							<View style={styles._____maskGroup}>
                								<View style={styles._____mask}/>
                								<ImageBackground style={styles._____rectangle} source={{uri: /* dummy image */ 'https://dummyimage.com/80x80/000/fff.jpg'}}/>
              							</View>
              							<View style={styles.________autoLayoutVertical}>
                								<View style={styles.___________________________autoLayoutHorizontal}>
                  									<Text style={styles._____barberSalonName}>
                    										{`Serenity Salon`}
                  									</Text>
                  									{/* RN-Flow:: can be replaced with <_____iconlyBoldBookmark  /> */}
                  									<View style={styles._____iconlyBoldBookmark}>
<Svg style={styles.________________group} width="16" height="20" viewBox="0 0 16 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#FB9400"/>
</Svg>

                  									</View>
                								</View>
                								<Text style={styles._____barberSalonAddress}>
                  									{`88 Commercial Plaza`}
                								</Text>
                								<View style={styles.____________________________autoLayoutHorizontal}>
                  									<View style={styles._____________________________autoLayoutHorizontal}>
                    										{/* RN-Flow:: can be replaced with <_____iconlyBoldLocation  /> */}
                    										<View style={styles._____iconlyBoldLocation}>
                    										</View>
                    										<Text style={styles._____km}>
                      											{`4.2 km`}
                    										</Text>
                  									</View>
                  									<View style={styles.______________________________autoLayoutHorizontal}>
                    										<View style={styles._______________________________autoLayoutHorizontal}>
                      											{/* RN-Flow:: can be replaced with <_____iconlyBulkStar  /> */}
                      											<View style={styles._____iconlyBulkStar}>
                      											</View>
                    										</View>
                    										<Text style={styles.______8}>
                      											{`4.0`}
                    										</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
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