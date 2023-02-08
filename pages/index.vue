<template>
  <div class="container">
    <div>
      <SocialWelcome class="ExtraMarginSpace" />
      <div class="WelcomePitch Justify">
        <div class="DivContainer ExtraMarginSpace">
          <!-- Introduction -->
          <h2>Me</h2>
          <p>I am a driven and creative C#/C++ game and software developer based in Queensland, Australia. With a Bachelor's degree in Games and Virtual Worlds from AIE and CIT, I am well-equipped to bring unique and innovative solutions to any project.</p>
          <!-- About Me -->
          <p>With over 14 years of experience in programming, I have been honing my skills and exploring my passion for game development. I have developed a strong proficiency in using game engines and working with C++ and C# languages through my studies at AIE, as well as personal projects. During my time at AIE, I had the opportunity to work on several projects that involved teamwork with other streams to create games, such as <InlineLink url="/projects/professional/nevergreen" word="Nevergreen" /> in 2016 and <InlineLink url="/projects/professional/doomedbeginning" word="They Were Doomed from the Beginning" /> in 2017.</p>
          <p>In addition to my academic background, I have also gained practical experience through freelance and personal projects. I have completed a 5-month freelance project involving mobile development, and have worked on various personal projects that have allowed me to further refine my skills and gain experience in a real-world setting. Currently, I am employed full-time as a software developer, further solidifying my expertise in the field.</p>
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
          <h2>Other Projects</h2>
          <p>I enjoy working on various projects to expand my knowledge and try new technologies. Check out my <InlineLink url="/projects/side" word="Side Projects" /> and <Link url="https://github.com/SimplyJpk" word="GitHub" /> to see some of my recent work.</p>
          <p>This website was built from scratch using Vue and Nuxt, with a focus on learning and personal growth. While it could have been faster to use a template, I wanted the challenge and experience of building it from scratch.</p>
        </div>
        <!-- Everything Else -->
        <div class="DivContainer ExtraMarginSpace">
          <h2>Other Creations</h2>
          <p>
            I've always been an experimenter and have created a collection of images and videos from various projects. Take a look at my gallery below to see some of my work. If you're interested in learning more about a specific project, simply click on the image for higher quality versions and additional information if available.
            <br>
            <i style="font-size:70%">Please note, some of the images use the WebP format. If your device does not support it, I apologize for any inconvenience.</i>
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
