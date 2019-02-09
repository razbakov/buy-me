<template>
  <div class="row">
    <h2>Ingredients list</h2>
    <div class="input-group"
      v-for="(item, itemIndex) in $store.state.collection"
      :key="itemIndex">
      <input type="text" placeholder="Ingredient (English)" class="form-control" v-model="item.Title">
      <input type="text" placeholder="Translation" class="form-control" :value="$store.state.translations[item.Title]" @input="setTranslation(item.Title, $event.target.value)">
      <input type="text" placeholder="Photo" class="form-control" :value="$store.state.photos[item.Title]" @input="setPhoto(item.Title, $event.target.value)">
    </div>
    <div class="input-group">
      <input type="text" placeholder="Ingredient (English)" class="form-control" v-model="title">
      <button class="btn btn-success" @click="addIngredient()">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Edit extends Vue {
  public title = '';
  public setTranslation(itemKey: string, itemValue: string) {
    this.$store.commit('setTranslation', {itemKey, itemValue});
  }
  public setPhoto(itemKey: string, itemValue: string) {
    this.$store.commit('setPhoto', {itemKey, itemValue});
  }
  public addIngredient() {
    this.$store.commit('addIngredient', this.title);
    this.title = '';
  }
}
</script>
