<template>
  <div class="layo">
    <div class="nav">
        导航栏有空再补充
    </div>
    <div class="main">
        <sortable-vue></sortable-vue>
        <downhtml></downhtml>
    </div>
  </div>
</template>

<script>
import sortableVue from "../components/sortable.vue"
import Downhtml from "../components/Downhtml.vue"
export default {
  name: "HomePage",
  components: {
    sortableVue,
    Downhtml
  },
}
</script>
<style scoped lang="scss">
</style>