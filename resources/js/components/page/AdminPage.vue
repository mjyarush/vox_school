<template>
    <div class="container my-5">
        <CreateCourse></CreateCourse>
        <IndexCourses></IndexCourses>
    </div>
</template>

<script>

import IndexCourses from "./IndexCourses.vue";
import CreateCourseForm from "../forms/CreateCourseForm.vue";

export default {
    name: "AdminPage",
    components: {
        CreateCourseForm,
        IndexCourses
    },
    data() {
        return {
            page: 'AdminPage',
        }

    },
    methods: {

    },
    computed: {

    }

}
</script>

<style scoped>

</style>
