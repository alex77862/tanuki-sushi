var app = new Vue({
    el: '#app',
    data: {
        posts: []
    },
    methods: {
        updatePost() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(reponse => this.posts = reponse.data)
                .catch(error => console.log(error));
        },
        CreerUnPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                    id: 101,
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }).then(reponse => console.log(reponse))
                .catch(error => console.log(error));
        },
        getAllData() {
            axios.get('http://localhost:3000/api/stuff')
                .then(reponse => this.posts = reponse.data)
                .catch(error => console.log(error));
        }
    }
});