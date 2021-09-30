import React, {FC, useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import CustomTextInput from './CustomTextInput';

const Calculate: FC = () => {
  const [edge1, setEdge1] = useState<number>(0);
  const [edge2, setEdge2] = useState<number>(0);
  const [edge3, setEdge3] = useState<number>(0);
  const [triangleArea, setTriangleArea] = useState<number>(0);

  console.log('gia tri canh 1:', edge1);
  console.log('gia tri canh 2:', edge2);
  console.log('gia tri canh 3:', edge3);

  function saveEdgeAndCalculateArea(edgeChange: number, edge: number) {
    let triangleAreaCal = 0;
    if (edge === 1) {
      setEdge1(edgeChange);
      triangleAreaCal = edgeChange + edge2 + edge3;
    }
    if (edge === 2) {
      setEdge2(edgeChange);
      triangleAreaCal = edgeChange + edge1 + edge3;
    }
    if (edge === 3) {
      setEdge3(edgeChange);
      triangleAreaCal = edgeChange + edge1 + edge2;
    }
    setTriangleArea(triangleAreaCal);
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Nhập 3 cạnh để tính diện tích tam giác
      </Text>
      <CustomTextInput
        title={'Cạnh 1'}
        changeText={(val: number) => saveEdgeAndCalculateArea(val, 1)}
      />
      <CustomTextInput
        title={'Cạnh 2'}
        changeText={(val: number) => saveEdgeAndCalculateArea(val, 2)}
      />
      <CustomTextInput
        title={'Cạnh 3'}
        changeText={(val: number) => saveEdgeAndCalculateArea(val, 3)}
      />
      <Text>độ dài cạnh 1: {edge1}</Text>
      <Text>độ dài cạnh 2: {edge2}</Text>
      <Text>độ dài cạnh 3: {edge3}</Text>
      <Text style={{marginTop: 20, textAlign: 'center'}}>
        Chu vi tam giác: {triangleArea}
      </Text>
    </View>
  );
};

export default Calculate;
