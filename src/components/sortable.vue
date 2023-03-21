<template>
  <div class="container">
    <ul id="ul1">
      <li class="li1">Item1</li>
      <li class="li1">Item2</li>
      <li class="li1">Item3</li>
      <li class="li1">Item4</li>
      <li class="li1">Item5</li>
    </ul>
    <ul id="ul2">
      <li class="li2">Item1</li>
      <li class="li2">Item2</li>
      <li class="li2">Item3</li>
      <li class="li2">Item4</li>
      <li class="li2">Item5</li>
    </ul>
  </div>
</template>

<script>
import Sortable from "sortablejs"
export default {
  name: "HomePage",
  data() {
    return {
      test: "test",
    }
  },
  mounted() {
    console.log("ok")
    const ul1 = document.getElementById("ul1"),
      ul2 = document.getElementById("ul2")
    new Sortable(ul1, {
      group: "shared", // set both lists to same group
      animation: 150,
    })
    new Sortable(ul2, {
      group: "shared",
      animation: 150,
    })
  },
}
</script>
<style scoped lang="scss">
.container {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  ul {
    display: flex;
    flex-direction: column;
  }
  #ul1 .li1 {
    border: 1px solid black;
    height: 20px;
  }
  #ul2 .li2 {
    border: 1px solid black;
    height: 20px;
    background-color: yellow;
  }
}
</style>
