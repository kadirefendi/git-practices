<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped floating temporary>
      <v-list dense>
        <v-row class="ma-2 mb-3">
          <v-icon class="mx-4" large>mdi-video</v-icon>
          <v-toolbar-title class="align-center">
            <span class="title">VideoKod</span>
          </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in items" :key="item.icon" link>
          <v-list-item-action>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-icon class="mx-4" large>mdi-video</v-icon>
      <v-toolbar-title class="align-center">
        <span class="title">VideoKod</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="mt-6"
        placeholder="Ara ..."
        single-line
        append-icon="mdi-magnify"
        color="white"
        solo
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn class="ml-0" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn class="ma-2" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <div>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="250"
          offset-x
        >
          <template v-slot:activator="{ on }">
            <v-avatar size="40">
              <img v-on="on" src="./assets/logo.png" />
            </v-avatar>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Kadir Arık</v-list-item-title>
                  <v-list-item-subtitle>VideoKod</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>Ayarlar</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="purple"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Karanlık Tema</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="menu = false">
                Çıkış
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row class="mb-4">
          <v-col
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(item, index) in 200"
            :key="index"
          >
            <v-card>
              <v-img
                height="200px"
                :src="`https://picsum.photos/500/300?image=${index + 1}`"
                :lazy-src="`https://picsum.photos/10/6?image=${index + 1}`"
              ></v-img>
              <v-card-subtitle class="">Number {{ item }} </v-card-subtitle>
              <v-card-text class="text--primary"
                ><div>Başlık Alanı</div>
                <div>Başlık İçeriği</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>Kaydet</v-btn>
                <v-btn color="orange" text>Paylaş</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: [
      { icon: 'mdi-trending-up', text: 'Popüler İçerik' },
      { icon: 'mdi-youtube-subscription', text: 'Takip' },
      { icon: 'mdi-history', text: 'Geçmiş' },
      { icon: 'mdi-playlist-play', text: 'Popüler İçerik' },
      { icon: 'mdi-clock', text: 'Popüler İçerik' },
    ],
    menu: false,
    theme: false,
    drawer: false,
  }),
  watch: {
    theme: function(next) {
      this.$vuetify.theme.dark = next
    },
  },
}
</script>
