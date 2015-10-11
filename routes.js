import React from 'react';
import { Route, IndexRoute } from 'react-router';

import app from './components/app';
import * as pages from './pages';

const menu = [
  {
    to: '/',
    label: 'Home',
  },
  {
    label: 'Products',
    items: [
      {
        to: '/lfa',
        label: 'Learn Forward Author',
      },
      {
        to: '/lfp',
        label: 'Learn Forward Platform',
      },
    ],
  },
  {
    label: 'Solutions',
    items: [
      {
        to: '/publishers',
        label: 'for Educational Publishers',
      },
      {
        to: '/s-a-t',
        label: 'for Schools & Teachers',
      },
      {
        to: '/corporate-training',
        label: 'for Corporate Training',
      },
    ],
  },
  {
    to: 'http://demo.lfwd.io',
    label: 'Demo',
  },
  {
    label: 'About',
    items: [
      {
        to: '/about',
        label: 'About Us',
      },
      {
        to: '/contact',
        label: 'Contact',
      },
    ],
  },
  {
    label: 'Clickme',
    to: '/lfa',
  },
];

const meta = {
  '/': {
    title: 'Learn Forward - Making the Digital Classroom Work',
    description: 'We help publishers create collaborative digital textbooks and we help teachers design & deliver lessons in a digital format.',
  },
  '/lfa': {
    title: 'LFA - Learn Forward Author',
    description: 'Digital publishing tools for rich HTML5 publications',
  },
  '/lfp': {
    title: 'LFP - Learn Forward Platform',
    description: 'Digital publishing tools for rich HTML5 publications',
  },
  '/contact': {
    title: 'LFA - Learn Forward Author',
    description: 'Digital publishing tools for rich HTML5 publications',
  },
};

export default (
  <Route component={app} path='/' meta={meta} menu={menu}>
    <IndexRoute component={pages.home} />
    <Route component={pages.products} path='products' />
    <Route component={pages.solutions} path='solutions' />
    <Route component={pages.demo} path='demo' />
    <Route component={pages.about} path='about' />
    <Route component={pages.lfa} path='lfa' />
    <Route component={pages.lfp} path='lfp' />
    <Route component={pages.contact} path='contact' />
    <Route component={pages.notFound} path="*" />
  </Route>
);

