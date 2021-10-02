<template>
  <b-container fluid class="mt-5 pt-5">
    <b-row class="mb-3">
      <h3 class="col-12 col-md-8">Categories</h3>
    </b-row>
    <grid
      :fields="fields"
      :isBusy="Loading"
      :values="CategoriesList"
      :tableId="'TableId1'"
    >
      <template v-slot:cell(action)="row">
        <input
          type="checkbox"
          :value="row.item.index"
          :id="row.item.index"
          v-model="row.item.selected"
          @click="LoadRowDetails(row) && row.item.selected"
        />
        {{ row.item.name }}
      </template>
      <template v-slot:row-details="row">
        <b-card header="Category Details">
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><strong>Name:</strong></b-col>
            <b-col>{{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><strong>Id:</strong></b-col>
            <b-col>{{ Category.id }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"
              ><strong>Categories:</strong></b-col
            >
            <b-col>{{ Category.categories }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"
              ><strong>Icon Url:</strong></b-col
            >
            <b-col>{{ Category.icon_url }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"
              ><strong>Updated At:</strong></b-col
            >
            <b-col>{{ Category.updated_at }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><strong>Url:</strong></b-col>
            <b-col>{{ Category.url }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><strong>Value:</strong></b-col>
            <b-col>{{ Category.value }}</b-col>
          </b-row>
        </b-card>
      </template>
    </grid>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Grid from '@/components/shared/Grid.vue';

export default {
  components: {
    Grid,
  },
  computed: {
    ...mapGetters({
      Category: 'categoriesStore/Category',
      Categories: 'categoriesStore/Data',
      Loading: 'categoriesStore/IsLoading',
    }),
    fields() {
      return [
        {
          key: 'index',
          label: 'Index',
          sortable: true,
        },
        {
          key: 'name',
          label: 'Category',
          sortable: true,
        },
        {
          key: 'action',
          label: 'Category Details',
          sortable: true,
        },
      ];
    },
    CategoriesList() {
      if (!this.Categories || this.Categories.length < 1) {
        return [];
      }
      return this.Categories;
    },
  },
  data() {
    return {
      checkedCategories: false,
    };
  },
  methods: {
    ...mapActions({
      LoadCategoryDetails: 'categoriesStore/LoadCategoryDetails',
      Load: 'categoriesStore/Load',
    }),
    LoadRowDetails(row) {
      row.toggleDetails();
      this.LoadCategoryDetails(row.item.name);
    },
  },
  mounted() {
    this.Load();
  },
};
</script>
