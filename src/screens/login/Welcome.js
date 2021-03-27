import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import { Primary } from "../../color";
import { w, h } from "react-native-responsiveness";
import { Icon } from "react-native-elements";

// Components
import { Textinput, Button } from "../../components";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Welcome extends Component {
  state = {
    logoAnimation: new Animated.Value(0),
    lowerContainerAnimation: new Animated.Value(0),
    opacity: new Animated.Value(1),
    signupOpacity: new Animated.Value(0),
    Signup: false,

    Email: "",
    Password: "",
    SignupEmail: "",
    SignupPassword: "",
    SignupConfirmPassword: "",
    modalVisible: false,
    ForgotPass: "",
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.retrieveUser();
    }, 100);
  };

  retrieveUser = () => {
    AsyncStorage.getItem("userData", (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        // We have data!!

        this.props.navigation.replace("DrawerNavigator");
      } else {
        this.startAnimation();
      }
    });
  };

  Login = async () => {
    if (this.state.Email !== "") {
      if (this.state.Password !== "") {
        await auth()
          .signInWithEmailAndPassword(this.state.Email, this.state.Password)
          .then(async (response) => {
            auth().onAuthStateChanged(async (user) => {
              if (user.emailVerified) {
                await firestore()
                  .collection("clientsdata")
                  .doc(response.user.uid)
                  .get()
                  .then((documentSnapshot) => {
                    const values = {
                      id: response.user.uid,
                      email: response.user.email,
                    };

                    AsyncStorage.setItem(
                      "userData",
                      JSON.stringify(values),
                      () => {
                        if (documentSnapshot.exists) {
                          this.props.navigation.replace("DrawerNavigator");
                        } else {
                          this.props.navigation.replace("Creditiential", {
                            id: response.user.uid,
                          });
                        }
                      }
                    );
                  });
              } else {
                alert("Email is not Verified");
              }
            });
          })
          .catch((error) => {
            if (error.code === "auth/wrong-password") {
              alert("This password is Invalid");
            }
            if (error.code === "auth/user-not-found") {
              alert("This email address not found");
            }
            if (error.code === "auth/invalid-email") {
              alert("This email address is invalid!");
            }
          });
      } else {
        alert("Password field is empty");
      }
    } else {
      alert("Email field is empty");
    }
  };

  UserSignUp = () => {
    if (this.state.SignupEmail !== "") {
      if (this.state.SignupPassword !== "") {
        if (this.state.SignupPassword === this.state.SignupConfirmPassword) {
          console.log(this.state.auth);
          auth()
            .createUserWithEmailAndPassword(
              this.state.SignupEmail,
              this.state.SignupPassword
            )
            .then(() => {
              auth().onAuthStateChanged(function (user) {
                user.sendEmailVerification();
                alert("Verify Email and Login");
              });
            })
            .catch((error) => {
              if (error.code === "auth/email-already-in-use") {
                alert("That email address is already in use!");
              }
              if (error.code === "auth/weak-password") {
                alert("PASSWORD MUST CONTAIN 8 character");
              }
              if (error.code === "auth/invalid-email") {
                alert("That email address is invalid!");
              }
            });
        } else {
          alert("Password and Confirm Password Dont match");
        }
      } else {
        alert("Passowrd is Requried");
      }
    } else {
      alert("Email is Required !");
    }
  };

  forgotPassword = () => {
    if (this.state.ForgotPass !== "") {
      auth()
        .sendPasswordResetEmail(this.state.ForgotPass)
        .then(function (user) {
          alert("Please check your email...");
        })
        .catch(function (e) {
          console.log(e);
        });
    } else {
      alert("Email field is Empty");
    }
  };

  startAnimation = () => {
    Animated.timing(this.state.logoAnimation, {
      toValue: -230,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: -470,
      duration: 900,
      useNativeDriver: false,
    }).start();
  };

  Signup = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 470,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      this.setState({ Signup: true }),
        Animated.timing(this.state.lowerContainerAnimation, {
          toValue: -450,
          duration: 500,
          useNativeDriver: false,
        }).start();
    }, 600);
  };

  Signin = () => {
    Animated.timing(this.state.lowerContainerAnimation, {
      toValue: 440,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      this.setState({ Signup: false }),
        Animated.timing(this.state.lowerContainerAnimation, {
          toValue: -440,
          duration: 500,
          useNativeDriver: false,
        }).start();
    }, 600);
  };

  render() {
    const OpactiyStyle = {
      opacity: this.state.opacity,
    };
    const SignUpOpactiyStyle = {
      opacity: this.state.signupOpacity,
    };
    const AnimatedStyle = {
      transform: [
        {
          translateY: this.state.logoAnimation,
        },
      ],
    };
    const AnimatedStyle2 = {
      transform: [
        {
          translateY: this.state.lowerContainerAnimation,
        },
      ],
    };

    return (
      <KeyboardAwareScrollView>
        <StatusBar backgroundColor={Primary} />
        <View style={styles.Container}>
          <Animated.View style={[styles.TopContainer, AnimatedStyle]}>
            <Image
              style={styles.LogoContainer}
              source={require("../../assets/LogoA.png")}
            />
          </Animated.View>

          <Animated.View style={[styles.LowerCotnainer, AnimatedStyle2]}>
            {this.state.Signup === false ? (
              <>
                <View style={styles.LowerContainerTextInput}>
                  <Textinput
                    name={"mail"}
                    placeholder={"Email"}
                    onChangeText={(Email) => {
                      this.setState({ Email });
                    }}
                  />
                  <Textinput
                    name={"lock-closed"}
                    placeholder={"Password"}
                    onChangeText={(Password) => {
                      this.setState({ Password });
                    }}
                    secureTextEntry
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modalVisible: true });
                    }}
                    style={styles.ForgotPass}
                  >
                    <Text style={styles.ForgotPassText}>FORGOT PASSWORD !</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  Text={"Login"}
                  TopMargin={{ marginTop: h("5%") }}
                  onPress={() => {
                    this.Login();
                  }}
                />
                <Text style={styles.or}>OR</Text>
                <Button
                  Text={"Enter as Guest"}
                  onPress={() => {
                    this.props.navigation.replace("Bottomtab2");
                  }}
                />

                <View style={styles.SignUp}>
                  <View style={styles.leftSignup}>
                    <Text style={styles.SignupText}>DONT HAVE A ACCOUNT!</Text>
                  </View>
                  <TouchableOpacity
                    delayPressIn={0}
                    onPress={() => this.Signup()}
                    style={styles.rightSignup}
                  >
                    <Text style={styles.SignupText2}>SignUp</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                {/* signup */}
                <View style={styles.topSpace} />
                <Textinput
                  name={"mail"}
                  placeholder={"Email"}
                  onChangeText={(SignupEmail) => {
                    this.setState({ SignupEmail });
                  }}
                />

                <Textinput
                  name={"lock-closed"}
                  placeholder={"Password"}
                  onChangeText={(SignupPassword) => {
                    this.setState({ SignupPassword });
                  }}
                  secureTextEntry
                />
                <Textinput
                  name={"lock-closed"}
                  placeholder={"Confirm Password"}
                  onChangeText={(SignupConfirmPassword) => {
                    this.setState({ SignupConfirmPassword });
                  }}
                  secureTextEntry
                />
                <Button
                  Text={"Signup"}
                  TopMargin={{ marginTop: h("5%") }}
                  onPress={() => {
                    this.UserSignUp();
                  }}
                />

                <View style={styles.SignUp}>
                  <View style={styles.leftSignup}>
                    <Text style={styles.SignupText}>
                      Already HAVE A ACCOUNT!
                    </Text>
                  </View>
                  <TouchableOpacity
                    delayPressIn={0}
                    onPress={() => this.Signin()}
                    style={styles.rightSignup}
                  >
                    <Text style={styles.SignupText2}>SignIn</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Animated.View>
        </View>
        {/* MODAL */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.ModalContainer}>
            <View style={styles.ModalAlert}>
              <View style={styles.ModalAlerttop}>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Icon
                    name={"close-circle-outline"}
                    type="ionicon"
                    color={Primary}
                    size={35}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.ModalAlertmiddle}>
                <Textinput
                  name={"mail"}
                  placeholder={"Email"}
                  onChangeText={(ForgotPass) => {
                    this.setState({ ForgotPass });
                  }}
                />
                <TouchableOpacity
                  style={styles.RequestButton}
                  onPress={() => {
                    this.forgotPassword();
                  }}
                >
                  <Text style={styles.RequestText}>Rest</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* MODAL END */}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: w("100%"),
    height: h("100%"),
    backgroundColor: Primary,
  },
  TopContainer: {
    // backgroundColor: 'red',
    width: "100%",
    height: h("30%"),
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: h("33%"),
  },
  LogoContainer: {
    width: "80%",
    height: h("30%"),
    resizeMode: "contain",
    // backgroundColor: 'gold',
  },
  LowerCotnainer: {
    backgroundColor: "white",
    width: "100%",
    height: h("70%"),

    alignItems: "center",
    borderTopRightRadius: h("8%"),
    borderTopLeftRadius: h("8%"),
    marginTop: h("39%"),
  },
  LowerContainerTextInput: {
    // backgroundColor: 'red',
    width: "100%",
    height: h("20%"),
    alignItems: "center",
    marginTop: h("3%"),
  },
  ForgotPass: {
    width: "100%",
    height: h("5%"),
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: h("29%"),
  },
  ForgotPassText: {
    color: "#05375a",
  },
  or: {
    margin: h("1%"),
    fontSize: h("2%"),
    color: "#05375a",
  },
  SignUp: {
    // backgroundColor: 'red',
    width: "100%",
    height: h("5%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: h("2%"),
  },
  leftSignup: {
    // backgroundColor: "green",
    width: "40%",
    height: "100%",
    // alignItems: "center",
    justifyContent: "center",
  },
  rightSignup: {
    // backgroundColor: "gold",
    width: "16%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  SignupText: {
    color: "black",
    fontSize: h("2%"),
  },
  SignupText2: {
    color: "#05375a",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  SignupLogo: {
    marginTop: -h("8%"),
    marginBottom: h("1%"),
    width: "100%",
    height: "10%",
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  SingupLogoText: {
    color: "white",
    fontSize: h("4%"),
    fontWeight: "bold",
  },
  SelectBloodType: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: h("7%"),
    // backgroundColor: 'orange',
    alignItems: "center",
    marginTop: h("1%"),
    // marginBottom: h('1%'),
  },
  topSpace: {
    width: "100%",
    height: h("10%"),
  },
  ModalContainer: {
    backgroundColor: "#0004",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalAlert: {
    backgroundColor: "white",
    width: w("96%"),
    height: h("40%"),
    borderRadius: h("2%"),
  },
  ModalAlerttop: {
    // backgroundColor: 'gold',
    width: "100%",
    height: "15%",
    // justifyContent: 'flex-end',
    alignItems: "flex-end",
  },
  ModalAlertmiddle: {
    // backgroundColor: 'green',
    width: "100%",
    height: "80%",
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("2%"),
    // marginTop: -h('5%'),
  },
  RequestButton: {
    backgroundColor: Primary,
    width: "30%",
    height: h("6%"),
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: h("6%"),
  },
  RequestText: {
    color: "white",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
