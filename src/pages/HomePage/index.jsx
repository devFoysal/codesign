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
    console.log(isError, error, isSuccess);
    return (
        <div>
            {isSuccess && JSON.stringify(data)}
        </div>
    )
}

export default HomePage