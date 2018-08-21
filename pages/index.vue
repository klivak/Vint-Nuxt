<template>
  <main class="page page-contacts">

    <app-header :title="pageTitle" />

    <app-section-info
            id="section-info"
            :title1_text1="sectionInfo.title1_text1"
            :title1_text2="sectionInfo.title1_text2"
            :title2_text1="sectionInfo.title2_text1"
            :title2_text2="sectionInfo.title2_text2"
            :name="sectionInfo.name"
            :address="sectionInfo.address"
            :postId="sectionInfo.postId"
            :country="sectionInfo.country"
            :phone="sectionInfo.phone"
            :email="sectionInfo.email"
            :supportText="sectionInfo.supportText"
    >
    </app-section-info>

    <app-section-offices
            id="section-map"
            :title="sectionOffices.title"
            :mapPosition="sectionOffices.mapPlacePosition"
            :offices="sectionOffices.offices"
    >
    </app-section-offices>

    <app-section-form
            id="section-form"
            :title="sectionForm.title"
            :formName="sectionForm.formName"
            :formPhone="sectionForm.formPhone"
            :formEmail="sectionForm.formEmail"
            :formTerms="sectionForm.formTerms"
            :formButton="sectionForm.formButton"
            :sectionText="sectionForm.sectionText"
    >
    </app-section-form>

    <app-footer/>

  </main>
</template>

<script>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'
  import AppSectionInfo from '~/components/AppSectionInfo.vue'
  import AppSectionOffices from '~/components/AppSectionOffices.vue'
  import AppSectionForm from '~/components/AppSectionForm.vue'

  export default {
    data() {
      return {
        pageTitle: 'Contacts',
        sectionInfo: {
          title1_text1: 'GMS ',
          title1_text2: 'Headquarters',
          title2_text1: 'Technical support  ',
          title2_text2: '24/7',
          name: 'Global Message Services Ukraine LLC',
          address: 'Bundesstrasse 5 | 3rd Floor',
          postId: '6300 Zug',
          country: 'Switzerland',
          email: 'info@gms-worldwide.com',
          phone: '+41 41 544 62 00',
          supportText: 'GMS understands that it can be hard to follow all new technologies. We regularly provide for all ' +
            'our clients educational trainings to make your operator`s business earn more and better though our best practices.'
        },
        sectionOffices: {
          title: 'Our Offices',
          offices: [
            {
              id: 1,
              city: 'Kyiv',
              title: 'Global Message Services Ukraine LLC',
              street: 'Kuiv, Stepan Bandera, 33',
              postId: '02066',
              country: 'Ukraine',
              positionOnMap: {lat: 50.442298, lng: 30.521330}
            },
            {
              id: 2,
              city: 'New York',
              title: 'New York Tower',
              street: 'New York, 3 FDR Drive #19',
              postId: '10004',
              country: 'USA',
              positionOnMap: {lat: 40.6974034, lng: -74.1197632}
            },
            {
              id: 3,
              city: 'Guangzhou',
              title: 'Guangzhou Tower',
              street: 'Guangzhou, 3 FDR Drive #19',
              postId: '1100',
              country: 'USA',
              positionOnMap: {lat: 23.1253503, lng: 112.9476606}
            },
            {
              id: 4,
              city: 'Barcelona',
              title: 'Barcelona Tower',
              street: 'New York, 3 FDR Drive #19',
              postId: '3478',
              country: 'Spain',
              positionOnMap: {lat: 41.394339, lng: 2.1687853}
            }
          ],
          // mapPlacePosition: {lat: 50.442298, lng: 30.521330}
        },
        sectionForm: {
          title: 'Contact Us',
          formName: 'Name',
          formPhone: 'Phone',
          formEmail: 'Email',
          formTerms: 'I agree the processing of personal data',
          formButton: 'Get in touch',
          sectionText: 'Please tell us more about your request and give us info about your company and country'
        },
        patternImg: require('~/assets/img/pattern-2-min.jpg'), // ~/assets/img/pattern-min.jpg
      }
    },
    head() {
      return {
        title: 'Vintage | Vlad Klivak Dev',
        meta: [
          {hid: 'description', name: 'description', content: 'Vintage vue/nuxt'},
          {hid: 'keywords', name: 'keywords', content: 'vintage, vue, nuxt'}
        ]
      }
    },
    components: {
      AppHeader,
      AppSectionInfo,
      AppSectionOffices,
      AppSectionForm,
      AppFooter
    }
  }

</script>

<style src="~/assets/css/sass/page-contacts.sass" lang="sass"></style>

