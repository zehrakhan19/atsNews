import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Imagepicker from 'react-native-image-crop-picker';
import toast from '../toast/toast';
import EmptyImg from './empty-img.svg';
import {Card} from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface ImagePickerProps {
  imageOf?: string;
  callback?: (path: string | null) => void;
  src?: string | null;
}

export function ImagePicker({imageOf, src = null, callback}: ImagePickerProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelectImage = async () => {
    try {
      const image: any = await Imagepicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: false,
        includeExif: true,
      }).then(image => console.log(image));

      callback(image);
      setSelectedImage(image.path);
    } catch (error: any) {
      toast('Unable to Select Image: ' + error.message);
      console.log('ImagePicker Error: ', error);
    }
  };

  const handleRemoveImage = () => {
    callback(null);
    setSelectedImage(null);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {selectedImage || src ? (
            <View>
              <Image
                source={{
                  uri:
                    selectedImage ||
                    'https://ats.sgp1.cdn.digitaloceanspaces.com/' + src,
                }}
                style={{
                  width: 110,
                  height: 110,
                  marginHorizontal: 15,
                  marginVertical: 10,
                }}
              />
              <TouchableOpacity
                onPress={handleRemoveImage}
                style={{position: 'absolute', right: 20, top: 10}}>
                <FontAwesomeIcon
                  name="remove"
                  size={25}
                  color="rgba(0, 0, 0, 0.5)"
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                marginVertical: 20,
              }}
              onPress={handleSelectImage}>
              <Card
                mode="elevated"
                elevation={1}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  padding: 8,
                }}>
                <EmptyImg />
              </Card>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text>Upload {imageOf} Image</Text>
      </View>
    </>
  );
}
