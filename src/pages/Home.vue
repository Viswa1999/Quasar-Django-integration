<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            
          </q-avatar>
          <b>Plant a Tree</b>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/index" label="LOGIN" />
        <q-route-tab to="/new" label="REGISTER" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
      
    </q-page-container> <br>
    <q-card class="my-card">
      <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab8_-KiSTnvCxENiHDIsNdh6JmhlzwHk8aw&usqp=CAU" />
      

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Neem Tree
          </div>
          
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Indian Tree
        </div>
        <div class="text-caption text-grey">
            This has a brief history in our homeland
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Plant now for free
        </q-btn>
      </q-card-actions>
      
    </q-card>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      stars: 4,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>