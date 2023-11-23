<script>
import { mapState, mapWritableState, mapActions } from 'pinia';
import { useAppAtore } from '../stores/counter';
export default {
  data() {
    return {
      index: ''
    }
  },
  methods: {
    ...mapActions(useAppAtore, ['pilihJenjang']),
  },
  computed: {
    ...mapState(useAppAtore, ['jenjang', 'praSekolah','dasar', 'menengah', 'tinggi']),
    ...mapWritableState(useAppAtore,['pilih'])
  }
}
</script>

<template>
  <div class="flex items-center justify-center align-center">
    <select style="color: black;" @change="pilihJenjang(this.index)" v-model="index">Pilih jenjang
      <option selected disabled>Pilih jenjang</option>
      <option>{{ jenjang[0] }}</option>
      <option>{{ jenjang[1] }}</option>
      <option>{{ jenjang[2] }}</option>
      <option>{{ jenjang[3] }}</option>
    </select>
    <select style="color: black;" v-if="this.index === jenjang[0]">Pilih jenjang
      <option>{{ praSekolah[0] }}</option>
      <option>{{ praSekolah[1] }}</option>
      <option>{{ praSekolah[2] }}</option>
    </select>
    <select style="color: black;" v-if="this.index === jenjang[1]">Pilih jenjang
      <option>{{ dasar[0] }}</option>
      <option>{{ dasar[1] }}</option>
      <option>{{ dasar[2] }}</option>
      <option>{{ dasar[3] }}</option>
    </select>
    <select style="color: black;" v-if="this.index === jenjang[2]">Pilih jenjang
      <option>{{ menengah[0] }}</option>
      <option>{{ menengah[1] }}</option>
      <option>{{ menengah[2] }}</option>
    </select>
    <select style="color: black;" v-if="this.index === jenjang[3]">Pilih jenjang
      <option>{{ tinggi[0] }}</option>
      <option>{{ tinggi[1] }}</option>
      <option>{{ tinggi[2] }}</option>
    </select>
  </div>
</template>


