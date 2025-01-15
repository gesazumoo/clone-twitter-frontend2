<template>
    <div>
        <div>
            testProps: {{ testProps }}
        </div>
        <button @click="sendEmitEvent">Emit!</button>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    props : {
        testProps: String
    },
    methods: {
        sendEmitEvent() {
            this.$emit("fromChildComponent", true)
        }
    },
    emits: ["fromChildComponent"],
}
</script>

<style>

</style>