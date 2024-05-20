import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const RecipeScreen = () => {
  const recipes = useSelector(state => state.recipe.recipes);

  return (
    <View>
      <Text>Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecipeScreen;
