<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import {tableData} from "@views/pages/apps/vendors/data-vendors";
import vendorForm from "@components/form/vendorForm"
export default {
    page: {
        title: 'Vendors',
        meta: [{ name: 'description', content: appConfig.description }],
    },
    components: { Layout, vendorForm },
    data () {
        return {
            dateConfig: {
                mode: 'range',
            },
            selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
            showmodal: false,
            tableData: tableData,
            title: 'Vendors',
            items: [
                {
                    text: 'Shreyu',
                    href: '/',
                },
                {
                    text: 'Apps',
                    href: '/',
                },
                {
                    text: 'proveedores',
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
                { key: 'name', sortable: true, label: 'Nombre'},
                { key: 'email', sortable: true, label: 'Correo Electronico' },
                { key: 'address', sortable: true, label: 'Direccion'},
                { key: 'phone_number', sortable: true, label: 'Telefono' },
                { key: 'creation_date', sortable: true, label: 'Fecha de creacion' },
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
        }
    },
}
</script>
<template>
    <Layout>
        <!--        <PageHeader :title="title" :items="items" />-->
        <div class="row page-title align-items-center">
            <div class="col-md-3 col-xl-6">
                <h4 class="mb-1 mt-0">Proveedores</h4>
            </div>
            <div class="col-md-9 col-xl-6 text-md-right">
                <div class="mt-4 mt-md-0">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mt-0 mb-1">Lista de Proveedores</h4>
                        <p class="text-muted font-13 mb-4"></p>
                        <div class="row mb-md-2">
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <div id="tickets-table_length" class="dataTables_length">
                                    <label class="d-inline-flex align-items-center">
                                        Mostrar&nbsp;
                                        <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
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
                                        Buscador:
                                        <b-form-input
                                            v-model="filter"
                                            type="search"
                                            placeholder="Buscar..."
                                            class="form-control form-control-sm ml-2"
                                        ></b-form-input>
                                    </label>
                                    <button id="btn-new-event" class="btn btn-primary btn-sm mx-md-2" @click="showmodal = true">
                                        <i class="uil-plus mr-1"></i> Crear proveedor
                                    </button>
                                    <b-modal
                                        v-model="showmodal"
                                        size="lg"
                                        title="Formulario proveedores"
                                        title-class="font-18"
                                        hide-footer
                                    >
                                        <vendor-form />
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
                            >
                                <template v-slot:cell(image)="data">
                                    <b-img :src="data.value" fluid alt="Fluid image" width="80"></b-img>
                                </template>
                                <template v-slot:cell(action)>
                                    <div>
                                        <button class="btn btn-warning btn-sm mx-1 mx-md-2" @click="showmodal = true">
                                            <i class="uil-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm mx-1 mx-md-2" @click="showmodal = true">
                                            <i class="uil-cancel"></i>
                                        </button>
                                    </div>
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
