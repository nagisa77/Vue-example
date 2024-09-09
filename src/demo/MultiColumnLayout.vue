<template>
  <div class="multi-column-layout">
    <div class="content-container">
      <h2>Multi Column Masonry Layout</h2>
      <div class="masonry">
        <el-card class="masonry-item" v-for="(image, index) in images" :key="index" :body-style="{ padding: '0px' }">
          <img :src="image.src" :alt="'Placeholder Image ' + index" class="responsive-image" />
          <div style="padding: 18px;">
            <span>图片描述</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiColumnLayout',
  data() {
    return {
      images: [
        { 'src': 'https://via.placeholder.com/700x100' },
        { 'src': 'https://via.placeholder.com/500x100' },
        { 'src': 'https://via.placeholder.com/1200x150' },
        { 'src': 'https://via.placeholder.com/400x150' },
        { 'src': 'https://via.placeholder.com/1300x100' },
        { 'src': 'https://via.placeholder.com/150' },
        { 'src': 'https://via.placeholder.com/300x200' },
        { 'src': 'https://via.placeholder.com/900x100' },
        { 'src': 'https://via.placeholder.com/1400x150' },
        { 'src': 'https://via.placeholder.com/1000x150' },
        { 'src': 'https://via.placeholder.com/800x150' },
        { 'src': 'https://via.placeholder.com/250' },
        { 'src': 'https://via.placeholder.com/200' },
        { 'src': 'https://via.placeholder.com/600x150' },
        { 'src': 'https://via.placeholder.com/1100x100' },
      ],
    };
  },
};
</script>

<style scoped>
.multi-column-layout {
  padding: 8px;
}

.masonry {
  column-gap: 8px;
}

.masonry-item {
  margin-bottom: 8px;
  break-inside: avoid;
}

.content-container {
  max-width: 700px;
  margin: 0 auto;
}

.responsive-image {
  width: 100%;
  display: block;
}

/* 响应式布局 */
@media (min-width: 600px) {
  .masonry {
    column-count: 3;
  }
}

@media (min-width: 350px) and (max-width: 599px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 349px) {
  .masonry {
    column-count: 1;
  }
}
</style>