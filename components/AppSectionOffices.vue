<template>
  <section class="section section_darkgray section_offices">
    <div class="container">
      <div class="container-row">
        <div class="column column-padding_big column-6 column_offices">
          <div class="section-title">
            <h2 class="title title_white"> {{ title }} </h2>
          </div>
          <div class="section-tabs">

            <div class="tab">
              <button v-for="(office) in offices"
                      :key="office.id"
                      :data-office="'office-' + office.id"
                      :class="isActive(office.id)"
                      @click="openCity(office.id)">{{ office.city }}
              </button>
            </div>

            <!-- Tab content -->
            <div v-if="isShow"
                 class="tabcontent">

              <h3 class="tabcontent__title"> {{officeInfoActive.title}}</h3>
              <span class="tabcontent__description">{{officeInfoActive.street}}</span>
              <span class="tabcontent__description">{{officeInfoActive.postId}}</span>
              <span class="tabcontent__description">{{officeInfoActive.country}}</span>

            </div>
          </div>

        </div>
        <div class="column column-6">
          <GmapMap
                  :center="mapPosition"
                  :zoom="13"
                  :options=" mapOptions"
          >
            <GmapMarker
                    :position="mapPosition"
                    :clickable="true"
                    :draggable="false"
                    :icon="marker"
            />
          </GmapMap>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

	export default {
		name: 'AppSectionOffices',
		props: {
			title: String,
			offices: {
				Array,
				default: []
			}
		},
		data () {
			return {
				mapPlacePosition: {lat: 50.442298, lng: 30.521330},
				marker: 'img/map-icon.svg',
				activeOffice: 1,
				isShow: true, // for transition
				mapOptions: {
					disableDefaultUI: true,
					styles: [
						{
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#212121"
								}
							]
						},
						{
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#757575"
								}
							]
						},
						{
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#212121"
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#757575"
								}
							]
						},
						{
							"featureType": "administrative.country",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#9e9e9e"
								}
							]
						},
						{
							"featureType": "administrative.land_parcel",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "administrative.locality",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#bdbdbd"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#757575"
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#181818"
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#616161"
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#1b1b1b"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#2c2c2c"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#8a8a8a"
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#373737"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#3c3c3c"
								}
							]
						},
						{
							"featureType": "road.highway.controlled_access",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#4e4e4e"
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#616161"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#757575"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#000000"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#3d3d3d"
								}
							]
						}
					]
				},
			}
		},
		computed: {
			officeInfoActive () {
				return this.offices.find(item => item.id === this.activeOffice)
			},
			mapPosition () {
				return this.offices[this.activeOffice - 1].positionOnMap;
			}
		},
		methods: {
			isActive (id) {
				return ['tablinks', {active: id === this.activeOffice}]
			},
			openCity: function (officeNumber) {
				this.isShow = false; // for transition
				this.activeOffice = officeNumber;
				setTimeout(() => this.isShow = true, 0) // for transition
			},
		}
	}

</script>

<style src="~/assets/css/sass/components/section_offices.sass" lang="sass"></style>
