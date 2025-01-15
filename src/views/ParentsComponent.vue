<template>
<div>
    <ChildComponent :testProps="'I am Props'" @from-child-component="parentsMethods"/>
</div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue'
export default {
    name: "LoginPage",
    components: {ChildComponent},
    data() {
        return {
            dataProps: "I am DataProps",
        }
    },
    methods: {
        parentsMethods(passParam) {
            console.log(passParam)
        }
    },
}
</script>

<style>

</style>