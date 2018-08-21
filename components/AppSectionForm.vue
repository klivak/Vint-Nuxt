<template>
  <section class="section section_green section_form" :style="{'background-image':'url('+patternImg+');'}">
    <div class="container">
      <div class="container-row">
        <div class="column column-padding_big column-form column-6">
          <div class="section-title">
            <h2 class="title title_white"> {{title}} </h2>
          </div>
          <div class="section-form">
            <form id="form-contact" name="contact" method="post" @submit.prevent="validateBeforeSubmit">

              <div class="form-group">
                <input class="input form-field" name="name" id="name"
                       v-model="formData.name"
                       v-validate="'required|alpha'"
                       :class="{'has-error': errors.has('name')}"
                >
                <label class="label form-label" for="name">
                  {{formName}}
                </label>
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
              </div>

              <div class="form-group">
                <input class="input form-field" name="phone" id="phone"
                       v-model="formData.phone"
                       v-validate="'required|numeric'"
                       :class="{'is-danger': errors.has('phone') }"
                >
                <label class="label form-label" for="phone">
                  {{formPhone}}
                </label>
                <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
              </div>

              <div class="form-group">
                <input class="input form-field" name="email" id="email"
                       v-model="formData.email"
                       v-validate="'required|email'"
                       :class="{'has-error': errors.has('email')}"
                >
                <label class="label form-label" for="email">
                  {{formEmail}}
                </label>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

              </div>

              <div class="form-group form-group_checkbox">
                <input class="input form-field form-field_checkbox" name="terms" id="terms"
                       v-validate="'required'"
                       v-model="formData.terms"
                       type="checkbox"
                       :class="{'is-danger': errors.has('terms') }"
                >
                <label class="label form-label label_checkbox" for="terms">
                  {{formTerms}}
                </label>
                <span v-show="errors.has('terms')" class="help is-danger">{{ errors.first('terms') }}</span>
              </div>

              <div class="form-group">
                <button :disabled="errors.any()" :class="{'disabled': errors.any() }" type="submit"
                        class="btn btn_big btn_send">{{formButton}}
                </button>
              </div>

            </form>
          </div>
        </div>
        <div class="column column-padding_big column-6">
          <div class="form-text">
            {{sectionText}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	import axios from 'axios';

	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			formName: {
				type: String,
				default: ''
			},
			formPhone: {
				type: String,
				default: ''
			},
			formEmail: {
				type: String,
				default: ''
			},
			formTerms: {
				type: Boolean,
				default: false
			},
			formButton: {
				type: String,
				default: ''
			},
			sectionText: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				formData: {
					name: '',
					email: '',
					phone: '',
					terms: false,
				},
				formSubmitted: false,
				patternImg: require('~/assets/img/pattern-2-min.jpg'), // ~/assets/img/pattern-min.jpg
			}
		},
		methods: {
			onSubmitted (formData) {
				axios.post('http://httpbin.org/post', formData)
					.then(result => console.log(result))
					.catch(e => console.log(e))
			},
			clearForm () {
				this.$validator.pause();
				this.$nextTick(() => {
					for (let dataItem in this.formData) {
						this.formData[dataItem] = '';
					}
					this.$validator.reset();
					this.$validator.errors.clear();
					this.$validator.resume()
				})
			},
			validateBeforeSubmit () {
				this.$validator.validateAll().then((result) => {
					if (result) {
						// eslint-disable-next-line
						alert('Form Submitted!');
						this.onSubmitted(this.formData);
						this.clearForm();
						return;
					}
					// alert('Correct them errors!');
				});
			}
		}
	}
</script>

<style src="~/assets/css/sass/components/section_form.sass" lang="sass"></style>

