<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u,index) in users" :key="index">
                        {{u.username}} - {{ u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    const API_URL = 'https://vue-http-9a8c3.firebaseio.com/data.json';
    
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                this.$http.post(API_URL, this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData() {
                this.$http.get(API_URL)
                    .then(response => {
                        return response.json();
                    }, error => {
                        console.log(error);
                    })
                    .then(data => {
                        this.users = data;
                    });
            }
        }
    }
</script>

<style>
</style>
