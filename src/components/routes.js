import React from 'react';
import Bundle from '../utils/Bundle';

const Chunk = fn => props => <Bundle load={fn} {...props} />;

export default [
  {
    path: '/',
    exact: true,
    component: Chunk(() => import(/* webpackChunkName: 'App' */ './Home')),
  },
  {
    path: '/example',
    component: Chunk(() => import(/* webpackChunkName: 'Example' */ './Example')),
  },
];
