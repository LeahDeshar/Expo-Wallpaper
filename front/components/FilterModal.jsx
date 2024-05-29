import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { hp } from "../helper/common";
import { theme } from "../constants/theme";

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
          {Object.keys(sections).map((sectionName, index) => {
            let sectionView = sections[sectionName];
            return (
              <View key={sectionName}>
                <SectionView title={sectionName} content={sectionView({})} />
              </View>
            );
          })}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const sections = {
  order: (props) => <OrderView {...props} />,
  orientation: (props) => <SectionView {...props} />,
  type: (props) => <SectionView {...props} />,
  colors: (props) => <SectionView {...props} />,
};

const SectionView = () => {
  return (
    <View>
      <Text>Section View</Text>
    </View>
  );
};

const OrderView = () => {
  return (
    <View>
      <Text>Order View</Text>
    </View>
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
  filterText: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.8),
    marginBottom: 5,
  },
});
