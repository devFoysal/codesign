import {
    baseApiSlice
} from "../api/baseApiSlice";

export const imagesApiSlice = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getImages: builder.query({
            query: () => ({
                url: `/photos?per_page=200&client_id=${process.env.REACT_APP_CLIENT_ID}`,
            })
        }),
    }),
});

export const {
    useGetImagesQuery
} = imagesApiSlice