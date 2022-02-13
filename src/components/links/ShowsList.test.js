import React from 'react';
import { screen, render  } from '@testing-library/react';
import ShowsList from './ShowsList';

const mockData = {
    upcomingEvents: []
}

describe('<ShowsList />',  () => {

    it('renders without any errors', () => {
        render(<ShowsList data={mockData}><div data-testid="test-children"></div></ShowsList>);
        
        expect(screen.getByTestId('test-children')).toBeInTheDocument();
    });
});
