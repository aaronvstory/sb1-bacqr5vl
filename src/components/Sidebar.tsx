import React from 'react';
import { Mail, Settings, Trash2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Mail className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-bold">Mail.tm Client</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Mail className="w-5 h-5" />
              <span>Inbox</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Trash2 className="w-5 h-5" />
              <span>Trash</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;