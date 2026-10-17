
<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const events = [
  {
    id: 'nits-musica',
    category: 'MÚSICA EN DIRECTE',
    title: 'Nits que es queden amb tu',
    location: 'Escenaris i música en directe',
    date: 'Properament',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=85',
    description: 'La música transforma els espais i connecta persones. Descobreix una experiència plena d’energia, artistes i moments per recordar.',
    number: '01'
  },
  {
    id: 'art-mirar',
    category: 'ART I CREATIVITAT',
    title: 'Una altra manera de mirar',
    location: 'Espais d’art i exposicions',
    date: 'Properament',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1800&q=85',
    description: 'Explora noves perspectives a través de l’art, les idees i la creativitat. Una invitació a observar el món des d’un altre punt de vista.',
    number: '02'
  },
  {
    id: 'experiencies',
    category: 'EXPERIÈNCIES',
    title: 'Surt de la rutina',
    location: 'Cultura i noves experiències',
    date: 'Properament',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=85',
    description: 'Descobreix propostes diferents, espais per compartir i experiències que et conviden a sortir de la rutina i viure la cultura intensament.',
    number: '03'
  }
]

const event = computed(() =>
  events.find(item => item.id === route.params.id)
)
</script>

<template>
  <main v-if="event" class="detail-page">
    <section class="detail-hero">
      <img :src="event.image" :alt="event.title" />
      <div class="detail-hero-overlay"></div>

      <div class="detail-hero-content">
        <RouterLink to="/" class="detail-back">← Tornar a l'inici</RouterLink>
        <p class="eyebrow">{{ event.category }}</p>
        <h1>{{ event.title }}</h1>
        <p>{{ event.location }}</p>
      </div>
    </section>

    <section class="detail-body section-wrap">
      <div class="detail-main">
        <p class="eyebrow section-eyebrow">DESCOBREIX L'EXPERIÈNCIA</p>
        <h2>La cultura es viu, no només s'observa.</h2>
        <p class="detail-description">{{ event.description }}</p>
        <p class="detail-description">
          Kultura360 vol apropar-te a propostes culturals que et permetin
          descobrir noves idees, connectar amb altres persones i crear
          records que vagin més enllà del moment.
        </p>
      </div>

      <aside class="detail-info">
        <p class="eyebrow section-eyebrow">INFORMACIÓ</p>
        <div class="detail-info-row">
          <span>Categoria</span>
          <strong>{{ event.category }}</strong>
        </div>
        <div class="detail-info-row">
          <span>Ubicació</span>
          <strong>{{ event.location }}</strong>
        </div>
        <div class="detail-info-row">
          <span>Data</span>
          <strong>{{ event.date }}</strong>
        </div>
        <RouterLink to="/contacte" class="button button-dark">
          MÉS INFORMACIÓ <span>↗</span>
        </RouterLink>
      </aside>
    </section>

    <section class="detail-end">
      <p class="eyebrow">CONTINUA DESCOBRINT</p>
      <h2>Hi ha molt més<br /><em>per viure.</em></h2>
      <RouterLink to="/galeria" class="button button-light">
        EXPLORA LA GALERIA <span>↗</span>
      </RouterLink>
    </section>
  </main>

  <main v-else class="not-found section-wrap">
    <p class="eyebrow section-eyebrow">404 · EXPERIÈNCIA NO TROBADA</p>
    <h1>Aquesta pàgina<br />no existeix.</h1>
    <RouterLink to="/" class="button button-dark">
      TORNAR A L'INICI <span>↗</span>
    </RouterLink>
  </main>
</template>
