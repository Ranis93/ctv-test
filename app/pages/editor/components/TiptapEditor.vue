<template>
  <div class="tiptap-editor" v-if="editor">
    <div class="tiptap-editor__container">
      <!-- Меню инструментов -->
      <div class="tiptap-editor__menu">
        <div class="tiptap-editor__menu-group">
          <button
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('bold') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bold</title><path d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('italic') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>italic</title><path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('strike') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>strike</title><path d="M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('code') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>code</title><path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().unsetAllMarks().run()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clear marks</title><path d="M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().clearNodes().run()"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clear nodes</title><path d="M2,11H3.67C4.08,9.83 5.19,9 6.5,9A3,3 0 0,1 9.5,12C9.5,12.65 9.29,13.25 8.94,13.74L10.07,15.35L13.11,4L14.61,6.13L16.7,9.11L17.5,9C18.81,9 19.92,9.83 20.33,11H22V13H20.33C19.92,14.17 18.81,15 17.5,15A3,3 0 0,1 14.5,12C14.5,11.35 14.71,10.75 15.06,10.26L13.93,8.65L10.89,20L7.3,14.89C7.05,14.96 6.78,15 6.5,15C5.19,15 4.08,14.17 3.67,13H2V11M17.5,10.5A1.5,1.5 0 0,0 16,12A1.5,1.5 0 0,0 17.5,13.5A1.5,1.5 0 0,0 19,12A1.5,1.5 0 0,0 17.5,10.5M6.5,10.5A1.5,1.5 0 0,0 5,12A1.5,1.5 0 0,0 6.5,13.5A1.5,1.5 0 0,0 8,12A1.5,1.5 0 0,0 6.5,10.5Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().setParagraph().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('paragraph') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>paragraph</title><path d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-1</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-2</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-3</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-4</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-5</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-header-6</title><path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleBulletList().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('bulletList') }"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bullet list</title><path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleOrderedList().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('orderedList') }"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ordered list</title><path d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleCodeBlock().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('codeBlock') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>code block</title><path d="M5 3C3.9 3 3 3.9 3 5S2.1 7 1 7V9C2.1 9 3 9.9 3 11S3.9 13 5 13H7V11H5V10C5 8.9 4.1 8 3 8C4.1 8 5 7.1 5 6V5H7V3M11 3C12.1 3 13 3.9 13 5S13.9 7 15 7V9C13.9 9 13 9.9 13 11S12.1 13 11 13H9V11H11V10C11 8.9 11.9 8 13 8C11.9 8 11 7.1 11 6V5H9V3H11M22 6V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V15H4V18H20V6H17.03V4H20C21.11 4 22 4.89 22 6Z" /></svg>
          </button>
          <button
            @click="editor.chain().focus().toggleBlockquote().run()"
            class="tiptap-editor__menu-button"
            :class="{ 'is-active': editor.isActive('blockquote') }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>blockquote</title><path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().setHorizontalRule().run()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>horizontal rule</title><path d="M19,13H5V11H19V13Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().setHardBreak().run()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hard break</title><path d="M18,20H6V18H4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V18H18V20M14,2H6A2,2 0 0,0 4,4V12H6V4H14V8H18V12H20V8L14,2M11,16H8V14H11V16M16,16H13V14H16V16M3,14H6V16H3V14M21,16H18V14H21V16Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>undo</title><path d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" /></svg>
          </button>
          <button
            class="tiptap-editor__menu-button"
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>redo</title><path d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z" /></svg>
          </button>
        </div>
      </div>
      <!-- Редактор -->
      <TiptapEditorContent :editor="editor"/>
    </div>
  </div>
</template>
<script setup>
import StarterKit from '@tiptap/starter-kit'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'setJson'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
    emit('setJson', editor.getJSON())
  }
}, { immediate: true })

// Очистка при уничтожении компонента
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>


