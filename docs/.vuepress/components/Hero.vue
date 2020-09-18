<template>
  <div class="bg-light-gray tc pv5">
    <h1 class="f1 ma0">IPFS is...</h1>
    <div class="f2 mt2 h2 mb5 gray relative">
      <div class="fader absolute w-100"><div class="tc">A protocol</div></div>
      <div class="fader absolute w-100">The next-generation web</div>
    </div>
    <div>
      <a class="f4 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mr2" href="#0">Why IPFS</a>
      <a class="f4 link dim ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray ml2" href="#0">Get Started</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .fader:nth-child(1){
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate-reverse;
  }

  .fader:nth-child(2){
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
  }

  @keyframes fade{
      0%,45% {
        opacity: 0;
  }
      100%{
        opacity: 1;
    }
  }
</style>
