import React, { useState,useEffect,useContext } from 'react';
import { View, Text, StyleSheet , Svg,Image , Path,G , Circle,Defs, Pattern, Use,TouchableOpacity,Mask,Rect ,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import ADDRESS_API from './API.js';
import { MyContext } from '../useContext/useContext.js';

// import { Cloudinary } from "@cloudinary/url-gen";
import axios from 'axios';


// import * as Permissions from 'expo-permissions'    expo-image-picker;


export default function _Dark_filleprofileblankform() {
//   const {userName, setUserName} = useContext(MyContext);
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState('');
//   const[iduser,setIdUser]=useState(null)
//   const [modal, setModal] = useState(false);

// useEffect(() => {
// axios.post(`http://${ADDRESS_API}:3001/users/gives`,{
//   name:userName,
// }).then((res) => {
// setIdUser(res.data[0])
// console.log(iduser);
// }).catch((err)=>{
//   console.log(err);
// })
// })


//   const handleImageUpload = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access camera roll is required!');
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (!pickerResult.canceled) {
//       // Use the "assets" array to access the selected asset
     
//       const { uri } = pickerResult.assets[0];
//       handleUpload(uri);
//     }
//   };

//   const handleUpload = async (uri) => {
//     const response = await fetch(uri);
//     const blob = await response.blob();

//     const data = new FormData();
//     data.append('file', blob);
//     data.append('upload_preset', 'booking');
//     data.append('cloud_name', 'dx1fjwr7w');

//     try {
//       const uploadResponse = await fetch('https://api.cloudinary.com/v1_1/dx1fjwr7w/image/upload', {
//         method: 'POST',
//         body: data,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const uploadData = await uploadResponse.json();
//       setImage(uploadData.uri);
//       setModal(false);
//       console.log(uploadData);
//     } catch (error) {
//       Alert.alert('Error while uploading: ' + error.message);
//     }
//   };

//   const handleUpdateProfile = async () => {
//     // Create an object to hold updated user data
//     const updatedUserData = {};

//     if (nameses) {
//       updatedUserData.name = nameses;
//     }

//     if (email) {
//       updatedUserData.email = email;
//     }

//     if (image) {
//       updatedUserData.image = image;
//     }

//     // Send a PUT request to your API to update the user's data
//     fetch(`http://${ADDRESS_API}:3001/users/${iduser}`, {
//       method: 'PUT',
//       body: JSON.stringify(updatedUserData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle success, update the UI, etc.
//         Alert.alert('Profile updated successfully');
//       })
//       .catch((error) => {
//         Alert.alert('Error updating profile: ' + error.message);
//       });
//   };
// const {userName}=useContext(MyContext);
// const [newName,setNewName] =useState('');
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [iduser, setIdUser] = useState(null);
//   const [modal, setModal] = useState(false);

//   const uploadImageToCloudinary = async (imageUri) => {
//     try {
//       const data = new FormData();
//       data.append('file', {
//         uri: imageUri,
//         type: 'image/jpeg',
//         name: 'image.jpg',
//       });
//       data.append('upload_preset', 'booking');

//       const response = await axios.post(
//         'https://api.cloudinary.com/v1_1/dx1fjwr7w/image/upload',
//         data,
//         {
//           headers: {
//             'X-Requested-With': 'XMLHttpRequest',
//           },
//         }
//       );

//       const imageUrl = response.data.secure_url;
//       setImageUrl(imageUrl);
//     } catch (error) {
//       console.error('Error uploading image to Cloudinary:', error);
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: false,
//       aspect: [4, 4],
//       quality: 1,
//       allowsMultipleSelection: true,
//       selectionLimit: 1,
//     });
//     if (!result.canceled) {
//       const imageUri = result.assets[0].uri;
//       setImage(imageUri);
//       uploadImageToCloudinary(imageUri);
//     }
//   };

//   useEffect(() => {
//     axios
//       .get(`http://${ADDRESS_API}:3001/users/name/${userName}`)
//       .then((res) => {
//         setIdUser(res.data);
//         console.log(iduser);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [userName]);

//   const handleUpdateProfile = async () => {
//     // Create an object to hold updated user data
//     const updatedUserData = {};

//     if (email) {
//       updatedUserData.email = email;
//     }

//     if (image) {
//       updatedUserData.image = image;
//     }

//     // Send a PUT request to your API to update the user's data
//     try {
//       const response = await fetch(`http://${ADDRESS_API}:3001/users/${iduser}`, {
//         method: 'PUT',
//         body: JSON.stringify(updatedUserData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         // Handle success, update the UI, etc.
//         Alert.alert('Profile updated successfully');
//       } else {
//         throw new Error('Error updating profile');
//       }
//     } catch (error) {
//       Alert.alert('Error updating profile: ' + error.message);
//     }
//   };
   
                    return (
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
  <Svg style={styles.ellipse} width="140" height="140" viewBox="0 0 140 140" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
    <Circle cx="70" cy="70" r="70" fill="url(#pattern0)" />
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use xlinkHref={image} transform="scale(0.00806452)" /> {/* Use the image state variable here */}
      </Pattern>
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
                                                    <TextInput style={styles.fullname}
                              placeholder='Full Name' 
                              value={newName}
                              onChangeText={(text)=>setNewName(text)}>
                              </TextInput>
                                                    </View>
                                                    {/* RN-Flow:: can be replaced with <_statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField status={"default"} type={"default"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                                                    <View style={styles._statusDefaultTypeDefaultStateDefaultInputThemeDarkComponentInputField}>
                                                          <Text style={styles._label}>
                                                                {`Nickname`}
                                                          </Text>
                                                    </View>
                                                    {/* RN-Flow:: can be replaced with <StatusDefaultTypeNormalStateDefaultInputThemeDarkComponentInputField status={"default"} type={"normal"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                                                    <View style={styles.statusDefaultTypeNormalStateDefaultInputThemeDarkComponentInputField}>
                                                          <TextInput style={styles.__label}
                                                                placeholder='Email'
                                                                value={email}
                                                                onChangeText={(text)=> setEmail(text)}>
                                                          </TextInput>
                                                          {/* RN-Flow:: can be replaced with <IconlyCurvedMessage  /> */}
                                                          <View style={styles.iconlyCurvedMessage}>
                <Svg style={styles.__group} width="18" height="18" viewBox="0 0 18 18" fill="none" >
                <Path d="M13.6205 6.51587C13.6205 6.51587 10.9455 9.7264 8.98894 9.7264C7.03322 9.7264 4.32812 6.51587 4.32812 6.51587" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M1.04297 8.97404C1.04297 3.27562 3.0271 1.37671 8.97948 1.37671C14.9319 1.37671 16.916 3.27562 16.916 8.97404C16.916 14.6716 14.9319 16.5714 8.97948 16.5714C3.0271 16.5714 1.04297 14.6716 1.04297 8.97404Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
                
                                                          </View>
                                                    </View>
                                                    {/* RN-Flow:: can be replaced with <StatusDefaultTypePhoneStateDefaultInputThemeDarkComponentInputField status={"default"} type={"phone"} state={"defaultInput"} theme={"dark"} component={"inputField"} /> */}
                                                    <View style={styles.statusDefaultTypePhoneStateDefaultInputThemeDarkComponentInputField}>
                                                          <View style={styles._autoLayoutHorizontal}>
                <Svg style={styles.maskGroup} width="24" height="18" viewBox="0 0 24 18" fill="none" >
                <Mask id="mask0_1230_8228" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="18">
                <Rect width="24" height="18" fill="white"/>
                </Mask>
                <G mask="url(#mask0_1230_8228)">
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V14C24 16.2091 22.2091 18 20 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="#F7FCFF"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 11V12.5H24V11H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 13.75V15.25H24V13.75H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 5.5V7H24V5.5H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 16.5V18H24V16.5H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 8.25V9.75H24V8.25H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 0V1.5H24V0H0Z" fill="#E31D1C"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M0 2.75V4.25H24V2.75H0Z" fill="#E31D1C"/>
                <Rect width="15" height="9.75" fill="#2E42A5"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M1.29143 2.20415L0.747018 2.58582L0.930817 1.90661L0.447279 1.47618H1.07884L1.29067 0.921875L1.53905 1.47618H2.07744L1.65441 1.90661L1.81818 2.58582L1.29143 2.20415ZM4.29141 2.20415L3.747 2.58582L3.9308 1.90661L3.44727 1.47618H4.07883L4.29065 0.921878L4.53903 1.47618H5.07742L4.6544 1.90661L4.81817 2.58582L4.29141 2.20415ZM6.747 2.58582L7.29141 2.20415L7.81817 2.58582L7.6544 1.90661L8.07742 1.47618H7.53903L7.29065 0.921878L7.07883 1.47618H6.44727L6.9308 1.90661L6.747 2.58582ZM10.2914 2.20415L9.747 2.58582L9.9308 1.90661L9.44727 1.47618H10.0788L10.2907 0.921878L10.539 1.47618H11.0774L10.6544 1.90661L10.8182 2.58582L10.2914 2.20415ZM0.747004 5.58582L1.29141 5.20415L1.81817 5.58582L1.6544 4.90661L2.07742 4.47618H1.53903L1.29065 3.92188L1.07883 4.47618H0.447266L0.930803 4.90661L0.747004 5.58582ZM4.29141 5.20415L3.747 5.58582L3.9308 4.90661L3.44727 4.47618H4.07883L4.29065 3.92188L4.53903 4.47618H5.07742L4.6544 4.90661L4.81817 5.58582L4.29141 5.20415ZM6.747 5.58582L7.29141 5.20415L7.81817 5.58582L7.6544 4.90661L8.07742 4.47618H7.53903L7.29065 3.92188L7.07883 4.47618H6.44727L6.9308 4.90661L6.747 5.58582ZM10.2914 5.20415L9.747 5.58582L9.9308 4.90661L9.44727 4.47618H10.0788L10.2907 3.92188L10.539 4.47618H11.0774L10.6544 4.90661L10.8182 5.58582L10.2914 5.20415ZM0.747004 8.58582L1.29141 8.20415L1.81817 8.58582L1.6544 7.90661L2.07742 7.47618H1.53903L1.29065 6.92188L1.07883 7.47618H0.447266L0.930803 7.90661L0.747004 8.58582ZM4.29141 8.20415L3.747 8.58582L3.9308 7.90661L3.44727 7.47618H4.07883L4.29065 6.92188L4.53903 7.47618H5.07742L4.6544 7.90661L4.81817 8.58582L4.29141 8.20415ZM6.747 8.58582L7.29141 8.20415L7.81817 8.58582L7.6544 7.90661L8.07742 7.47618H7.53903L7.29065 6.92188L7.07883 7.47618H6.44727L6.9308 7.90661L6.747 8.58582ZM10.2914 8.20415L9.747 8.58582L9.9308 7.90661L9.44727 7.47618H10.0788L10.2907 6.92188L10.539 7.47618H11.0774L10.6544 7.90661L10.8182 8.58582L10.2914 8.20415ZM12.747 2.58582L13.2914 2.20415L13.8182 2.58582L13.6544 1.90661L14.0774 1.47618H13.539L13.2907 0.921878L13.0788 1.47618H12.4473L12.9308 1.90661L12.747 2.58582ZM13.2914 5.20415L12.747 5.58582L12.9308 4.90661L12.4473 4.47618H13.0788L13.2907 3.92188L13.539 4.47618H14.0774L13.6544 4.90661L13.8182 5.58582L13.2914 5.20415ZM12.747 8.58582L13.2914 8.20415L13.8182 8.58582L13.6544 7.90661L14.0774 7.47618H13.539L13.2907 6.92188L13.0788 7.47618H12.4473L12.9308 7.90661L12.747 8.58582ZM2.79141 3.70415L2.247 4.08582L2.4308 3.40661L1.94727 2.97618H2.57883L2.79065 2.42188L3.03903 2.97618H3.57742L3.1544 3.40661L3.31817 4.08582L2.79141 3.70415ZM5.247 4.08582L5.79141 3.70415L6.31817 4.08582L6.1544 3.40661L6.57742 2.97618H6.03903L5.79065 2.42188L5.57883 2.97618H4.94727L5.4308 3.40661L5.247 4.08582ZM8.79141 3.70415L8.247 4.08582L8.4308 3.40661L7.94727 2.97618H8.57883L8.79065 2.42188L9.03903 2.97618H9.57742L9.1544 3.40661L9.31817 4.08582L8.79141 3.70415ZM2.247 7.08582L2.79141 6.70415L3.31817 7.08582L3.1544 6.40661L3.57742 5.97618H3.03903L2.79065 5.42188L2.57883 5.97618H1.94727L2.4308 6.40661L2.247 7.08582ZM5.79141 6.70415L5.247 7.08582L5.4308 6.40661L4.94727 5.97618H5.57883L5.79065 5.42188L6.03903 5.97618H6.57742L6.1544 6.40661L6.31817 7.08582L5.79141 6.70415ZM8.247 7.08582L8.79141 6.70415L9.31817 7.08582L9.1544 6.40661L9.57742 5.97618H9.03903L8.79065 5.42188L8.57883 5.97618H7.94727L8.4308 6.40661L8.247 7.08582ZM11.7914 3.70415L11.247 4.08582L11.4308 3.40661L10.9473 2.97618H11.5788L11.7907 2.42188L12.039 2.97618H12.5774L12.1544 3.40661L12.3182 4.08582L11.7914 3.70415ZM11.247 7.08582L11.7914 6.70415L12.3182 7.08582L12.1544 6.40661L12.5774 5.97618H12.039L11.7907 5.42188L11.5788 5.97618H10.9473L11.4308 6.40661L11.247 7.08582Z" fill="#F7FCFF"/>
                </G>
                </Svg>
                
                                                                {/* RN-Flow:: can be replaced with <IconlyLightArrowDown2  /> */}
                                                                <View style={styles.iconlyLightArrowDown2}>
                                                                      {/* RN-Flow:: can be replaced with <_iconlyLightArrowDown2  /> */}
                                                                      <View style={styles._iconlyLightArrowDown2}>
                <Svg style={styles.___group} width="12" height="8" viewBox="0 0 12 8" fill="none" >
                <Path d="M10.6673 1.66663L6.00065 6.33329L1.33398 1.66663" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
                
                                                                      </View>
                                                                </View>
                                                          </View>
                                                          <Text style={styles.___label}>
                                                                {`Phone Number`}
                                                          </Text>
                                                    </View>
                                              </View>
                                        </View>
                                        {/* RN-Flow:: can be replaced with <TypeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton type={"button"} type2={"secondary"} type3={"rounded"} style={"default"} state={"disabled"} theme={"dark"} component={"button"} /> */}
                                        <View style={styles.typeButtonType2SecondaryType3RoundedStyleDefaultStateDisabledThemeDarkComponentButton}>
                                              <TouchableOpacity style={styles.button} onPress={()=>handleUpdateProfile()}>
                                                    {`Continue`}
                                              </TouchableOpacity>
                                        </View>
                                  </View>
                            </View>
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
                    fontFamily: "Urbanist",
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
                    borderRadius: 12
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
                    fontFamily: "Urbanist",
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
                      statusDefaultTypePhoneStateDefaultInputThemeDarkComponentInputField: {
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
                      _autoLayoutHorizontal: {
                    flexShrink: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 8
                },
                      maskGroup: {
                    flexShrink: 0,
                    height: 18,
                    width: 24
                },
                      iconlyLightArrowDown2: {
                    flexShrink: 0,
                    height: 16,
                    width: 16,
                    alignItems: "flex-start",
                    rowGap: 0
                },
                      _iconlyLightArrowDown2: {
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
                    top: 6,
                    height: 5,
                    left: 3,
                    width: 9
                },
                      ___label: {
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
                }
                })


  
    	