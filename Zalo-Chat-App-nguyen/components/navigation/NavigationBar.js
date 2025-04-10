import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BASE_UNIT } from "../../constants/screen";
import { Colors } from "../../styles/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ICON_MEDIUM } from "../../constants/iconSize";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { navigationState } from "../../state/PrimaryState";

export default function NavigationBar() {
  const navigation = useNavigation();
  const [navState, setNavigationState] = useRecoilState(navigationState);

  const handleNavigation = (type, screen) => {
    setNavigationState(type);
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: BASE_UNIT * 0.15,
        width: BASE_UNIT,
        backgroundColor: "white",
        borderTopColor: Colors.lightGrey,
        borderTopWidth: BASE_UNIT * 0.0025,
      }}
    >
      {/* Icon Message */}
      <TouchableOpacity
        onPress={() => handleNavigation("message", "HomeMessage")}
        style={{
          alignItems: "center",
          height: "100%",
          width: BASE_UNIT * 0.15,
          justifyContent: "center",
        }}
      >
        <View style={{ position: "relative" }}>
          <Ionicons
            name={
              navState === "message"
                ? "chatbubble-ellipses-sharp"
                : "chatbubble-ellipses-outline"
            }
            size={ICON_MEDIUM * 1.1}
            color={navState === "message" ? Colors.primary : Colors.grey}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "red",
              height: ICON_MEDIUM * 0.6,
              width: ICON_MEDIUM * 0.8,
              borderRadius: BASE_UNIT,
              alignItems: "center",
              justifyContent: "center",
              right: -ICON_MEDIUM * 0.2,
              top: 0,
            }}
          >
            <Text style={{ color: "white", fontSize: BASE_UNIT * 0.025 }}>
              49
            </Text>
          </View>
        </View>
        {navState === "message" ? (
          <Text style={{ fontWeight: "700", color: Colors.primary }}>
            Tin nhắn
          </Text>
        ) : null}
      </TouchableOpacity>

      {/* Icon Contact */}
      <TouchableOpacity
        onPress={() => handleNavigation("contact", "Contacts")}
        style={{ alignItems: "center" }}
      >
        <MaterialIcons
          name="contacts"
          size={ICON_MEDIUM * 1.1}
          color={navState === "contact" ? Colors.primary : Colors.grey}
        />
        {navState === "contact" ? (
          <Text style={{ fontWeight: "700", color: Colors.primary }}>
            Liên hệ
          </Text>
        ) : null}
      </TouchableOpacity>

      {/* Icon Explore */}
      <TouchableOpacity
        onPress={() => handleNavigation("explore", "Explore")}
        style={{ alignItems: "center" }}
      >
        <Ionicons
          name={navState === "explore" ? "grid-sharp" : "grid-outline"}
          size={ICON_MEDIUM * 1.1}
          color={navState === "explore" ? Colors.primary : Colors.grey}
        />
        {navState === "explore" ? (
          <Text style={{ fontWeight: "700", color: Colors.primary }}>
            Khám phá
          </Text>
        ) : null}
      </TouchableOpacity>

      {/* Icon Diary */}
      <TouchableOpacity
        onPress={() => handleNavigation("diary", "Diary")}
        style={{ alignItems: "center" }}
      >
        <Ionicons
          name={navState === "diary" ? "time-sharp" : "time-outline"}
          size={ICON_MEDIUM * 1.1}
          color={navState === "diary" ? Colors.primary : Colors.grey}
        />
        {navState === "diary" ? (
          <Text style={{ fontWeight: "700", color: Colors.primary }}>
            Nhật ký
          </Text>
        ) : null}
      </TouchableOpacity>

      {/* Icon Profile */}
      <TouchableOpacity
        onPress={() => handleNavigation("profile", "Profile")}
        style={{ alignItems: "center" }}
      >
        <Ionicons
          name={navState === "profile" ? "person" : "person-outline"}
          color={navState === "profile" ? Colors.primary : Colors.grey}
          size={ICON_MEDIUM * 1.1}
        />
        {navState === "profile" ? (
          <Text style={{ fontWeight: "700", color: Colors.primary }}>
            Cá nhân
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
