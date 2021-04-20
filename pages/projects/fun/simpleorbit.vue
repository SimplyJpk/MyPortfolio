<template>
  <b-container fluid>
    <b-row class="ProjectName">
      <h1>Simple Threejs Orbit</h1>
    </b-row>
    <b-row fluid>
      <client-only>
        <iframe src="/threejs/index.html" class="SimpleOrbitFrame" />
      </client-only>
    </b-row>
    <b-row class="ProjectDetails">
      <b-col cols="8">
        <h4>Details</h4><br>
        <p>
          A simple <Link url="https://threejs.org/" word="Three.js" /> project that was made over a couple days as a break from some other projects. Very simple orbits on tracks, using some data I pulled off of wikipedia using available textures for planets.
        </p>
      </b-col>
      <b-col>
        <h4>Controls</h4><br>
        <p>
          - WASD Controls, RF Up/Down.<br>
          - Hold & drag right click to enable movement.<br>
          - Hold shift to use camera boost multiplier.<br>
          - Double click on objects to auto-move towards.<br>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Link from '~/components/util/Link'

export default {
  components: {
    Link
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.SimpleOrbitFrame {
  height: 70vh;
  width: 100%;
  border: 0;
}
.ProjectName {
  margin-bottom: 0.5rem;
}
.ProjectDetails {
  margin-top: 1rem;
}
</style>
