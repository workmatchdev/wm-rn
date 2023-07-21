import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const InputFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const pickDocument = async () => {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles], // Puedes especificar aquí los tipos de archivos permitidos
        });
  
        // El resultado contendrá información sobre el archivo seleccionado
        console.log(
          result.uri,
          result.type, // mime type del archivo
          result.name,
          result.size
        );
  
        setSelectedFile(result);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // El usuario canceló la selección de archivos
          console.log('Selección cancelada');
        } else {
          // Ocurrió un error al seleccionar el archivo
          console.log('Error:', err);
        }
      }
    };
  
    return (
      <View>
        <Text>
            Logo
        </Text>
        <TouchableOpacity onPress={pickDocument}>
          <Text>Seleccionar archivo</Text>
        </TouchableOpacity>
        {selectedFile && (
          <Text>Archivo seleccionado: {selectedFile.name}</Text>
        )}
      </View>
    );
  };
  
  export default InputFile;
  