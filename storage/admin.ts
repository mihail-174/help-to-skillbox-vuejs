import { defineStore } from 'pinia'
import type { Course } from "~/server/types";
import { useCoursesStore } from "~/storage/courses";

export const useAdminStore = defineStore('adminStore', () => {
    const coursesStore = useCoursesStore()
    return {
        addCourse: async (course: Course) => {
            try {
                await $fetch<{id: Number}>(
                    `/api/courses`,
                    {method: 'post', body: course}
                )
            } catch (error) {
                console.error(error)
            }
            // await courseStore.fetchCourses()
        }
    }
})