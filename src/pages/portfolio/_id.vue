<template>
  <Loading v-model="selectedPortfolio">
    <div v-if="selectedPortfolio" class="modal-body text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Portfolio Modal - Title -->
            <h2 class="portfolio-modal-title text-secondary mb-0">
              {{ selectedPortfolio.name }}
            </h2>
            <!-- Icon Divider -->
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Modal - Image -->
            <img
              :src="selectedPortfolio.thumbnailUrl"
              class="image rounded mb-5"
              alt=""
            />
            <div class="text-left mb-5">
              <div v-html="convertMarkdown(selectedPortfolio.description)" />

              <div class="mb-3">
                URL :
                <a :href="selectedPortfolio.portfolioUrl" target="_blank">{{
                  selectedPortfolio.portfolioUrl
                }}</a>
              </div>
              <div class="mb-3">
                <Tag
                  :key="index"
                  v-for="(skill, index) in selectedPortfolio.skills"
                  :name="skill"
                />
              </div>
            </div>
            <n-link to="/">
              <button class="btn btn-primary" href="#" data-dismiss="modal">
                <i class="fas fa-times fa-fw"></i>
                トップへもどる
              </button>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </Loading>
</template>

<script>
import marked from 'marked'
import Tag from '~/components/tag'
import Loading from '~/components/loading'
export default {
  components: {
    Tag,
    Loading
  },
  computed: {
    selectedPortfolio() {
      return this.$store.getters['portfolios/selectedPortfolio']
    }
  },
  created() {
    this.$store.dispatch('portfolios/selectPortfolio', {
      portfolioId: this.$route.params.id
    })
  },
  methods: {
    convertMarkdown(content) {
      return marked(content)
    }
  }
}
</script>
<style scoped>
.image {
  max-width: 100%;
  height: auto;
}
</style>
