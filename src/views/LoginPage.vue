<template>
<div>
    <input type="text" :placeholder="'Email'" v-model="email"/>
    <input type="password" :placeholder="'Password'" v-model="password"/>

    <button @click="login">로그인하기</button>

    <div>
        계정이 없으신가요?
        <span @click="signUp" >가입하기</span>
    </div>
</div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            let email = ""
            console.log('inner email :' + email)
            console.log('email :' + this.email)
            console.log('password :' + this.password)
        }
    },
}
</script>

<style>

</style>