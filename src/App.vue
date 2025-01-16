<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  background:black;
  color: white;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 60px;
  height: auto;
}


.logo-container {
  display: flex;
  /* 디폴트 디렉션은? row */
  justify-content: center;
  align-items: center;
}

</style>
