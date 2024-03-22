import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const courseDetails = ({ name, description, imageSource }) => {
  const [rating, setRating] = useState(0);

  const increaseRating = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  }

  return (
    <View style={styles.courseDetailsContainer}>
      <Image
        source={imageSource} 
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {rating}</Text>
        <Button title="Rate" onPress={increaseRating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseDetailsContainer: {
    marginBottom: 20,
    alignSelf:'center',
    flexDirection:'column',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf:'center',
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    flexDirection:'row',
    alignSelf:'center'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  rating: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default courseDetails;
