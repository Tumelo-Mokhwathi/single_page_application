<template>
  <div id="app">
    <app-header>
      <template #logo>
        <router-link :to="{ name: 'Search' }" class="navbar-brand">
          {{ title }}
        </router-link>
      </template>
      <template #menu>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item
              :key="`rl${index}`"
              :to="item.to"
              v-for="(item, index) in routeLinks"
            >
              {{ item.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </template>
    </app-header>
    <router-view class="router-content" />
    <app-footer :currentYear="currentYear" :version="version" />
  </div>
</template>
<script>
import AppFooter from '@/components/shared/AppFooter.vue';
import AppHeader from '@/components/shared/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  computed: {
    routeLinks() {
      const routeItem = this.$router.options.routes
        .filter((r) => r.name !== 'Landing')
        .map((s) => ({
          to: s.path,
          name: s.name,
        }));
      return routeItem;
    },
    title() {
      return 'Single Page Application';
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      version: process.env.VUE_APP_VERSION,
    };
  },
  name: 'app',
};
</script>
<style></style>
