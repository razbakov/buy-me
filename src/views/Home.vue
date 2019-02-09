<template>
  <div class="row">
    <div
      v-for="(item, itemIndex) in $store.state.collection"
      class="col-md-4 col-sm-6 mb-3"
      :key="itemIndex">
      <div class="card" :class="{done: item.done}" @click="triggerIngredient(itemIndex)">
        <div class="ingredient-photo">
          <img :src="$store.state.photos[item.Title] || 'https://via.placeholder.com/640'" class="card-img-top" :alt="item.Title">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ item.Title }}</h5>
          <p class="card-text ingredient-translation">{{ $store.state.translations[item.Title] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public triggerIngredient(itemIndex: number) {
    this.$store.commit('triggerIngredient', itemIndex);
  }
}
</script>

<style lang="stylus">
.ingredient-photo
  height 160px
  overflow hidden
.ingredient-translation
  height 1em
.done
  opacity 0.5
</style>

