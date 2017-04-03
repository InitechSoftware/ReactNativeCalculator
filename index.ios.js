'use strict';

// it is important to import the react package before anything else
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/common/components/App';

AppRegistry.registerComponent('calc', () => App);
