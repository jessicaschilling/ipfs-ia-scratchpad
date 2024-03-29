<template>
  <div class="center mw8 mv5">
    <h2 class="f1 ma0 pb3 bw0">About IPFS</h2>
    <p class="mt3 lh-title f3 fw4">
      <span class="fw6">The InterPlanetary File System is many things:</span> It's an <a href="https://github.com/ipfs/ipfs">open-source protocol</a> for storing and serving data without relying on big corporations. It's a crucial part of <a href="/does/not/exist">apps and services</a> creating a faster, offline-tolerant, and more permanent internet. It's at the core of <a href="https://filecoin.io" target="_blank">Filecoin</a>. But at its heart, IPFS is here to make the web better for generations to come.
    </p>
    <div class="flex mt5 mb5">
      <div class="mr4 w-40">
        <h3 class="f3 ma0 pa0">
        Get the basics
        </h3>
        <p class="lh-title f4 mb1">
          This three-minute summary explains what IPFS is, the essentials of how it works, and how it has the potential to revolutionize the web.
        </p>
        <p class="lh-title mt2 f6">Don't want video? <a href="does/not/exist" target="_blank">Try the interactive summary</a></p>
      </div>
      <img class="w-60" src="/assets/img/video-placeholder.jpg">
    </div>
    <h3 class="f3 ma0 pa0">
    How IPFS works
    </h3>
    <p class="lh-title f4 mb1">
      Here's a step-by-step example of how IPFS works to make a sample app efficient, offline-first and more secure. (Turn on dev mode to see behind the scenes!)
    </p>
    <div class="bg-snow-muted pa4 pb2 mt3 mb4 f4">
      <div class="flex">
        <div class="flex w-50">
          <img class="desaturate o-60 w-30 mr4" src="/assets/img/how-illo.svg">
          <div class="w-70">
            <p class="ma0 pa0 pb2 lh-title f5">Alice, Bob, and Carol are on the flight home from vacation, trading phone snapshots from the trip in an <strong>IPFS-powered photo sharing app</strong>.</p>
            <p class="ma0 pa0 lh-title f5">Because each of their phones is an IPFS node, they don't need wi-fi or cell data to communicate, and they don't need to bother with usernames and passwords to use the app.</p>
          </div>
        </div>
        <div class="flex w-50 ml4 pa3 h100 bg-gray-muted">
          <img class="desaturate o-40 mr4" src="/assets/img/how-diagram.svg">
        </div>
      </div>
     <div class="flex items-center justify-center mt4 mb3">
       <div class="dib overflow-hidden ba br2 mr3 b--gray">
         <nav class="cf" data-name="pagination-numbers-bordered">
           <a class="fl dib dim f6 b pa2 br b--gray" href="#" title="Previous">&larr; Prev</a>
           <a class="fr dib dim f6 b pa2" href="#" title="Next">Next &rarr;</a>

           <div class="overflow-hidden center dt tc">
             <a class="dtc dim bg-gray-muted f6 b pa2 br b--light-silver" href="#" title="1">1</a>
             <a class="dtc dim f6 b pa2 br b--gray" href="#" title="2">2</a>
             <a class="dtc dim f6 b pa2 br b--gray" href="#" title="3">3</a>
             <a class="dtc dim f6 b pa2 br b--gray" href="#" title="4">4</a>
             <a class="dtc dim f6 b pa2 br b--gray" href="#" title="5">5</a>
           </div>
         </nav>
       </div>
       <div>
         <input type="checkbox" id="dev-mode" name="dev-mode" checked>
         <label for="dev-mode" class="f6 fw6">Dev mode</label>
       </div>

     </div>
    </div>

    <div class="next-steps bg-white pa4 ba bw1 br3 b--gray-muted mt4">
      <h3 class="f3 ma0 pa0">
        Dig deeper
      </h3>
      <div class="flex mt2 justify-between">
        <div class="w-33 mr4">
          <p class="lh-title">Visit ProtoSchool for interactive tutorials on distributed-web basics.</p>
          <a class="fw7" href="https://proto.school/tutorials?course=ipfs" target="_blank">Go to ProtoSchool&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33 mr4">
          <p class="lh-title">Learn about core IPFS concepts, plus examples and how-tos, in the docs.</p>
          <a class="fw7" href="https://docs.ipfs.io" target="_blank">Explore IPFS docs&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33">
          <p class="lh-title">Just want to dive in? Install now and try IPFS for yourself.</p>
          <a class="fw7" id="why" href="#install">Install IPFS&nbsp;&nbsp;&gt;&gt;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
img.desaturate {
	filter: grayscale(100%);
}
</style>
