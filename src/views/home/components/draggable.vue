<script lang="ts">
import { defineComponent, h } from 'vue'
export default defineComponent({

  render() {
    return h('div', this.$slots.default && this.$slots.default())
  }
})
</script>
