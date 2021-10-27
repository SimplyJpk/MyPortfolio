<template>
  <div class="container">
    <div>
      <SocialWelcome class="ExtraMarginSpace" />
      <div class="WelcomePitch Justify">
        <div class="DivContainer ExtraMarginSpace">
          <!-- TODO I MAKE GAMES -->
          <!-- Introduction -->
          <h2>What I do</h2>
          <p>C#/C++ Game & Software programmer located in Queensland Australia with a completed <Link url="https://aie.edu.au/course/game-programming-degree/" word="Bachelor of Games and Virtual Worlds" /> game design and programming focused degree with AIE and CIT completed in 2019.</p>
          <!-- A bit about myself -->
          <p>I've been programming for over 14 years now with a more professional capacity since 2013 when I started using Game Engines and playing around with the C++ & C# languages. I started studying game programming at AIE in 2014 through their short courses and then their Bachelor's course in 2016. Each year these courses would have projects that involved teamwork between different streams to produce a game, I helped make <InlineLink url="/projects/professional/nevergreen" word="Nevergreen" /> in 2016, and <InlineLink url="/projects/professional/doomedbeginning" word="They Were Doomed from the Beginning" /> in 2017.</p>
        </div>
        <div class="MainProjects">
          <div class="ProjectSpace" />
          <!-- TODO Replace these with a Slider showing some images? -->
          <nuxt-link to="/projects/professional/doomedbeginning">
            <BasicProjectDisplay img-alt="Doomed from the Beginning, a 2nd Year Final Project" fast-image="/images/Projects/Summaries/DoomedFromBegginingSplashSquare.webp" img-source="/images/Projects/Summaries/DoomedFromBegginingSplashSquare.jpg" project-text="Doomed from the Beginning" />
          </nuxt-link>
          <div class="ProjectSpace" />
          <!-- TODO Replace these with a Slider showing some images? -->
          <nuxt-link to="/projects/professional/Nevergreen">
            <BasicProjectDisplay img-alt="Nevergreen, a 1st Year Final Project" fast-image="/images/Projects/Summaries/NeverGreenSplash.webp" img-source="/images/Projects/Summaries/NeverGreenSplash.jpg" project-text="Nevergreen" />
          </nuxt-link>
          <div class="ProjectSpace" />
        </div>
        <div class="DivContainer ExtraMarginSpace">
          <h2>Other Work</h2>
          <p>
            I'm often working on smaller temporary projects to learn bits and pieces involved with languages or libraries that I haven't used extensively in the past. Some of the these can be found within <InlineLink url="/projects/side" word="Side Projects" />, with more serious stuff sometimes showing up in my <Link url="https://github.com/SimplyJpk" word="GitHub" />.
          </p>
          <p>
            <Link url="https://vuejs.org/" word="Vue" /> & <Link url="https://nuxtjs.org/" word="Nuxt" /> were used to construct this website without much web-dev experience with a lot of this website crudely constructed by learning what was required as I deemed it necessary to add. This could have done this much faster using a template, but overall a fun experience, with enough room to add content without much additional work.
          </p>
        </div>
        <!-- Everything Else -->
        <div class="DivContainer ExtraMarginSpace">
          <h2>Everything Else</h2>
          <p>
            Over the years I've played around with a lot of stuff and have constructed a collection of gifs from projects which can be found below. Higher quality versions of the video/gif can usually be viewed by clicking on the image, if their is additional information an info can be clicked on the top-right to load a new page which will take you to the relevant content.<br>
            <i style="font-size:70%">WebP formats are being used, I apologise if you are using ancient technology that can not display them correctly.</i>
          </p>
          <SkeletonGallary :images="ProjectGifs" :readMore="true" />
        </div>
        <div>
          <h2>Latest Updates</h2>
          <p>
            Deployed On: <i>{{ DeployDate() }}</i><br>
            Commit [<Link :url="CommitLink()" :word="ShortCommitSHA()" />]: <i>{{ VersionInfo() }}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from '~/components/util/Link'
import InlineLink from '~/components/util/InlineNuxtLink'
import SocialWelcome from '~/components/info/SocialWelcome'
import BasicProjectDisplay from '~/components/info/BasicProjectDisplay'
import SkeletonGallary from '~/components/image/SkeletonGallary'

import ProjectGifs from '~/assets/data/imageData/CollectiveGifs'

export default {
  components: {
    Link,
    SocialWelcome,
    InlineLink,
    BasicProjectDisplay,
    SkeletonGallary
  },
  data () {
    return {
      ProjectGifs
    }
  },
  methods: {
    DeployDate () {
      return process.env.PUBLISH_DATE
    },
    VersionInfo () {
      return process.env.VERSION_INFO
    },
    ShortCommitSHA () {
      if (process.env.COMMIT_SHA.length > 7) {
        return process.env.COMMIT_SHA.substr(0, 7)
      }
      return process.env.COMMIT_SHA
    },
    CommitLink () {
      return process.env.REPO_PATH + '/commit/' + this.ShortCommitSHA()
    }
  }
}
</script>

<style scoped>
.container {
  width:100%;
}

.MainProjects {
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom:16px;
}

.ProjectSpace {
  flex:10%;
  flex-grow: 1;
}

.FlexBox {
  width:100%;
  padding-bottom: 0.5rem;
  display: flex;
}
.ExtraLeftMargin {
  margin-left:2rem;
}
</style>

<style scoped>
h2 {
  font-size: 130%;
  font-weight: bold;
}
p {
  margin-bottom:8px;
}
</style>
