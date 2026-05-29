---
layout: home

head:
  - - meta
    - name: description
      content: '通过捐赠、PR 或原创社区文章支持 FlyEnv，包含分页支持记录。'
  - - meta
    - property: og:title
      content: '赞助 FlyEnv'
  - - meta
    - property: og:description
      content: '通过捐赠、代码贡献或原创社区文章支持 FlyEnv 开发。'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"DonateAction","name":"赞助 FlyEnv","description":"通过捐赠、PR 或原创社区文章支持 FlyEnv 开源开发。","recipient":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"instrument":[{"@type":"PaymentMethod","name":"Paddle"},{"@type":"PaymentMethod","name":"Ko-fi"},{"@type":"PaymentMethod","name":"微信支付"},{"@type":"PaymentMethod","name":"支付宝"}]}
---

<script setup>
import AppSponsorPageV2 from '../components/AppSponsorPage/v2.vue'
</script>

<AppSponsorPageV2 i18n="zh" />
