<template>
<center>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Become a Member</div>
        <div class="text-subtitle2">for a green nature</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab color="teal" label="REGISTER" name="one" />
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
        <q-input standout="bg-teal text-white" v-model="title" 
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Please enter valid name']"
        label="Enter your  Name" />
    </div>
    
    <div class="q-gutter-md" style="max-width: 300px">
        <q-input standout="bg-teal text-white" v-model="email" hint="Enter your registered email" 
        lazy-rules
        :rules="[ val => val && val.length > 10 || 'Please type something']"
        label="Enter your email" />
    </div>
    <div class="q-gutter-md" style="max-width: 300px">
        <q-input color="teal" v-model="password" filled type="password" hint="Password" />
    </div>
    <div class="q-gutter-md" style="max-width: 300px">
        <q-input color="teal" v-model="password" filled type="password" hint="Password must be same" />
    </div>
    </div>
      <div>
          <div class="q-pa-md q-gutter-sm">
    <q-btn label="Notify" color="primary" @click="alert = true" />
        <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Join us to make our planet a greener. <br>
          <b>World is not only for humans</b><br>
          <a href="#">Read our instructions properly</a>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
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
      title: '',
      email:'',
      password: '',
      alert: false
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
