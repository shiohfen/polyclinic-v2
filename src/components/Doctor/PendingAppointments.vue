<template>
  <div class="my-3">
    <h2 class="my-3">Pending Appointments</h2>

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
      :filter="filter"
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
      <template #cell(date)="row">
        {{ row.value }}
      </template>
      <template #cell(actions)="row">
        <b-button
          variant="outline-success"
          size="sm"
          class="mr-1"
          @click="acceptAppointment(row.item)"
        >
          Accept
        </b-button>
        <b-button
          variant="outline-danger"
          size="sm"
          @click="cancelAppointment(row.item)"
        >
          Cancel
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="filteredAppointments.length"
      :per-page="perPage"
      align="center"
      class="mt-3"
    ></b-pagination>
  </div>
</template>

<script>
import "jspdf-autotable";
import jsPDF from "jspdf";

export default {
  data() {
    return {
      appointments: [
        { patientName: "John Doe", reason: "Checkup", date: "2023-04-20" },
        { patientName: "Jane Smith", reason: "Cleaning", date: "2023-04-22" },
        { patientName: "Bob Johnson", reason: "Crown", date: "2023-04-25" },
        { patientName: "Alice Brown", reason: "Filling", date: "2023-04-27" },
        { patientName: "Sarah Lee", reason: "Checkup", date: "2023-04-28" },
        { patientName: "Tom Jones", reason: "Cleaning", date: "2023-04-30" },
        { patientName: "Julia Chen", reason: "Filling", date: "2023-05-02" },
        { patientName: "Mark Kim", reason: "Crown", date: "2023-05-05" },
        { patientName: "Megan Park", reason: "Checkup", date: "2023-05-08" },
        { patientName: "David Lee", reason: "Cleaning", date: "2023-05-10" },
      ],
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: "patientName", label: "Patient Name" },
        { key: "reason", label: "Reason" },
        { key: "date", label: "Date" },
        { key: "actions", label: "Actions" },
      ],
      filter: "",
    };
  },
  computed: {
    filteredAppointments() {
      return this.appointments.filter((app) => {
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
    acceptAppointment(appointment) {
      // logic for accepting appointment
    },
    cancelAppointment(appointment) {
      // logic for cancelling appointment
    },
    exportToPdf() {
      // create a new jsPDF instance
      const doc = new jsPDF();

      // add title
      const title = "Pending Appointments";
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
     
