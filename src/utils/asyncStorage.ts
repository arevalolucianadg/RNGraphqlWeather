import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreDataProps {
  key: string;
  item: string | object | string[];
}

export const saveStorage = async ({key, item}: StoreDataProps) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

export const getStorage = async (key: string) => {
  try {
    const value: string | [] | null = await AsyncStorage.getItem(key);
    return value !== null && JSON.parse(value);
  } catch (error) {
    console.log(error);
  }
};

export const getMultiple = async (key: string[]) => {
  try {
    return AsyncStorage.multiGet(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
