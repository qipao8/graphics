<template>
  <div class="Layout">
    <div class="nav">导航栏有空再补充</div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  created() {
    fetch("http://localhost:4000/api/getJSON", {
      method: "POST",
      body: {
        test: "lmtest",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  },
}
</script>
<style scoped lang="scss">
.Layout {
}
</style>
