import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Primary } from "../../color";
import { w, h } from "react-native-responsiveness";
import { Icon } from "react-native-elements";

// Components
import { NavHeader } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";

export class Records extends Component {
  state = { userid: "", data: [] };
  componentDidMount = async () => {
    AsyncStorage.getItem("userData", (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          userid: userData.id,
        });
        this.userinfo();
      } else {
        console.log("No data found");
      }
    });
  };

  userinfo = async () => {
    let DataAraay = [];
    firestore()
      .collection("clientshistory")
      .where("donorid", "==", this.state.userid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          DataAraay.push(documentSnapshot.data());
          this.setState({ data: DataAraay });
        });
      });
  };

  renderItem = (item) => (
    <View style={styles.FlatListView}>
      <View style={styles.leftFlat}>
        <Text style={styles.textColor}>Donated To: {item.hospital}</Text>
      </View>
      <View style={styles.RightFlat}>
        <Text style={styles.textColor}>
          Date: {item.createdAt.toDate().toDateString()}
        </Text>
        <Text style={styles.textColor}>
          Time: {item.createdAt.toDate().toTimeString()}
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="HISTORY"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />

        <View style={styles.FlatListContianer}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => item.requesterID}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
    alignItems: "center",
  },
  FlatListContianer: {
    // backgroundColor: 'red',
    width: "95%",
    height: h("90%"),
    alignItems: "center",
  },
  FlatListView: {
    backgroundColor: Primary,
    width: w("90%"),
    height: h("10%"),
    margin: h("1%"),
    flexDirection: "row",
    borderRadius: h("1%"),
  },
  leftFlat: {
    // backgroundColor: 'red',
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  RightFlat: {
    // backgroundColor: "green",
    width: "55%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: h("1%"),
  },
  textColor: {
    color: "white",
    marginLeft: h("1%"),
    fontSize: h("1.9%"),
  },
});
