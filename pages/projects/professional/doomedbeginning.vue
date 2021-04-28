<template>
  <div class="PageBody">
    <img src="/images/Projects/DoomedFromTheBeginning/Other/Banner.jpg" class="Banner" alt="Doomed From the Beginning Banner">
    <h1>They Were Doomed from the Beginning</h1>
    <div class="ShortDescription">
      <h5><u>Why</u></h5>
      <p>
        The project was made for a Second Year UNI assignment which involved groups of developers from separate streams working together to create a functional product while working in a way that replicates some of the real-world. Teams would have to come up with an Elevator pitch for the game and basically a rudimentary GDD that would include details about the product/project and the teachers from the streams involved (Programmers, Artists and Designers) would critique the pitched details.
        <br><br>
        After getting feedback on the pitched project, teams may need to refactor ideas, or if teachers thought there wasn't enough information or that the team might not work together, the project may be scrapped and developers would have to join another team. Thankfully this project made it past all the interviews with little additional work, however, we were the smallest team which was one of our largest risks moving forward.
      </p>
    </div>
    <div class="TheGameDescription">
      <!-- Should make a style or rule for this, less than 1200 is pretty obscure rule -->
      <div v-bind:class="['FlexBox', this.$vssWidth <= 1200 ? 'FlexCol' : 'FlexRow']">
        <div class="GameDescriptionText">
          <h5><u>What</u></h5>
          <p>
            They Were Doomed From The Beginning is an Interactive story with RPG elements, ever changing narrative mechanics and narrative combat. The start of the game pans from a door in a atmospheric environment towards a book on a table, the player is greeted by the main menu. <br><br>When starting a new game players will draw cards from a Tarot Deck, which will determine their party of characters, the weapons and magic they wield, some of their past, the adventures they’ll have and... their ultimate fate.
          </p>
        </div>
        <div v-if="!IsSingleColumnWidth(this.$vssWidth)" class="FlexSpace" />
        <div class="ImageCarousel">
          <Swiper
            :options="DoomedImageCarousel"
            class="SubmittedImages"
          >
            <CarouselSlide
              v-for="item in DoomedData[1]['content']"
              :key="item.name"
              :title="item.name"
              :imageSource="item.path"
              :alt="item.alt"
              :desc="item.desc"
              :height="320"
              class="SlideImage"
            />
          </Swiper>
        </div>
      </div>
    </div>
    <div class="CharacterExplanation">
      <h5><u>Characters</u></h5>
      <p>
        We followed some similar trends from traditional tarot reading, but with some fantasy rpg type themes weaved into them. If you're interested, I'd recommend  <Link url="https://www.google.com/search?q=Tarot+Fool+Symbolism" word="searching" /> for what card Symbology can represent. While not always a direct comparison, there are often similarities between the game and the traditional meanings.
      </p>
      <client-only>
        <b-tabs>
          <b-tab
            v-for="item in CharacterData"
            :key="item.key"
            :title="item.name"
          >
            <DoomedTabs :characterData="item" />
          </b-tab>
        </b-tabs>
      </client-only>
    </div>
    <div class="PitchVideo">
      <h5><u>The Pitch</u></h5>
      <p>
        As part of the selection process to be allowed to move onto the next stage of work a short pitch-video had to be made for the project. This was to be done before much or if at all, any of the project had been started. I spent some time making very crude proof of concept assets for the video, I don't have any vocals in the video, but created all of the unity assets used within the examples.
      </p>
      <div v-bind:class="['FlexBox FlexBetween', IsSingleColumnWidth(this.$vssWidth) ? 'FlexCol' : 'FlexRow']">
        <div class="PVideo">
          <iframe
            class="PVideo"
            allowfullscreen
            allowtransparency="true"
            src="https://www.youtube.com/embed/e1gi5rEYHMg?rel=0"
            data-not-lazy
          />
        </div>
        <div class="PSplashImage">
          <ImgClick source="/images/Projects/DoomedFromTheBeginning/DoomedSplash.jpg" alt="They were doomed from the beginning splash screen" />
        </div>
      </div>
    </div>
    <div class="TechnologyExplain">
      <h5><u>Ticker System</u></h5>
      <div>
        <p>
          The game follows a fairly simple story which all of our characters followed, however, their actions throughout gameplay could result in changes in the world, both in terms to the final outcome at the final scene, but also in how the story evolved using branching and dynamic elements. These were done using a "Ticker" system, a system that could ask questions about details that were chosen to be stored during events and moments when the story has been written/populated and do a variety of things depending on the result of the response.
        </p>
        <p>
          Any time the game loaded the next chunk of the story, an event fired or even in a ticker response the ticker system could be modified and store or remove new data from its module. The main functions it could do was to save a key that would be looked up later for story evolution, but it could also add, multiply and do some simple lookup tables and if-condition like expressions. An example of this is the Fool who can choose to save a dog during the game, later on the story reflects and uses that dog as part of the story, even if they didn't bring the dog, the story is able to remember the choice and show relevant updates.
        </p>
      </div>
    </div>
    <div class="GameLore">
      <h5><u>The World</u></h5>
      <p>
        While the game was made short so that we could scope out enough detail that the story would remain interesting, there was a fair bit of lore around the game. We sadly did not have the time to flesh out a lot of the smaller details around the events in the game, but we still tried to create interesting and diverse characters and creatures for the game. With only the one fulltime artist assets were hard to make, and as such were a more limiting factor if the characters wern't to be interacted with and just another element of the story, they often had to be put on the "maybe one day" list. However, a few nice animations were made for the game, some of which can be found below.
      </p>
      <div class="VideoCarousel">
        <Swiper
          :options="DoomedVideoCarousel"
          class="InGameMedia"
        >
          <CarouselSlide
            v-for="item in DoomedData[2]['content']"
            :key="item.name"
            :title="GetCaption(item)"
            :desc="GetDesc(item)"
            :imageSource="item.path"
            :video="true"
            :height="320"
            :width="720"
            class="MediaSlide"
          />
        </Swiper>
      </div>
    </div>
    <div class="Downloads">
      <h3><u>Downloads</u></h3>
      <p>
        Several documents were made throughout the development of this project as it was a UNI course, I've provided some of the more interesting documents and the build that was submitted for assessment.
      </p>
      <p>
        Assessed Build: <a href="/dl/projects/doomed/TheyWereDoomedFromTheBeginning_2017.7z" download>Download</a> <span class="smText">260mb</span><br>
        Post Mortem: <a href="/dl/projects/doomed/PostMortem_DoomedBeginning.pdf" download>Download</a><br>
        Technical Design Doc: <a href="/dl/projects/doomed/TechDesignDoc_DoomedBeginning.pdf" download>Download</a><br>
        Game Design Doc: <a href="/dl/projects/doomed/GDD_DoomedBeginning.pdf" download>Download</a>
      </p>
    </div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import Link from '~/components/util/Link'

