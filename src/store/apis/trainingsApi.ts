import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Training} from "../../types/training";

const trainingsApi = createApi({
    reducerPath: 'trainings',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        credentials: "include",
    }),
    tagTypes: ['Training'],
    endpoints(build) {
        return {
            updateTrainings: build.mutation({
                invalidatesTags: (result, error, training) => {
                    return [{type: 'Training'}]
                },
                query(training) {
                    return {
                        url: '/trainings',
                        body: training,
                        method: 'PATCH',
                    };
                },
            }),
            fetchTraining: build.query({
                query(training) {
                    return {
                        url: '/trainings',
                        params: {
                            id: training.id,
                        },
                        method: 'GET',
                    };
                },
            }),
            fetchAllTrainings: build.query<Training[],void>({
                providesTags: (result, error, trainings) => {
                    return [{type: 'Training'}]
                },
                query() {
                    return {
                        url: '/trainings',
                        method: 'GET',
                    };
                }
            }),
            addTraining: build.mutation<Training,Training>({
                invalidatesTags: (result, error, training) => {
                    return [{type: 'Training'}]
                },
                query(training) {
                    return {
                        url: '/trainings',
                        method: 'POST',
                        body: {
                            id: training.id,
                            title: training.title,
                            exercises: training.exercises
                        },
                    }
                }
            }),
            deleteTraining: build.mutation({
                invalidatesTags: (result, error, training) => {
                    return [{type: 'Training'}]
                },
                query(training) {
                    return {
                        url: `/trainings/${training.id}`,
                        method: 'DELETE',
                    }
                }
            }),
        }
    }
})
export const {
    useUpdateTrainingsMutation,
    useFetchTrainingQuery,
    useFetchAllTrainingsQuery,
    useAddTrainingMutation,
    useDeleteTrainingMutation
} = trainingsApi;
export {trainingsApi};