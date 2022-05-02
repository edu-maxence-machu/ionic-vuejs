<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Exercice d'intégration</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h1>Hello World</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  name: "ExerciceIntegration",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonButtons,
    IonToolbar,
    IonBackButton,
  },
});
</script>

<style></style>
