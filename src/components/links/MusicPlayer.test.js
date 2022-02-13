import React from 'react';
import { screen, render, fireEvent  } from '@testing-library/react';
import MusicPlayer from './MusicPlayer';
import { MusicPlayerProvider } from '../../contexts/music-player-context';

const mockData = {
    players: [
        {
            "platform": "appleMusic",
            "url": "https://example.com",
            "embed": "https://example.com"
        }
    ]
}

describe('<MusicPlayer />',  () => {
    beforeEach(() => {
        render(<MusicPlayer data={mockData}><div data-testid="test-children" /></MusicPlayer>, { wrapper: MusicPlayerProvider })
    })

    it('render music player', async () => {
        expect(screen.getByTestId('test-children')).toBeInTheDocument();
    });
    
    it('does not play music when a platform has not been chosen (clicked)', async () => {
        expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
    })
    
    it('plays music when a platform is chosen (clicked)', async () => {
        fireEvent.click(screen.getByRole("button"))
    
        expect(screen.getByRole('presentation')).toBeInTheDocument()
    })
});
