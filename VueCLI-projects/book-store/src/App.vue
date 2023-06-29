<template>
  <LayoutHeader />
  <main>
    <div class="inside">
      <BookList />
    </div>
  </main>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
  },
};
</script>

<style></style>
