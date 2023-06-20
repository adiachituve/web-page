import React from 'react';
import { MenuItem } from '../components/Menu/Menu';
import {
  AddLocation,
  Build,
  CastConnected,
  CloudUpload,
  Person,
} from '@mui/icons-material';

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', title: 'menu item 1', icon: <Person /> },
  { id: '2', title: 'menu item 2', icon: <AddLocation /> },
  { id: '3', title: 'menu item 3', icon: <Build /> },
  { id: '4', title: 'menu item 4', icon: <CastConnected /> },
  { id: '5', title: 'menu item 5', icon: <CloudUpload /> },
];
