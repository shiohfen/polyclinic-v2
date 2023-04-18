<template>
  <div class="my-3">
    <h2 class="my-3">Accepted Appointments</h2>
    <div class="row justify-content-between mb-3">
      <div class="col-8">
        <b-form-input v-model="filter" placeholder="Search"></b-form-input>
      </div>
      <div class="col-4">
        <b-button variant="primary" @click="exportToPdf"
          >Export to PDF</b-button
        >
      </div>
    </div>
    <b-table
      :items="filteredAppointments"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      hover
      small
      responsive
    >
      <template #cell(patientName)="row">
        {{ row.value }}
      </template>
      <template #cell(reason)="row">
        {{ row.value }}
      </template>
      <template #cell(actions)="row">
        <b-button
          variant="outline-success"
          size="sm"
          class="mr-1"
          @click="completeAppointment(row.item)"
        >
          Complete
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="Appointments.length"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import "jspdf-autotable";
import jsPDF from "jspdf";

export default {
  data() {
    return {
      Appointments: [
        { patientName: "Sarah Lee", reason: "Checkup", date: "2023-04-19" },
        { patientName: "David Kim", reason: "Cleaning", date: "2023-04-20" },
        { patientName: "Olivia Chen", reason: "Crown", date: "2023-04-21" },
        { patientName: "James Park", reason: "Filling", date: "2023-04-22" },
        { patientName: "Hannah Lee", reason: "Checkup", date: "2023-04-23" },
        { patientName: "Ethan Kim", reason: "Cleaning", date: "2023-04-24" },
        { patientName: "Ava Chen", reason: "Crown", date: "2023-04-25" },
        { patientName: "Daniel Park", reason: "Filling", date: "2023-04-26" },
        // add more appointments as needed
      ],

      perPage: 5,
      currentPage: 1,
      filter: "",
      fields: [
        // define fields for the table as needed
        { key: "patientName", label: "Patient Name" },
        { key: "reason", label: "Reason" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  computed: {
    filteredAppointments() {
      return this.Appointments.filter((app) => {
        const name = app.patientName.toLowerCase();
        const reason = app.reason.toLowerCase();

        return (
          name.includes(this.filter.toLowerCase()) ||
          reason.includes(this.filter.toLowerCase())
        );
      });
    },
  },
  methods: {
    completeAppointment(appointment) {
      // method for completing an appointment
    },
    exportToPdf() {
      // create a new jsPDF instance
      const doc = new jsPDF();

      // add title
      const title = "Accepted Appointments";
      const titleFontSize = 18;
      const titleWidth = doc.getTextDimensions(title).w;
      const pageWidth = doc.internal.pageSize.width;
      const titleX = (pageWidth - titleWidth) / 2;
      doc.setFontSize(titleFontSize);
      doc.text(title, titleX, 20);

      const headers = [["Patient name", "Reason", "Date"]];
      // get table data as an array of arrays
      const data = this.filteredAppointments.map((app) => [
        app.patientName,
        app.reason,
        app.date,
      ]);

      // autoTable options
      const options = {
        startY: 40,
      };

      // add table to PDF document
      doc.autoTable({
        head: headers,
        body: data,
        startY: options.startY,
      });

      // save PDF document
      doc.save("appointments.pdf");
    },
  },
};
</script>
