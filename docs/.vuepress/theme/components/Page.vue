<template>
  <div class="container">
    <div class="bg-yellow-muted db pt5 pb2 ph3 f6">
      <strong>NOTE:</strong> This site is a lightly formatted wireframe of <a href="https://docs.google.com/document/d/1ni0kQNTLJ8VcpCu-zvpyWceZ3qbZWTJSJVRLCsOxvbY/edit#" class="charcoal underline" target="_blank">this IA outline</a> and should <em>not</em> be considered an example of visual design.
    </div>
    <header class="bg-washed-blue">
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
