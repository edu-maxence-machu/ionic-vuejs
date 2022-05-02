<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>BringItBack</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Ajout du composant de démo -->
      <demo-component />

      <!-- Ajout d'un coposant avec enfant -->
      <demo-child-component>
        <h1>Hello World</h1>
      </demo-child-component>

      <ion-button router-link="/exercice-integration">Go to detail</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import DemoChildComponent from "../components/DemoChildComponent.vue";
import DemoComponent from "../components/DemoComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonButton,
    IonToolbar,
    DemoChildComponent,
    DemoComponent,
  },
});
</script>

<style scoped></style>
