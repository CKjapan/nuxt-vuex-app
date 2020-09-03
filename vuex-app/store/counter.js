export const state = () => ({
  count: 0
});
// ストアに状態を持たせるstateを登録

export const mutations = {
  countUp(state, payload) {
    state.count = state.count + payload;
  },
  reset(state) {
    state.count = 0;
  }
};
// ストアにstateを更新するmutationを登録//payloadとはデータ本体のことをいう

export const actions = {
  countUpAction(context, payload) {
    context.commit("countUp", payload);
  },
  resetAction(context) {
    context.commit("reset");
  }
};
// ストアにmutationを起動するactionsを登録//payloadとはデータ本体のことをいう
