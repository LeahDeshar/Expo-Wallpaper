import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { data } from "../constants/categories";
import { hp, wp } from "../helper/common";
import { theme } from "../constants/theme";

const CategoryItem = ({ title, index }) => {
  return (
    <View>
      <Pressable style={[styles.category]}>
        <Text style={[styles.title]}>{title}</Text>
      </Pressable>
    </View>
  );
};
const Categories = () => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem title={item} index={index} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});
