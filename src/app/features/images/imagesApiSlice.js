import {
    baseApiSlice
} from "../api/baseApiSlice";

export const imagesApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getImages: builder.query({
            query: () => ({
                url: `/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`,
            })
        }),
    }),
});

export const {
    useGetImagesQuery
} = imagesApiSlice