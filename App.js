// Databases 
import { SQLiteProvider } from 'expo-sqlite';
import { Provider } from 'react-redux';
import { store } from './Database/Store';
import { accountDB } from './Database/SQLLite_DBs';
import RootApp from './Components/RootApp';

// main stack navigation 
export default function App() {
  return (
    // sqlite server provider 
    <SQLiteProvider databaseName='accounts.db'
      onInit={accountDB}
      options={{ useNewConnection: false }}>
      {/* redux provider  */}
      <Provider store={store}>
        <RootApp />
      </Provider>
    </SQLiteProvider>
  );
}