import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png"
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello, this is Haikal</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    borderShadow: '4px 4px rgba(0,0,0,0.1)'
  }
});
