<template>
    <Page>
        <ActionBar title="Estrenos Cine Hoy"/>
        <TabView height="100%" androidTabsPosition="bottom">
            <TabViewItem title="To Do" backgroundColor="grey">
              <GridLayout height="100%">
                <Carousel ref="myCarousel" v-if="hasItems" height="100%" width="100%" color="white" @pageChanged="myChangePageEvent" android:indicatorAnimation="slide" indicatorColor="#fff" indicatorOffset="0, -10" showIndicator="true">
                    <CarouselItem v-for="(movie, i) in trendingMovies._results" :key="i" :todo="movie" verticalAlignment="middle" @tap="myTapPageEvent">
                        <GridLayout>
                          <Image :src="getPoster2XURL(movie._poster_path)" stretch="aspectFill" />
                        </GridLayout>
                    </CarouselItem>
                </Carousel>
            </GridLayout>
            </TabViewItem>
            <TabViewItem title="Completed">
                <WebView src="~/assets/youtube.html" height="250" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script >
import { BeanContainerRegistry } from '../middleware/BeanContainerRegistry'
import MediaManager from '../middleware/modules/vue/mixins/MediaManager'
const youtubeParser = require('nativescript-youtube-parser');
const beanContainer = BeanContainerRegistry.getBeanContainer()

  export default {
    mixins: [MediaManager],
    data() {
      return {
        msg: 'Hello World!....',
        trendingMovies: {
          _page: 1,
          _total_pages: 1,
          _total_results: 1,
          _results: []
        },
        trendingTVShows: {
          _page: 1,
          _total_pages: 1,
          _total_results: 1,
          _results: []
        }
      }
    },
    watch: {
      "trendingMovies._results": async function(oldvalue,newvalue) {
          await this.$nextTick()
          this.$refs.myCarousel.nativeView.refresh()
      }
    },
    methods: {
      hasItems: function() {
        return true
      },
      myChangePageEvent: function(){
      },
      myTapPageEvent: function(){
      },
      loadMovies: async function() {
        const language = 'ES'
        const getTrendingMoviesResponse = await beanContainer.getTrendingMoviesController.getTrendingMovies({ language })
        this.trendingMovies = {...getTrendingMoviesResponse}
        console.log(this.trendingMovies._results)
      }
    },
    mounted() {
      console.log("loading app...")
      this.loadMovies()
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
