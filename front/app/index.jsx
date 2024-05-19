import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        {/* linear gradient */}
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pixels</Text>
          <Text style={styles.punchline}>Every Pixel Tells a Story</Text>
          <View>
            <Pressable style={styles.startButton}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
});
