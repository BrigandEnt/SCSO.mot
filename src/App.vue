<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
.topbar {
    background: black;
    color: white;
}

@media print {
.pagebreak {page-break-after: always;}
}

.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button looking */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}

.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
