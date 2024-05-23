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
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Hello</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({});
