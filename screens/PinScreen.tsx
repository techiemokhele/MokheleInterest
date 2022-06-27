import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import pins from "../assets/data/pins";
import Navigation from "../navigation/index";

const PinScreen = () => {
  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();

  const insets = useSafeAreaInsets();

  const pinId = route.params?.id;
  const pin = pins.find((p) => p.id === pinId);

  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);

  const goBack = () => {
    navigation.goBack();
  };

  // if pin not found
  if (!pin) {
    return <Text>❌ Oops, there nothing to show...</Text>;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Text style={styles.title}>{pin.title}</Text>

        <Pressable
          onPress={goBack}
          style={[styles.backBtn, { top: insets.top + 16 }]}
        >
          <Ionicons name={"chevron-back"} size={35} color={"white"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    top: 70,
    left: 10,
  },
});

export default PinScreen;
