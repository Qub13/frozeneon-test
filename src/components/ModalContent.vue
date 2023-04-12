<template>
  <VCard>
    <div class="pa-4 package-info">
      <div class="package-info__content">
        <h2 class="content__title">General information</h2>
        <p class="content__text">
          <span class="font-weight-bold">Type:</span> {{ packageInfo.type }}
        </p>
        <p class="content__text">
          <span class="font-weight-bold">Name:</span> {{ packageInfo.name }}
        </p>
        <p class="content__text">
          <span class="font-weight-bold">Hits:</span> {{ packageInfo.hits }}
        </p>
        <p class="content__text">
          <span class="font-weight-bold">Bandwidth:</span> {{ packageInfo.bandwidth }}
        </p>
      </div>
      <div class="package-info__content">
        <h2 class="content__title">Previously</h2>
        <p class="content__text">
          <span class="font-weight-bold">Hits:</span> {{ packageInfo.prev.hits }}
        </p>
        <p class="content__text">
          <span class="font-weight-bold">Bandwidth:</span> {{ packageInfo.prev.bandwidth }}
        </p>
      </div>
      <div class="package-info__content">
        <h2 class="content__title">Links</h2>
        <a :href="packageInfo.links.self" class="content__link">Self</a>
        <a :href="packageInfo.links.versions" class="content__link">Versions</a>
      </div>
      <div class="package-info__content" v-if="additionalPackageInfo.latest">
        <h2 class="content__title">Versions</h2>
        <p class="content__text">
          <span class="font-weight-bold">Latest:</span> {{ additionalPackageInfo.latest }}
        </p>
        <div class="content__versions" v-if="additionalPackageInfo.versions">
          <p class="font-weight-bold">Versions:</p>
          <div class="versions__list">
            <p v-for="version in additionalPackageInfo.versions" :key="version">
              {{ version }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <v-card-actions>
      <v-btn color="blue-lighten-1" block @click="closeModal">Close modal</v-btn>
    </v-card-actions>
  </VCard>
</template>

<script>
import packagesApi from "@/api";
import { ref, computed } from "vue";

export default {
  name: "ModalContent",
  emits: ["onModalClose"],
  props: {
    packageInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("onModalClose");
    };

    const data = ref({});

    const additionalPackageInfo = computed(() => {
      return {
        latest: data.value.tags?.latest || 0,
        versions: data.value?.versions || 0
      };
    });

    const getAdditionalData = async () => {
      try {
        const resp = await packagesApi.getPackageInfo(props.packageInfo);
        data.value = await resp.json();
      } catch (err) {
        console.log(err);
      }
    };
    getAdditionalData();

    return {
      closeModal,
      additionalPackageInfo
    };
  }
};
</script>

<style scoped lang="scss">
.package-info {
  &__content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    row-gap: 10px;

    .content__title {
      width: 100%;
      text-align: center;
    }

    .content__text,
    .content__link {
      width: 50%;
      text-align: center;
    }

    .content__link {
      color: #42a5f5;
      text-decoration: none;
    }

    .content__versions {
      width: 50%;
      display: flex;
      justify-content: center;
      column-gap: 20px;

      .versions__list {
        max-height: 100px;
        overflow: auto;
      }
    }

    @media (max-width: 600px) {
      .content__text,
      .content__versions,
      .content__link {
        width: 100%;
      }
    }
  }
}
</style>
