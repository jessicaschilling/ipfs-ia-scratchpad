<template>
  <div class="bg-washed-blue tc pt6 pb5">
    <h1 class="f1 mv4">IPFS is ...</h1>
    <div class="f2 mt2 h2 mb5 gray tc relative">
      <div class="fader absolute w-100"><div class="tc">Decentralized file storage</div></div>
      <div class="fader absolute w-100">The next-generation web</div>
    </div>
    <div class="tc">
      <a class="button-secondary f4 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib mr2" href="#why">Why IPFS?</a>
      <a class="button-primary f4 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib b--teal white bg-teal ml2" id="about" href="#install">Get Started</a>
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
