<template>
  <div class="iframe-wapper">
    <iframe class="app-iframe shadow" src="https://oss.macphpstudy.com/app/app.html"></iframe>
  </div>
</template>
<script lang="ts" setup>
import { watch, onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'

const { isDark, lang } = useData()
let iframeReady = false

const reset = () => {
  const iframe: any = document.querySelector('iframe.app-iframe');
  if (!iframe) {
    return;
  }
  if (iframeReady) {
    iframe.contentWindow.postMessage({
      fun: 'AppSetTheme',
      value: isDark.value ? 'dark' : 'light'
    }, '*')
  } else {
    setTimeout(reset, 50);
  }
};

const resetLang = () => {
  const l = lang.value === 'zh-CN' ? 'zh' : 'en'
  console.log('resetLang: ', l)
  const iframe: any = document.querySelector('iframe.app-iframe');
  if (!iframe) {
    return;
  }
  if (iframeReady) {
    iframe.contentWindow.postMessage({
      fun: 'AppSetLang',
      value: l
    }, '*')
  } else {
    setTimeout(resetLang, 50);
  }
};

watch(isDark, (v) => {
 console.log('watch isDark: ', v)
  reset()
}, {
  immediate: true
})

watch(lang, (v) => {
  console.log('watch lang: ', v)
  resetLang()
}, {
  immediate: true
})


let observer: ResizeObserver

const handleAppIframe = () => {
  const iframe: any = document.querySelector('iframe.app-iframe');
  if (!iframe) {
    return;
  }
  console.log(iframe);
  const iframeWapper = iframe.parentElement;
  const reset = () => {
    const rectIfame = iframe.getBoundingClientRect();
    const rectIframeWapper = iframeWapper.getBoundingClientRect();
    if (rectIframeWapper.width < 950) {
      const scale = rectIframeWapper.width / 950.0;
      console.log('scale: ', scale);
      iframe.style.transform = `scale(${scale})`;
    } else {
      console.log('rectIfame.width: ', rectIfame.width, rectIframeWapper.width);
      iframe.style.transform = 'none';
    }
  };
  observer = new ResizeObserver(reset);
  observer.observe(iframeWapper);
  reset();
};

onMounted(() => {
  reset()
  resetLang()
  handleAppIframe()
})

onBeforeUnmount(() => {
  observer.disconnect()
  observer = undefined
})

window.addEventListener('message', event => {
  iframeReady = true
});
</script>
