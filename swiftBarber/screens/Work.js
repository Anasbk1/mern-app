import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import axios from 'axios';
import ADDRESS_IP from './API';

export default function Work() {
  const [date, setDate] = useState();
  const [appointments, setAppointments] = useState([]);
  const [approved, setApproved] = useState([]);
  const [nonApproved, setNonApproved] = useState();

  console.log(date);

  const checkAppointments = (e) => {
    axios.get(`http://${ADDRESS_IP}:3001/appointments/${userEmail}/${e}`)
      .then((response) => {
        setAppointments(response.data);
        const approvedAppointments = response.data.filter(appointment => appointment.approved === true);
        const nonApprovedAppointments = response.data.filter(appointment => appointment.approved === false);

        setApproved(approvedAppointments);
        setNonApproved(nonApprovedAppointments);
      });
  }

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(e) => checkAppointments(e)}
        selectedDayColor="blue"
        todayBackgroundColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40
  }
});
