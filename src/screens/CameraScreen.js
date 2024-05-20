import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const dispatch = useDispatch();

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      // Use an image recognition API to identify ingredients
      const ingredients = await identifyIngredients(data.uri);
      dispatch(fetchRecipes(ingredients));
      navigation.navigate('Recipe');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <Button title="Capture" onPress={handleTakePicture} />
    </View>
  );
};

export default CameraScreen;
