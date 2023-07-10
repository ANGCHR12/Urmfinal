<template>
    <div class="login">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Login User</div>
                    </div>
                    <div class="card-body">
                        <form novalidate @submit.prevent="loginUser">
                            <div class="form-group">
                                <input 
                                type="text" 
                                :class="`form-control ${
                                    errors.email ? 'is-invalid':''
                                    }`" 
                                placeholder="email"
                                v-model="email"
                            />
                            <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            
                            <div class="form-group">
                                <input 
                                type="password" 
                                :class="`form-control ${
                                    errors.password ? 'is-invalid':''
                                    }`" 
                                placeholder="Password"
                                v-model="password"
                                />
                                <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                            
                            <button class="btn btn-outline-success form-control">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       
        </div>

    </div>
    </div>

 
  
</template>

<script>
import validateLoginInput from "../validation/validateLoginInput";
export default  {
    name: "LOGIN",
    data() {
        return {
            email:"",
            password:"",
            errors:{},

        };
    },
    methods: {
        loginUser() {
            let credentials = {
                email:this.email,
                password:this.password,

        };
        const {isInvalid,errors }=validateLoginInput(credentials);
        if(isInvalid) {
            this.errors=errors;
        } else {
            this.errors = {};
        // login code goes here
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let emailIndex = lsUsers.findIndex(
            (user) => user.email === credentials.email
        );
        
          if(emailIndex > -1) {
            let passwordIndex= lsUsers.findIndex(
                (user) => user.password === credentials.password
                );
            if(passwordIndex > -1){
                let activeUser = lsUsers.find((user) => user.email === credentials.email
                );
                localStorage.setItem("activeUser", JSON.stringify(activeUser));

                this.$router.push("/dashboard");
                window.location.reload();

            }else{
                this.errors.password ="Password does not match!"
            }
        } else {
            this.errors.email="Email does not exist!";
          
        }
        }
     },
     },
    };
</script>

<style>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

</style>