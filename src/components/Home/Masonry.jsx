import React from 'react'
import "./home.css"
import PhotoCard from '../Cards/PhotoCard';
import { useGetImagesQuery } from "../../app/features/images/imagesApiSlice";

const Masonry = () => {
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
        <div className="masonry">
            {isSuccess && data && data.length > 0 && data?.map(photo => (
                <PhotoCard key={photo?.id} item={photo} />
            ))}
        </div>
    )
}

export default Masonry