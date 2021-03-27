import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Primary} from '../../color';
import {w, h} from 'react-native-responsiveness';

// Components
import {NavHeadGuest} from '../../components';

export class GHome extends Component {
  state = {
    data: [
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
        name: 'Hussaini Blood Bank Head Office',
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
    modalVisible: false,
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeadGuest
          txt="Home"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.TextContainer}>
          <Text style={styles.Disclaimer}>DISCLAIMER</Text>
          <Text style={styles.ModalText}>
            The purpose of ProBlood is connectivity. Therefore, ProBlood will
            not be responsible for the quality of blood products.ProBlood is not
            to be held responsible if user has entered incorrect info during
            sign up.ProBlood recommends that all advance blood bookings be made
            24 hours prior the requirement. For urgent cases, use search feature
            to find blood product at nearest blood bank.
          </Text>
        </View>
        {/* FlatList */}

        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.members}>
              <Text
                style={[
                  styles.membersText,
                  {fontSize: 20, fontWeight: 'bold'},
                ]}>
                {item.name}
              </Text>
              <Text style={[styles.membersText, {alignSelf: 'center'}]}>
                {item.address}
              </Text>
              <Text style={styles.membersText}>{item.number}</Text>
            </View>
          )}
        />
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
  ModalContainer: {
    backgroundColor: '#0004',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalAlert: {
    backgroundColor: 'gold',
    width: w('96%'),
    height: h('40%'),
    borderRadius: h('2%'),
  },
  ModalAlerttop: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '15%',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ModalAlertmiddle: {
    backgroundColor: 'gold',
    width: '100%',
    height: '80%',
    paddingLeft: h('1.2%'),
    paddingRight: h('1.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    // marginTop: -h('5%'),
  },
  ModalAlertbottom: {
    backgroundColor: 'gold',
    width: w('96%'),
    height: '10%',
    justifyContent: 'center',
  },
  ModalText: {
    color: Primary,
    fontSize: h('2.3%'),
  },
  members: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('2%'),
    marginTop: h('2%'),
    backgroundColor: Primary,
    width: w('90%'),
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginBottom: h('0.6%'),
  },
  membersText: {
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    //width:'75%'
    //color:'#fff'
  },
  Disclaimer: {
    // backgroundColor: 'red',
    fontSize: h('3%'),
    marginTop: h('2%'),
    marginBottom: h('2%'),
    color: 'black',
  },
  TextContainer: {
    paddingLeft: h('3%'),
    paddingRight: h('3%'),
    alignItems: 'center',
  },
});
