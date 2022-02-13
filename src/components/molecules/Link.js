import React from 'react'
import Button from '../atoms/Button';
import Classic from '../links/Classic';
import MusicPlayer from '../links/MusicPlayer'
import ShowsList from '../links/ShowsList'

const linkMapping = {
    classic: Classic,
    musicPlayer: MusicPlayer,
    showsList: ShowsList,
}

function Link({linkType, data}) {

    const LinkComponent = linkMapping[linkType]
    return (
        <li className="link">
            <LinkComponent data={data}>
                <Button>
                    <p>{data.title}</p>
                </Button>
            </LinkComponent>
        </li>
    );
}

export default Link;