<style lang="scss">
.tiptap-editor {
  &__container {
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    &:focus-within {
      border-color: #545454;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  // Стили для меню
  &__menu {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid #e1e5e9;
    flex-wrap: wrap;
    min-height: 56px;

    &-group {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2px;
      padding: 0 8px;
      border-right: 1px solid #e1e5e9;

      &:last-child {
        border-right: none;
      }
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: #64748b;
      cursor: pointer;
      transition: all 0.15s ease;
      font-size: 14px;
      background: #F4F6FB;
      svg{
        width: 15px;
        height: 15px;
      }

      &:hover {
        background: #ffffff;
        color: #334155;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      &.is-active {
        background: #545454;
        color: #ffffff;
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    &-select {
      padding: 6px 8px;
      border: 1px solid #e1e5e9;
      border-radius: 6px;
      background: #ffffff;
      font-size: 13px;
      color: #334155;
      cursor: pointer;
      outline: none;

      &:focus {
        border-color: #545454;
      }
    }
  }

  // Стили для области редактирования
  .ProseMirror {
    padding: 24px;
    height: calc(100dvh - 700px);
    overflow-y: auto;
    background: #ffffff;
    outline: none;
    
    // Кастомный скроллбар
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }

    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }

    // Стили для контента
    &.ProseMirror {
      > * {
        margin-bottom: 1em;
      }

      // Заголовки
      h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        line-height: 1.3;
        color: #1e293b;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
      }

      h1 {
        font-size: 2em;
        border-bottom: 2px solid #f1f5f9;
        padding-bottom: 0.3em;
      }

      h2 {
        font-size: 1.5em;
        border-bottom: 1px solid #f1f5f9;
        padding-bottom: 0.3em;
      }

      h3 { font-size: 1.25em; }
      h4 { font-size: 1.1em; }
      h5 { font-size: 1em; }
      h6 { font-size: 0.9em; color: #64748b; }

      // Параграфы
      p {
        line-height: 1.7;
        color: #374151;
        margin-bottom: 1em;

        &.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #94a3b8;
          float: left;
          height: 0;
          pointer-events: none;
        }
      }

      // Списки
      ul, ol {
        padding-left: 1.5em;
        margin: 1em 0;

        li {
          margin: 0.3em 0;
          line-height: 1.6;
        }
      }

      ul {
        list-style-type: disc;

        li{
          list-style-type: disc;
        }

        li p {
          margin: 0;
        }
      }

      ol {
        list-style-type: decimal;
      }

      // Цитаты
      blockquote {
        border-left: 4px solid #545454;
        background: #f8fafc;
        padding: 1em 1.5em;
        margin: 1.5em 0;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: #475569;

        p {
          margin: 0;
          color: inherit;
        }
      }

      // Код
      code {
        background: #f1f5f9;
        color: #dc2626;
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-size: 0.85em;
        font-family: 'Futura PT', sans-serif;
      }

      pre {
        background: #1e293b;
        color: #e2e8f0;
        padding: 1.2em;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1.5em 0;
        font-family: 'Futura PT', sans-serif;
        font-size: 0.9em;
        line-height: 1.5;

        code {
          background: none;
          color: inherit;
          padding: 0;
          font-size: inherit;
        }
      }

      // Горизонтальная линия
      hr {
        border: none;
        border-top: 2px solid #e2e8f0;
        margin: 2em 0;
        position: relative;

        &::after {
          content: "§";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #ffffff;
          padding: 0 1em;
          color: #94a3b8;
          font-size: 12px;
        }
      }

      // Ссылки
      a {
        color: #545454;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;

        &:hover {
          border-bottom-color: #545454;
        }
      }

      // Выделение текста
      mark {
        background: #fef3c7;
        color: #92400e;
        padding: 0.1em 0.2em;
        border-radius: 2px;
      }

      // Таблицы
      table {
        border-collapse: collapse;
        margin: 1.5em 0;
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
      }

      th, td {
        border: 1px solid #e2e8f0;
        padding: 0.75em 1em;
        text-align: left;
      }

      th {
        background: #f8fafc;
        font-weight: 600;
        color: #374151;
      }

      td {
        background: #ffffff;
      }

      // Изображения
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1em 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      // Выделенный текст при редактировании
      .ProseMirror-selectednode {
        outline: 2px solid #545454;
        outline-offset: 2px;
        border-radius: 4px;
      }
    }
  }
  
}

// Темная тема
.dark {
  .tiptap-editor {
    &__container {
      background: #1e293b;
      border-color: #334155;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    &__menu {
      background: #0f172a;
      border-bottom-color: #334155;

      &-button {
        color: #94a3b8;

        &:hover {
          background: #334155;
          color: #e2e8f0;
        }

        &.is-active {
          background: #545454;
          color: #ffffff;
        }
      }

      &-select {
        background: #334155;
        border-color: #475569;
        color: #e2e8f0;
      }
    }

    .ProseMirror {
      background: #1e293b;
      color: #e2e8f0;

      h1, h2, h3, h4, h5, h6 {
        color: #f1f5f9;
      }

      p {
        color: #cbd5e1;
      }

      blockquote {
        background: #0f172a;
        color: #94a3b8;
      }

      code {
        background: #334155;
        color: #fca5a5;
      }

      pre {
        background: #0f172a;
        color: #cbd5e1;
      }

      table {
        th {
          background: #0f172a;
          color: #e2e8f0;
        }

        td {
          background: #1e293b;
          color: #cbd5e1;
        }
      }
    }
  }
}

// Адаптивность
@media (max-width: 768px) {
  .tiptap-editor {
    &__menu {
      padding: 8px 12px;
      gap: 2px;

      &-group {
        padding: 0 4px;
      }

      &-button {
        width: 28px;
        height: 28px;
        font-size: 12px;
      }
    }

    .ProseMirror {
      padding: 16px;
      min-height: 200px;
    }
  }
}

</style>
