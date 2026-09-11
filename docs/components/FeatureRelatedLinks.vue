<template>
  <section aria-labelledby="feature-related-links-title">
    <h2 id="feature-related-links-title">{{ copy.title }}</h2>
    <p>{{ copy.description }}</p>
    <div v-for="group in groups" :key="group.kind" class="feature-related-group">
      <h3>{{ group.label }}</h3>
      <ul>
        <li v-for="link in group.links" :key="`${link.kind}-${link.href}`">
          <a
            :href="localizedHref(link.href)"
            :target="link.kind === 'community' ? '_blank' : undefined"
            :rel="link.kind === 'community' ? 'noopener noreferrer ugc' : undefined"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { featureRelatedContent } from '../data/feature-related-content'

  const props = withDefaults(defineProps<{ slug: string; locale?: 'en' | 'zh' | 'id' | 'es' }>(), {
    locale: 'en'
  })
  const links = computed(() => featureRelatedContent[props.slug] || [])
  const copy = computed(() =>
    props.locale === 'zh'
      ? { title: '相关指南、解决方案和演示', description: '继续阅读实用指南、解决方案、演示或社区文章。' }
      : props.locale === 'id'
        ? { title: 'Panduan, solusi, dan demo terkait', description: 'Lanjutkan dengan panduan, solusi, demo, atau perspektif komunitas.' }
        : props.locale === 'es'
          ? { title: 'Guías, soluciones y demos relacionados', description: 'Continúa con una guía práctica, una solución, una demo o una perspectiva de la comunidad.' }
          : { title: 'Related guides, solutions and demos', description: 'Continue with a practical guide, solution, demo, or community perspective.' }
  )
  const localizedHref = (href: string) => {
    if (props.locale === 'en' || href.startsWith('http')) return href
    return href.replace(/^\//, `/${props.locale}/`)
  }
  const groups = computed(() => {
    const labels = props.locale === 'zh'
      ? { guide: '指南', solution: '解决方案', demo: '演示', community: '社区' }
      : props.locale === 'id'
        ? { guide: 'Panduan', solution: 'Solusi', demo: 'Demo', community: 'Komunitas' }
        : props.locale === 'es'
          ? { guide: 'Guías', solution: 'Soluciones', demo: 'Demos', community: 'Comunidad' }
          : {
            guide: 'Guides',
            solution: 'Solutions',
            demo: 'Demos',
            community: 'Community'
          }

    return (Object.keys(labels) as Array<keyof typeof labels>)
      .map((kind) => ({
        kind,
        label: labels[kind],
        links: links.value.filter((link) => link.kind === kind)
      }))
      .filter((group) => group.links.length)
  })
</script>
