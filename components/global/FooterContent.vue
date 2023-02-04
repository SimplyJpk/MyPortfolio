<template>
  <div class="FooterText TitleFont">
    Deployed: {{ PublishDate() }} from <Link :url="RepoPath()" word="GitHub" /> |
    Copyright © 2015-{{ new Date().getFullYear() }}
    <!-- eslint-disable-next-line -->
    <n-link to="./">{{ GetMyName() }}</n-link>. All Rights Reserved.
  </div>
</template>

<script>
import Link from '~/components/util/Link'

export default {
  name: 'FooterContent',
  serverCacheKey () {
    return 'FooterContent'
  },
  components: {
    Link
  },
  methods: {
    PublishDate () {
      return process.env.PUBLISH_DATE
    },
    RepoPath () {
      return process.env.REPO_PATH
    },
    GetMyName () {
      return process.env.MY_NAME
    }
  }
}
</script>
