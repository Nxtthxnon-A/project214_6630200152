<template>
 <div class="content">
    <h1>Account</h1>
    
  </div>
</template>

<script>
export default {
    name:'Account',
}
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 500px auto; /*Left Right*/
  grid-template-rows: 250px minmax(250px, auto); /*Top Mid Bottom*/
  grid-template-areas:
    "content content_right"
    "content content_bottom";
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 15px;
  margin-bottom: 5px;
}

</style>