<template>
    <div id="app">
        <router-link to="/home">Home</router-link>
        <div class="login-page">
            <div class="wallpaper-register"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                        <div class="card login" v-bind:class="{ error: emptyFields }">
                            <h1>Sign In</h1>
                            <form @submit.prevent="login" class="form-group">
                                <input name="username" v-model="username" placeholder="username" class="form-control" required>
                                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                                <input name="name" v-model="name" placeholder="name" class="form-control" required>
                                <button type="submit" value="register">Register</button>
                            </form>
                            <p>
                                <router-link to="/login">Login</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignupPage',
    data() {
        return {
            username: "",
            password: "",
            name: ""
        }
    },
    methods: {
        async login(){
           let result  = await axios.post("user", {
               email: this.username,
               password: this.password,
               name: this.name
           });
           if(result.status == 201){
               localStorage.setItem('user-info', JSON.stringify(result.data));
               this.$router.push({name:'Dashboard'});
           }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            alert();
            this.$router.push({
                name: 'Dashboard'
            });
        }
    }
}
</script>

<style scoped>
.register input {
    margin: 10px;
    padding: 5px;
    border: 1px solid;
}

.register button {
    margin: 10px;
    padding: 5px;
    border: 1px solid;
    background-color: skyblue;
}
</style>
