# Vue Ez Component

一些 vue 3 組件，主要是一些簡單的功能，不想每次開發都重寫，後續會再增加一些實用小組件。

---

## 環境
- vue@3.x

## FullLoading
整頁式 loading。

```js
<script>
import { FullLoading } from 'vue-ez-component';
</script>

<template>
    <FullLoading :visible="true" />
</template>
```

## InlineLoading
行內 loading。

```js
<script>
import { InlineLoading } from 'vue-ez-component';
</script>

<template>
    <InlineLoading />
</template>
```
