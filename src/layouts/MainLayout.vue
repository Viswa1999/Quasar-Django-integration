<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          Let the green be seen
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/laws" label="LAWS" />
        <q-route-tab to="/home" label="PLANT TREES" />
        <q-route-tab to="/donate" label="DONATE" />
        <q-route-tab to="/new" label="REGISTER" />
        <q-route-tab to="/index" label="LOGIN" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
      
    </q-page-container>
    <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAz-QMANEux5d5kYKOLCV9DRPNx5BnLyayrw&usqp=CAU" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-sm row items-start">
      

      <q-uploader
        url="http://localhost:4444/upload"
        label="Batch upload"
        multiple
        batch
        style="max-width: 300px"
      />
    </div>
  </div>
  <div v-if="jobs.length">
  <div v-for="job in jobs" :key="job.id" class="job">
    <h1>{{job.title}}</h1>
  </div>
  </div>
  <div v-else><p>Loading Details</p></div>
  {{post_data}}
  <div class="q-pa-md" style="max-width: 400px">
    <div v-if="isSuccess">Post Created successfully</div>
    <q-form
      @submit.prevent="addNote"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="title"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="content"
        label="Your content *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <!--q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /-->
      </div>
    </q-form>

  </div>
  </q-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      right: false,
      slide: 1,
      title:'',
      content:'',
      isSuccess:false,
      //accept: false,
      //data: null,
      jobs:[],
      'post_data': null,
      }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>this.jobs = data)
        .catch(err=>console.log(err.message))
  },
  methods: {
      load_data() {
        axios.get('http://127.0.0.1:8000/api/tasks/').then((resp) => {
          this.post_data = resp.data;
        })
      },
      addNote() {
        axios.post('http://localhost:8000/api/tasks/',
        {title:this.title,content:this.content},)
        .then((resp)=> {
          this.isSuccess = true;
          console.log(resp);
          //this.post_data = resp.data;
        });
        //this.notes.push(this.title);
        //this.title="";
      },
  },
  created() {
      this.load_data();
    }
  /*methods: {
  loadData () {
    api.get('/api/tasks/')
      .then((response) => {
        this.data = response.data
      })
  }
  }*/
  /*methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
    } else {
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
      this.content = null
      this.accept = false
    }
  },
  onSubmit() {
    this.$axios.post('http://localhost:8000/api/tasks/',
        {title:this.title,content:this.content},)
        .then((resp)=> {
          console.log(resp);
          //this.post_data = resp.data;
        });
        //this.notes.push(this.title);
        //this.title="";
      },
  loadData () {
    this.$axios.get('http://localhost:8000/api/tasks')
      .then((response) => {
        this.data = response.data
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }*/
}
</script>
