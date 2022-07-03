<template>
  <div class="EmploymentHistory">
    <h4><u>Employment History</u></h4>
    <div v-for="(item) in workHistory" :key="item.key">
      <div>
        <h6>
          <b>
            {{ item.work }}
          </b>
        </h6>
        <span v-if="item.extra !== undefined" class="extraDesc"><i>{{ item.extra }}<br></i></span>
        <span class="TitleFont">Roles</span>
        <p v-for="role in item.roles" :key="item.key+role.role" class="WorkRole TitleFont">
          • {{ role.role }}
          <span class="WorkPeriod">
            ({{ role.period }})
          </span>
        </p>
        <span class="TitleFont">Responsibilities</span>
        <p class="Responsibilities Justify">
          <!-- foreach element in item.Description -->
          <i v-for="desc in item.Description" :key="item.key+desc" class="WorkDesc">
            <p class="jobDesc">{{ desc }}</p>
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousEmployment',
  serverCacheKey () {
    return 'ResumeEmployment'
  },
  props: {
    workHistory:
    {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.WorkRole {
  font-size: 90%;
  margin-bottom:1px;
  margin-left:1rem;
}
.TitleFont {
  font-size: 105%;
}
h6 {
  font-size:105%;
  margin-bottom:0px;
}
.WorkPeriod {
  font-size: 85%;
}
.Responsibilities {
    line-height: 175%;
    font-size:90%;
}
.extraDesc {
  font-size:85%;
}
.jobDesc {
  margin-bottom:0px;
}
</style>
