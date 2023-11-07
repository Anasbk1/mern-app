import React ,{useContext,useState,useEffect}from 'react';
import { View, Text, StyleSheet , ScrollView ,TouchableOpacity,TextInput} from 'react-native';
import { Svg, Path, Circle, Defs, Pattern, Use, Image,Alert } from 'react-native-svg';
import { MyContext } from '../useContext/useContext';
import axios from 'axios';
import ADDRESS_IP from './API';
import * as ImagePicker from 'expo-image-picker';
import { dataStore } from '../store';
export default function _Dark_filleprofileblankform() {
const{userId}=dataStore()
const {userName}=useContext(MyContext);
const [newName,setNewName] =useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [iduser, setIdUser] = useState(null);
  const [modal, setModal] = useState(false);
console.log("profile id",userId)
  const uploadImageToCloudinary = async (imageUri) => {
    try {
      const data = new FormData();
      data.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
      data.append('upload_preset', 'booking');
      data.append('cloud_name', 'dx1fjwr7w');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dx1fjwr7w/image/upload',
        data,
        {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      );

      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 1,
    });
    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      uploadImageToCloudinary(imageUri);
    }
  };

  useEffect(() => {
    axios
      .get(`http://${ADDRESS_IP}:3001/users/name/${userName}`)
      .then((res) => {
        setIdUser(res.data[0].id);
        console.log(iduser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  const handleUpdateProfile = async () => {
    // Create an object to hold updated user data
    const updatedUserData = {}
    if (newName !== '') {
      updatedUserData.name = newName;
    }
  
    // Check if the email field is not empty
    if (email !== '') {
      updatedUserData.email = email;
    };
    if (imageUrl !== ''){
      updatedUserData.image = imageUrl;
    }


    // Send a PUT request to your API to update the user's data
    try {
      const response = await fetch(`http://${ADDRESS_IP}:3001/users/${iduser}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUserData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle success, update the UI, etc.
        alert('Profile updated successfully');
      } else {
         const errorData = await response.json(); // Get the error details from the response
      alert('Error updating profile: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      alert('Error updating profile: ' + error.message);
    }
  };
  





    return (
      <ScrollView>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    		<View style={styles._Dark_filleprofileblankform}>
      			<View style={styles.autoLayoutVertical}>
        				<View style={styles._autoLayoutVertical}>
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
              							<Text style={styles.titleSection}>
                								{`Fill Your Profile`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.__autoLayoutVertical}>
            						{/* RN-Flow:: can be replaced with <TypeEditAvatarComponentAvatar type={"editAvatar"} component={"avatar"} /> */}
            						<View style={styles.typeEditAvatarComponentAvatar}>
<Svg style={styles.ellipse} width="140" height="140" viewBox="0 0 140 140" fill="none"  xmlnsXlink="http://www.w3.org/1999/xlink">
<Circle cx="70" cy="70" r="70" fill="url(#pattern0)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlinkHref="#image0_1229_4041" transform="scale(0.00806452)"/>
</Pattern>
<Image id="image0_1229_4041" width="124" height="124" xlinkHref={imageUrl}/>
</Defs>
</Svg>

              							{/* RN-Flow:: can be replaced with <IconlyBoldEditSquare  /> */}
                            <View style={styles.iconlyBoldEditSquare} >
                                                            <TouchableOpacity onPress={()=>pickImage()}>
                <Svg style={styles._group} width="31" height="31" viewBox="0 0 31 31" fill="none" >
                <Path fillRule="evenodd" clipRule="evenodd" d="M22.3049 0.931576C24.4027 0.800462 26.4714 1.52887 28.0302 2.95656C29.4579 4.51537 30.1863 6.58406 30.0698 8.69646V22.3032C30.2009 24.4156 29.4579 26.4843 28.0448 28.0431C26.486 29.4708 24.4027 30.1992 22.3049 30.0681H8.69799C6.58557 30.1992 4.51686 29.4708 2.95805 28.0431C1.53034 26.4843 0.801926 24.4156 0.933041 22.3032V8.69646C0.801926 6.58406 1.53034 4.51537 2.95805 2.95656C4.51686 1.52887 6.58557 0.800462 8.69799 0.931576H22.3049ZM14.0149 22.5658L23.8195 12.7322C24.7081 11.829 24.7081 10.3722 23.8195 9.48349L21.9256 7.58962C21.0223 6.68638 19.5655 6.68638 18.6623 7.58962L17.6862 8.58026C17.5405 8.72594 17.5405 8.9736 17.6862 9.11928C17.6862 9.11928 20.0026 11.4211 20.0463 11.4793C20.2065 11.6542 20.3085 11.8873 20.3085 12.1495C20.3085 12.6739 19.886 13.111 19.347 13.111C19.0993 13.111 18.8662 13.009 18.706 12.8488L16.273 10.4304C16.1565 10.3139 15.9525 10.3139 15.836 10.4304L8.88688 17.3795C8.40612 17.8602 8.12932 18.5012 8.11476 19.186L8.02734 22.6386C8.02734 22.828 8.08562 23.0028 8.21673 23.134C8.34785 23.2651 8.52267 23.3379 8.71206 23.3379H12.1356C12.8349 23.3379 13.5051 23.0611 14.0149 22.5658Z" fill="#FB9400"/>
                </Svg>
                                                            </TouchableOpacity>

              							</View>
            						</View>
            						{/* RN-Flow:: can be replaced with <StatusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField status={"default"} type={"default"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
            						<View style={styles.statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField}>
              							<Text style={styles.label}>
                								{`Full Name`}
              							</Text>
            						</View>
            						{/* RN-Flow:: can be replaced with <_statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField status={"default"} type={"default"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
            						<View style={styles._statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField}>
  
  <TextInput 
  style={{color:'gray'}}
    placeholder='Nickname'
    placeholderTextColor="gray"
    onChangeText={setNewName} // Assuming `setNewName` is a function that updates the new name state
    value={newName} // Assuming `newName` is the state variable holding the new name value
  />
</View>
            						{/* RN-Flow:: can be replaced with <StatusDefaultTypeNormalStateDefaultInputThemeDarkComponentInputField status={"default"} type={"normal"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                        <View style={styles.statusDefaultTypeNormalStateDefaultInputThemeDarkComponentInputField}>
  
  <TextInput
    style={styles._input} // Define the appropriate style for your input
    onChangeText={setEmail} // Assuming `setEmail` is a function that updates the email state
    value={email} // Assuming `email` is the state variable holding the email value
    placeholder="Enter your email"
  />
</View>
          					</View>
        				</View>
                
        				{/* RN-Flow:: can be replaced with <TypeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton type={"button"} type2={"secondary"} type3={"rounded"} style={"default"} state={"disabled"} theme={"dark"} component={"button"} /> */}
        				<View style={styles.typeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton}>
          					<Text style={styles.button} onPress={handleUpdateProfile}>
            						{`Continue`}
          					</Text>
        				</View>
      			</View>
    		</View>
        </View>
        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
  	_Dark_filleprofileblankform: {
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
    ////fontFamily: "Urbanist",
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
  	typeEditAvatarComponentAvatar: {
    flexShrink: 0,
    height: 140,
    width: 140,
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
  	iconlyBoldEditSquare: {
    position: "absolute",
    flexShrink: 0,
    top: 105,
    bottom: 0,
    left: 105,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	_group: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 29,
    left: 3,
    width: 29
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
    ////fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	_statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 56,
    backgroundColor: "rgba(31, 34, 42, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
   borderColor: 'gray',
  padding: 10,
},
  	_label: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(158, 158, 158, 1)",
    ////fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	statusDefaultTypeNormalStateDefaultInputThemeDarkComponentInputField: {
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
  	__label: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(158, 158, 158, 1)",
    ////fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.20000000298023224,
    lineHeight: 19.59999966621399
},
  	iconlyCurvedMessage: {
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
    height: 15,
    left: 2,
    width: 16
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
    ////fontFamily: "Urbanist",
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