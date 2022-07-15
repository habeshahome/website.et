import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import UserManagement from './UserManagement';

i18next.addResourceBundle('en', 'userManagementPage', en);
i18next.addResourceBundle('tr', 'userManagementPage', tr);
i18next.addResourceBundle('ar', 'userManagementPage', ar);

const UserManagementConfig = {
  openDialog: true,
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'users',
      element: <UserManagement />,
    },
  ],
};

export default UserManagementConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
