type Photo = {
    id: number;
    alt: string;
    photographer: string;
    photographer_url: string;
    height: number;
    width: number;
    src: {
        original: string;
        small: string;
        medium: string;
        large: string;
    };
};

export type PhotoResponse = {
    page: number;
    per_page: number;
    photos: Array<Photo>;
    total_results: number;
    next_page: string;
};
