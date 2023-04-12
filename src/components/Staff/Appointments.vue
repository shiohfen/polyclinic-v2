<template>
  <div class="appointments-list">
    <b-table
      striped
      hover
      :items="appointments"
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
        },
        {
          date: "2023-04-16",
          patientName: "Jane Johnson",
          doctorName: "Dr. John Smith",
          location: "456 Maple Ave, Anytown, USA",
          notes: "Patient reports experiencing side effects from medication",
        },
        {
          date: "2023-04-17",
          patientName: "Bob Brown",
          doctorName: "Dr. Laura Chen",
          location: "789 Oak St, Anytown, USA",
          notes: "",
        },
        {
          date: "2023-04-18",
          patientName: "Sara Lee",
          doctorName: "Dr. John Smith",
          location: "321 Elm St, Anytown, USA",
          notes: "Patient is scheduled for a follow-up appointment in 2 weeks",
        },
        {
          date: "2023-04-19",
          patientName: "David Kim",
          doctorName: "Dr. Jane Doe",
          location: "654 Maple Ave, Anytown, USA",
          notes: "",
        },
        {
          date: "2023-04-20",
          patientName: "Emily Chen",
          doctorName: "Dr. Laura Chen",
          location: "987 Oak St, Anytown, USA",
          notes: "Patient is due for a flu shot",
        },
        {
          date: "2023-04-21",
          patientName: "Ryan Lee",
          doctorName: "Dr. John Smith",
          location: "246 Elm St, Anytown, USA",
          notes: "Patient reports increased symptoms since last visit",
        },
        {
          date: "2023-04-22",
          patientName: "Amy Wang",
          doctorName: "Dr. Jane Doe",
          location: "579 Maple Ave, Anytown, USA",
          notes: "",
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
          key: "actions",
          label: "Actions",
        },
      ],
      sortBy: "date",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
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
