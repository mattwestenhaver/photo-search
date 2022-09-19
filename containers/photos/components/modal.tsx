import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// styles
import styles from '../../../styles/Modal.module.css';

// types
import type { Photo } from '../../../types/photos';

type Props = {
    photo: Photo | null;
    handlePhotoSelect: (photo: Photo | null) => void;
};

const PhotoModal: React.FC<Props> = ({ photo, handlePhotoSelect }: Props) => {
    useEffect(() => {
        if (photo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [photo]);

    if (!photo) {
        return null;
    }

    return (
        <>
            <div
                className={styles.modalBackground}
                onClick={() => handlePhotoSelect(null)}
            />
            <div key={photo.id} className={styles.modalPhotoWrapper}>
                <div
                    className={styles.modalClose}
                    onClick={() => handlePhotoSelect(null)}
                >
                    ✕
                </div>
                <Image
                    loading="lazy"
                    src={photo.src.original}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                />
                <div>{photo.alt}</div>
                <div className={styles.photographerInfo}>
                    <div>Photographer:</div>
                    <div className={styles.photographerLink}>
                        <Link href={photo.photographer_url}>
                            {photo.photographer}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoModal;
