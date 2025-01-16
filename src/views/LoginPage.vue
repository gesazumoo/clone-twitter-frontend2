<template>
<div>
    <!-- <InputField :type="'text'" :placeholder="'Email'" :modelValue="email" @update:model-value="email = $event"/> -->
    <InputField :type="'text'" :placeholder="'Email'" v-model="email"/>
    <InputField/>

    <button @click="login">로그인하기</button>

    <div>
        계정이 없으신가요?
        <span @click="signUp" >가입하기</span>
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

<style>

</style>