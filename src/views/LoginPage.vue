<template>
  <div>
    <input type="text" :placeholder="'Email'" v-model="email"/>
    <input type="password" :placeholder="'Password'" v-model="password"/>
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
}
</script>

<style>

</style>