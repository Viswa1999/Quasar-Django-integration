<template>
<center>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">WELCOME AGAIN FRIEND</div>
        <div class="text-subtitle2">TO MAKE NATURE GREENER</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab color="teal" label="LOGIN" name="one" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input standout="bg-teal text-white" v-model="email" hint="Enter your registered email" 
      lazy-rules
        :rules="[ val => val && val.length > 10 || 'Please type something']"
        label="Enter your email" />
        <q-input color="teal" v-model="password" filled type="password" hint="Password" />

    </div>
    </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-tab-panel>

        
      </q-tab-panels>
    </q-card>
  </div>
  </center>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      age: null,
      tab: 'one',
      accept: false,
      text: '',
      email:'',
      password: ''
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 250px
</style>
