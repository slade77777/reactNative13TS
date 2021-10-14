import {Button, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import CustomTextInput from './CustomTextInput';

const ComponentTotal = ({time}: {time: [number, number, number, number]}) => {
  console.log('rerender component tong so');
  return (
    <View>
      <Text>Ngày: {time[0]}</Text>
      <Text>Giờ: {time[1]}</Text>
      <Text>Phút: {time[2]}</Text>
      <Text>Giây: {time[3]}</Text>
    </View>
  );
};

const TotalSeconds = React.memo(ComponentTotal);

const Clock: FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  function startTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    let totalSecond =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    setTime(totalSecond);
    const id = setInterval(() => {
      totalSecond = totalSecond - 1;
      setTime(totalSecond);
    }, 1000);
    setIntervalId(id);
  }

  function convertFromSeconds(totalSecond: number) {
    let totalSeconds = totalSecond;
    const daysConvert = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds = totalSeconds - daysConvert * 24 * 60 * 60;
    const hoursConvert = Math.floor(totalSeconds / (60 * 60));
    totalSeconds = totalSeconds - hoursConvert * 60 * 60;
    const minutesConvert = Math.floor(totalSeconds / 60);
    const secondsConvert = totalSeconds - minutesConvert * 60;
    return {
      days: daysConvert,
      hours: hoursConvert,
      minutes: minutesConvert,
      seconds: secondsConvert,
    };
  }

  console.log('component parent rerender');

  const saveDays = useCallback(
    (val: string) => {
      setDays(parseInt(val));
    },
    [setDays],
  );

  const saveHours = useCallback(
    (val: string) => {
      setHours(parseInt(val));
    },
    [setHours],
  );

  const saveMinutes = useCallback(
    (val: string) => {
      setMinutes(parseInt(val));
    },
    [setMinutes],
  );

  const saveSeconds = useCallback(
    (val: string) => {
      setSeconds(parseInt(val));
    },
    [setSeconds],
  );

  const allTime = useMemo<[number, number, number, number]>(() => {
    return [3, 6, 21, 30];
  }, []);

  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Nhập thời gian:
      </Text>
      <CustomTextInput
        title={'Ngày'}
        value={days.toString()}
        changeText={saveDays}
      />
      <CustomTextInput
        title={'Giờ'}
        value={hours.toString()}
        changeText={saveHours}
      />
      <CustomTextInput
        title={'Phút'}
        value={minutes.toString()}
        changeText={saveMinutes}
      />
      <CustomTextInput
        title={'Giây'}
        value={seconds.toString()}
        changeText={saveSeconds}
      />
      <Button title={'Bắt đầu đếm ngược'} onPress={startTimer} />
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.number}>{convertFromSeconds(time).days}:</Text>
        <Text style={styles.number}>{convertFromSeconds(time).hours}:</Text>
        <Text style={styles.number}>{convertFromSeconds(time).minutes}:</Text>
        <Text style={styles.number}>{convertFromSeconds(time).seconds}</Text>
      </View>
      <TotalSeconds time={allTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Clock;
