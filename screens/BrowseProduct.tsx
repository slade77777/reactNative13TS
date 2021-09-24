import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const img = {
  cpu: 'https://thenewxgear.com/wp-content/uploads/2021/08/cpu.png',
  gpu: 'https://thenewxgear.com/wp-content/uploads/2021/08/gpu.png',
  ram: 'https://thenewxgear.com/wp-content/uploads/2021/08/ram.png',
  ssd: 'https://thenewxgear.com/wp-content/uploads/2021/08/ssd.png',
  weight: 'https://thenewxgear.com/wp-content/uploads/2021/08/weight.png',
  screen: 'https://thenewxgear.com/wp-content/uploads/2021/08/size.png',
  balo: 'https://thenewxgear.com/wp-content/uploads/2021/08/Balo-MSI-Air.jpg',
  mouse: 'https://thenewxgear.com/wp-content/uploads/2021/08/G300s.jpg',
  addRam: 'https://thenewxgear.com/wp-content/uploads/2021/08/Ram-8GB.jpg',
};
const dataList = [
  {
    id: '1',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: '15,6 ',
  },
  {
    id: '2',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '3',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '4',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '5',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '6',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '7',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: "15,6'' ",
  },
  {
    id: '8',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: '15,6',
  },
  {
    id: '9',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: '15,6',
  },
  {
    id: '10',
    img: 'https://thenewxgear.com/wp-content/uploads/2021/07/Katana-GF66-1-300x300.jpg',

    title:
      'Laptop Gaming MSI Katana GF66 11UC 641VN Geforce RTX 3050 4GB Intel Core i7 11800H 8GB 512GB 15.6” IPS 144Hz Backlight Keyboard Win 10',
    salePrice: '27,790,000đ',
    price: '30,000,000đ',
    cpu: 'i7 11800H',
    gpu: 'RTX 3050',
    ram: '8GB',
    ssd: '512GB',
    weight: '2.1kg',
    screen: '15,6',
  },
];

type ItemType = {
  img: string;
  title: string;
  salePrice: string;
  price: string;
  cpu: string;
  gpu: string;
  ram: string;
  ssd: string;
  weight: string;
  screen: string;
};
const Item = ({item}: {item: ItemType}) => (
  <View style={styles.container}>
    <View style={styles.child}>
      <Image source={{uri: item.img}} style={styles.img} />
      <Text numberOfLines={2} ellipsizeMode="clip" style={styles.title}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={styles.round}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            {item.salePrice}
          </Text>
        </View>
        <Text
          style={{
            textDecorationLine: 'line-through',
            fontSize: 15,
            color: 'gray',
          }}>
          {item.price}
        </Text>
      </View>

      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
        }}>
        <View style={styles.column1}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.cpu}}></Image>
            <Text>{item.cpu}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.ram}}></Image>
            <Text>{item.ram}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.weight}}></Image>
            <Text>{item.weight}</Text>
          </View>
        </View>
        <View style={styles.column2}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.gpu}}></Image>
            <Text>{item.gpu}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.ssd}}></Image>
            <Text>{item.ssd}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.imgIcon} source={{uri: img.screen}}></Image>
            <Text ellipsizeMode="tail">{item.screen}</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 30, justifyContent: 'flex-start'}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Quà tặng</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgIcon2} source={{uri: img.balo}} />
          <Image style={styles.imgIcon2} source={{uri: img.mouse}} />
          <Image style={styles.imgIcon2} source={{uri: img.addRam}} />
        </View>
      </View>
    </View>
  </View>
);

const BrowseProduct = () => {
  const renderItem = ({item}: {item: ItemType}) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.background}>
      <FlatList
        numColumns={2}
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',

    padding: 10,
  },
  child: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 10,
  },
  img: {
    width: 180,
    height: 120,
  },
  title: {
    fontWeight: '700',
    overflow: 'hidden',
  },
  round: {
    width: 90,
    marginRight: 5,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column1: {
    marginRight: 10,
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  column2: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },

  imgIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  imgIcon2: {
    height: 30,
    width: 30,
    marginRight: 5,
    borderRadius: 15,
    borderWidth: 1,
  },
});
export default BrowseProduct;
