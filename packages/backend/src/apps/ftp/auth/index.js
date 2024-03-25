import verifyCredentials from './verify-credentials.js';
import isStillVerified from './is-still-verified.js';

export default {
  fields: [
    {
      key: 'screenName',
      label: 'Screen Name',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description:
        'Screen name of your connection to be used on Automatisch UI.',
      clickToCopy: false,
    },
    {
      key: 'host',
      label: 'Host',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'The host information Automatisch will connect to.',
      docUrl: 'https://automatisch.io/docs/ftp#host',
      clickToCopy: false,
    },
    {
      key: 'username',
      label: 'Email/Username',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Your FTP login credentials.',
      docUrl: 'https://automatisch.io/docs/ftp#username',
      clickToCopy: false,
    },
    {
      key: 'password',
      label: 'Password',
      type: 'string',
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/ftp#password',
      clickToCopy: false,
    },
    {
      key: 'secure',
      label: 'Secure',
      type: 'dropdown',
      required: false,
      readOnly: false,
      value: false,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/ftp#secure',
      clickToCopy: false,
      options: [
        {
          label: 'Yes',
          value: true,
        },
        {
          label: 'No',
          value: false,
        },
      ],
    },
    {
      key: 'port',
      label: 'Port',
      type: 'string',
      required: false,
      readOnly: false,
      value: '21',
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/ftp#port',
      clickToCopy: false,
    },
  ],
  verifyCredentials,
  isStillVerified,
};
