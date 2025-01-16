<template>
<div>
    <!-- <InputField :type="'text'" :placeholder="'Email'" :modelValue="email" @update:model-value="email = $event"/> -->
    <InputField :type="'text'" :placeholder="'Email'" v-model="email"/>
    <InputField :type="'password'" :placeholder="'Password'" v-model="password"/>

    <button class="login-button" @click="login">로그인하기</button>

    <div>
        계정이 없으신가요?
        <span class="signup-button" @click="signUp" >가입하기</span>
    </div>
</div>
</template>

<script>
import InputField from '@/components/InputField.vue'
export default {
    name: "LoginPage",
    components: { InputField },
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

<style scoped>
.login-button {
    border-radius: 20px;
    border: 1px solid white;
    font-size: 15px;
    font-weight: bold;
    /* 위 우 아래 좌 */
    /* 2개면 상하 / 좌우 */
    margin: 10px 0px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}

.signup-button {
    color: aqua;
    cursor: pointer;
}

</style>