<template>
    <div class="mt-5">
        <div v-for="course in courses" class="row mt-3 mx-md-0 mx-3 p-4 bg-success" style="border-radius: 15px;" >
            <div class="col-lg-4 col-md-6 col-12">
                <img src="img/mixer.jpg" alt="CoursePreview" class="img-fluid">
            </div>
            <div class="col-lg-8 col-md-6 col-12 mt-md-0 mt-3">
                <a href="#"><h3>{{course.courseName}}</h3></a>
                <div class="d-flex">
                    <span><h4 class="text-muted">Lessons: {{course.lessonsQnty}}</h4></span>
                    <span class="ml-2"><h4 class="text-muted">Time</h4></span>
                    <span class="ml-2"><h4 class="text-muted">Hard</h4></span>
                    <span class="ml-2"><h4 class="text-muted">Author</h4></span>
                </div>
                <p> {{course.descriptionCourse}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexCourses",
    data(){
        return {
            courses: null,
        }
    },
    mounted(){
        this.getCourses()
    },
    methods: {
        getCourses(){
            axios.get('/api/course')
                .then(res =>{
                    this.courses = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
