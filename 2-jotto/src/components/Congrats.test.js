import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('renders without errors', () => {

});

test('renders no text when `success` prop is false', () => {

});

test('renders non-empty congrats message when `success` prop is false', () => {

});