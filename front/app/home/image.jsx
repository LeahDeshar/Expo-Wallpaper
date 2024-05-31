import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { hp, wp } from "../../helper/common";
import { theme } from "../../constants/theme";
import { Entypo, Octicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import * as FileSystem from "expo-file-system";
const ImageScreen = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [status, setStatus] = useState("loading");
  let uri = item?.webformatURL;

  const fileName = item?.previewURL.split("/").pop();
  const imageUrl = uri;
  const filePath = `${FileSystem.documentDirectory}${fileName}`;

  const onLoad = () => {
    setStatus("");
  };
  const getSize = () => {
    const aspectRatio = item?.imageWidth / item?.imageHeight;
    const maxWidth = Platform.OS == "web" ? wp(50) : wp(92);
    let calculateHeight = maxWidth / aspectRatio;
    let calculateWidth = maxWidth;

    if (aspectRatio < 1) {
      calculateWidth = calculateHeight * aspectRatio;
    }
    return {
      width: calculateWidth,
      height: calculateHeight,
    };
  };

  const handleDownloadImage = async () => {};
  const handleShareImage = async () => {};

  const downloadFile = async () => {
    try {
      const { uri } = await FileSystem.downloadAsync(imageUrl, filePath);
      return uri;
    } catch (error) {
      console.log(error.message);
      Alert.alert("Image", err.message);
      return null;
    }
  };
  return (
    <BlurView style={styles.container} tint="dark" intensity={60}>
      <View style={getSize()}>
        <View style={styles.loading}>
          {status == "loading" && (
            <ActivityIndicator size="large" color="white" />
          )}
        </View>
        <Image
          transition={100}
          style={[styles.image, getSize()]}
          source={{ uri: uri }}
          onLoad={onLoad}
        />
      </View>
      <View style={styles.buttons}>
        <Animated.View entering={FadeInDown.springify()}>
          <Pressable style={styles.button} onPress={() => router.back()}>
            <Octicons name="x" size={24} color={"white"} />
          </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.springify().delay(100)}>
          <Pressable style={styles.button} onPress={handleDownloadImage}>
            <Octicons name="download" size={24} color={"white"} />
          </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.springify().delay(200)}>
          <Pressable style={styles.button} onPress={handleShareImage}>
            <Entypo name="share" size={24} color={"white"} />
          </Pressable>
        </Animated.View>
      </View>
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
  loading: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: hp(6),
    width: hp(6),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  buttons: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  },
});
