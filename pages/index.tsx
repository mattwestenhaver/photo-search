import React from 'react';

// containers
import HomepageContainer from '../containers/home';

// types
import type { PhotoResponse } from '../types/photos';

// utils
import { getDefaultPhotos } from '../utils/photos';

type Props = {
    data: PhotoResponse;
};

export default function Home({ data }: Props) {
    return <HomepageContainer data={data} />;
}

export const getStaticProps = async () => {
    const photoResponse = await getDefaultPhotos();

    return {
        props: {
            data: photoResponse,
        },
        revalidate: 60, // 60 seconds
    };
};
