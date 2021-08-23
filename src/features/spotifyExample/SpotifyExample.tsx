import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayName, selectProduct, topTracks } from './spotifyExampleSlice';
import { CardContainer, TrackImage } from './styles';

export function SpotifyExample() {
  const displayName = useSelector(selectDisplayName);
  const topTracksArray = useSelector(topTracks);

  return (
    <div>
      {displayName && <div>
        Logged in as: {displayName}
      </div>}

      <CardContainer>
        {topTracksArray.map(item => (
          <div style={{ height: 360, width: 140, display: 'flex', flexDirection: 'column', marginRight: 8, marginLeft: 8 }}>
            <TrackImage src={item.images[0].url} />
            <p style={{ fontSize: 12 }}>Título: {item.name}</p>
            <p style={{ fontSize: 12 }}>Artista: {item.artists[0].name}</p>
            <p style={{ fontSize: 12 }}>Dia do lançamento: {item.release_date}</p>
          </div>
        ))}
      </CardContainer>

    </div>
  );
}
