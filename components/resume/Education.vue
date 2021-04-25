<template>
  <div class="Education">
    <h4><u>Education</u></h4>
    <div v-for="(item, index) in education" :key="index">
      <h6 v-if="index == 0">
        {{ item.institute }}
      </h6>
      <h6 v-else-if="item.institute != education[index - 1].institute" class="H6Space">
        {{ item.institute }}
      </h6>
      <p>
        • {{ item.name }} {{ (item.start === item.finish ? item.start : '(' + item.start + '-' + item.finish + ')') }}
        <template v-if="item.refIndex !== undefined">
          <sub>
            {{ item.refIndex }}
          </sub>
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousEducation',
  serverCacheKey () {
    return 'ResumeEducation'
  },
  components: {
  },
  props: {
    education:
    {
      type: Array,
      required: true
    }
  },
  methods: {
    IndexCount (key) {
      return key + 1
    }
  }
}
</script>

<style scoped>
.H6Space {
  padding-top:0.5rem;
}
p {
    font-size:95%;
    margin-bottom:2px;
    margin-left:1rem;
}
</style>
