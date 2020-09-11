<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import callsForm from "@components/form/callsForm";

import { tableData } from './calls-advanced'

export default {
  page: {
    title: 'Calls',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, callsForm },
  data () {
    return {

      showmodal: false,
      tableData: tableData,
      title: 'Llamadas',
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
          text: 'Llamadas',
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
        { key: 'id', sortable: true },
        { key: 'name', label: 'Nombre', sortable: true },
        { key: 'person', label: 'Atendido por', sortable: true },
        { key: 'motive', label: 'Motivo', sortable: true },
        { key: 'type', label: 'Tipo', sortable: true },
        { key: 'duration', label: 'Duración', sortable: true },
        { key: 'reg_date', label: 'Fecha Reg', sortable: true },
        { key: 'date', label: 'Fecha', sortable: true },
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
            <h4 class="header-title mt-0 mb-1">Lista de Llamadas</h4>
            <p class="text-muted font-13 mb-4"></p>
            <div class="row mb-md-2">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
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
                  <button id="btn-new-event" class="btn btn-primary btn-sm" @click="showmodal = true">
                    <i class="uil-plus-circle"></i> Registrar Llamada
                  </button>
                  <b-modal
                    v-model="showmodal"
                    size="lg"
                    title="Formulario Llamada"
                    title-class="font-18"
                    hide-footer
                  >
                    <calls-form />

                    <div class="text-right">
                      <button type="submit" class="btn btn-success">Guardar</button>
                      <b-button class="ml-1" variant="light" @click="hideModal">Cerrar</b-button>
                    </div>
                  </b-modal>
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
              ></b-table>
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
