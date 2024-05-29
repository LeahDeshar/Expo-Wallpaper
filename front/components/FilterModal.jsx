import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

const FilterModal = ({ modalInputRef }) => {
  const snapPoints = useMemo(() => ["25%", "75%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log(index);
  }, []);
  return (
    <BottomSheetModal
      ref={modalInputRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={CustomBackDrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Hello</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const CustomBackDrop = ({ animatedIndex, style }) => {
  const containerStyle = [StyleSheet.absoluteFill, style, styles.overlay];
  return <View style={containerStyle}></View>;
};
export default FilterModal;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
