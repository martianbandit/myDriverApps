import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { supabase } from '../services/supabase';

const RepairRequest = () => {
  const [truckModel, setTruckModel] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const { error } = await supabase
      .from('Repairs')
      .insert([{ truck_model: truckModel, repair_description: description }]);

    if (error) {
      setMessage('Erreur lors de la soumission de la réparation');
    } else {
      setMessage('Demande soumise avec succès');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Modèle du camion"
        value={truckModel}
        onChangeText={setTruckModel}
      />
      <TextInput
        placeholder="Description de la réparation"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Soumettre la demande" onPress={handleSubmit} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default RepairRequest;
