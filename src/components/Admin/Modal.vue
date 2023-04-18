<template>
  <b-modal :title="title" @hidden="$emit('close')">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-search"></i></span>
      </div>
      <b-form-input type="text" placeholder="Search" v-model="search" />
    </div>
    <b-table :items="filteredItems" :fields="headers">
      <template v-for="(item, index) in Object.keys(headers)">
        <template
          v-if="index > 0"
          :slot="`cell(${Object.keys(headers)[index]})`"
          slot-scope="data" >
          {{ data.value }}
        </template>
      </template>
    </b-table>
    <template #modal-footer="{ hide }">
      <b-button variant="secondary" @click="hide">Close</b-button>
      <b-button variant="primary" @click="exportPdf">Export to PDF</b-button>
    </template>
  </b-modal>
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { BModal, BFormInput, BTable, BButton } from "bootstrap-vue";

export default {
  components: {
    BModal,
    BFormInput,
    BTable,
    BButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    headers() {
      if (this.items.length > 0) {
        return Object.keys(this.items[0]);
      } else {
        return [];
      }
    },
    filteredItems() {
      if (this.search === "") {
        return this.items;
      } else {
        return this.items.filter((item) => {
          return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
    },
  },
  methods: {
    exportPdf() {
      const doc = new jsPDF();
      doc.autoTable({
        head: [this.headers],
        body: this.filteredItems,
      });
      doc.save(`${this.title}.pdf`);
    },
  },
};
</script>
