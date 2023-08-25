import React from 'react'
import { useGetImagesQuery } from '../../app/features/images/imagesApiSlice';

const HomePage = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetImagesQuery(
        "allImages", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    }
    );
    return (
        <div>
            Home page
            {/* {isSuccess && JSON.stringify(data)} */}
        </div>
    )
}

export default HomePage