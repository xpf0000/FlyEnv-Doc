<template>
  <ClientOnly>
    <div
      class="fixed inset-0 bg-slate-600 opacity-25 z-40 dark:bg-slate-600 dark:opacity-35"
      @click.stop="closedFn"
    ></div>
    <div
      ref="model"
      class="w-[30rem] z-50 shadow-xl fixed right-6 bottom-20 bg-slate-50 p-5 rounded-lg pb-1 max-w-full dark:bg-slate-800 dark:shadow-slate-700/50"
    >
      <div class="flex align-center justify-between mb-7">
        <span>Send Message</span>
        <div @click.stop="closedFn">
          <svg
            class="icon w-5 h-5 fill-current"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M213.717333 173.162667l287.274667 287.232L788.202667 173.162667A8.533333 8.533333 0 0 1 794.24 170.666667h66.901333a8.533333 8.533333 0 0 1 6.037334 14.570666L546.496 505.898667l332.842667 332.864a8.533333 8.533333 0 0 1-6.037334 14.570666h-66.389333a8.533333 8.533333 0 0 1-6.037333-2.496L501.248 551.146667 201.514667 850.837333a8.533333 8.533333 0 0 1-6.016 2.496H128.64a8.533333 8.533333 0 0 1-6.037333-14.570666l333.12-333.12-320.426667-320.426667A8.533333 8.533333 0 0 1 141.333333 170.666667h66.346667a8.533333 8.533333 0 0 1 6.037333 2.496z"
            ></path>
          </svg>
        </div>
      </div>
      <el-form v-model="AppFeedbackStore" label-position="top" @submit.prevent>
        <el-form-item label="EMail">
          <el-input v-model="AppFeedbackStore.email"></el-input>
        </el-form-item>
        <el-form-item label="Country">
          <el-select
            v-model="AppFeedbackStore.country"
            style="width: 100%"
            filterable
            clearable
            placeholder="Input To Filter"
          >
            <el-option label="No Selected" value=""></el-option>
            <template v-for="(item, index) in Country" :key="index">
              <el-option :label="item.name" :value="item.name"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="Message" required>
          <el-input
            v-model="AppFeedbackStore.message"
            type="textarea"
            :minlength="5"
            :maxlength="1024"
            :rows="8"
            resize="none"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex align-center justify-end w-full">
            <el-button @click.stop="closedFn">Cancel</el-button>
            <template v-if="AppFeedbackStore.time === 0">
              <el-button
                :loading="AppFeedbackStore.loading"
                :disabled="AppFeedbackStore.loading || AppFeedbackStore.time > 0"
                type="primary"
                @click="doSubmit"
                >Submit</el-button
              >
            </template>
            <template v-else>
              <el-button type="primary" disabled>{{ AppFeedbackStore.time }}s</el-button>
            </template>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { ElForm, ElFormItem, ElInput } from 'element-plus'
  import Country from './country.json'
  import { AsyncComponentSetup } from '../AsyncComponent'
  import 'element-plus/theme-chalk/dark/css-vars.css'

  let AppFeedbackStore: any = ref({})

  import('./store').then((res: any) => {
    AppFeedbackStore.value = res.AppFeedbackStore
  })

  const model = ref()
  const { show, onClosed, onSubmit, closedFn } = AsyncComponentSetup()

  const doSubmit = () => {
    AppFeedbackStore.value
      .send()
      .then(() => {
        closedFn()
        AppFeedbackStore.value.message = ''
      })
      .catch()
  }

  onMounted(() => {
    const dom: HTMLElement = model.value as any
    const rect = dom.getBoundingClientRect()
    const right = (window.innerWidth - rect.width) * 0.5
    const bottom = (window.innerHeight - rect.height) * 0.35
    dom.style.right = `${right}px`
    dom.style.bottom = `${bottom}px`
  })

  defineExpose({
    show,
    onSubmit,
    onClosed,
    closedFn
  })
</script>
