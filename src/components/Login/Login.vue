<template>
  <div class="take-photo">
    <button @click="takePhoto" class="btn">Prendre une photo</button>

    <div v-if="photo">
      <h3>Photo prise :</h3>
      <img :src="photo" alt="Taken photo" class="photo" />
    </div>
  </div>
</template>

<script>
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default {
    name: 'CameraTest', // Assurez-vous que le nom est 'LoginPage'

  <h3>Google Maps</h3>
  <div id="map" style="height: 100vh; width: 100%"></div>
</template>

<script>
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation } from "@capacitor/geolocation";

export default {
  name: "LoginPage", // Assurez-vous que le nom est 'LoginPage'
  mounted() {
    this.loadMap();
  },
  data() {
    return {
      photo: null, // pour stocker la photo capturée
    };
  },
  methods: {
    async takePhoto() {
      try {
        const photo = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl, // retourne la photo en Data URL
          source: CameraSource.Camera, // utiliser la caméra
=======

  methods: {
    async loadMap() {
      try {
        // Obtenir la position actuelle de l'utilisateur
        const position = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = position.coords;

        // Créer la carte
        const mapElement = document.getElementById("map");
        const newMap = await GoogleMap.create({
          id: "my-cool-map", // ID de la carte
          element: mapElement, // Élément HTML où la carte sera affichée
          apiKey: "&callback=initMap", // Ta clé API Google Maps
          config: {
            center: {
              lat: latitude,
              lng: longitude,
            },
            zoom: 14,
          },
        });

        // Ajouter un marqueur pour la position actuelle
        await newMap.addMarker({
          coordinate: {
            lat: latitude,
            lng: longitude,
          },
        });
        this.photo = photo.dataUrl; // stocker la photo en format Base64
      } catch (error) {
        console.error("Erreur lors du chargement de la carte:", error);
      }
    },
  },
};
</script>

<style scoped>
.take-photo {
  text-align: center;
  margin-top: 20px;
}

.btn {
  background-color: #3490dc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.photo {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
  border: 2px solid #3490dc;
}

</style>
