<template>
  <div>
    <button @click="down"></button>
    <div id="test">666</div>
  </div>
</template>
<script>
import html2canvas from "html2canvas"
export default {
  name: "Downhtml",
  methods: {
    down() {
      const dom = document.getElementById("test")
      html2canvas(dom, {
        width: dom.offsetWidth,
        height: dom.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
      }).then((cvs) => {
        const dataUrl = cvs.toDataURL()
        const a = document.createElement("a")
        a.setAttribute("href", dataUrl)
        a.download = "test.png"
        a.click()
        document.body.removeChild(a)
      })
    },
  },
}
</script>