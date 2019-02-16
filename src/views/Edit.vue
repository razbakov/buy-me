<template>
  <div class="row">
    <h2>Ingredients list</h2>
    <div class="input-group"
      v-for="item in $store.state.ingredients.collection"
      :key="item.id">
      <input type="text" placeholder="Ingredient (English)" class="form-control" v-model="item.title">
      <input type="text" placeholder="Translation" class="form-control" :value="item.translation" @input="setTranslation(item.id, $event.target.value)">
      <input type="text" placeholder="Photo" class="form-control" :value="item.photo" @input="setPhoto(item.id, $event.target.value)">
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

  public setTranslation(id: string, itemValue: string) {
    this.$store.dispatch('ingredients/set', {
      id,
      translation: itemValue,
    });
  }

  public setPhoto(id: string, itemValue: string) {
    this.$store.dispatch('ingredients/set', {
      id,
      photo: itemValue,
    });
  }

  public addIngredient() {
    this.$store.dispatch('ingredients/set', {
      title: this.title,
    });
    this.title = '';
  }
}
</script>
