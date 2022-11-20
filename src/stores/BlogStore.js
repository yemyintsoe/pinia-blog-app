import { defineStore } from "pinia";
import { ref } from "vue";
export const useBlogStore = defineStore('blogStore', () => {
    const blogs = ref([
        {
            id: 1,
            title: "What is Pinia?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 2,
            title: "About Vue3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ])
    function addBlog(formData) {
        blogs.value.push(formData)
    }
    function deleteBlog(id) {
        blogs.value = blogs.value.filter(blog => blog.id != id)
    }
    return { blogs, addBlog, deleteBlog }
})