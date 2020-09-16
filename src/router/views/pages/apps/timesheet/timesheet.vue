<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
// import timesheetForm from "@components/form/timesheetForm";

import { tableData } from './timesheet-advanced'

export default {
  page: {
    title: 'Timesheet',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout, PageHeader,
    // timesheetForm
  },
  data () {
    return {
      dateConfig: {
        mode: 'range',
      },
      selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
      showmodal: false,
      tableData: tableData,
      title: 'Hoja de Tiempo',
      items: [
        {
          text: 'Shreyu',
          href: '/',
        },
        {
          text: 'Icons',
          href: '/',
        },
        {
          text: 'Hoja de Tiempo',
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      fields: [
        // { key: 'id', sortable: true },
        { key: 'image', label: 'Imagen', sortable: false },
        { key: 'name', label: 'Nombre', sortable: true },
        { key: 'rol', label: 'Rol', sortable: true },
        { key: 'start_hour', label: 'Hora inicio', sortable: true },
        { key: 'end_hour', label: 'Hora final', sortable: true },
        { key: 'total_hour', label: 'Horas Totales', sortable: true },
        { key: 'date', label: 'Fecha', sortable: true },
        { key: 'action', sortable: true, label: 'Acciones' }
      ],
    }
  },
  computed: {
    /**
     * Total no. of records
     */
    rows () {
      return this.tableData.length
    },
  },
  mounted () {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    hideModal (e) {
      this.showmodal = false
    },
  },
}
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Hoja de Tiempo</h4>
            <p class="text-muted font-13 mb-4"></p>
            <div class="row mb-md-2">
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4">
                <label class="d-inline-flex align-items-center">
                  <flat-pickr
                    v-model="selectedDate"
                    class="form-control"
                    :config="dateConfig"
                    name="date"
                  ></flat-pickr>
                </label>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Buscar:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Buscar..."
                      class="form-control form-control-sm mx-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template v-slot:cell(action)>
                  <button
                    id="btn-new-event"
                    class="btn btn-warning btn-sm mx-1 mx-md-2"
                    @click="showmodal = true"
                  >
                    <i class="uil-edit"></i>
                  </button>
                  <button
                    id="btn-new-event"
                    class="btn btn-danger btn-sm mx-1 mx-md-2"
                    @click="showmodal = true"
                  >
                    <i class="uil-cancel"></i>
                  </button>
                </template>
                <template v-slot:cell(image)="data">
                  <b-img :src="data.value" fluid alt="Fluid image" width="80"></b-img>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
