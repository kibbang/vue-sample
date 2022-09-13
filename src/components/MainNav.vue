<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
      <h2 class="flex items-center h-full ml-8">
        Developed By {{ author.firstName }} {{ author.lastName }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav.vue",
  data() {
    return {
      company: "Shin Careers", // 데이터 바인딩 {{}} 안에 변수 이름 넣어주기
      author: {
        firstName: "kihyun",
        lastName: "Shin",
      }, // 변수가 정의 되지 않으면 공백으로 나옴 undefined를 처리하는 방식임
    };
  },
};
</script>
