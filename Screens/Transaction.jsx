import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Theme } from '../Constants/Colors';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const Transaction = () => {
  const colorScheme = useSelector(state => state.theme.theme);
  const theme = Theme[colorScheme] ?? Theme.light;

  const [dateTime, setDateTime] = useState(new Date());
  const [mode, setMode] = useState(null);
  // const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');

  // const openDatePicker = () => setMode('date');
  // const openTimePicker = () => setMode('time');
  const onChange = (event, selectedValue) => {
    if (event.type === 'dismissed') {
      setMode(null);
      return;
    }
    if (selectedValue) {
      setDateTime(selectedValue);
    }
    setMode(null);
  };

  const onSubmit = () => {
    if (!amount || !category) {
      alert('Amount and Category are required');
      return;
    }
    const transaction = {
      date: dateTime.toLocaleString(),
      amount: Number(amount),
      category,
      budget,
      account,
      note
    };
    console.log('Transaction:', transaction);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 16 }}>
      <Text style={{ color: theme.textPrimary }}>Date</Text>
      <TouchableOpacity onPress={() => setMode('date')}>
        <Text style={{ color: theme.textPrimary }}>
          {dateTime.toDateString()}
        </Text>
      </TouchableOpacity>

      <Text style={{ color: theme.textPrimary, marginTop: 12 }}>Time</Text>
      <TouchableOpacity onPress={() => setMode('time')}>
        <Text style={{ color: theme.textPrimary }}>
          {dateTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </Text>
      </TouchableOpacity>

      {mode && (
        <DateTimePicker
          value={dateTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={{ color: theme.textPrimary, marginTop: 16 }}>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
        placeholder="Enter amount"
        placeholderTextColor={theme.textSecondary}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          color: theme.textPrimary
        }}
      />

      <Text style={{ color: theme.textPrimary, marginTop: 16 }}>Category</Text>
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Food, Travel, etc"
        placeholderTextColor={theme.textSecondary}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          color: theme.textPrimary
        }}
      />

      <Text style={{ color: theme.textPrimary, marginTop: 16 }}>Budget</Text>
      <TextInput
        value={budget}
        onChangeText={setBudget}
        placeholder="Optional"
        placeholderTextColor={theme.textSecondary}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          color: theme.textPrimary
        }}
      />

      <Text style={{ color: theme.textPrimary, marginTop: 16 }}>Account</Text>
      <TextInput
        value={account}
        onChangeText={setAccount}
        placeholder="Optional"
        placeholderTextColor={theme.textSecondary}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          color: theme.textPrimary
        }}
      />

      <Text style={{ color: theme.textPrimary, marginTop: 16 }}>Note</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Optional note"
        placeholderTextColor={theme.textSecondary}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          color: theme.textPrimary
        }}
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          marginTop: 24,
          backgroundColor: theme.primary,
          padding: 14,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>
          Add Transaction
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;
