<template>
      <ion-card>
        <ion-card-content>
            <slot></slot>
        </ion-card-content>
      </ion-card>
</template>

<script>
import { IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DemoChildComponent",
    components : {
        IonCard,
        IonCardContent
    }
})
</script>

<style>

</style>