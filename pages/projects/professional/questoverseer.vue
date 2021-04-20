<template>
  <div class="PageBody">
    <div class="RedText">
      <h1><b><u>Quest Overseer | Page Work In Progress.</u></b></h1>
    </div>
    <h1>Quest Overseer</h1>
    <div class="Introduction">
      <h4>The Project</h4>
      <p>
        Unlike <InlineLink url="/projects/professional/doomedbeginning" word="Doomed Beginning" /> or <InlineLink url="/projects/professional/nevergreen" word="Nevergreen" />, the Quest Overseer was an asset made to help developers without adding additional overhead of work to implement. The overall project length of the assignment was similar with roughly 4 months development, however the project was marked based on its potential to make money through sales, the additional marks for this were quite slim, but the premise was that students should make an project that could be sold if it was released the same day that it was submitted for marking.
      </p>
    </div>
    <div class="ProjectWhy">
      <h4>The Quest Overseer</h4>
      <b-container fluid>
        <b-row>
          <b-col cols="7">
            <h5>What it is</h5>
            <p>
              The Quest Overseer is a simple Quest Management Tool that was indended to release on the Unity Asset Store. The tool was made to assist developers at any period of development add new quests and content to their games for $20 AUD.
            </p>
            <h5>How does it work</h5>
            <p>
              The Overseer isn't the only asset for this on the market, and as such was made to be an event driven solution which reduces the CPU overhead in frame by frame situations. The cost of this is some additional overhead on quest creation as a few checks are made for the event handlers, but for the long-term life both as an active quest and a complete quest that isn't removed from the UI for what ever reason, the cost is quite minimal as there is no updates being called unless the events are still used for other reasons.
              <br>
              The Overseer breaks down quests into 'Tasks', with a Quest being a collection of 1 or more Tasks and instead of checking whether or not a player has moved to "Position X" the Overseer has internal timers which can be set by the user for updates for a variety of conditions. Internally the asset would check the distance from the Task, and if the player is closer it arranges the next update to fire sooner so that the trigger isn't delayed, and can be more accurate.
            </p>
            <p>
              Five task types were made for the assignment due to scope constraints, Find, Goto, Interact, Kill and Time.
            </p>
            <p>
              These are quite straight forward, Find involves an object in the scene which then passes either a Hash or a Name to the Quest Manager with or without the Task type (Passing the Type would improve performance significantly once you're dealing with thousands of Quests/Tasks) and track these updates, or if the Quest Manager can't find any details on the item for the type passed in the data was ignored. Similar actions are involved with Goto (the task has a Vector3 and an Object it tracks and updates check against distance).
              <br>
              A very basic UI system was implemented, in-part to improve how visible the actions of the asset were when the asset was being marked. The UI itself was very quickly made, and while I had plans to improve it, it was never a huge component of the system and was pushed aside to focus on other features during development.
            </p>
          </b-col>
          <b-col cols="5">
            <Swiper
              :options="OverseerCarousel"
              class="TaskExamples"
            >
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/QuestShell.png"
                caption-header="Empty Quest"
                caption-text="A Quest that hasn't been given any tasks yet, showing the default scriptable Quest."
              />
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/KillTask.png"
                caption-header="Kill Task"
                caption-text="For any quests that involves killing other things, such as killing 10 boxes."
              />
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/InteractTask.png"
                caption-header="Interact Task"
                caption-text="Used when a quests needs to interact with objects, such as picking up a box or opening a door."
              />
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/GotoTask.png"
                caption-header="Goto Task"
                caption-text="If a quest requires the player to go to a defined location, like a pond, or to a shop."
              />
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/FindTask.png"
                caption-header="Find Task"
                caption-text="When a player needs to find/have a certain number of items. An example may be 'Pick up 5 health potions'."
              />
              <OverseerSlide
                img-url="/images/Projects/QuestOverseer/TimeTask.png"
                caption-header="Time Task"
                caption-text="If a quest has to be completed in a time frame, or if the quest can only complete after x seconds."
              />
            </Swiper>
          </b-col>
        </b-row>
      </b-container>
      <h4>Where can I get it</h4>
      <p>
        You can't. I never released it due to scope and time consuming reasons around the time I submitted the project. While it worked quite well, it wasn't as easy to use as I had hoped, the UI it used was also very quickly made and wasn't appealing enough for me to put on the asset store comfortably. I do hope to revisit this down the line, but for the time being it is just a nice cool thing that I sometimes use in Game-Jams if I can use assets for simple quests. You can however, DOWNLOAD the example scene I handed in for submission.
      </p>
    </div>
  </div>
</template>

<script>
import InlineLink from '~/components/util/InlineNuxtLink'
import OverseerSlide from '~/components/projects/overseer/OverseerSlide'
export default {
  components: {
    InlineLink,
    OverseerSlide
  },
  data () {
    return {
      OverseerCarousel: {
        loop: true,
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
      }
    }
  }
}
</script>

<style>
/* This is so bad, Look for another carousel that can work with custom content better? */
.carousel-caption {
  top:0;
  max-height:100%;
  padding:0;
}
.PageBody {
  text-align: justify;
}
</style>

<style scoped>
.Banner {
  width:100%;
  max-height:240px;
  margin-bottom: 1rem;
}
.RedText {
  color:red;
}
</style>
