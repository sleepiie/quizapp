import { StyleSheet, View } from "react-native";

const Row = ({ children , single }) => {
  const containerStyle = single ? styles.singleContainer : styles.container;
  return <View style={containerStyle}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  singleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0,
    paddingBottom: 7,
    paddingLeft: 8,
  }
});

export default Row;