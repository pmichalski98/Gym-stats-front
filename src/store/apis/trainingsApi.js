import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const trainingsApi = createApi({
    reducerPath: 'trainings',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
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
            fetchAllTrainings: build.query({
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
            addTraining: build.mutation({
                invalidatesTags: (result, error, training) => {
                    return [{type: 'Training'}]
                },
                query(training) {
                    return {
                        url: '/trainings',
                        method: 'POST',
                        body: {
                            id: training.id,
                            name: training.name,
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