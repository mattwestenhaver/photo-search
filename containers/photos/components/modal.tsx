import React from 'react';
import Image from 'next/image';

// styles
import styles from '../../../styles/Home.module.css';

// types
import type { Photo } from '../../../types/photos';

type Props = {
    photo: Photo | null;
    handlePhotoSelect: (photo: Photo | null) => void;
};

const PhotoModal: React.FC<Props> = ({ photo, handlePhotoSelect }: Props) => {
    if (!photo) {
        return null;
    }

    return (
        <div
            className={styles.modalWrapper}
            onClick={() => handlePhotoSelect(null)}
        >
            <div key={photo.id} className={styles.modalPhotoWrapper}>
                <Image
                    loading="lazy"
                    src={photo.src.original}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                />
            </div>
        </div>
    );
};

export default PhotoModal;
