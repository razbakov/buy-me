<template>
  <div class="row">
    <h2>Ingredients list</h2>
    <div class="input-group"
      v-for="(item, itemIndex) in $store.state.ingredients.collection"
      :key="itemIndex">
      <input type="text" placeholder="Ingredient (English)" class="form-control" v-model="item.title">
      <input type="text" placeholder="Translation" class="form-control" :value="item.translation" @input="setTranslation(itemIndex, $event.target.value)">
      <input type="text" placeholder="Photo" class="form-control" :value="item.photo" @input="setPhoto(itemIndex, $event.target.value)">
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

  public setTranslation(itemIndex: number, itemValue: string) {
    this.$store.commit('ingredients/update', {
      itemIndex,
      itemValue: {
        translation: itemValue,
      },
    });
  }

  public setPhoto(itemIndex: number, itemValue: string) {
    this.$store.commit('ingredients/update', {
      itemIndex,
      itemValue: {
        photo: itemValue,
      },
    });
  }

  public addIngredient() {
    this.$store.commit('ingredients/add', this.title);
    this.title = '';
  }
}
</script>
