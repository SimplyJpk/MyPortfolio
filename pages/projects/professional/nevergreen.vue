<template>
  <div class="PageBody">
    <b-img src="/images/Projects/Nevergreen/BannerSmall.jpg" class="Banner" alt="Nevergreen Banner" />
    <h1>Nevergreen</h1>
    <p>Online Upgraded Build (2020): <a href="https://simplyjpk.itch.io/nevergreen">Itch.io</a><br></p>
    <div class="Involvement">
      <h5><u>Involvement</u></h5>
      <b-container fluid>
        <span v-for="(item, index) in Tasks" :key="item.key + item.name" class="Justify">
          <template v-if="$vssWidth > 1000">
            <b-row v-if="index % 2 === 0">
              <b-col cols="2">
                <img v-if="Tasks[index].icon !== undefined" :src="Tasks[index].icon" class="TaskImage">
              </b-col>
              <b-col cols="4">
                <p><b>{{ Tasks[index].name }}</b>: {{ Tasks[index].desc }}</p>
              </b-col>
              <b-col v-if="(index+1) < Tasks.length" cols="2">
                <img v-if="Tasks[index+1].icon !== undefined" :src="Tasks[index+1].icon" class="TaskImage">
              </b-col>
              <b-col v-if="(index+1) < Tasks.length" cols="4">
                <p><b>{{ Tasks[index+1].name }}</b>: {{ Tasks[index+1].desc }}</p>
              </b-col>
            </b-row>
          </template>
          <template v-else>
            <b-row> <b-col class="TaskImageMob">
              <img v-if="Tasks[index].icon !== undefined" :src="Tasks[index].icon" class="TaskImage" fluid>
            </b-col> </b-row>
            <b-row> <b-col>
              <p><b>{{ Tasks[index].name }}</b>: {{ Tasks[index].desc }}</p>
              <br>
            </b-col> </b-row>
          </template>
        </span>
      </b-container>
      <br>
    </div>
    <div class="Pitch">
      <h5><u>The Pitch</u></h5>
      <p>
        Nevergreen is a 2.5D platforming game, with the objective of the game to guide BEC, the main character of the game among giant forest and abandoned industrial factories in an exciting and atmospheric puzzle platformer, and discover truth behind BEC’s past and find out what happened to the world around her.
      </p>
    </div>
    <div class="GameVideos">
      <h5><u>Videos</u></h5>
      <b-container>
        <b-row>
          <b-col class="VideoDiv" cols="6">
            <iframe
              class="PVideo"
              allowfullscreen
              allowtransparency="true"
              src="https://www.youtube.com/embed/ShTnoB2mBKQ?rel=0"
            />
            <p class="VideoTitle">
              Trailer used for the assignment (2016).
            </p>
          </b-col>
          <b-col class="VideoDiv" cols="6">
            <iframe
              class="PVideo"
              allowfullscreen
              allowtransparency="true"
              src="https://www.youtube.com/embed/ZZfxmCudXYE?rel=0"
            />
            <p class="VideoTitle">
              Nevergreens credit sequence created by Brianna Rippon.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="ShortDescription">
      <h5><u>What</u></h5>
      <p>
        Nevergreen was the first group project as the first year final project at AIE. The first real-world experience working within a team with other Programmers, Artists and Designers, the projects purpose was to simulate making a group in a 'commercial' environment.
        <br><br>
        The scope of the project was relatively small as there was a lot of other smaller assignments that were involved, scope, design, art bibles, pitch presentations, etc. These things aside, the project was still very ambitious, submitting a fair chunk less than planned. The final product did demonstrate a proof of concept, and while not inheritantly fun on an excitement level, it did intrege a lot of players, who were more curious to learn more of the lore.
      </p>
    </div>
    <div class="Upgrade">
      <h5><u>The Upgrade</u></h5>
      I revisited this project in 2020 with a few days, updating the engine to Unity 2019.4 LTS, many additional features were introduced and bugs were fixed. I also ported the game to support WebGL which involved a few tweaks, additional improvements to art assets to shrink the build size by over 100mb and improve the scenes life by adding additional art assets and introducing more swaying shaders. Several other details were added, but a more collective list can be found on the itch page.
    </div>
    <br>
    <div class="TeamDesc">
      <h5><u>Team</u></h5>
      <p>
        Nevergreen was made as a group project involving multiple streams.
      </p>
      <b-container>
        <b-row>
          <b-col>
            <h6><u>Artists</u></h6>
            <p>
              - <b>Chloe Brett</b> <span style="font-size:70%">(Lead Character artist, Foilage artist)</span><br>
              - <b>Alex</b> <span style="font-size:70%">(Lead Rigger, Particle Effects animator and 3D artist)</span><br>
              - <b>Elizabeth</b> <span style="font-size:70%">(Lead 2D Artist)</span><br>
              - <b>Maddie</b> <span style="font-size:70%">(Generalist - 3D art, 2D art & grass animator, Typographer sound engineer)</span><br>
              - <b>Brianna Rippon</b> <span style="font-size:70%">(Lead 3D animator, 2D animator, Credits, Motion graphics)</span><br>
            </p>
          </b-col>
          <b-col>
            <h6><u>Designers</u></h6>
            <p>
              - <b>Mike</b><br>
              - <b>Dai-Wei Pobjie</b><br>
              - <b>Connor Urwin</b><br>
            </p>
            <h6><u>Programmers</u></h6>
            <p>
              - <b>James Kellie / SimplyJpk</b><br>
              - <b>Hanih Saneen</b><br>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="ConceptArtSliderContainer">
      <h5><u>Concept Art</u></h5>
      <p>
        The following was created by the very tallented artists, Chloe, Alex, Elizabeth, Maddie and Brianna.
      </p>
      <client-only>
        <Swiper ref="ConceptArt" :options="ConceptArtSliderOptions">
          <CarouselSlide
            v-for="item in NevergreenImages[0].contents"
            :key="NevergreenImages[0].key + item.name"
            :title="item.name"
            :imageSource="item.path"
            :alt="item.alt"
            :height="360"
            :lazy="false"
          />
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </Swiper>
      </client-only>
    </div>
    <div class="SceneAssets">
      <h5><u>Scene Assets</u></h5>
      <p>
        Art assets used in the main scene of the project by our artists.
      </p>
      <Swiper ref="SceneAssetsArt" :options="SceneAssetsSliderOptions">
        <CarouselSlide
          v-for="item in NevergreenImages[1].contents"
          :key="NevergreenImages[1].key + item.name"
          :title="item.name"
          :imageSource="item.path"
          :alt="item.alt"
          :height="200"
          :lazy="false"
        />
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
      </Swiper>
      <Swiper ref="SceneAssetsArt2" :options="SceneAssetsSliderOptions">
        <CarouselSlide
          v-for="item in NevergreenImages[2].contents"
          :key="NevergreenImages[2].key + item.name"
          :title="item.name"
          :imageSource="item.path"
          :alt="item.alt"
          :height="200"
          :lazy="false"
        />
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
      </Swiper>
    </div>
    <div class="Downloads">
      <h3><u>Downloads</u></h3>
      <p>
        During development documents were made for certain tasks ensuring marks for assignments. A few have been provided below, including the submitted build and a link to the online version of the game.
      </p>
      <p>
        Online Upgraded Build (2020): <a target="_blank" href="https://simplyjpk.itch.io/nevergreen">Itch.io</a><br>
        Assessed Build (2016): <a href="/dl/projects/nevergreen/Nevergreen.7z" download>Download</a> <span class="smText">112mb</span><br>
        Game Design Doc: <a href="/dl/projects/nevergreen/GameDesignDocument.docx">Download</a><br>
        Post Mortem: <a href="/dl/projects/nevergreen/Post-Mortem.docx">Download</a>
      </p>
    </div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import CarouselSlide from '~/components/image/MyCarouselSlide'

