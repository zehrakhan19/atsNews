import React from 'react';
import { render } from '@testing-library/react-native';

import Fab from './fab';

describe('Fab', () => {
    it('renders correctly with given props', () => {
        const icon = 'some-icon'; // Mock icon
        const callback = jest.fn(); // Mock callback function
    
        const { getByTestId } = render(<Fab icon={icon} callback={callback} />);
        const fabIcon = getByTestId('fab-icon');
    
        // Check if the component renders with the correct props
        expect(fabIcon).toBeDefined();
        expect(fabIcon.props.source).toBe(icon);
      });
      
});
