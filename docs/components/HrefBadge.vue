<script setup>
const props = defineProps([
  'text',
  'link'
])
</script>

<template>
  <Badge type="info"><a href="{{ link }}">{{ text }}</a></Badge>
</template>
