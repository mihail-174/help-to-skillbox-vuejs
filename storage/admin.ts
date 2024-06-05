import type { Course } from "~/server/types";
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCoursesStore } from "~/storage/courses";

export const useAdminStore = defineStore('adminStore', () => {
    const courseStore = useCoursesStore()

    return {
        addCourse: async (course: Course) => {
            await $fetch(
                '/api/courses', {
                    method: 'POST',
                    body: JSON.stringify(course)
                })
            await courseStore.fetchCourses()
        }
    }
})