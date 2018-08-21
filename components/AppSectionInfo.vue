<template>
  <section class="section section_white section_info">
    <div class="container">
      <div class="container-row">
        <div class="column column-padding_small column-6">
          <div class="section-title">
            <h2 class="title"><span>{{title1_text1}}</span> {{title1_text2}} </h2>
          </div>
          <div class="section-description">
            <div class="description description-column description-column_half ">
              <address>
                <div class="description-item line_w100"> {{name}}</div>
                <div class="description-item line_w100"> {{address}}</div>
                <div class="description-item line_w100"> {{postId}}</div>
                <div class="description-item line_w100"> {{country}}</div>
                <div class="description-item line_w100">
                  <a :href="'tel:' + phone.replace(/[^0-9.]/g, '') "
                     class="description-item__link description-item__link_big mt-25 ">
                    {{phone}} </a>
                </div>
              </address>
            </div>
            <div class="description description-column description-column_half ">
              <address>
                <div class="description-item line_w100"> Email</div>
                <div class="description-item line_w100">
                  <a :href="'mailto:' + email" class="description-item__link "> {{email}} </a>
                </div>
                <div class="description-item line_w100"> Send message</div>
                <div class="description-item line_w100">
                  <a :href="'viber://add?number=' + phone.replace(/[^0-9.]/g, '')" class="description-item__link"> Viber
                    us </a>
                </div>
                <div class="description-item line_w100"> Send form</div>
                <div class="description-item line_w100">
                  <a href="#" v-scroll-to="'#section-form'" class="description-item__link "> Contact us </a>
                </div>
              </address>
            </div>
          </div>
        </div>
        <div class="column column-padding_small column-6">
          <div class="section-title">
            <h3 class="title"> {{title2_text1}} <span>{{title2_text2}}</span></h3>
          </div>
          <div class="section-description">
            <div class="description description-column">
              <div class="description-item line_w100">
                {{supportText}}
              </div>
              <div class="description-item line_w100">
                <a :href="'tel:+' + phone.replace(/[^0-9.]/g, '')"
                   class="description-item__link description-item__link_big mt-25 ">
                  {{phone}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			title1_text1: {
				type: String,
				default: ''
			},
			title1_text2: {
				type: String,
				default: ''
			},
			title2_text1: {
				type: String,
				default: ''
			},
			title2_text2: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			address: {
				type: String,
				default: ''
			},
			postId: {
				type: String,
				default: ''
			},
			country: {
				type: String,
				default: ''
			},
			email: {
				type: String,
				default: ''
			},
			viberNumber: {
				type: String,
				default: ''
			},
			phone: {
				type: String,
				default: ''
			},
			supportText: {
				type: String,
				default: ''
			}
		},
		data () {
			return {}
		},
		mounted () {
		},
		methods: {},
		filters: {}
	}

</script>

<style src="~/assets/css/sass/components/section_info.sass" lang="sass"></style>
