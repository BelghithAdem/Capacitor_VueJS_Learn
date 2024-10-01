<template>
  <h3>Google Maps</h3>
  <div id="map" style="height: 100vh; width: 100%"></div>
</template>

<script>
import { Geolocation } from "@capacitor/geolocation";
import { GoogleMap } from "@capacitor/google-maps";

export default {
  name: "LoginPage", // Assurez-vous que le nom est 'LoginPage'

  data() {
    return {
      photo: null, // Stocke la photo capturée
    };
  },

  mounted() {
    this.loadMap();
  },

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
      } catch (error) {
        console.error("Erreur lors du chargement de la carte:", error);
      }
    },
  },
};
</script>

<style scoped>
.photo-container {
  text-align: center;
  margin-top: 20px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
