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
      showmodal: false,
      tableData: tableData,
      sizes: ['Proveedor', 'Proveedor 2', 'Proveedor 3', 'Proveedor 4'],
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
        { key: 'action', sortable: false, label: 'Acciones' }
      ],
      selected: null,
      options: [
        { value: null, text: '' },
        { value: 'a', text: 'Condicion 2' },
        { value: { B: '3PO' }, text: 'Condicion 3' },
      ]
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
    <div class="row page-title align-items-center py-2"></div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-2">Orden de compra</h4>
            <!-- Form -->
            <div>
              <b-form class="form-horizontal">
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Proveedores"
                        label-for="my-list-id-input"

                      >
                        <b-form-input id="my-list-id-input" list="my-list-id"></b-form-input>
                        <datalist id="my-list-id">
                          <option>Opción ejemplo</option>
                          <option v-for="size in sizes" :key="size">{{ size }}</option>
                        </datalist>
                      </b-form-group>
                    </div>
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Número Factura"
                        label-for="input-horizontal"
                      >
                        <b-form-input id="input-horizontal" style="width: 100px"></b-form-input>
                      </b-form-group>
                    </div>
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="NCF"
                        label-for="input-horizontal"
                      >
                        <b-form-input id="input-horizontal" style="width: 200px"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Número Documento"
                        label-for="input-horizontal"
                      >
                        <b-form-input id="input-horizontal" style="width: 100px"></b-form-input>
                      </b-form-group>
                    </div>
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Condicion"
                        label-for="input-horizontal"
                      >
                        <b-form-select v-model="selected" :options="options" style="width: 300px"></b-form-select>
                      </b-form-group>
                    </div>

                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Fecha Factura"
                        label-for="input-horizontal"
                      >
                        <flat-pickr
                          v-model="time"
                          :config="timePicker"
                          class="form-control"
                          placeholder
                          style="width: 250px"
                        ></flat-pickr>
                      </b-form-group>
                    </div>
                    <div>
                      <b-form-group
                        label-cols-sm="12"
                        label-cols-md="4"
                        label="Fecha Vencimiento"
                        label-for="input-horizontal"
                      >
                        <flat-pickr
                          v-model="time"
                          :config="timePicker"
                          class="form-control"
                          placeholder
                          style="width: 250px"
                        ></flat-pickr>
                      </b-form-group>
                    </div>
                    <div class="col-lg-12">
                      <tasks-form />
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
            <!-- End form -->
            <div class="row my-2">
              <!-- <div class="col-sm-12 col-md-6 col-lg-4">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Mostrar&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
                  </label>
                </div>
              </div>-->

              <!-- Search -->
              <!-- <div class="col-sm-12 col-md-6 col-lg-4">
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
              </div>-->
              <!-- End search -->
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
                    <button id="btn-new-event" class="btn btn-danger btn-sm mx-1 mx-md-2">
                      <i class="uil-cancel"></i>
                    </button>
                  </div>
                </template>
              </b-table>
            </div>
            <div>
              <button id="btn-new-event" class="btn btn-primary btn-sm mb-2 mt-3">
                <!-- @click="showmodal = true" -->
                <i class="uil-plus mr-1"></i> Agregar producto
              </button>
            </div>
            <!-- === -->
            <div class="row">
              <div class="col-md-8 col-lg-9 row">
                <div class="col-md-6">
                  <b-form-group
                    label-cols-sm="12"

                    label="Nota:"
                    label-for="input-horizontal"
                  >
                    <textarea v-model="textarea" class="form-control" :maxlength="225" rows="3"></textarea>
                  </b-form-group>
                </div>
              </div>
              <div
                class="col-md-4 col-lg-3 d-flex justify-content-center align-items-center flex-wrap"
              >
                <div class="row py-2 border">
                  <div class="col-md-12 row no-gutters">
                    <h6 class="col-6 m-0">Sub-total:</h6>
                    <p class="col-6 m-0 text-right">RD$ 0</p>
                  </div>
                  <div class="col-md-12 row no-gutters">
                    <h6 class="col-6 m-0">Descuento:</h6>
                    <p class="col-6 m-0 text-right">RD$ 0</p>
                  </div>

                  <div class="col-md-12 row no-gutters">
                    <h6 class="col-6 m-0">ITBIS:</h6>
                    <p class="col-6 m-0 text-right">RD$ 0</p>
                  </div>
                  <div class="col-12">
                    <hr class="my-1" />
                  </div>
                  <div class="col-md-12 row no-gutters">
                    <h6 class="col-6 m-0">Total:</h6>
                    <p class="col-6 m-0 text-right">RD$ 0</p>
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

<style scoped>
input, select{
  height: 34px !important;
}
label{
  padding: 0 !important;
}

</style>
