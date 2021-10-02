<template>
  <b-container fluid class="mt-5 pt-5">
    <b-row class="mb-3">
      <h3 class="col-12 col-md-8">People</h3>
    </b-row>
    <grid :fields="fields" :isBusy="Loading" :values="PeopleList" :tableId="'TableId1'" />
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
      Loading: 'peopleStore/IsLoading',
      People: 'peopleStore/Data',
    }),
    fields() {
      return [
        {
          key: 'name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'height',
          label: 'Height',
          sortable: true,
        },
        {
          key: 'mass',
          label: 'Mass',
          sortable: true,
        },
        {
          key: 'hair_color',
          label: 'HairColor',
          sortable: true,
        },
        {
          key: 'skin_color',
          label: 'SkinColor',
          sortable: true,
        },
        {
          key: 'eye_color',
          label: 'EyeColor',
          sortable: true,
        },
        {
          key: 'birth_year',
          label: 'BirthYear',
          sortable: true,
        },
        {
          key: 'gender',
          label: 'Gender',
          sortable: true,
        },
        {
          key: 'created',
          label: 'Created',
          sortable: true,
        },
        {
          key: 'edited',
          label: 'Edited',
          sortable: true,
        },
        {
          key: 'url',
          label: 'Url',
          sortable: true,
        },
      ];
    },
    PeopleList() {
      if (!this.People || this.People.length < 1) {
        return [];
      }
      return this.People;
    },
  },
  methods: {
    ...mapActions({
      Load: 'peopleStore/Load',
    }),
  },
  mounted() {
    this.Load();
  },
};
</script>
