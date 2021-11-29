// const { title } = require("process");
// const article = require("../../backend/models/article");

var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        articles: [],
        showAddForm: false,
        title: '',
        description: '',
        price: '',
        // imageUrl: '',
        // formulaire: {}
    },
    mounted: function () {
        this.getRealDada()
    },
    methods: {
        testAPI() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(reponse => this.posts = reponse.data)
                .catch(error => console.log(error));
        },
        getFakeData() {
            axios.get('http://localhost:3000/api/fakedata')
                .then(res => this.posts = res.data)
                .catch(error => console.log(error));
        },
        getRealDada() {
            axios.get('http://localhost:3000/api/stuff')
                .then(res => this.articles = res.data)
                .catch(error => console.log(error));
        },
        callAddForm() {
            this.showAddForm = true;
        },
        formSubmit(e) {
            e.preventDefault();

            let formulaire = {};

            formulaire.title = this.title,
                formulaire.description = this.description,
                formulaire.price = this.price,
                // formulaire.imgUrl = this.imgUrl

                axios.post('http://localhost:3000/api/stuff', {
                    formulaire
                }).then((res) => {
                    console.log(res)
                    e.target.reset()
                })
                .catch(error => console.log(error));
        }
    }
});