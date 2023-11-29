import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { UploadIcon, CancelIcon } from '../../src/assets/icons';
import stylesInput from './styles';

const InputFile = (props) => {

  const {
    label,
    inputStyles,
    labelStyles,
    styles,
    uploadFile,
    initialValue
  } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageInformation, setImageInformation] = useState(null)

  console.log('initialValue',initialValue);

  const currentImage = useMemo(() => {
    const formatURL = (url) => url.replace('http','https');
    if(initialValue?.url !== 'default' && !selectedFile) {
      return { uri: formatURL(initialValue?.url) }
    }
    if(selectedFile) return { uri: formatURL(selectedFile) }
    return require('../../src/img/user.png')
  }, [selectedFile,initialValue])

  const convertToBase64 = async (uri) => {
    const imageFile = await fetch(uri);
    const blob = await imageFile.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (res[0].type.includes('image')) {
        setSelectedFile(res[0].uri)
        const base64Image = await convertToBase64(res[0].uri);
        setImageInformation({ base64: base64Image, ...res[0] })
      } else {
        alert('El archivo seleccionado no es una imagen.');
        setImageInformation(null)
        setSelectedFile(null)
      }
    } catch (err) {
      alert('Error al seleccionar la imagen');
      setImageInformation(null)
      setSelectedFile(null)
    }
  };

  return (
    <View style={styles}>
      <Text style={labelStyles} >{label}</Text>
      <TouchableOpacity style={inputStyles} onPress={pickDocument}>
        <Image
          source={currentImage}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      </TouchableOpacity>
      {
        imageInformation ? (
          <View style={stylesInput.buttonsContainer}>
            <TouchableHighlight
              onPress={() => {
                uploadFile(imageInformation)
                setSelectedFile(null)
                setImageInformation(null)
              }}
              style={stylesInput.uploadButton}
            >
              <View style={stylesInput.buttonContainer}>
                <Text style={stylesInput.buttonText}>Subir</Text>
                <UploadIcon width={20} height={20} stroke='#fff' />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={stylesInput.cancelUploadButton}
              onPress={() => {
                setSelectedFile(null);
                setImageInformation(null);
              }}
            >
              <View
                style={stylesInput.buttonContainer}>
                <Text style={stylesInput.buttonText}>Cancelar</Text>
                <CancelIcon width={20} height={20} stroke='#fff' />
              </View>
            </TouchableHighlight>
          </View>
        ) : null
      }

    </View>
  );
};

export default InputFile;