import Tasks from '~/assets/data/projects/nevergreen/Involvement.js'
import NevergreenImages from '~/assets/data/imageData/Nevergreen.js'

export default {
  components: {
    CarouselSlide
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data () {
    return {
      Tasks,
      NevergreenImages,
      ConceptArtSliderOptions: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        setWrapperSize: 50,
        threshold: 5,
        speed: 750,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      },
      SceneAssetsSliderOptions: {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
        setWrapperSize: 50,
        threshold: 5,
        speed: 750,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          720: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>

<style scoped>
/* TODO This is pretty ugly, look into a better way of fading in loading objects that won't break other transitions. */
.lazyLoad.isLoading {
  opacity: 0;
}
.lazyLoad.isLoaded {
  transition: 1s;
  opacity: 1;
}
</style>

<style scoped>
.PageBody {
  transform: translateY(calc(var(--SiteTopMargin) * -1));
}
.Banner {
  width:100%;
  min-height: 240px;
  height:240px;
  margin-bottom: 1rem;
}
.TaskImageMob {
  display: block;
  text-align:center;
}
.TaskImageMob .TaskImage {
  width: auto;
  height: 100%;
}
.TaskImage {
  image-rendering: -webkit-optimize-contrast;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;
  height:auto;
  width:100%;
  border-radius: 24px;
  min-height: 128px;
  min-width: 128px;
  max-height: 256px;
  max-width: 256px;
  padding: 4px;
  background-color: var(--SideNavigationBackground);
}
.RedText {
  color:red;
}
</style>

<style scoped>
.swiper-pagination {
  position:relative;
  background-color: var(--CarouselSlideTitleColour);
  width:100px;
  margin-left:auto;
  margin-right:auto;
  border-radius: 8px;
}
.VideoDiv {
  widows: 100%;
}
.VideoTitle {
  height: 40px;
  width: 100%;
}
.PVideo {
  width: 100%;
  height: 360px;
  margin-bottom:0.5rem;
}
</style>
