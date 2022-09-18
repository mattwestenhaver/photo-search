import React from 'react';
import Image from 'next/image';

// types
import type { PhotoResponse } from '../../types/photos';

// styles
import styles from '../../styles/Home.module.css';

type Props = {
    data: PhotoResponse;
};

const PhotosContainer: React.FC<Props> = ({ data }: Props) => {
    return (
        <div className={styles.photosContainer}>
            {!!data.photos.length ? (
                data.photos.map((photo) => {
                    return (
                        <div key={photo.id}>
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
    );
};

export default PhotosContainer;
