import AsyncStorage from "@react-native-async-storage/async-storage";

export const CreateAsync = async (key, value) => {
  try {
    const createMsg = await AsyncStorage.setItem(key, value);
    return createMsg;
  } catch (err) {
    console.log('Error', err);
  }
}

export const ReadAsync = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log('Error', err);
  }
}

export const DeleteAsync = async (key) => {
  try {
    const deleteMsg = AsyncStorage.removeItem(key);
    return deleteMsg;
  } catch (err) {
    console.log(err);
  }
}