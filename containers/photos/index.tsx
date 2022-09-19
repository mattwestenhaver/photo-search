import React from 'react';
import Image from 'next/image';

// components
import Pagination from './components/pagination';

// types
import type { Photo, PhotoResponse } from '../../types/photos';

// styles
import styles from '../../styles/Home.module.css';

type Props = {
    data: PhotoResponse;
    handlePagination: (page: number) => void;
    handlePhotoSelect: (photo: Photo) => void;
};

const PhotosContainer: React.FC<Props> = ({
    data,
    handlePagination,
    handlePhotoSelect,
}: Props) => {
    return (
        <>
            <Pagination
                currentPage={data.page}
                totalResults={data.total_results}
                handlePagination={handlePagination}
            />
            <div className={styles.photosContainer}>
                {!!data.photos.length ? (
                    data.photos.map((photo) => {
                        return (
                            <div
                                key={photo.id}
                                className={styles.photoWrapper}
                                onClick={() => handlePhotoSelect(photo)}
                            >
                                <Image
                                    className={styles.photo}
                                    loading="lazy"
                                    src={photo.src.medium}
                                    alt={photo.alt}
                                    width={600}
                                    height={400}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>No photos available</div>
                )}
            </div>
            <Pagination
                currentPage={data.page}
                totalResults={data.total_results}
                handlePagination={handlePagination}
            />
        </>
    );
};

export default PhotosContainer;
