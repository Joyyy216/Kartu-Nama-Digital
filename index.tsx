import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Background Gradient */}
      <LinearGradient
        colors={["#1e3c72", "#2a5298", "#4facfe"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Foto Profil */}
      <Image
        source={require("../../assets/foto.jpeg")}
        style={styles.profilePic}
      />

      {/* Identitas */}
      <Text style={styles.name}>Joyce Putri Pasaribu</Text>
      <Text style={styles.info}>NIM: 243303621234</Text>
      <Text style={styles.info}>Jurusan: Sistem Informasi</Text>

      {/* Quote */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 "Belajar hari ini untuk membangun masa depan di dunia teknologi."
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#ffff99",
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: 5,
  },

  info: {
    fontSize: 14,
    color: "#ffff99",
    marginBottom: 5,
    letterSpacing: 1,
  },

  bioCard: {
    backgroundColor: "#2a5298",   // warna biru yang cocok dengan gradient
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4facfe",
    width: "100%",
    marginTop: 20,
  },

  bioText: {
    color: "#ffffff",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 14,
  },
});