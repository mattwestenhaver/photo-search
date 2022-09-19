import React, { useState, useRef } from 'react';

// components
import PhotosContainer from '../photos';

// styles
import styles from '../../styles/Home.module.css';

// utils
import { searchByQuery, getPhotosByPage } from '../../utils/photos';

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
    const [previousSearch, setPreviousSearch] = useState<string>('nature');

    const handleImageSearch = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (searchRef.current?.value) {
            const newPhotos = await searchByQuery(searchRef.current.value);
            setPreviousSearch(searchRef.current.value);
            setSearchResults(newPhotos);
            searchRef.current.value = '';
        }
    };

    const handlePagination = async (page: number) => {
        const newPhotos = await getPhotosByPage(previousSearch, page);
        setSearchResults(newPhotos);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Photo Search App</h2>
            <form onSubmit={handleImageSearch} className={styles.search}>
                <input ref={searchRef} type="text" />
                <button type="submit">Search</button>
            </form>
            {!!searchResults ? (
                <PhotosContainer
                    data={searchResults}
                    handlePagination={handlePagination}
                />
            ) : (
                <PhotosContainer
                    data={data}
                    handlePagination={handlePagination}
                />
            )}
        </div>
    );
};

export default HomepageContainer;
