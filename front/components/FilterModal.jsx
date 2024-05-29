import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const FilterModal = ({ modalInputRef }) => {
  const snapPoints = useMemo(() => ["75%"], []);

  // const handleSheetChanges = useCallback((index) => {
  //   console.log(index);
  // }, []);
  return (
    <BottomSheetModal
      ref={modalInputRef}
      index={0}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={CustomBackDrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.filterText}>Filters</Text>
          <Text style={styles.filterText}>Section here</Text>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const CustomBackDrop = ({ animatedIndex, style }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    let opacity = interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      opacity,
    };
  });
  const containerStyle = [
    StyleSheet.absoluteFill,
    style,
    styles.overlay,
    containerAnimatedStyle,
  ];
  return (
    <Animated.View style={containerStyle}>
      <BlurView
        style={StyleSheet.absoluteFill}
        tint="dark"
        intensity={25}
      ></BlurView>
    </Animated.View>
  );
};
export default FilterModal;

const styles = StyleSheet.create({
  // constainer: {
  //   flex: 1,
  //   padding: 24,
  //   justifyContent: "center",
  //   backgroundColor: "grey",
  // },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    width: "100%",
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
