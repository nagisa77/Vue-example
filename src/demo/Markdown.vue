<template>
  <div class="markdown-container">
    <h2>Markdown Example</h2>
    <div v-html="compiledMarkdown" class="markdown-content"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
import sampleMarkdown from '@/assets/sample.md';

export default {
  name: 'MarkdownPage',
  setup() {
    const compiledMarkdown = ref('');

    onMounted(() => {
      compiledMarkdown.value = marked(sampleMarkdown);
    });

    return {
      compiledMarkdown,
    };
  },
};
</script>

<style scoped>
.markdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 1.5;
}

.markdown-content {
  background-color: #f5f5f5;
  width: 80%;
  padding: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

::v-deep .markdown-content a {
  color: green;
}

::v-deep pre {
  background-color: white;
  border-radius: 10px;
}

::v-deep code {
  font-family: monospace;
  color: #d6336c;
  font-size: 15px;
  display: flex;
  padding: 15px;

  white-space: pre-wrap; 
  word-wrap: break-word; 
}

::v-deep img {
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}
</style>
