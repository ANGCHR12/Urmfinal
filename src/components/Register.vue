<template>
    <div class="register ">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Register User</div>
                    </div>
                    <div class="card-body">
                        <form novalidate @submit.prevent="registerUser()">
                            <div class="form-group">
                                <input 
                                type="firstname" 
                                :class="`form-control ${errors.firstname ? 'is-invalid' : ''}`" 
                                placeholder="Firstname"
                                v-model="firstname"
                            />
                            <div class="invalid-feedback">{{ errors.firstname }}</div>
                            </div>
                            <div class="form-group">
                                <input 
                                type="lastname" 
                                :class="`form-control ${errors.lastname ? 'is-invalid' : ''}`" 
                                placeholder="Lastname"
                                v-model="lastname"
                            />
                            <div class="invalid-feedback">{{ errors.lastname }}</div>
                            </div>
                            <div class="form-group">
                                <input 
                                type="text" 
                                :class="`form-control ${errors.username ? 'is-invalid' : ''}`" 
                                placeholder="Username"
                                v-model="username"
                            />
                            <div class="invalid-feedback">{{ errors.username }}</div>

                            </div>
                            <div class="form-group">
                                <input type="email" 
                                :class="`form-control ${errors.email ? 'is-invalid' : ''}`" 
                                placeholder="Email" 
                                v-model="email"
                                />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="form-group">
                                <input 
                                type="password" 
                                :class="`form-control ${errors.password ? 'is-invalid' : ''}`" 
                                placeholder="Password"
                                v-model="password"
                                />
                                <div class="invalid-feedback">{{ errors.password }}</div>


                            </div>
                            <div class="form-group">
                                <input type="password" 
                                :class="`form-control ${errors.password2 ? 'is-invalid' : ''}`" 
                                placeholder="Confirm Password"
                                v-model="password2"
                                />
                                <div class="invalid-feedback">{{ errors.password2 }}</div>
                            </div>
                            <button class="btn btn-outline-success form-control">Register User</button>
                        </form>
                    </div>
                </div>
            </div>
       
        </div>

    </div>
    </div>

  
</template>

<script>
import validateRegisterInput from '../validation/validateRegisterInput'
export default {
    name: "REGISTER",
    data(){
        return {
            firstname:"",
            lastname:"",
            username:"",
            email:"",
            password:"",
            password2:"",
            errors:{},
            users:[]
        
        };
    },
    methods:{
        registerUser() {
            let user = {
                firstname:this.firstname,
                lastname:this.lastname,
                username: this.username,
                email: this.email,
                password: this.password,
                password2: this.password2,
            };
            const {isInvalid,errors}= validateRegisterInput(user);
            if(isInvalid) {
                this.errors=errors;
            }else{
                this.errors = {};
                // store user in local storage
                if(localStorage.users) {
                    let IsUsers = localStorage.users;
                    this.users = JSON.parse(IsUsers);

                }
                this.users.push(user);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.firstname="";
                this.lastname="";
                this.username="";
                this.email="";
                this.password="";
                this.password2="";
                this.$router.push("/login");


            }

        },
    },




};
</script>

<style>
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;


}


</style>