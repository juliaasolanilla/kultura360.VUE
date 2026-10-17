
<script setup>
defineProps({
  titol: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    default: 'CULTURA'
  },
  descripcio: {
    type: String,
    default: 'Descobreix una nova experiència cultural.'
  },
  imatge: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="event-card">
    <div class="event-image-wrap">
      <img
        v-if="imatge"
        :src="imatge"
        :alt="titol"
        class="event-image"
      />
      <div v-else class="event-image-placeholder">
        K<span>360</span>
      </div>
      <span class="event-arrow">↗</span>
    </div>

    <div class="event-copy">
      <p class="event-category">{{ categoria }}</p>
      <h3>{{ titol }}</h3>
      <p class="event-description">{{ descripcio }}</p>
    </div>
  </article>
</template>
