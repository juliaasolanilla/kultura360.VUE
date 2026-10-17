
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { label: 'Inici', to: '/' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Contacte', to: '/contacte' }
]
</script>

<template>
  <header class="site-header">
    <div class="nav-inner">
      <RouterLink to="/" class="brand" aria-label="Kultura360, inici">
        <span class="brand-mark">K<span>360</span></span>
        <span class="brand-caption">CULTURA EN MOVIMENT</span>
      </RouterLink>

      <nav class="main-nav" aria-label="Navegació principal">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ 'nav-active': route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <RouterLink to="/contacte" class="nav-cta">
        Parlem <span>↗</span>
      </RouterLink>
    </div>
  </header>
</template>
