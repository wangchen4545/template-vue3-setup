<template>
  <div class="home">
    <search-Head/>
  </div>
</template>

<script>
// @ is an alias to /src
import searchHead from '@/components/search-head.vue'

export default {
  name: 'HomeView',
  components: {
    searchHead
  }
}
</script>
