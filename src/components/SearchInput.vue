<template>
  <v-card class="mx-auto" color="blue-lighten-4" max-width="400">
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search for packages"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        v-model="searchValue"
        @input="emitInputValue"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchInput",
  emits: ["update:inputValue"],
  setup(props, { emit }) {
    const searchValue = ref("");
    const emitInputValue = () => {
      emit("update:inputValue", searchValue.value);
    };

    return {
      searchValue,
      emitInputValue
    };
  }
};
</script>

<style></style>
