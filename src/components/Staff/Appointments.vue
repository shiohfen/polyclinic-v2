<template>
  <div class="appointments-list">
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
      striped
      hover
      :items="filteredAppointments"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction.sync="sortDirection"
      :filter="filter"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template slot="date" slot-scope="data">
        {{ formatDate(data.item.date) }}
      </template>

      <template #cell(actions)="data">
        <b-button size="sm" variant="primary" @click="viewDetails(data.item)"
          >View Details</b-button
        >
      </template>
    </b-table>
    <div class="pagination">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
      />
    </div>
  </div>
</template>

<script>
import "jspdf-autotable";
import jsPDF from "jspdf";

export default {
  data() {
    return {
      appointments: [
        {
          date: "2023-04-15",
          patientName: "John Smith",
          doctorName: "Dr. Jane Doe",
          location: "123 Main St, Anytown, USA",
          notes: "Patient reports feeling better after taking medication",
          status: "completed",
        },
        {
          date: "2023-04-16",
          patientName: "Jane Johnson",
          doctorName: "Dr. John Smith",
          location: "456 Maple Ave, Anytown, USA",
          notes: "Patient reports experiencing side effects from medication",
          status: "completed",
        },
        {
          date: "2023-04-17",
          patientName: "Bob Brown",
          doctorName: "Dr. Laura Chen",
          location: "789 Oak St, Anytown, USA",
          notes: "",
          status: "pending",
        },
        {
          date: "2023-04-18",
          patientName: "Sara Lee",
          doctorName: "Dr. John Smith",
          location: "321 Elm St, Anytown, USA",
          notes: "Patient is scheduled for a follow-up appointment in 2 weeks",
          status: "completed",
        },
        {
          date: "2023-04-19",
          patientName: "David Kim",
          doctorName: "Dr. Jane Doe",
          location: "654 Maple Ave, Anytown, USA",
          notes: "",
          status: "pending",
        },
        {
          date: "2023-04-20",
          patientName: "Emily Chen",
          doctorName: "Dr. Laura Chen",
          location: "987 Oak St, Anytown, USA",
          notes: "Patient is due for a flu shot",
          status: "completed",
        },
        {
          date: "2023-04-21",
          patientName: "Ryan Lee",
          doctorName: "Dr. John Smith",
          location: "246 Elm St, Anytown, USA",
          notes: "Patient reports increased symptoms since last visit",
          status: "completed",
        },
        {
          date: "2023-04-22",
          patientName: "Amy Wang",
          doctorName: "Dr. Jane Doe",
          location: "579 Maple Ave, Anytown, USA",
          notes: "",
          status: "pending",
        },
      ],
      fields: [
        { key: "date", label: "Date", sortable: true },
        {
          key: "patientName",
          label: "Patient Name",
          sortable: true,
        },
        {
          key: "doctorName",
          label: "Doctor Name",
          sortable: true,
        },
        {
          key: "location",
          label: "Location",
        },
        {
          key: "notes",
          label: "Notes",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      sortBy: "date",
      sortDesc: false,
      sortDirection: "asc",
      filter: "",
      currentPage: 1,
      perPage: 5,
    };
  },
  computed: {
    totalRows() {
      return this.appointments.length;
    },
    paginatedAppointments() {
      return this.appointments.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    filteredAppointments() {
      return this.appointments.filter((app) => {
        const name = app.patientName.toLowerCase();
        const doctorName = app.doctorName.toLowerCase();
        const date = app.date.toLowerCase();
        const status = app.status.toLowerCase();

        return (
          name.includes(this.filter.toLowerCase()) ||
          doctorName.includes(this.filter.toLowerCase()) ||
          date.includes(this.filter.toLowerCase()) ||
          status.includes(this.filter.toLowerCase())
        );
      });
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    viewDetails(appointment) {
      console.log(appointment);
      // code to show appointment details modal goes here
    },
    exportPDF() {
      const unit = "pt";
      const size = "A4";
      const orientation = "landscape";
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);

      doc.setFontSize(15);
      doc.text("Appointment List", marginLeft, 40);

      const headers = [["Patient name", "Doctor Name", "Date", "Status"]];

      const data = this.filteredAppointments.map((app) => [
        app.patientName,
        app.doctorName,
        app.date,
        app.status,
      ]);

      let content = {
        startY: 50,
        head: headers,
        body: data,
      };

      doc.autoTable(content);

      doc.save("Appointments.pdf");
    },
  },
};
</script>

<style scoped>
.appointments-list {
  max-width: 800px;
  margin: 0 auto;
}

.pagination {
  margin-top: 1rem;
}
</style>
