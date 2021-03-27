import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

// Components
import {NavHeadGuest} from '../../components';

import {Picker} from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class GRequest extends Component {
  state = {
    Hospitals: [
      {
        name: 'Agha Khan Hospital',
        number: '+9221111911911',
        address:
          'National Stadium Rd, Aga Khan University Hospital, Karachi, Sindh, Pakistan',
        key: '1',
      },
      {
        name: 'Fatmid Foundation',
        number: '+922132225284',
        address: 'Garden East Karachi, Sindh, Pakistan',
        key: '2',
      },
      {
        name: 'Hussaini Blood Bank ',
        number: '+923332569795 ',
        address:
          'Plot# ST02,Block T,Qalandaria Chowk,opposite Talib Chaman Park,Block J North Nazimabad Town,Karachi,Sindh,Pakistan',
        key: '3',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+922134834782',
        address:
          'Shan Hospital, Block 5 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '4',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998308',
        address:
          'Lady Dufferin Hospital, Chand Bibi Rd, Adhumal Oodharam Quarter, Karachi, Sindh, Pakistan',
        key: '5',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998302',
        address:
          'Plot# SB59, Block K North Nazimabad Town, Karachi, Sindh, Pakistan',
        key: '6',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998321',
        address:
          'South City Hospital, 12 Rojhan St, Block 5 Block 3 Clifton, Karachi, Sindh, Pakistan',
        key: '7',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+922136353125',
        address:
          'Afsar Memorial Hospital Gulshan-I-Maymar Rd, Sector W, Karachi, Sindh, Pakistan',
        key: '8',
      },
      {
        name: 'Hussaini Blood Bank',
        number: '+923333998320',
        address:
          '22-23 Shaheed-e-Millat Road,Bihar Muslim Society Modern Society BMCHS Sharfabad, Karachi, Sindh, Pakistan',
        key: '9',
      },
      {
        name: 'Saylani Welfare Blood Bank',
        number: '+922134990413',
        address:
          'Plot# 3/A-5, Block 4 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '10',
      },
      {
        name: 'Liaquat National Hospital',
        number: '9221111456456',
        address:
          'National stadium Rd, Liaquat National Hospital, Karachi, Sindh, Pakistan',
        key: '11',
      },
      {
        name: 'Indus Hospital',
        number: '+922135112710',
        address: 'Mehran Town Sector 24 Korangi, Karachi, Sindh, Pakistan',
        key: '12',
      },
      {
        name: 'Burhani Blood Bank',
        number: '+922136644490',
        address:
          'Saifee Rd, Block F North Nazimabad Town, Karachi, Sindh, Pakistan',
        key: '13',
      },
      {
        name: 'NIBD Blood Bank',
        number: '+922134821502',
        address: 'National Stadium Colony, Karachi, Sindh, Pakistan',
        key: '14',
      },
      {
        name: 'Emergency Blood Bank',
        number: '+923332185621',
        address: 'Faisal Cantonment, Karachi, Sindh, Pakistan',
        key: '15',
      },
      {
        name: 'DOW Blood Bank',
        number: '+922199232660',
        address: 'Gulzar-e-Hijri Gulshan-e-Iqbal, Karachi, Sindh, Pakistan',
        key: '16',
      },
      {
        name: 'Sahara Blood Bank',
        number: 'NA',
        address: 'M.A Jinnah Rd, Jamshed Quarters Karachi, Sindh, Pakistan',
        key: '17',
      },
      {
        name: 'PWA Blood Bank',
        number: '+922132735214',
        address: 'New Labour Colony Nanakwara, Karachi, Sindh, Pakistan',
        key: '18',
      },
      {
        name: 'Muhammadi Blood Bank',
        number: '+923162946498',
        address:
          '280 Britto Rd, Soldier Bazaar Catholic Colony, Karachi, Sindh, Pakistan',
        key: '19',
      },
    ],
    checked: false,
    checked1: false,
    searched: '',
    BloodType: 'A+',
    modalVisible: false,
    selectedData: '',
    Hospitals2: [],
  };
  componentDidMount = () => {
    this.Database();
  };
  Database = async () => {
    let hospitalData = [];
    firestore()
      .collection('stocks')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          hospitalData.push(documentSnapshot.data());
          this.setState({Hospitals2: hospitalData});
        });
      });
  };
  renderitem = (item) => (
    <>
      {this.state.searched === 'Emergency' ? null : (
        <View style={styles.BloodData}>
          <View style={styles.left}>
            <Text style={styles.hospitalText}>{item.hospital}</Text>
          </View>

          <View style={styles.right}>
            {this.state.searched === 'Advance' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({selectedData: item}, () => {
                    this.setState({modalVisible: true});
                  });
                }}>
                <Icon name={'heart'} type="ionicon" color={'#ffff'} size={35} />
              </TouchableOpacity>
            ) : null}

            {this.state.searched === 'Emergency' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({selectedData: item}, () => {
                    this.setState({modalVisible: true});
                  });
                }}>
                <Icon
                  name={'arrow-forward-circle'}
                  type="ionicon"
                  color={'#ffff'}
                  size={35}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      )}
    </>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeadGuest
          txt="Request"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.SearchBox}>
          <View style={styles.TopBox}>
            <Text style={styles.SearchText}>Search</Text>
          </View>
          <View style={styles.MiddleBox}>
            <View style={styles.SelectBloodType}>
              <Text>Select Blood Type</Text>
              <Picker
                selectedValue={this.state.BloodType}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({BloodType: itemValue})
                }>
                <Picker.Item label="RBC AB+" value="RBC AB+" />
                <Picker.Item label="RBC AB-" value="RBCABn" />
                <Picker.Item label="RBC A+" value="RBC A+" />
                <Picker.Item label="RBC B+" value="RBC B+" />
                <Picker.Item label="RBC A-" value="RBC A-" />
                <Picker.Item label="RBC B-" value="RBC B-" />
                <Picker.Item label="RBC O-" value="RBC O-" />
                <Picker.Item label="RBC O+" value="RBCOp" />
                <Picker.Item label="WBC AB+" value="WBC AB+" />
                <Picker.Item label="WBC AB-" value="WBC AB-" />
                <Picker.Item label="WBC A+" value="WBC A+" />
                <Picker.Item label="WBC B+" value="WBC B+" />
                <Picker.Item label="WBC A-" value="WBC A-" />
                <Picker.Item label="WBC B-" value="WBC B-" />
                <Picker.Item label="WBC O-" value="WBC O-" />
                <Picker.Item label="WBC O+" value="WBC O+" />
                <Picker.Item label="Platelets" value="Platelets" />
                <Picker.Item label="Plasma" value="Plasma" />
                <Picker.Item label="Cryo" value="Cryo" />
                <Picker.Item label="WBC Other" value="WBC Other" />
                <Picker.Item label="RBC Other" value="RBC Other" />
              </Picker>
            </View>
            <View style={styles.CheckBoxed}>
              {/* checkbox */}
              <TouchableOpacity
                style={styles.CheckBoxContainer}
                onPress={() => {
                  this.setState({checked: !this.state.checked}, () => {
                    this.setState({searched: 'Advance', checked1: false});
                  });
                }}>
                {this.state.checked ? (
                  <View style={styles.CheckBoxChecked} />
                ) : (
                  <View style={styles.CheckBox} />
                )}
                <Text>Emergency</Text>
              </TouchableOpacity>

              {/* Checkbox 2 */}
              <TouchableOpacity
                style={[styles.CheckBoxContainer]}
                onPress={() => {
                  this.setState({checked1: !this.state.checked1}, () => {
                    this.setState({
                      searched: 'Emergency',
                      checked: false,
                      modalVisible: true,
                    });
                  });
                }}>
                {this.state.checked1 ? (
                  <View style={styles.CheckBoxChecked} />
                ) : (
                  <View style={styles.CheckBox} />
                )}
                <Text style={styles.disableColor}>Advance</Text>
              </TouchableOpacity>
              {/* end CheckBox */}
            </View>
          </View>
          <View style={styles.BottomBox}></View>
        </View>
        {/* DATA BANK */}

        <FlatList
          data={this.state.Hospitals2}
          renderItem={({item}) =>
            this.state.searched === 'Advance' ? this.renderitem(item) : null
          }
          keyExtractor={(item) => item.key}
        />

        {/* end of blood bank */}
        {/* start of modal */}

        {this.state.searched === 'Emergency' ? (
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
            <View style={styles.ModalContainer}>
              <View style={styles.ModalAlert}>
                <View style={styles.ModalAlerttop}>
                  <TouchableOpacity
                    delayPressIn={0}
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}>
                    <Icon
                      name={'close-circle-outline'}
                      type="ionicon"
                      color={Primary}
                      size={35}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[styles.ModalAlertmiddle, {height: '80%'}]}>
                  <Text style={styles.KindlySignup}>
                    KINDLY SIGNUP TO USE THIS FEATURE!
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.replace('Welcome');
                    }}>
                    <Text style={styles.Signup}>SIGNUP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        ) : (
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
            <View style={styles.ModalContainer}>
              <View style={styles.ModalAlert}>
                <View style={styles.ModalAlerttop}>
                  <TouchableOpacity
                    delayPressIn={0}
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}>
                    <Icon
                      name={'close-circle-outline'}
                      type="ionicon"
                      color={Primary}
                      size={35}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[styles.ModalAlertmiddle]}>
                  <Text style={styles.DataTime1}>
                    Name: {this.state.selectedData.hospital}
                  </Text>
                  <Text style={styles.DataTime2}>
                    Address: {this.state.selectedData.Address}
                  </Text>
                  <Text style={styles.DataTime3}>
                    Number: {this.state.selectedData.phone}
                  </Text>
                </View>
                <View style={styles.ModalAlertmiddle2}>
                  <Text style={styles.DataTime4}>
                    RBC AB+: {this.state.selectedData.RBCABp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC AB-: {this.state.selectedData.RBCABn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC A+: {this.state.selectedData.RBCAp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC B+: {this.state.selectedData.RBCBp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC A-: {this.state.selectedData.RBCAn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC B-: {this.state.selectedData.RBCBN}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC O-: {this.state.selectedData.RBCOn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC O+: {this.state.selectedData.RBCOp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC AB+: {this.state.selectedData.WBCABp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC AB-: {this.state.selectedData.WBCABn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC A+: {this.state.selectedData.WBCAp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC A-: {this.state.selectedData.WBCAn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC B+: {this.state.selectedData.WBCBp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC B-: {this.state.selectedData.WBCBn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC O-: {this.state.selectedData.WBCOn}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC O+: {this.state.selectedData.WBCOp}
                  </Text>
                  <Text style={styles.DataTime4}>
                    Platelet: {this.state.selectedData.Platelet}
                  </Text>
                  <Text style={styles.DataTime4}>
                    Plasma: {this.state.selectedData.Plasma}
                  </Text>
                  <Text style={styles.DataTime4}>
                    Cryo: {this.state.selectedData.Cryo}
                  </Text>
                  <Text style={styles.DataTime4}>
                    WBC Other: {this.state.selectedData.WBCOther}
                  </Text>
                  <Text style={styles.DataTime4}>
                    RBC Other: {this.state.selectedData.RBCOther}
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        )}

        {/* End of modal */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Primary,
    alignItems: 'center',
  },
  SearchBox: {
    backgroundColor: Primary,
    width: w('90%'),
    height: h('18%'),
    alignItems: 'center',
    marginTop: h('1%'),
    borderRadius: h('1%'),
  },
  SearchText: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  TopBox: {
    // backgroundColor: 'red',
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  MiddleBox: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  BottomBox: {
    // backgroundColor: 'green',
    width: '100%',
    height: '12%',
    alignItems: 'center',

    justifyContent: 'center',
  },
  CheckBoxed: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: h('8%'),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  Quantity: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: h('5%'),
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  SelectBloodType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: h('4%'),
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  QuantityTextField: {
    backgroundColor: 'white',
    width: '30%',
    color: 'black',
    height: '100%',

    paddingTop: -h('1%'),
    paddingBottom: -h('1%'),
  },
  SearchButton: {
    backgroundColor: 'white',
    width: w('30%'),
    height: h('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('1%'),
  },
  box: {
    backgroundColor: 'red',
    width: '40%',
    height: h('4%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CheckedboxStyle: {
    // backgroundColor: 'red',
    width: '30%',
    height: h('4%'),
    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CheckBoxContainer: {
    // backgroundColor: 'red',
    width: w('30%'),
    height: h('4%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  CheckBox: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
  },
  CheckBoxChecked: {
    backgroundColor: '#158467',
    width: 20,
    height: 20,
  },
  BloodData: {
    width: w('90%'),
    height: h('20%'),
    backgroundColor: Primary,

    // alignItems: 'center',
    marginTop: h('1%'),
    borderRadius: h('1.1%'),
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'gold',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
  },

  right: {
    // backgroundColor: 'orange',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospitalText: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  hospitalnumber: {
    color: 'white',
    fontSize: h('2%'),
  },
  ModalContainer: {
    backgroundColor: '#0004',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalAlert: {
    backgroundColor: 'white',
    width: w('96%'),
    height: h('85%'),
    borderRadius: h('2%'),
  },
  ModalAlerttop: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '10%',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ModalAlertmiddle: {
    // backgroundColor: 'green',
    width: '100%',
    height: '15%',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    // marginTop: -h('5%'),
  },
  ModalAlertmiddle2: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '75%',
    paddingLeft: h('3%'),
    paddingRight: h('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    // marginTop: -h('5%'),
  },
  hospitaladdress: {
    color: '#fff9',
    fontSize: h('1.8%'),
  },
  RequestButton: {
    backgroundColor: Primary,
    width: '30%',
    height: h('6%'),
    borderRadius: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('6%'),
  },
  RequestText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  disableColor: {
    color: 'silver',
  },
  KindlySignup: {
    color: 'black',
    fontSize: h('2%'),
  },
  Signup: {
    color: Primary,
    fontSize: h('2.5%'),
  },
  DataTime1: {
    color: Primary,
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  DataTime2: {
    color: '#0005',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  DataTime3: {
    color: Primary,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  DataTime4: {
    color: Primary,
    fontSize: h('2.2%'),
    fontWeight: 'bold',
  },
});
