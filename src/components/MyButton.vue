<!-- shared-lib/src/components/MyButton.vue -->
<template>
  <!-- 반드시 button 태그에 @click="onClick"처럼 직접 바인딩해보자 -->
  <button class="my-button" @click="onClick"><slot /></button>
</template>

<script>
export default {
  name: 'MyButton',
  emits: ['click'],
  methods: {
    onClick(event) {
      console.log('📦 MyButton 내부 클릭됨')  // 이건 shared-lib에서의 로그
      this.$emit('click', event)              // 이걸 부모에게 전달해야 해
    }
  }
}
</script>

<style scoped>
.my-button {
  padding: 10px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
