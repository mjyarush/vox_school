<template>
    <div class="row justify-content-center text-center">
        <div class="col-lg-4 col-md-6 col-12 mt-5">
            <h3>Создание курса</h3>
            <div class="form-group">
                    <label for="courseName">Название курса</label>
                    <input type="text" class="form-control" id="courseName" v-model="courseName" placeholder="Введите название">
            </div>
            <div class="form-group">
                    <label for="lessonsQnty">Число уроков</label>
                    <input type="number" class="form-control" id="lessonsQnty" v-model="lessonsQnty" placeholder="Введите число уроков">
            </div>
            <div class="form-group">
                    <label for="descriptionCourse">Описание курса</label>
                <textarea id="descriptionCourse" class="form-control" v-model="descriptionCourse" placeholder="Введите описание" ></textarea>
            </div>
            <input @click.prevent="addCourse" class="btn btn-primary" value="Создать">
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateCourseForm",
    data(){
        return {
            courseName: null,
            lessonsQnty: null,
            descriptionCourse: null,
        }
    },
    methods: {
        addCourse(){
            axios.post('/api/course',{courseName: this.courseName,lessonsQnty: this.lessonsQnty,descriptionCourse: this.descriptionCourse})
                .then(res =>{
                    this.courseName = null
                    this.lessonsQnty = null
                    this.descriptionCourse = null
                    console.log(res)
                })
        }
    }
}
</script>

<style scoped>

</style>
