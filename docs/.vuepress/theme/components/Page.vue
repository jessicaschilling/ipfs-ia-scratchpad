<template>
  <div class="container">
    <header class="bg-washed-blue pt5">
      <Content slot-key="header" class="center mw8 pa4"/>
    </header>
    <main class="page sans-serif">
      <Content class="center mw8 pa4 pt3" />
    </main>
    <Footer />
  </div>
</template>

<style lang="stylus">
.page
  display block
</style>
