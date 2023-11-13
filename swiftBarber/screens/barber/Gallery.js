import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';

const Gallery = () => {
  return (
    <View>
      <WidgetLoader />
      <Widget
        sources={['local', 'camera']}
        resourceType={'image'}
        cloudName={'dx1fjwr7w'} 
        uploadPreset={'booking'}
        buttonText={'Open'}
        style={{
          color: 'white',
          border: 'none',
          width: '120px',
          backgroundColor: 'green',
          borderRadius: '4px',
          height: '25px'
        }}
        folder={'my_folder'}
        cropping={false}
        multiple={true}
        autoClose={false}
        onSuccess={() => console.log("success")}
        onFailure={() => console.log("failed")}
        logging={false}
        customPublicId={'sample'}
        eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'}
        use_filename={false}
        widgetStyles={{
          palette: {
            window: '#737373',
            windowBorder: '#FFFFFF',
            tabIcon: '#FF9600',
            menuIcons: '#D7D7D8',
            textDark: '#DEDEDE',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#B3B3B3',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#909090'
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
              active: true
            }
          }
        }}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
