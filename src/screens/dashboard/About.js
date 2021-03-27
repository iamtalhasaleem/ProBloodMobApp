import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { w, h } from "react-native-responsiveness";

import firestore from "@react-native-firebase/firestore";

// Components
import { NavHeader } from "../../components";
import { Primary } from "../../color";

export class About extends Component {
  state = { data: [] };
  componentDidMount = () => {};

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader
          txt="About"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <ScrollView>
          <View style={styles.Containerfortext}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingtext}>About Pro-Blood</Text>
            </View>
            <View style={styles.MidSection}>
              <Text style={styles.headingtext2}>What is Pro-Blood?</Text>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                Pro-Blood is a project that integrates the centralized blood
                bank management system model. It aims to connect the donor, the
                requester, and the blood bank, all under a single platform.
              </Text>
              <Text style={[styles.headingtext2, { marginTop: h("2%") }]}>
                Why was Pro-Blood initiated?
              </Text>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                Project Pro-Blood was built on the central ideology of saving
                more lives by making blood-related processes more efficient in
                terms of time and resources.
              </Text>
              <Text style={[styles.headingtext2, { marginTop: h("2%") }]}>
                Who designed Pro-Blood?
              </Text>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                The project Pro-Blood was initiated and designed by group #13 of
                batch 2017-2020 of the Computer Engineering department of Sir
                Syed University of Engineering and Technology. The group
                comprised of students Fiza Noman, Mariyam Ashraf, Muhammad
                Nabeel Ali, and Muhammad Talha Saleem, supervised by Engr. Sir
                Asim Hasan and Dr. Marium Khalil Ur Rehman.
              </Text>
            </View>
          </View>

          <View style={[styles.Containerfortext2, { marginTop: h("5%") }]}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingtext}>Contact us</Text>
            </View>
            <View style={styles.MidSection}>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                Email: problood13@gmail.com
              </Text>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                Facebook: facebook.com/problood13
              </Text>
              <Text style={[styles.headingtext3, { marginTop: h("2%") }]}>
                Twitter: twitter.com/problood13
              </Text>
            </View>
          </View>
        </ScrollView>
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
  Containerfortext: {
    backgroundColor: "white",
    width: w("96%"),
    height: h("70%"),
    marginTop: h("2%"),
    borderRadius: h("2%"),
    elevation: 4,
    paddingLeft: h("2.5%"),
    paddingRight: h("2.5%"),
    overflow: "hidden",
  },
  Containerfortext2: {
    backgroundColor: "white",
    width: w("96%"),
    height: h("30%"),
    marginTop: h("2%"),
    borderRadius: h("2%"),
    elevation: 5,
    paddingLeft: h("2.5%"),
    paddingRight: h("2.5%"),
    marginBottom: h("2%"),
  },
  headingContainer: {
    // backgroundColor: 'green',
    width: "100%",
    height: h("10%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: h("2%"),
  },
  headingtext: {
    color: "black",
    fontSize: h("2.7%"),
    fontWeight: "bold",
  },
  headingtext2: {
    color: "black",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  headingtext3: {
    color: "black",
    fontSize: h("1.8%"),
  },
  MidSection: {
    // backgroundColor: 'red',
    width: "100%",
    height: "86%",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
