import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text, Image, View,
  StyleSheet
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { Card } from 'react-native-elements'

class Item extends Component {
  render () {
    const { navigation } = this.props
    // if (this.props.image.length > 0) {
    //   console.log(this.props.image)
    // }

    return (
      <Card>
        <TouchableOpacity
          onPress={() => navigation.navigate('Hike', {
            hikeName: this.props.name,
            hikeRating: this.props.rating,
            hikeDescription: this.props.description,
            id: this.props.id,
            reviewIds: this.props.reviewIds,
            photoPaths: this.props.photoPaths,
            type: this.props.type
          })}
          style={[
            styles.item,
            { backgroundColor: this.props.selected ? '#EEEEEE' : '#FFFFFF' }
          ]}
        >
          <View style={styles.row}>
            <Image
              source = {{ uri: this.props.photoPaths[0] }}
              style={styles.image}>
            </Image>

            <View style={styles.column}>
              <Text style={styles.nameText}>{this.props.name}</Text>
              <Text>Rating: <Text style={styles.rating}>{this.props.rating}</Text></Text>
              <Text style={styles.description}>Description: {this.props.description.substring(0, 190) + '...'}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    )
  }
}

export default function (props) {
  const navigation = useNavigation()
  return <Item {...props} navigation={navigation}/>
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#BBBBBB',
    borderRadius: 5,
    marginVertical: 8
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  rating: {
    color: '#FF0000',
    marginVertical: 3
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    marginRight: 10,
    width: 125,
    height: 125
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  description: {
    marginVertical: 3
  }
})
