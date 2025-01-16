<template>
  <div>
    <div class="logo-container">
        <img src="@/assets/x-logo.png" class="logo"/>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <InputField type="text" placeholder="이메일" v-model='email'/>
    <InputField type="text" placeholder="이름" v-model="name" />
    <InputField type="password" placeholder="비밀번호" v-model="password" />
    <InputField type="password" placeholder="비밀번호 확인" v-model="passwordConfirm" />

    <button class="button" @click="signUp">회원가입하기</button>
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
export default {
    name: "SignUpPage",
    components: { InputField },
    data() {
        return {
            title: '계정을 생성하세요.',
            email: '',
            name: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        signUp() {
            console.log(this.email, this.name, this.password, this.passwordConfirm)
        }
    }
}
</script>

<style scoped>
.title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: large;
  padding: 1%;
}

/* login-button 이랑 같으니 app.vue에 만들고 button-button으로 통일 */
/* 
.signup-button {
  border-radius: 20px;
    border: 1px solid white;
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
} */
</style>