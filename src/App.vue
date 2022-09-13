<template>
  <main-nav />
</template>

<!-- main-nav는 App.vue에서 실핻되는 하위요소 즉 부모:App.vue, 자식 main-nav 의 관계 -->

<script>
import MainNav from "@/components/MainNav";
export default {
  name: "App",
  components: {
    MainNav: MainNav, // 컴포넌트 등록 (키 이름은 동일하게 해주는게 좋다.)
  },
};
</script>
