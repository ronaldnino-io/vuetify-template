<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
      rounded="lg"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon>mdi-account-settings</v-icon>
        </v-btn>
      </template>
      
 <v-list flat>
     
      <v-list-item-group color="primary">
        <v-list-item @click="toProfile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item @click="toSettings">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>  
         <v-divider></v-divider>
          <v-list-item @click="toLogout">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>  
      </v-list-item-group>
    </v-list>

    </v-menu>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one",
    ],
  }),

  computed: {
    ...mapState("UIStore", ["drawer"]),
  },

  methods: {
    ...mapMutations("UIStore", {
      setDrawer: "SET_DRAWER",
    }),
    toLogout() {
      console.log(".........");
      this.$router.push("/login");
    },
    toProfile() {
      this.$router.push("/profile");
    },
    toSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
