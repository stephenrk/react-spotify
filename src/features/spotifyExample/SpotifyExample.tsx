import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayName, selectProduct, topTracks } from './spotifyExampleSlice';
import styles from './SpotifyExample.module.css';

export function SpotifyExample() {
  const displayName = useSelector(selectDisplayName);
  const topTracksArray = useSelector(topTracks);

  return (
    <div className={styles.column}>
      {displayName && <div className={styles.row}>
        Logged in as: {displayName}
      </div>}

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {topTracksArray.map(item => (
          <div style={{ height: 360, width: 140, display: 'flex', flexDirection: 'column', marginRight: 8, marginLeft: 8 }}>
            <img src={item.images[0].url} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            <p style={{ fontSize: 12 }}>Título: {item.name}</p>
            <p style={{ fontSize: 12 }}>Artista: {item.artists[0].name}</p>
            <p style={{ fontSize: 12 }}>Dia do lançamento: {item.release_date}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
