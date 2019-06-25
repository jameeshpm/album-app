<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs3
        v-for="(item, index) in wholeResponse" v-if="index < (page * limit) && index >= ((page - 1) * limit)"
        :key="index"
        mb-2>
        <v-card>
          <img
            src='@/assets/no-image.png'
            aspect-ratio="1"
          ></img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.title}}</h2>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
              @click="getAlbum(item.id)"
              >View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
      <div class="text-xs-center">
  </div>
  
  </v-layout>
  <v-pagination
      v-model="page"
      :length="Math.round((wholeResponse.length) / limit)"
    ></v-pagination>
  </v-container>
</template>

<script>
import AlbumApi from '@/services/AlbumApi'
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true,
      page: 1,
      limit: 10
    }
  },
  mounted () {
    AlbumApi.fetchAlbumCollection()
      .then(response => {
        this.wholeResponse = response
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getAlbum (id) {
      this.$router.push('/album/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
  img
    width: 100% 
  .v-card__title--primary 
    height: 200px
</style>