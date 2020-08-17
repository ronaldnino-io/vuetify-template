<template>
  <v-navigation-drawer
      id="navigation-side-bar"
      :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
      :expand-on-hover="expandOnHover"
      :right="$vuetify.rtl"
      mobile-breakpoint="960"
      app
      width="260"
      v-bind="$attrs"
      :mini-variant="!drawer"
      mini-variant-width="60"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props"/>
    </template>

    <v-divider class="mb-1"/>
     <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Nombre de la aplicación</v-list-item-title>
              <v-list-item-subtitle>Nombre del Usuario</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

    <v-divider class="mb-2"/>

    <v-list shaped>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div/>

      <template v-for="(item, i) in computedItems">
        <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
            class="align-self-center"
        >
          <!--  -->
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item"/>
      </template>

      <div/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {mapState, mapActions} from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        title: "dashboard",
        icon: "mdi-view-dashboard",
        to: "/dashboard",
      },
      {
        title: "module",
        icon: "mdi-view-module-outline",
        to: "/module",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.UIStore.drawer;
      },
      set(val) {
        this.$store.commit("UIStore/SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t("avatar"),
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
    ...mapActions({logout: 'accountStore/logout'})
  },
};
</script>


