import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { supabase } from '../services/supabase';

const Dashboard = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    fetchRepairs();
  }, []);

  const fetchRepairs = async () => {
    const { data, error } = await supabase
      .from('Repairs')
      .select('*');
    if (error) console.log('Error fetching repairs:', error.message);
    else setRepairs(data);
  };

  return (
    <View>
      {repairs.map(repair => (
        <View key={repair.id}>
          <Text>{repair.truck_model}</Text>
          <Text>{repair.repair_description}</Text>
          <Text>{repair.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default Dashboard;

