import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdaptor() });