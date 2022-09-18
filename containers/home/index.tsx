import React, { useState, useRef } from 'react';

// components
import PhotosContainer from '../photos';

// styles
import styles from '../../styles/Home.module.css';

// utils
import { searchByQuery } from '../../utils/photos';

// types
import type { PhotoResponse } from '../../types/photos';

type Props = {
    data: PhotoResponse;
};

const HomepageContainer: React.FC<Props> = ({ data }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<PhotoResponse | null>(
        null
    );

    const handleImageSearch = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (searchRef.current?.value) {
            const newPhotos = await searchByQuery(searchRef.current.value);
            setSearchResults(newPhotos);
            searchRef.current.value = '';
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Photo Search App</h2>
            <form onSubmit={handleImageSearch} className={styles.search}>
                <input ref={searchRef} type="text" />
                <button type="submit">Search</button>
            </form>
            {!!searchResults ? (
                <PhotosContainer data={searchResults} />
            ) : (
                <PhotosContainer data={data} />
            )}
        </div>
    );
};

export default HomepageContainer;
