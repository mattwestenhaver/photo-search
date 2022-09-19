import React from 'react';

// styles
import styles from '../../../styles/Home.module.css';

type Props = {
    currentPage: number;
    totalResults: number;
    handlePagination: (page: number) => void;
};

const Pagination: React.FC<Props> = ({
    currentPage,
    totalResults,
    handlePagination,
}: Props) => {
    return (
        <div className={styles.pagination}>
            <button
                className={styles.paginationButton}
                onClick={() => handlePagination(currentPage - 1)}
            >
                previous
            </button>
            <div>
                Page: {currentPage} of {totalResults / 10}
            </div>
            <button
                className={styles.paginationButton}
                onClick={() => handlePagination(currentPage + 1)}
            >
                next
            </button>
        </div>
    );
};

export default Pagination;
