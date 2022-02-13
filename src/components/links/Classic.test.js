import React from 'react';
import { screen, render  } from '@testing-library/react';
import Classic from './Classic';

const mockData = {
    url: "https://example.com"
}

describe('<Classic />',  () => {

    it('renders without any errors', () => {
        render(<Classic data={mockData}><div data-testid="test-children"></div></Classic>);
        
        expect(screen.getByTestId('test-children')).toBeInTheDocument();
    });
    
    it('navigates to the specified data url', () => {
        render(<Classic data={mockData}></Classic>);
        
        expect(screen.getByRole('link')).toHaveAttribute('href', mockData.url);
    })
});
