<template>
  <div class="home-page mt-8">
    <SearchInput @update:inputValue="setSearch" />
    <VDataTable
      :headers="tableHeaders"
      :items="packagesData"
      :items-per-page="10"
      item-value="name"
      class="elevation-1 my-6"
      height="600"
      :search="search"
      :loading="loading"
      @click:row="openModal"
    />
    <VDialog v-model="isModalOpen" width="auto">
      <ModalContent :packageInfo="packageInfo" @onModalClose="closeModal" />
    </VDialog>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import packagesApi from "@/api";
import { tableHeaders } from "@/views/HomeView/config.table";
import { ref } from "vue";
import { VDataTable } from "vuetify/labs/components";
import ModalContent from "@/components/ModalContent.vue";

export default {
  name: "HomeView",
  components: {
    ModalContent,
    SearchInput,
    VDataTable
  },
  setup() {
    const packagesData = ref([]);

    const loading = ref(false);
    const search = ref("");
    const setSearch = (val) => {
      search.value = val;
    };
    const getPackagesData = async () => {
      loading.value = true;
      try {
        const resp = await packagesApi.getAllPackages();
        packagesData.value = await resp.json();
      } catch (err) {
        console.log(err);
      } finally {
        loading.value = false;
      }
    };
    getPackagesData();

    //dialog logic
    const isModalOpen = ref(false);
    const packageInfo = ref({});
    const openModal = (event, { item }) => {
      packageInfo.value = item.props.title;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      tableHeaders,
      packagesData,
      loading,
      search,
      setSearch,
      openModal,
      isModalOpen,
      closeModal,
      packageInfo
    };
  }
};
</script>
