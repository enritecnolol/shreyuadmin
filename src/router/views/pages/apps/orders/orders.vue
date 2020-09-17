<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import { tableData } from "@views/pages/apps/orders/data-orders";
// import productForm from "@components/form/productForm";
export default {
  page: {
    title: 'Orden',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  //   productForm
  components: { Layout },
  data () {
    return {
      dateConfig: {
        mode: 'range',
      },
      selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
      showmodal: false,
      tableData: tableData,
      title: 'Orden de compra',
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
          text: 'Clientes',
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 2,
      pageOptions: [2, 10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'code', sortable: true, label: 'Código' },
        { key: 'name', sortable: true, label: 'Nombre' },
        { key: 'quantity', sortable: true, label: 'Cantidad' },
        { key: 'hour', sortable: true, label: 'Hora' },
        { key: 'hour_rate', sortable: true, label: 'Tarifa Horas' },
        { key: 'total', sortable: true, label: 'Total' },
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
    // hideModal (e) {
    //   this.showmodal = false
    // }
  },
}
</script>
<template>
  <Layout>
    <!--        <PageHeader :title="title" :items="items" />-->
    <div class="row page-title align-items-center py-2">
      <!-- <div class="col-md-3 col-xl-6">
        <h4 class="mb-1 mt-0">Ordenes de compra</h4>
      </div>
      <div class="col-md-9 col-xl-6 text-md-right">
        <div class="mt-4 mt-md-0"></div>
      </div>-->
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-2">Orden de compra</h4>
            <!-- Form -->
            <div>
              <b-form class="form-horizontal">
                <div class="row">
                  <div class="col-lg-6">
                    <b-form-group
                      label-cols-sm="12"
                      label-cols-lg="12"
                      label="Fecha Factura"
                      label-for="input-horizontal"
                    >
                      <flat-pickr
                        v-model="time"
                        :config="timePicker"
                        class="form-control"
                        placeholder
                      ></flat-pickr>
                    </b-form-group>
                  </div>
                  <div class="col-lg-6">
                    <b-form-group
                      label-cols-sm="12"
                      label-cols-lg="12"
                      label="Fecha Vencimiento"
                      label-for="input-horizontal"
                    >
                      <flat-pickr
                        v-model="time"
                        :config="timePicker"
                        class="form-control"
                        placeholder
                      ></flat-pickr>
                    </b-form-group>
                  </div>
                  <div class="col-lg-12">
                    <tasks-form />
                  </div>
                </div>
              </b-form>
            </div>
            <!-- End form -->
            <div class="row my-2">
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Mostrar&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
                  </label>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
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
              <div class="col-sm-12 col-md-6 col-lg-3">
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
                </div>
              </div>
              <!-- End search -->
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <button id="btn-new-event" class="btn btn-primary btn-sm mx-md-2">
                    <!-- @click="showmodal = true" -->
                    <i class="uil-plus mr-1"></i> Agregar producto
                  </button>
                </div>
              </div>
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0 border">
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
                  </div>
                </template>
              </b-table>
            </div>
            <!-- === -->
            <div class="row">
              <div class="col-md-6 col-lg-8 row">
                <div class="col-md-6">
                  <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Nota"
                    label-for="input-horizontal"
                  >
                    <textarea v-model="textarea" class="form-control" :maxlength="225" rows="3"></textarea>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Términos o acuerdo"
                    label-for="input-horizontal"
                  >
                    <textarea v-model="textarea" class="form-control" :maxlength="225" rows="3"></textarea>
                  </b-form-group>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-flex justify-content-center align-items-start flex-wrap"
              >
                <div class="row py-2">
                  <div class="col-md-12 d-flex align-items-center">
                    <h6 class="my-0">Sub-total:</h6>
                    <p class="my-0 mx-md-2">RD$ 0</p>
                  </div>
                  <div class="col-md-12 d-flex align-items-center">
                    <h6 class="my-0">Descuento:</h6>
                    <p class="my-0 mx-md-2">RD$ 0</p>
                  </div>

                  <div class="col-md-12 d-flex align-items-center">
                    <h6 class="my-0">Impuesto:</h6>
                    <p class="my-0 mx-md-2">RD$ 0</p>
                  </div>
                  <div class="col-md-12 d-flex align-items-center">
                    <h6 class="my-0">Total:</h6>
                    <p class="my-0 mx-md-2">RD$ 0</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- === -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
