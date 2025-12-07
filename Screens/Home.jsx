import { useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Home = () => {
  const [card, setCard] = useState(null);
  const [amount, setAmount] = useState(0);
  const db = useSQLiteContext();
  const getAccount = async () => {
    try {
      console.log('getAccounts');
      const accounts = await db.getAllAsync('SELECT * FROM accounts');
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };
  const addAccount = async () => {
    try {
      // console.log(card.trim(), amount);
      if (card == null) {
        throw new Error('Enter Valid Name');
      }
      const store = await db.runAsync(
        'INSERT INTO accounts (name, total_amount, used_amount, remaining_amount) VALUES (?,?,?,?)',
        [card.trim(), amount, 0, amount]
      );
      // console.log(store);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <TextInput style={style.input} onChangeText={setCard} value={card} />
      <TextInput
        keyboardType="Numeric"
        style={style.input}
        onChangeText={setAmount}
        value={amount}
      />
      <Button title="submit" onPress={addAccount} />
      <Button title="Get" onPress={getAccount} />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2
  }
});
