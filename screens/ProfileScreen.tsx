import { StyleSheet, Image, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import pins from "../assets/data/pins";
import MasonryList from "../components/MasonryList";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/67394147?v=4",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Neo Mokhele{" "}
          <AntDesign
            name="checkcircle"
            size={16}
            color="#3b5998"
            style={{ marginLeft: 5, marginBottom: 2 }}
          />
        </Text>
        <Text style={styles.subtitle}>12K Followers | 732 Followings</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#181818",
    margin: 10,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  profileInfo: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
