<script>
import { defineComponent, h } from 'vue'
export default defineComponent({
  render() {
    return h('template', this.$slots.default && this.$slots.default())
  }
})
</script>
