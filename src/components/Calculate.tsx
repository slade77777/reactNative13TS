import React, {FC, useState, useEffect} from 'react';
import {TextInput, View, Text} from 'react-native';
import CustomTextInput from './CustomTextInput';

const Calculate: FC = () => {
  const [edge1, setEdge1] = useState<number>(0);
  const [edge2, setEdge2] = useState<number>(0);
  const [edge3, setEdge3] = useState<number>(0);
  const [edge4, setEdge4] = useState<number>(0);
  const [triangleArea, setTriangleArea] = useState<number>(0);

  useEffect(() => {
    //ofter use to get data
    const calculatedTriangle = edge1 + edge2 + edge3 + edge4;
    setTriangleArea(calculatedTriangle);
  }, [edge1, edge2, edge3, edge4]);

  function saveEdgeAndCalculateArea(edgeChange: string, edge: number) {
    if (edge === 1) {
      setEdge1(parseInt(edgeChange));
    }
    if (edge === 2) {
      setEdge2(parseInt(edgeChange));
    }
    if (edge === 3) {
      setEdge3(parseInt(edgeChange));
    }
    if (edge === 4) {
      setEdge4(parseInt(edgeChange));
    }
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Nhập 3 cạnh để tính chu vi tứ giác
      </Text>
      {/*<CustomTextInput*/}
      {/*  title={'Cạnh 1'}*/}
      {/*  changeText={(val: string) => saveEdgeAndCalculateArea(val, 1)}*/}
      {/*/>*/}
      {/*<CustomTextInput*/}
      {/*  title={'Cạnh 2'}*/}
      {/*  changeText={(val: string) => saveEdgeAndCalculateArea(val, 2)}*/}
      {/*/>*/}
      {/*<CustomTextInput*/}
      {/*  title={'Cạnh 3'}*/}
      {/*  changeText={(val: string) => saveEdgeAndCalculateArea(val, 3)}*/}
      {/*/>*/}
      {/*<CustomTextInput*/}
      {/*  title={'Cạnh 4'}*/}
      {/*  changeText={(val: string) => saveEdgeAndCalculateArea(val, 4)}*/}
      {/*/>*/}
      <Text>độ dài cạnh 1: {edge1}</Text>
      <Text>độ dài cạnh 2: {edge2}</Text>
      <Text>độ dài cạnh 3: {edge3}</Text>
      <Text style={{marginTop: 20, textAlign: 'center'}}>
        Chu vi tứ giác: {triangleArea}
      </Text>
    </View>
  );
};

export default Calculate;