import CharacterData from '~/assets/data/projects/doomed/CharacterData'
import DoomedData from '~/assets/data/imageData/DoomedBeginning'
import DoomedTabs from '~/components/projects/doomed/tabs/DoomedTabs'
import ImageOrganizer from '~/assets/data/imageData/ImageDataOrganizer'

import ImgClick from '~/components/image/ImgClick'
import CarouselSlide from '~/components/image/MyCarouselSlide'

export default {
  components: {
    DoomedTabs,
    Link,
    ImgClick,
    CarouselSlide
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data () {
    return {
      DoomedData,
      ImageOrganizer,
      CardCount: 0,
      CurrentCardFlipID: -1,
      CurrentCard: undefined,
      CharacterData,
      DoomedImageCarousel: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        setWrapperSize: 50,
        threshold: 5,
        speed: 750,
        autoplay: {
          delay: 3000,
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
        }
      },
      DoomedVideoCarousel: {
        loop: false,
        slidesPerView: 1,
        threshold: 5,
        speed: 1000,
        autoplay: {
          delay: 10000,
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
        }
      }
    }
  },
  methods: {
    GetCaption (item) {
      if (item === undefined) { return '' }
      return item.title
    },
    GetDesc (item) {
      if (item === undefined) { return '' }
      return item.alt
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
.FlexBox {
  width:100%;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content:space-between;
  text-align: justify;
}
.FlexBetween {
  justify-content: space-around;
}
.GameDescriptionText {
  width:100%;
  flex-grow: 1;
  margin-right: 1rem;
}
.VideoCarousel {
  margin: 0 auto;
  max-width:480px;
}
.MediaSlide {
  width: 500px;
}
</style>
<style scoped>
.SlideImage {
  overflow:hidden;
  padding:0px !important;
  max-width:100%;
  padding-top:10px;
  padding-bottom:10px;
  background-color: #22222278;
  border-radius: 15px 15px 15px 15px;
  border: 0.25rem solid #1e1e1e;
}
.SubmittedImageTitle {
  top:1rem;
  width: 30%;
  text-align: center;
  position: absolute;
  z-index: 1;
}
.SubmittedImageTitle h3 {
  font-size: 110%;
  text-shadow: 2px 2px #1e1e1e;
}
.SubmittedImageTitle p {
  font-size: 80%;
  text-shadow: 1px 1px #1e1e1e;
  margin-bottom: 0;
}
.CarouselImage {
  height:inherit;
  width:inherit;
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
</style>

<style>
.nav-tabs .active {
  background-color:#2f2f2f !important;
  color:white !important;
}
</style>

<style scoped>
.SubmittedImages {
  width:100%;
  max-width:600px;
  height:100%;
}
.ImageCarousel {
  height:100%;
  margin:auto;
  max-width: 100%;
  flex:60%;
}
.CharacterExplanation {
  width:100%;
  border-bottom: 1px var(--BorderColour) solid;
  margin-bottom:1rem;
}
.TechnologyExplain {
  margin-bottom:1rem;
}
.PitchVideo {
  margin-bottom:1rem;
}
.PVideo {
  max-width:600px;
  width:100%;
  flex:50%;
  margin-right:1rem;
  height:240px;
}
@media only screen and (min-width: 1300px) {
  /* Resizes video to fit screen a bit better. Ugly fix. */
  .PVideo {
    height:360px;
  }
}
.PSplashImage {
  position: relative;
  width:100%;
  height:inherit;
  max-width:600px;
  flex:60%;
}
.FlexSpace {
  flex: 2%;
}
</style>
