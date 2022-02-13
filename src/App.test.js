import React from 'react';
import { screen, render, act  } from '@testing-library/react';
import App from './App';

jest.mock('./api/get-user-links');

describe('<App />',  () => {

    it('render profile page', async () => {
        await act( async () => render(<App/>));

        expect(screen.getByTitle('profile-page')).toBeInTheDocument();
    });
});
