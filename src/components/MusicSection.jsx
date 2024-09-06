import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMusicData } from '../redux/actions';
import AlbumCard from './AlbumCard';

const MusicSection = ({ genre, artistName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q'+ {artistName})
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setMusicData(genre, data.data));
      } catch (error) {
        console.error('Failed to fetch music:', error);
      }
    };

    fetchData();
  }, [dispatch, genre, artistName]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
       {data.tracks.map(track => <AlbumCard key={track.id} singleSong={track} />)}
    </div>
  );
};

export default MusicSection;