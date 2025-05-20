<template>
  <div id="need-new-project-name" class="mt-9 py-9">
    <div class="mt-9 py-9"></div>
    <ClientOnly>
      <template v-if="lang === 'zh-CN'">
        <div class="text-center">
          <span class="text-3xl font-bold md:text-6xl">项目名称即将变更</span>
        </div>
        <div class="flex justify-center mt-9">
          <div class="flex flex-col gap-4 mt-9 max-w-3xl w-full">
            <template v-if="AppRenameStore.list.length > 0">
              <el-radio-group v-model="AppRenameStore.name" class="gap-3">
                <template v-for="(item, index) in AppRenameStore.list" :key="index">
                  <el-card shadow="none" class="w-full" style="--el-card-padding: 10px 12px">
                    <div class="flex items-center w-full gap-4">
                      <el-radio :value="item.name" class="w-32 truncate">
                        <template #default>
                          <div class="flex items-center gap-3">
                            <div>{{ item.name }}</div>
                          </div>
                        </template>
                      </el-radio>
                      <el-progress
                        class="flex-1"
                        :text-inside="true"
                        :stroke-width="20"
                        :percentage="item.percentage"
                      >
                        <span>{{ item.num }}</span>
                      </el-progress>
                    </div>
                  </el-card>
                </template>
              </el-radio-group>
            </template>
            <el-input v-model="AppRenameStore.name" placeholder="项目名称"></el-input>
            <el-input
              v-model="AppRenameStore.msg"
              placeholder="理由"
              type="textarea"
              resize="none"
              rows="3"
            ></el-input>
          </div>
        </div>
        <div class="text-center mt-9">
          <template v-if="AppRenameStore.time === 0">
            <el-button
              size="large"
              class="mt-6 w-56"
              type="primary"
              :disabled="AppRenameStore.disabled()"
              :loading="AppRenameStore.loading"
              @click.stop="AppRenameStore.send()"
            >
              提交
            </el-button>
          </template>
          <template v-else>
            <el-button class="mt-6 w-56" size="large" type="primary" disabled
              >{{ AppRenameStore.time }}s</el-button
            >
          </template>
        </div>
      </template>
      <template v-else>
        <div class="text-center">
          <span class="text-3xl font-bold md:text-6xl">Need New Project Name</span>
        </div>
        <div class="flex justify-center mt-9">
          <div class="flex flex-col gap-4 mt-9 max-w-3xl w-full">
            <template v-if="AppRenameStore.list.length > 0">
              <el-radio-group v-model="AppRenameStore.name" class="gap-3">
                <template v-for="(item, index) in AppRenameStore.list" :key="index">
                  <el-card shadow="none" class="w-full" style="--el-card-padding: 10px 12px">
                    <div class="flex items-center w-full gap-4">
                      <el-radio :value="item.name" class="w-32 truncate">
                        <template #default>
                          <div class="flex items-center gap-3">
                            <div>{{ item.name }}</div>
                          </div>
                        </template>
                      </el-radio>
                      <el-progress
                        class="flex-1"
                        :text-inside="true"
                        :stroke-width="20"
                        :percentage="item.percentage"
                      >
                        <span>{{ item.num }}</span>
                      </el-progress>
                    </div>
                  </el-card>
                </template>
              </el-radio-group>
            </template>
            <el-input v-model="AppRenameStore.name" placeholder="Project Name"></el-input>
            <el-input
              v-model="AppRenameStore.msg"
              placeholder="Reason"
              type="textarea"
              resize="none"
              rows="3"
            ></el-input>
          </div>
        </div>
        <div class="text-center mt-9">
          <template v-if="AppRenameStore.time === 0">
            <el-button
              size="large"
              class="mt-6 w-56"
              type="primary"
              :disabled="AppRenameStore.disabled()"
              :loading="AppRenameStore.loading"
              @click.stop="AppRenameStore.send()"
            >
              Submit
            </el-button>
          </template>
          <template v-else>
            <el-button class="mt-6 w-56" size="large" type="primary" disabled
              >{{ AppRenameStore.time }}s</el-button
            >
          </template>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
<script lang="ts" setup>
  import { useData } from 'vitepress'
  import { ElButton, ElInput, ElProgress, ElCard } from 'element-plus'
  import { AppRenameStore } from './store'
  import { onMounted } from 'vue'

  const { lang } = useData()
  onMounted(() => {
    AppRenameStore.init()
    AppRenameStore.fetchList()
  })
</script>
