import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/store/store';
import { Mail, Settings, Trash2 } from 'lucide-react';
import EmailList from './components/EmailList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <EmailList />
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;