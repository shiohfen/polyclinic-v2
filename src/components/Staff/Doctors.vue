<template>
  <div class="doctors-list">
    <div class="d-flex justify-content-between align-items-center">
      <b-form-group label="Search" label-for="search-input">
        <b-input-group>
          <b-form-input
            id="search-input"
            v-model="filter"
            type="search"
            placeholder="Search"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button variant="primary" @click="exportPDF"> Export to PDF </b-button>
    </div>
    <b-table
      :items="filteredDoctors"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      responsive
      striped
      hover
    >
      <!-- <template #cell(name)="data">
        <b-link :href="data.item.profileLink" target="_blank">{{
          data.value
        }}</b-link>
      </template> -->
      <template #cell(actions)="data">
        <b-button size="sm" variant="primary" @click="viewDetails(data.item)"
          >View Details</b-button
        >
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      class="my-3"
    />
  </div>
</template>

<script>
import "jspdf-autotable";
import jsPDF from "jspdf";

export default {
  components: {},
  data() {
    return {
      doctors: [
        {
          name: "Dr. John Doe",
          specialization: "Cardiology",
          rating: 4.5,
          profileLink: "https://example.com/doctors/john-doe",
          address: "123 Main St, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Jane Smith",
          specialization: "Dermatology",
          rating: 4.8,
          profileLink: "https://example.com/doctors/jane-smith",
          address: "456 Oak Ave, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Michael Johnson",
          specialization: "Neurology",
          rating: 4.2,
          profileLink: "https://example.com/doctors/michael-johnson",
          address: "789 Elm St, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Sarah Lee",
          specialization: "Pediatrics",
          rating: 4.9,
          profileLink: "https://example.com/doctors/sarah-lee",
          address: "321 Maple Rd, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Peter Davis",
          specialization: "Oncology",
          rating: 4.3,
          profileLink: "https://example.com/doctors/peter-davis",
          address: "654 Pine St, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Emily Kim",
          specialization: "Psychiatry",
          rating: 4.7,
          profileLink: "https://example.com/doctors/emily-kim",
          address: "987 Cedar Blvd, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Robert Green",
          specialization: "General Surgery",
          rating: 4.1,
          profileLink: "https://example.com/doctors/robert-green",
          address: "789 Maple St, Anytown, USA",
          phone: "+1 555-555-5555",
        },
        {
          name: "Dr. Laura Chen",
          specialization: "Endocrinology",
          rating: 4.6,
          profileLink: "https://example.com/doctors/laura-chen",
          address: "654 Oak St, Anytown, USA",
          phone: "+1 555-555-5555",
        },
      ],
      fields: [
        { key: "name", label: "Name", sortable: true },
        { key: "specialization", label: "Specialization", sortable: true },
        // { key: "rating", label: "Rating", sortable: true },
        { key: "actions", label: "Actions" },
      ],
      sortBy: "rating",
      sortDesc: true,
      sortDirection: "desc",
      filter: "",
      currentPage: 1,
      perPage: 5,
      search: "",
    };
  },
  computed: {
    totalRows() {
      return this.doctors.length;
    },
    filteredDoctors() {
      return this.doctors.filter((doctor) => {
        const name = doctor.name.toLowerCase();
        const specialization = doctor.specialization.toLowerCase();
        return (
          name.includes(this.filter.toLowerCase()) ||
          specialization.includes(this.filter.toLowerCase())
        );
      });
    },
  },
  methods: {
    viewDetails(doctor) {
      console.log(`Viewing details for ${doctor.name}`);
    },
    exportPDF() {
      const unit = "pt";
      const size = "A4";
      const orientation = "landscape";
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);

      doc.setFontSize(15);
      doc.text("Doctors List", marginLeft, 40);

      const headers = [["Name", "Specialization", "Rating"]];

      const data = this.filteredDoctors.map((doctor) => [
        doctor.name,
        doctor.specialization,
        doctor.rating,
      ]);

      let content = {
        startY: 50,
        head: headers,
        body: data,
      };

      doc.autoTable(content);

      doc.save("Doctors.pdf");
    },
  },
};
</script>

<style scoped>
.doctors-list {
  max-width: 800px;
  margin: 0 auto;
}
tr {
  transition: background-color 0.3s ease;
}
tr:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.search-input {
  flex: 1;
  margin-right: 10px;
}
.export-btn {
  margin-left: 10px;
}
</style>