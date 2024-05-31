import { Button, StyleSheet, Image, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { wp } from "../../helper/common";
import { theme } from "../../constants/theme";

const ImageScreen = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [status, setStatus] = useState();
  let uri = item?.webformatURL;

  const onLoad = () => {
    setStatus("");
  };
  const getSize = () => {
    return {
      width: 200,
      height: 200,
    };
  };
  return (
    <BlurView style={styles.container} tint="dark" intensity={60}>
      <View>
        <Image
          transition={100}
          style={[styles.image, getSize()]}
          source={{ uri: uri }}
          onLoad={onLoad}
        />
      </View>
      <Button title="Back" onPress={() => router.back()} />
    </BlurView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(4),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    borderRadius: theme.radius.lg,
    borderWidth: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    // backgroundColor: "green",
    borderColor: "rgba(255,255,255,0.1)",
  },
});
