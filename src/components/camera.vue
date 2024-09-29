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
        });
        this.photo = photo.dataUrl; // stocker la photo en format Base64
      } catch (error) {
        console.error("Erreur lors de la prise de photo :", error);
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
