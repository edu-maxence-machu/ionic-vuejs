<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Jokes en Français</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Jokes en Français</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card inset="true" v-for="joke in jokes" :key="joke.id">
        <ion-card-header>{{ joke.setup }}</ion-card-header>
        <ion-accordion-group>
          <ion-accordion value="colors">
            <ion-item slot="header">
              <ion-label>La suite...</ion-label>
            </ion-item>

            <ion-item slot="content">
              <p>{{ joke.delivery }}</p>
            </ion-item>
          </ion-accordion>
        </ion-accordion-group>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordion,
  IonCard,
  IonLabel,
  IonItem,
} from "@ionic/vue";

export default defineComponent({
  name: "JokesPage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonAccordion,
    IonCard,
    IonLabel,
    IonItem,
  },
  data() {
    return {
      jokes: [],
    };
  },
  async created() {
    // GET request using fetch with async/await
    // https://codesandbox.io/s/vue-fetch-http-get-request-examples-rzuqn?file=/app/GetRequestSetHeaders.vue
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10"
    );
    const data = await response.json();
    this.jokes = data.jokes;
  },
});
</script>
