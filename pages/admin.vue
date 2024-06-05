<script lang="ts" setup>
import {useCoursesStore} from "~/storage/courses";
import FormAddCourses from "~/components/form-add-courses.vue";
// import {Course} from "~/server/types";

definePageMeta({
  title: 'Админ панель'
})
const store = useCoursesStore()

const {data, pending} = useAsyncData('coursesListData', async () => {
  await Promise.all([
      store.fetchCourses(),
      store.fetchCategories(),
      store.fetchColors()
  ])
  return {
    courses: store.courses,
    categories: store.categories
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="block-courses">
        <h3 class="block-courses__title">Список курсов</h3>
        <div v-if="pending">loading courses...</div>
        <div class="block-courses__list list" v-else>
          <div class="block-courses__item" v-if="data" v-for="course in data.courses" :key="course.id">
            {{ course.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="block-form">
        <h3 class="block-form__title">Форма</h3>
        <div class="block-form__content">
          <div v-if="pending">loading form...</div>
          <FormAddCourses v-else :categories="data.categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
}
.block-courses__title {
  margin-top: 0;
}
.block-courses__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.block-form__title {
  margin-top: 0;
}
</style>
