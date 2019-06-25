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
        v-for="(item, index) in photos" v-if="index < (page * limit) && index >= ((page - 1) * limit)"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.thumbnailUrl"
            aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.title}}</h2>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <div class="text-xs-center">
  </div>
  
  </v-layout>
  <v-pagination
      v-model="page"
      :length="Math.round((photos.length) / limit)"
    ></v-pagination>
  </v-container>
</template>

<script>
import AlbumApi from '@/services/AlbumApi'
export default {
  props: ['id'],
  data () {
    return {
      photos: [],
      dialog: false,
      loading: true,
      ratings: '',
      page: 1,
      limit: 20
    }
  },
  mounted () {
    AlbumApi.fetchAlbum(this.id)
      .then(response => {
        this.photos = response
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
  .v-card__title--primary 
    height: 200px  
</style>