import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableHighlight, Image } from 'react-native';
import repositories from './Data/repositories.js';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 4,
    color: "white",
    alignItems: "center"
  },
  texto: {
    color: "white",
    padding: 5,
    alignSelf: "center",
    borderRadius: 4
  },
  ContainerImagen: {
    width: 150,
    height: 150,
    padding: 5
  }
});

const RepositoryList = () => {


  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View style={styles.container} key={repo.id}>
          <View style={styles.ContainerImagen}>
            <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698159401/E-COMERCE%20CODER/ajksdasjkdkasjdasd_ojmtik.png" }}></Image>
          </View>
          <Text style={styles.texto}>{repo.id}</Text>
          <TouchableHighlight onPress={() => alert("anda")}>
            <Text style={styles.texto}>{repo.fullName}</Text>
          </TouchableHighlight>
          <Text style={styles.texto}>{repo.description}</Text>
          <Text style={styles.texto}>{repo.lenguaje}</Text>
          <Text style={styles.texto}>{repo.stargazersCount}</Text>
          <Text style={styles.texto}>{repo.ratinAverage}</Text>
          <Text style={styles.texto}>{repo.reviewCount}</Text>
        </View>
      )}
    />
  );
}

export default RepositoryList;
