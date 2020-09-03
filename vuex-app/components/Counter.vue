//store.dispatchでcounter.jsのcountUpActionを実行//Dispatchとは処理を実行させることをいう//第二引数はアクションに渡すデータ本体
<template>
  <div>
    <h2>{{ title }}</h2>
    counter:{{ $store.state.counter.count }}
    <button v-on:click="$store.dispatch('counter/countUpAction', countValue)">
      +1
    </button>
    <button v-on:click="$store.dispatch('counter/resetAction')">reset</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "Counter App",
      countValue: 10
    };
  }
};
</script>
