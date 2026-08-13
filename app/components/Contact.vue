<template>
  <Form
    id="contactForm"
    v-slot="{ meta }"
    name="sentMessage"
    novalidate
    @submit="onSubmit"
  >
    <div class="control-group">
      <div class="form-group floating-label-form-group controls mb-0 pb-2">
        <label>お名前</label>
        <Field v-slot="{ field, errors }" name="お名前" rules="required|max:10">
          <input
            id="name"
            v-bind="field"
            class="form-control"
            type="text"
            placeholder="山田 太郎"
          />
          <p class="help-block text-danger">{{ errors[0] }}</p>
        </Field>
      </div>
    </div>
    <div class="control-group">
      <div class="form-group floating-label-form-group controls mb-0 pb-2">
        <label>メールアドレス</label>
        <Field
          v-slot="{ field, errors }"
          name="メールアドレス"
          rules="required|email"
        >
          <input
            id="email"
            v-bind="field"
            class="form-control"
            type="email"
            placeholder="ikuosaito1989@gmail.com"
          />
          <p class="help-block text-danger">{{ errors[0] }}</p>
        </Field>
      </div>
    </div>
    <div class="control-group">
      <div class="form-group floating-label-form-group controls mb-0 pb-2">
        <label>メッセージ</label>
        <Field
          v-slot="{ field, errors }"
          name="メッセージ"
          rules="required|max:500"
        >
          <textarea
            id="message"
            v-bind="field"
            class="form-control"
            rows="5"
            placeholder="なんでも良いのでメッセージください。"
          ></textarea>
          <p class="help-block text-danger">{{ errors[0] }}</p>
        </Field>
      </div>
    </div>
    <br />
    <div id="success"></div>
    <div class="form-group">
      <button
        id="sendMessageButton"
        :disabled="!meta.valid"
        type="submit"
        class="btn btn-primary btn-xl"
      >
        送信
      </button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate'

const emit = defineEmits<{
  submit: [value: { name: string; email: string; message: string }]
}>()

const onSubmit = (values: Record<string, unknown>) => {
  emit('submit', {
    name: String(values['お名前'] ?? ''),
    email: String(values['メールアドレス'] ?? ''),
    message: String(values['メッセージ'] ?? '')
  })
}
</script>
