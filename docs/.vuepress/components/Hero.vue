<template>
  <div class="bg-washed-blue tc pt6 pb5">
    <h1 class="f1 mv4">IPFS is ...</h1>
    <div class="f2 mt2 h2 mb5 charcoal-muted tc relative">
      <div class="fader absolute w-100">Decentralized file storage + delivery</div>
      <div class="fader absolute w-100">A protocol for building peer-to-peer apps</div>
      <div class="fader absolute w-100">A path to a permanent, resilient web</div>
      <div class="fader absolute w-100">The next generation of the internet</div>
    </div>
    <div class="tc">
      <a class="button-secondary f4 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib mr2" href="#why">Why IPFS?</a>
      <a class="button-primary f4 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib b--teal white bg-teal ml2" id="about" href="#install">Get Started</a>
    </div>
  </div>
</template>



<style lang="stylus" scoped>
  .fader {
    opacity: 0;
    animation-name: fade;
    animation-duration: 12s;
    animation-iteration-count: infinite;
  }
  .fader:nth-child(1){
  }
  .fader:nth-child(2){
    animation-delay: 3s;
  }
  .fader:nth-child(3){
    animation-delay: 6s;
  }
  .fader:nth-child(4){
    animation-delay: 9s;
  }

  @keyframes fade{
      0%, 20%, 100% {
        opacity: 1;
  }
      30%, 99%{
        opacity: 0;
    }
  }
</style>
