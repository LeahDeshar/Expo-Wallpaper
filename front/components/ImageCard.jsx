import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageCard = ({ item, index }) => {
  return (
    <Pressable>
      <Image style={styles.image} source={{ uri: item?.webformatURL }} />
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
});
