import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const ImageCard = ({ item, index }) => {
  return (
    <Pressable>
      <Image
        style={styles.image}
        source={item?.webformatURL}
        transition={100}
      />
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
