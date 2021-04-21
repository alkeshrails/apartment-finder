import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

React.useLayoutEffect = React.useEffect;

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });