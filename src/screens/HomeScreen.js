import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleCameraPress = () => {
    navigation.navigate('Camera');
  };

  return (
    <View>
      <Text>Welcome to ScanChef!</Text>
      <Button title="Take a Photo" onPress={handleCameraPress} />
    </View>
  );
};

export default HomeScreen;
