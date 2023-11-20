import React,{useState,useEffect,useContext} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, ImageBackground, StyleSheet,ScrollView ,TouchableOpacity,TextInput,Animated,Geolocation} from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop, Circle, Pattern, Use, Image } from 'react-native-svg';
import axios from 'axios';
import ADDRESS_IP from '../API.js';
import * as ImagePicker from 'expo-image-picker';
import { MyContext } from '../../useContext/useContext.js';
import MapView,{Marker} from "react-native-maps"
import * as Location from 'expo-location'
import { dataStore } from '../../store.js';
import { useNavigation } from '@react-navigation/native';
export default function _Dark_detailspackagedetails() {
  const navigation= useNavigation()
    const context = useContext(MyContext);
    const BarberName=context.barberName
    const [barberPosition, setBarberPosition] = useState({
      latitude: 36.7538,
      longitude: 10.1797,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });
    console.log(barberPosition)
   const [editing , setEditing] = useState(false)
   const {barberId}= dataStore()
    const [newName,setNewName] =useState(BarberName);
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState(''); 
  const [services, setServices] = useState({
    haircut: 'Haircut',
    hairstyling: 'Hairstyling',
    hairColoring: 'Hair Coloring',
  });
  const [editMode, setEditMode] = useState(false);

  const [editingDescription, setEditingDescription] = useState(false);
  const [location, setLocation] = useState(''); // Add location state
  const [phoneNumber, setPhoneNumber] = useState(''); // Add phoneNumber state
  const [service, setService] = useState({}); // Add service state
  
  const [idBarber, setIdBarber] = useState(null);
  const [modal, setModal] = useState(false);
  console.log(barberId);

 
//   const handleMapPress = async ()=> {
//     let {status} = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted'){
//         setErrorMsg('Permission to access location was denied')
        
//     }
//     let location = await Location.getCurrentPositionAsync({enableHightAccuracy: true});
//     setBarberPosition({
//         latitude: location.coords.latitude,
//         longitude:location.coords.longitude,
//         latitudeDelta:0.0922,
//         longitudeDelta:0.0421
//     })
//     console.log(location.coords.latitude,location.coords.longitude)
//   }
//   useEffect (()=>{
//   handleMapPress()
//   },[])

const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setBarberPosition({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };



/////////////////////////// name /////////////////////////////////////
  const handleEditPress = () => {
    if (editing) {
      // If editing is true, save the changes
      setEditing(false); // Set editing back to false
      // Perform any necessary actions with the updated barberName
    } else {
      // If editing is false, switch to edit mode
      setEditing(true);
    }
  };

  const handleSavePress = () => {
    setEditing(false);
    // Perform any necessary actions with the updated barberName
  };

  const handleChangeText = (text) => {
    setNewName(text);
  };
//////////////////// description /////////////////////////////
const handleEditDescriptionPress = () => {
    if (editingDescription) {
      // If editingDescription is true, save the changes
      setEditingDescription(false); // Set editingDescription back to false
      // Perform any necessary actions with the updated description
    } else {
      // If editingDescription is false, switch to edit mode
      setEditingDescription(true);
    }
  };

  const handleChangeDescriptionText = (text) => {
    setDescription(text); // Update description with the modified text
  };
  /////////////////////////  services    ////////////////////////////
  const handleServiceChange = (serviceName, newValue) => {
    setServices({
      ...services,
      [serviceName]: newValue,
    });
  };
  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    // Save the updated services data to your backend or state.
    // You can also disable the edit mode here.
    setEditMode(false);
  };


  /////////////////////////////////////////////////////////////////////////////



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

      const imageUr = response.data.secure_url;
      setImageUrl(imageUr);
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
      .get(`http://${ADDRESS_IP}:3001/barbers/name/${BarberName}`)
      .then((res) => {
        setIdBarber(res.data[0].id);
        setImageUrl(res.data[0].image)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BarberName])
  
  const handleUpdateProfile = async () => {
    
    const updatedBarberData = {};
    if (newName !== '') {
      updatedBarberData.name = newName;
    }
    if (email !== '') {
      updatedBarberData.email = email;
    }
    if (imageUrl !== '') {
      updatedBarberData.image = imageUrl;
    }
    if (description !== '') {
      updatedBarberData.description = description; // Add description to updated data
    }
    if (barberPosition !== '') {
      updatedBarberData.location = JSON.stringify(barberPosition); // Add location to updated data
    }
    if (phoneNumber !== '') {
      updatedBarberData.phoneNumber = phoneNumber; // Add phoneNumber to updated data
    }
    if (service !=='') {
      updatedBarberData.service = services; // Add service to updated data
    }
    


    
    try {
      const response = await fetch(`http://${ADDRESS_IP}:3001/barbers/${idBarber}`, {
        method: 'PUT',
        body: JSON.stringify(updatedBarberData),
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
      <View style={styles._Dark_detailspackagedetails}>
{/* RN-Flow:: can be replaced with <HomeIndicator /> */}
<View style={styles.homeIndicator}>
<Svg style={styles.vector} width="134" height="5" viewBox="0 0 134 5" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H131.5C132.881 0 134 1.11929 134 2.5C134 3.88071 132.881 5 131.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#424242"/>
</Svg>
</View>
{/* <MapView style={{height:200,width:300}}/> */}
<View style={styles.autoLayoutHorizontal}>
<View style={styles.autoLayoutVertical}>
<Svg style={styles.image} width="21" height="20" viewBox="0 0 21 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M20.0301 5.92402V14.075C20.0301 17.095 18.1401 19.225 15.1201 19.225H6.47007C3.45007 19.225 1.57007 17.095 1.57007 14.075V5.92402C1.57007 2.90402 3.46007 0.775024 6.47007 0.775024H15.1201C18.1401 0.775024 20.0301 2.90402 20.0301 5.92402Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.10132 14.4557L5.62932 12.8427C6.16032 12.2797 7.04532 12.2527 7.60932 12.7827C7.62632 12.7997 8.54632 13.7347 8.54632 13.7347C9.10132 14.2997 10.0083 14.3087 10.5733 13.7547C10.6103 13.7187 12.9073 10.9327 12.9073 10.9327C13.4993 10.2137 14.5623 10.1107 15.2823 10.7037C15.3303 10.7437 17.5003 12.9707 17.5003 12.9707" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.13276 7.15793C9.13276 8.12693 8.34776 8.91193 7.37876 8.91193C6.40976 8.91193 5.62476 8.12693 5.62476 7.15793C5.62476 6.18893 6.40976 5.40393 7.37876 5.40393C8.34776 5.40493 9.13276 6.18893 9.13276 7.15793Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
<Text style={styles.gallery}>
<TouchableOpacity onPress={()=>{navigation.navigate('Gallery')
   console.log("gallery")}}><Text>gallery</Text></TouchableOpacity>
</Text>
</View>
<View style={styles._autoLayoutVertical}>
{/* RN-Flow:: can be replaced with <IconlyLightNotification /> */}
<View style={styles.iconlyLightNotification}>
<Svg style={styles.notification} width="19" height="22" viewBox="0 0 19 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M9.40015 16.8476C15.0394 16.8476 17.6482 16.1242 17.9001 13.2205C17.9001 10.3188 16.0813 10.5054 16.0813 6.94511C16.0813 4.16414 13.4454 1 9.40015 1C5.35492 1 2.71899 4.16414 2.71899 6.94511C2.71899 10.5054 0.900146 10.3188 0.900146 13.2205C1.1531 16.1352 3.76192 16.8476 9.40015 16.8476Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.789 19.8572C10.4249 21.372 8.29686 21.3899 6.91968 19.8572" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.explore}>
{`notification`}
</Text>
</View>
<View style={styles.__autoLayoutVertical}>
{/* RN-Flow:: can be replaced with <IconlyLightDocument /> */}
<View style={styles.iconlyLightDocument}>
<Svg style={styles.document} width="19" height="20" viewBox="0 0 19 20" fill="none" >
<Path d="M12.7161 14.2234H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.7161 10.0369H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.25109 5.86011H5.49609" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0.749817C12.9085 0.749817 5.23149 0.753817 5.21949 0.753817C2.45949 0.770817 0.750488 2.58682 0.750488 5.35682V14.5528C0.750488 17.3368 2.47249 19.1598 5.25649 19.1598C5.25649 19.1598 12.9325 19.1568 12.9455 19.1568C15.7055 19.1398 17.4155 17.3228 17.4155 14.5528V5.35682C17.4155 2.57282 15.6925 0.749817 12.9085 0.749817Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.myBooking}>
{`My schedule`}
</Text>
</View>
<View style={styles.___autoLayoutVertical}>
{/* RN-Flow:: can be replaced with <IconlyLightChat /> */}
<View style={styles.iconlyLightChat}>
<Svg style={styles.chat} width="23" height="22" viewBox="0 0 23 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6715 18.0699C15.6153 21.1263 11.0899 21.7867 7.38651 20.074C6.8398 19.8539 6.39158 19.676 5.96547 19.676C4.77859 19.683 3.30126 20.8339 2.53346 20.067C1.76565 19.2991 2.91736 17.8206 2.91736 16.6266C2.91736 16.2004 2.74651 15.7602 2.52642 15.2124C0.812928 11.5096 1.47421 6.98269 4.53036 3.92721C8.4317 0.0244319 14.7701 0.0244322 18.6715 3.9262C22.5798 7.83501 22.5728 14.1681 18.6715 18.0699Z" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.5394 11.413H15.5484" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5304 11.413H11.5394" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.52138 11.413H7.53038" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
<Text style={styles.inbox}>
{`Inbox`}
</Text>
</View>
<View style={styles.____autoLayoutVertical}>
{/* RN-Flow:: can be replaced with <IconlyBoldProfile /> */}
<View style={styles.iconlyBoldProfile}>
<Svg style={styles.group} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M13.4939 5.29105C13.4939 8.22808 11.1391 10.5831 8.19995 10.5831C5.26185 10.5831 2.90597 8.22808 2.90597 5.29105C2.90597 2.35402 5.26185 0 8.19995 0C11.1391 0 13.4939 2.35402 13.4939 5.29105ZM8.19995 20C3.86232 20 0.199951 19.295 0.199951 16.575C0.199951 13.8539 3.88533 13.1739 8.19995 13.1739C12.5386 13.1739 16.2 13.8789 16.2 16.599C16.2 19.32 12.5146 20 8.19995 20Z" fill="#FB9400"/>
</Svg>
</View>
<Text style={styles.profile}>
{`Profile`}
</Text>
</View>
</View>

<  >
      <MapView
        style={{
          position: 'absolute',
          bottom: 150,
          right: 20,
          height: 350,
          width: 400,
        }}
        region={barberPosition}
        onPress={handleMapPress}
      >
        {barberPosition && (
          <Marker
            coordinate={barberPosition}
            title="Barbershop"
            description="Your barbershop location"
          />
        )}
      </MapView>
    </>







<View style={styles.group41}>
<Text style={styles.meadowValleyTerraceNewYork}>
{barberPosition.latitude && barberPosition.longitude}
</Text>
{/* RN-Flow:: can be replaced with <IconlyBoldLocation /> */}
<View style={styles.iconlyBoldLocation}>
<Svg style={styles.__group} width="16" height="18" viewBox="0 0 16 18" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M0.916748 7.59814C0.916748 3.76491 4.11998 0.666672 7.99462 0.666672C11.8802 0.666672 15.0834 3.76491 15.0834 7.59814C15.0834 9.52975 14.3809 11.323 13.2247 12.843C11.9491 14.5196 10.3769 15.9804 8.6072 17.127C8.20217 17.392 7.83664 17.412 7.39212 17.127C5.61236 15.9804 4.04015 14.5196 2.7755 12.843C1.6184 11.323 0.916748 9.52975 0.916748 7.59814ZM5.66194 7.81396C5.66194 9.09809 6.7098 10.1081 7.99462 10.1081C9.28028 10.1081 10.3382 9.09809 10.3382 7.81396C10.3382 6.53983 9.28028 5.4807 7.99462 5.4807C6.7098 5.4807 5.66194 6.53983 5.66194 7.81396Z" fill="#FB9400"/>
</Svg>
</View>
</View>
<View style={styles._autoLayoutHorizontal}>
<Text style={styles.ourAddress}>
{`Our Address`}
</Text>
<Text style={styles.seeonMaps}>
{`See on Maps`}
</Text>
{/* RN-Flow:: can be replaced with <IconlyBoldEditSquare map edit /> */}
<View style={styles.iconlyBoldEditSquare}>
<Svg style={styles.___group} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.2764 0.84281C15.5951 0.760395 16.8954 1.21825 17.8752 2.11566C18.7727 3.09548 19.2305 4.3958 19.1573 5.72359V14.2764C19.2397 15.6042 18.7727 16.9045 17.8844 17.8843C16.9046 18.7817 15.5951 19.2396 14.2764 19.1572H5.72355C4.39575 19.2396 3.09541 18.7817 2.11559 17.8843C1.21817 16.9045 0.760311 15.6042 0.842726 14.2764V5.72359C0.760311 4.3958 1.21817 3.09548 2.11559 2.11566C3.09541 1.21825 4.39575 0.760395 5.72355 0.84281H14.2764ZM9.06595 14.4412L15.2288 8.26014C15.7874 7.69239 15.7874 6.77667 15.2288 6.21808L14.0383 5.02765C13.4706 4.4599 12.5549 4.4599 11.9871 5.02765L11.3736 5.65034C11.282 5.74191 11.282 5.89758 11.3736 5.98915C11.3736 5.98915 12.8296 7.43599 12.8571 7.47262C12.9578 7.5825 13.0219 7.72902 13.0219 7.89385C13.0219 8.22351 12.7563 8.49822 12.4175 8.49822C12.2618 8.49822 12.1153 8.43412 12.0146 8.33339L10.4853 6.8133C10.4121 6.74004 10.2839 6.74004 10.2106 6.8133L5.84259 11.1813C5.5404 11.4835 5.36642 11.8864 5.35726 12.3168L5.30231 14.487C5.30231 14.6061 5.33894 14.716 5.42136 14.7984C5.50377 14.8808 5.61366 14.9266 5.73271 14.9266H7.88466C8.32421 14.9266 8.74545 14.7526 9.06595 14.4412Z" fill="#FB9400"/>
</Svg>
</View>
</View>
<View style={styles.group40}>
      <View style={styles._____autoLayoutVertical}>
        {Object.keys(services).map((serviceName) => (
          <View key={serviceName} style={styles.iconlyBoldTickSquare}>
            {editMode ? (
              <TextInput
              placeholder='set services'
              placeholderTextColor='white'
              style={{ color: 'gray' }}
                value={services[serviceName]}

                onChangeText={(newValue) =>
                  handleServiceChange(serviceName, newValue)
                }
              />
            ) : (
              // Display the service name as non-editable text
              <Text style={styles[serviceName]}>{services[serviceName]}</Text>
            )}
          </View>
        ))}
      </View>
      </View>
<View style={styles.group39}>
{/* RN-Flow:: can be replaced with <Button type={"button"} type2={"icon"} type3={"primary"} style={"default"} state={"default"} theme={"default"} component={"button"} /> */}
<View style={styles.button}>
{/* RN-Flow:: can be replaced with <IconlyCurvedPlus /> */}

<TouchableOpacity
  onPress={editMode ? handleSaveChanges : handleToggleEdit}
  style={[styles.iconlyCurvedPlus, styles.touchableButton, { width: 80, height: 80, borderRadius: 40, padding: 10, justifyContent: 'center', alignItems: 'center' }]}
>
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 5V19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
</TouchableOpacity>
</View>
<Text style={styles.servicesPricing}>
{`Services & Pricing`}
</Text>
</View>
{/* {/description edit /> /} */}
<View >
<TouchableOpacity onPress={handleEditDescriptionPress}>
<View style={styles._iconlyBoldEditSquare}>
<Svg style={styles.___________group} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14.2764 0.842802C15.5951 0.760387 16.8954 1.21825 17.8752 2.11565C18.7727 3.09547 19.2305 4.39579 19.1573 5.72359V14.2764C19.2397 15.6042 18.7727 16.9045 17.8844 17.8843C16.9046 18.7817 15.5951 19.2396 14.2764 19.1572H5.72355C4.39575 19.2396 3.09541 18.7817 2.11559 17.8843C1.21817 16.9045 0.760311 15.6042 0.842726 14.2764V5.72359C0.760311 4.39579 1.21817 3.09547 2.11559 2.11565C3.09541 1.21825 4.39575 0.760387 5.72355 0.842802H14.2764ZM9.06595 14.4412L15.2288 8.26013C15.7874 7.69238 15.7874 6.77666 15.2288 6.21807L14.0383 5.02764C13.4706 4.45989 12.5549 4.45989 11.9871 5.02764L11.3736 5.65033C11.282 5.7419 11.282 5.89757 11.3736 5.98914C11.3736 5.98914 12.8296 7.43598 12.8571 7.47261C12.9578 7.5825 13.0219 7.72901 13.0219 7.89384C13.0219 8.2235 12.7563 8.49821 12.4175 8.49821C12.2618 8.49821 12.1153 8.43411 12.0146 8.33339L10.4853 6.81329C10.4121 6.74003 10.2839 6.74003 10.2106 6.81329L5.84259 11.1813C5.5404 11.4835 5.36642 11.8864 5.35726 12.3168L5.30231 14.487C5.30231 14.6061 5.33894 14.7159 5.42136 14.7984C5.50377 14.8808 5.61366 14.9266 5.73271 14.9266H7.88466C8.32421 14.9266 8.74545 14.7526 9.06595 14.4412Z" fill="#FB9400"/>
</Svg>
</View>
</TouchableOpacity>
{editingDescription ? (
        <TextInput
        placeholder='set description'
        placeholderTextColor='gray'
          value={description}
          onChangeText={handleChangeDescriptionText}
          onBlur={handleEditDescriptionPress}
          autoFocus={true}
          style={styles.loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipReadmore}
        />
      ) : (
<Text style={styles.loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipReadmore}>
{description}

</Text>
      )}
</View>
<View style={styles._______autoLayoutVertical}>
  {editing ? (
    <TextInput
      value={newName}
      onChangeText={handleChangeText}
      onBlur={handleSavePress}
      autoFocus={true}
      style={styles.barbarellasalon}
    />
  ) : (
    <Text style={styles.barbarellasalon}>{newName}</Text>
  )}
</View>
<TouchableOpacity onPress={handleEditPress} style={styles.__iconlyBoldEditSquare}>
  <Svg style={styles.____________group} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2764 0.842802C15.5951 0.760387 16.8954 1.21825 17.8752 2.11565C18.7727 3.09547 19.2305 4.39579 19.1573 5.72359V14.2764C19.2397 15.6042 18.7727 16.9045 17.8844 17.8843C16.9046 18.7817 15.5951 19.2396 14.2764 19.1572H5.72355C4.39575 19.2396 3.09541 18.7817 2.11559 17.8843C1.21817 16.9045 0.760311 15.6042 0.842726 14.2764V5.72359C0.760311 4.39579 1.21817 3.09547 2.11559 2.11565C3.09541 1.21825 4.39575 0.760387 5.72355 0.842802H14.2764ZM9.06595 14.4412L15.2288 8.26013C15.7874 7.69238 15.7874 6.77666 15.2288 6.21807L14.0383 5.02764C13.4706 4.45989 12.5549 4.45989 11.9871 5.02764L11.3736 5.65033C11.282 5.7419 11.282 5.89757 11.3736 5.98914C11.3736 5.98914 12.8296 7.43598 12.8571 7.47261C12.9578 7.5825 13.0219 7.72901 13.0219 7.89384C13.0219 8.2235 12.7563 8.49821 12.4175 8.49821C12.2618 8.49821 12.1153 8.43411 12.0146 8.33339L10.4853 6.81329C10.4121 6.74003 10.2839 6.74003 10.2106 6.81329L5.84259 11.1813C5.5404 11.4835 5.36642 11.8864 5.35726 12.3168L5.30231 14.487C5.30231 14.6061 5.33894 14.7159 5.42136 14.7984C5.50377 14.8808 5.61366 14.9266 5.73271 14.9266H7.88466C8.32421 14.9266 8.74545 14.7526 9.06595 14.4412Z"
      fill="#FB9400"
    />
  </Svg>
</TouchableOpacity>
<View style={styles.group22}>
<View style={styles._maskGroup}>
<View style={styles._mask}/>
<ImageBackground style={styles._image} source={{uri:imageUrl}}/>
</View>
{/* RN-Flow:: can be replaced with <___iconlyBoldEditSquare /> */}
<TouchableOpacity onPress={pickImage}>
  <View style={styles.___iconlyBoldEditSquare}>
    <Svg
      style={styles._____________group}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2764 0.842817C15.5951 0.760403 16.8954 1.21826 17.8752 2.11567C18.7727 3.09549 19.2305 4.39581 19.1573 5.7236V14.2764C19.2397 15.6042 18.7727 16.9045 17.8844 17.8844C16.9046 18.7818 15.5951 19.2396 14.2764 19.1572H5.72355C4.39575 19.2396 3.09541 18.7818 2.11559 17.8844C1.21817 16.9045 0.760311 15.6042 0.842726 14.2764V5.7236C0.760311 4.39581 1.21817 3.09549 2.11559 2.11567C3.09541 1.21826 4.39575 0.760403 5.72355 0.842817H14.2764ZM9.06595 14.4412L15.2288 8.26014C15.7874 7.6924 15.7874 6.77668 15.2288 6.21809L14.0383 5.02765C13.4706 4.45991 12.5549 4.45991 11.9871 5.02765L11.3736 5.65034C11.282 5.74192 11.282 5.89759 11.3736 5.98916C11.3736 5.98916 12.8296 7.436 12.8571 7.47262C12.9578 7.58251 13.0219 7.72903 13.0219 7.89386C13.0219 8.22351 12.7563 8.49823 12.4175 8.49823C12.2618 8.49823 12.1153 8.43413 12.0146 8.3334L10.4853 6.81331C10.4121 6.74005 10.2839 6.74005 10.2106 6.81331L5.84259 11.1813C5.5404 11.4835 5.36642 11.8864 5.35726 12.3168L5.30231 14.487C5.30231 14.6061 5.33894 14.716 5.42136 14.7984C5.50377 14.8808 5.61366 14.9266 5.73271 14.9266H7.88466C8.32421 14.9266 8.74545 14.7526 9.06595 14.4412Z"
        fill="#FB9400"
      />
    </Svg>
  </View>
</TouchableOpacity>
</View>
{/* RN-Flow:: can be replaced with <ThemeDarkComponentNavbar theme={"dark"} component={"navbar"} /> */}
<View style={styles.themeDarkComponentNavbar}>
<View style={styles.________autoLayoutHorizontal}>
{/* RN-Flow:: can be replaced with <IconlyLightOutlineArrowLeft /> */}
<View style={styles.iconlyLightOutlineArrowLeft}>
<Svg style={styles.______________group} width="20" height="17" viewBox="0 0 20 17" fill="none" >
<Path d="M19.3333 8.32001C19.3333 8.76298 19.0041 9.12908 18.577 9.18702L18.4583 9.19501L0.95825 9.19501C0.475002 9.19501 0.08325 8.80326 0.08325 8.32001C0.08325 7.87703 0.41243 7.51093 0.83952 7.453L0.95825 7.44501L18.4583 7.44501C18.9415 7.44501 19.3333 7.83676 19.3333 8.32001Z" fill="white"/>
<Path d="M8.63374 14.7284C8.97619 15.0694 8.97738 15.6234 8.63641 15.9659C8.32643 16.2772 7.84039 16.3065 7.49729 16.053L7.39897 15.9685L0.340639 8.94054C0.0283957 8.62964 -8.58307e-06 8.14184 0.255438 7.79875L0.340588 7.70049L7.39892 0.671323C7.74134 0.330322 8.29535 0.331469 8.63636 0.673885C8.94636 0.985172 8.97359 1.47134 8.71872 1.81336L8.63379 1.91132L2.19842 8.32084L8.63374 14.7284Z" fill="white"/>
</Svg>
</View>
</View>
<View style={styles._________autoLayoutHorizontal}>
{/* RN-Flow:: can be replaced with <IconlyLightMoreCircle /> */}
<View style={styles.iconlyLightMoreCircle}>
<Svg style={styles._______________group} width="24" height="24" viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0002 1.20844C17.9595 1.20844 22.7918 6.0396 22.7918 12.0001C22.7918 17.9594 17.9595 22.7918 12.0002 22.7918C6.03966 22.7918 1.2085 17.9594 1.2085 12.0001C1.2085 6.04077 6.04083 1.20844 12.0002 1.20844Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5959 12.0152H16.6064" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9187 12.0152H11.9292" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.24166 12.0152H7.25216" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
</View>
</View>
</View>
</View>
<View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          handleUpdateProfile()
        }}
      >
        <Icon name="cloud-upload" size={25} color="#FFFFFF" />
      </TouchableOpacity>
    </View>

</View>
</ScrollView>
);

}
const styles = StyleSheet.create({
_Dark_detailspackagedetails: {
flexShrink: 0,
height: 1443,
width: 428,
backgroundColor: "rgba(24, 26, 32, 1)",
alignItems: "flex-start",
rowGap: 0
},
homeIndicator: {
position: "absolute",
flexShrink: 0,
top: 1409,
height: 34,
width: 428,
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
autoLayoutHorizontal: {
position: "absolute",
flexShrink: 0,
top: 1361,
height: 48,
width: 428,
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
image: {
alignSelf: "center",
flexShrink: 0,
height: 18,
width: 18
},
gallery: {
alignSelf: "stretch",
flexShrink: 0,
textAlign: "center",
color: "rgba(158, 158, 158, 1)",
////fontFamily: "Urbanist",
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
iconlyLightNotification: {
alignSelf: "center",
flexShrink: 0,
height: 24,
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
explore: {
alignSelf: "stretch",
flexShrink: 0,
textAlign: "center",
color: "rgba(158, 158, 158, 1)",
////fontFamily: "Urbanist",
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
color: "rgba(158, 158, 158, 1)",
//fontFamily: "Urbanist",
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
//fontFamily: "Urbanist",
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
group: {
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
color: "rgba(251, 148, 0, 1)",
//fontFamily: "Urbanist",
fontSize: 10,
fontWeight: "700",
letterSpacing: 0.20000000298023224
},
maskGroup: {
position: "absolute",
flexShrink: 0,
top: 976,
height: 300,
left: 24,
width: 380
},
mask: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 300,
backgroundColor: "rgba(189, 189, 189, 1)",
borderRadius: 40
},
rectangle: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 300,
backgroundColor: "rgba(31, 34, 42, 1)"
},
_vector: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 375,
overflow: "visible"
},
_group: {
position: "absolute",
flexShrink: 0,
top: 119,
height: 61,
left: 164,
width: 52
},
union: {
position: "absolute",
flexShrink: 0,
width: 52,
height: 61,
overflow: "visible"
},
typeDefaultComponentAvatar: {
position: "absolute",
flexShrink: 0,
top: 10,
height: 32,
left: 10,
width: 32,
alignItems: "flex-start",
rowGap: 0,
borderWidth: 3,
borderColor: "rgba(53, 56, 63, 1)",
borderRadius: 1000
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
group41: {
position: "absolute",
flexShrink: 0,
top: 902,
height: 22,
left: 19,
width: 391
},
meadowValleyTerraceNewYork: {
position: "absolute",
flexShrink: 0,
width: 363,
height: 22,
textAlign: "left",
color: "rgba(224, 224, 224, 1)",
//fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
iconlyBoldLocation: {
position: "absolute",
flexShrink: 0,
top: 1,
height: 20,
left: 371,
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
_autoLayoutHorizontal: {
position: "absolute",
flexShrink: 0,
top: 855,
height: 22,
left: 24,
width: 380,
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
columnGap: 12
},
ourAddress: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
//fontFamily: "Urbanist",
fontSize: 18,
fontWeight: "700",
letterSpacing: 0,
lineHeight: 21.600000858306885
},
seeonMaps: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "right",
color: "rgba(251, 148, 0, 1)",
////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "700",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
iconlyBoldEditSquare: {
flexShrink: 0,
height: 22,
width: 22,
alignItems: "flex-start",
rowGap: 0
},
___group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 18,
left: 2,
width: 18
},
group40: {
position: "relative",
flexShrink: 0,
top: 683,
height: 'auto',
left: 30,
width: '100%'
},
_____autoLayoutVertical: {
position: "absolute",
flexShrink: 0,
width: 180,
alignItems: "flex-start",
rowGap: 1
},
__autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
iconlyBoldTickSquare: {
flexShrink: 0,
height: 39,
width: 200,
alignItems: "flex-start",
rowGap: 1
},
____group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 20,
left: 2,
width: 20
},
haircut: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
// ////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
___autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
_iconlyBoldTickSquare: {
flexShrink: 0,
height: 24,
width: 24,
alignItems: "flex-start",
rowGap: 0
},
_____group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 20,
left: 2,
width: 20
},
hairstyling: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
// ////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
____autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
__iconlyBoldTickSquare: {
flexShrink: 0,
height: 24,
width: 24,
alignItems: "flex-start",
rowGap: 0
},
______group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 20,
left: 2,
width: 20
},
hairColoring: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
// ////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
______autoLayoutVertical: {
position: "absolute",
flexShrink: 0,
left: 200,
width: 180,
alignItems: "flex-start",
rowGap: 16
},
_____autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
___iconlyBoldTickSquare: {
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
left: 2,
width: 20
},
$: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
// ////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
______autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
____iconlyBoldTickSquare: {
flexShrink: 0,
height: 24,
width: 24,
alignItems: "flex-start",
rowGap: 0
},
________group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 20,
left: 2,
width: 20
},
_$: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
_______autoLayoutHorizontal: {
alignSelf: "stretch",
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
columnGap: 12
},
_____iconlyBoldTickSquare: {
flexShrink: 0,
height: 24,
width: 24,
alignItems: "flex-start",
rowGap: 0
},
_________group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 20,
left: 2,
width: 20
},
__$: {
flexGrow: 1,
flexShrink: 1,
flexBasis: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
////fontFamily: "Urbanist",
fontSize: 16,
fontWeight: "500",
letterSpacing: 0.20000000298023224,
lineHeight: 22.399999618530273
},
group39: {
position: "absolute",
flexShrink: 0,
top: 641,
height: 22,
left: 24,
width: 380
},
button: {
position: "absolute",
flexShrink: 0,
top: 1,
height: 21,
left: 172,
width: 24,
backgroundColor: "rgba(251, 148, 0, 1)",
alignItems: "center",
justifyContent: "center",
rowGap: 8,
padding: 9,
borderRadius: 100
},
iconlyCurvedPlus: {
flexShrink: 0,
height: 40,
width: 40,
alignItems: "flex-start",
rowGap: 0
},
__________group: {
position: "absolute",
flexShrink: 0,
top: 14,
height: 12,
left: 14,
width: 12
},
servicesPricing: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 22,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
////fontFamily: "Urbanist",
fontSize: 18,
fontWeight: "700",
letterSpacing: 0,
lineHeight: 21.600000858306885
},
_iconlyBoldEditSquare: {
position: "absolute",
flexShrink: 0,
top: 605,
height: 22,
left: 387,
width: 22,
alignItems: "flex-start",
rowGap: 0
},
___________group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 18,
left: 2,
width: 18
},
loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexercitationullamcolaborisnisiutaliquipReadmore: {
position: "absolute",
flexShrink: 0,
top: 541,
left: 24,
width: 380,
height: 80,
textAlign: "left",
color: "rgba(238, 238, 238, 1)",
////fontFamily: "Urbanist",
fontSize: 14,
fontWeight: "400",
letterSpacing: 0.20000000298023224,
lineHeight: 19.59999966621399
},
_______autoLayoutVertical: {
position: "absolute",
flexShrink: 0,
top: 460,
left: 24,
width: 380,
alignItems: "flex-start",
rowGap: 12
},
barbarellasalon: {
alignSelf: "stretch",
flexShrink: 0,
textAlign: "left",
color: "rgba(255, 255, 255, 1)",
////fontFamily: "Urbanist",
fontSize: 24,
fontWeight: "700",
letterSpacing: 0,
lineHeight: 28.80000114440918
},
__iconlyBoldEditSquare: {
position: "absolute",
flexShrink: 0,
top: 491,
height: 22,
left: 390,
width: 22,
alignItems: "flex-start",
rowGap: 0
},
____________group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 18,
left: 2,
width: 18
},
group22: {
position: "absolute",
flexShrink: 0,
top: 140,
height: 300,
left: 24,
width: 387
},
_maskGroup: {
position: "absolute",
flexShrink: 0,
height: 300,
width: 380
},
_mask: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 300,
backgroundColor: "rgba(189, 189, 189, 1)",
borderRadius: 32
},
_image: {
position: "absolute",
flexShrink: 0,
width: 380,
height: 300,
borderRadius: 32
},
___iconlyBoldEditSquare: {
position: "absolute",
flexShrink: 0,
top: 278,
height: 22,
left: 365,
width: 22,
alignItems: "flex-start",
rowGap: 0
},
_____________group: {
position: "absolute",
flexShrink: 0,
top: 2,
height: 18,
left: 2,
width: 18
},
themeDarkComponentNavbar: {
position: "absolute",
flexShrink: 0,
top: 68,
height: 48,
left: 24,
width: 380,
flexDirection: "row",
alignItems: "center",
columnGap: 12,
paddingVertical: 12,
paddingHorizontal: 0
},
________autoLayoutHorizontal: {
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
______________group: {
position: "absolute",
flexShrink: 0,
top: 5,
height: 19,
left: 6,
width: 16
},
_________autoLayoutHorizontal: {
flexShrink: 0,
flexDirection: "row",
alignItems: "center",
justifyContent: "flex-end",
columnGap: 20
},
iconlyLightMoreCircle: {
flexShrink: 0,
height: 28,
width: 28,
alignItems: "flex-start",
rowGap: 0
},
_______________group: {
position: "absolute",
flexShrink: 0,
top: 3,
height: 22,
left: 3,
width: 22
},
circle: {
    backgroundColor: '#FB9400',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 120,
    right: -180,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
 },

})