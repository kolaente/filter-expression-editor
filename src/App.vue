<script setup lang="ts">
import { ref } from 'vue'
import FilterEditor from './components/FilterEditor.vue'

const filterValue = ref('')

const handleFilterChange = (value: string) => {
  filterValue.value = value
}
</script>

<template>
  <div class="container">
    <h1>Filter Expression Editor</h1>
    
    <div class="editor-container">
      <h2>Enter filter expression:</h2>
      <FilterEditor @update:filter="handleFilterChange" />
    </div>
    
    <div class="output-container">
      <h2>Output (snake_case):</h2>
      <pre>{{ filterValue }}</pre>
    </div>

    <div class="examples-container">
      <h2>Example Filter Expressions:</h2>
      <ul>
        <li><code>priority = 4</code> - tasks with priority level 4</li>
        <li><code>dueDate < now</code> - tasks with a due date in the past</li>
        <li><code>done = false && priority >= 3</code> - undone tasks with priority level 3 or higher</li>
        <li><code>assignees in user1, user2</code> - tasks assigned to either user1 or user2</li>
        <li><code>(priority = 1 || priority = 2) && dueDate <= now</code> - tasks with priority level 1 or 2 and a due date in the past</li>
      </ul>
    </div>
  </div>
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  background-color: #f9fafb;
  color: #1f2937;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #111827;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

h2 {
  color: #374151;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.editor-container, .output-container, .examples-container {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.output-container pre {
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-all;
  color: #374151;
}

.examples-container ul {
  margin: 0;
  padding-left: 1.5rem;
}

.examples-container li {
  margin-bottom: 0.5rem;
}

code {
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #111827;
    color: #e5e7eb;
  }
  
  .editor-container, .output-container, .examples-container {
    background-color: #1f2937;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  h1 {
    color: #f9fafb;
  }
  
  h2 {
    color: #e5e7eb;
  }
  
  .output-container pre {
    background-color: #374151;
    color: #e5e7eb;
  }
  
  code {
    background-color: #374151;
    color: #e5e7eb;
  }
}
</style>