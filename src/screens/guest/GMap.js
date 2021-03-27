import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// Components

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export class GMap extends Component {
  state = {};

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 24.892002,
          longitude: 67.074717,
          latitudeDelta: 0.215,
          longitudeDelta: 0.2221,
        }}>
        <Marker
          coordinate={{latitude: 24.892002, longitude: 67.074717}}
          image={require('../../assets/bb1.png')}
          title="Agha Khan Hospital"
          description="+9221111911911"
        />
        <Marker
          coordinate={{latitude: 24.881487, longitude: 67.033652}}
          image={require('../../assets/bb1.png')}
          title="Fatmid Foundation"
          description="+922132225284
          "
        />
        <Marker
          coordinate={{latitude: 24.919131, longitude: 67.095506}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+922134834782"
        />
        <Marker
          coordinate={{latitude: 24.858634, longitude: 67.007874}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+923333998308"
        />
        <Marker
          coordinate={{latitude: 24.949663, longitude: 67.052856}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+923333998302"
        />
        <Marker
          coordinate={{latitude: 24.813962, longitude: 67.022291}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+923333998321"
        />
        <Marker
          coordinate={{latitude: 25.016492, longitude: 67.129965}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+922136353125"
        />
        <Marker
          coordinate={{latitude: 24.883165, longitude: 67.060208}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank"
          description="+923333998320"
        />
        <Marker
          coordinate={{latitude: 24.958526, longitude: 67.05038}}
          image={require('../../assets/bb1.png')}
          title="Hussaini Blood Bank Head Office and Blood/Disease Centre"
          description="+923332569795 , 021 367890109"
        />
        <Marker
          coordinate={{latitude: 24.930847, longitude: 67.099361}}
          image={require('../../assets/bb1.png')}
          title="Saylani Welfare Blood Bank"
          description="+922134990413"
        />
        <Marker
          coordinate={{latitude: 24.890653, longitude: 67.06825}}
          image={require('../../assets/bb1.png')}
          title="Liaquat National Hospital"
          description="+92 21 111456456"
        />
        <Marker
          coordinate={{latitude: 24.83873, longitude: 67.121033}}
          image={require('../../assets/bb1.png')}
          title="Indus Hospital"
          description="+92 21 111456456"
        />
        <Marker
          coordinate={{latitude: 24.931188, longitude: 67.038374}}
          image={require('../../assets/bb1.png')}
          title="Burhani Blood Bank"
          description="+922136644490"
        />
        <Marker
          coordinate={{latitude: 24.897598, longitude: 67.078373}}
          image={require('../../assets/bb1.png')}
          title="NIBD Blood Bank"
          description="+922134821502"
        />
        <Marker
          coordinate={{latitude: 24.885598, longitude: 67.167829}}
          image={require('../../assets/bb1.png')}
          title="Emergency Blood Bank"
          description="+923332185621"
        />
        <Marker
          coordinate={{latitude: 24.943284, longitude: 67.13805}}
          image={require('../../assets/bb1.png')}
          title="DOW Blood Bank"
          description="+922199232660"
        />
        <Marker
          coordinate={{latitude: 24.8801, longitude: 67.039844}}
          image={require('../../assets/bb1.png')}
          title="Sahara Blood Bank"
          description="No number Provided"
        />
        <Marker
          coordinate={{latitude: 24.859409, longitude: 67.010309}}
          image={require('../../assets/bb1.png')}
          title="PWA Blood Bank"
          description="+922132735214"
        />
        <Marker
          coordinate={{latitude: 24.873747, longitude: 67.035576}}
          image={require('../../assets/bb1.png')}
          title="Muhammadi Blood Bank"
          description="+923162946498"
        />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
