<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
// import PageHeader from '@components/page-header'
export default {
    page: {
        title: 'Service Report',
        meta: [{ name: 'description', content: appConfig.description }],
    },
    components: { Layout },
    data () {
        return {
            dateConfig: {
                mode: 'range',
            },
            selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
            showmodal: false,
            title: 'Reporte de servicio',
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
                    text: 'Reporte de servicio',
                    active: true,
                },
            ],
            selected: [], // Must be an array reference!
            options: [
                { text: 'Por Cliente', value: 'client' },
                { text: 'Cruz Ayala', value: 'Cruzayala' },
            ],
            selected1: [], // Must be an array reference!
            options1: [
                { text: 'Mantenimiento', value: 'client' },
                { text: 'Reparacion', value: 'Cruzayala' },
                { text: 'Calibracion', value: 'Cruzayala' },
                { text: 'Revision', value: 'Cruzayala' },
            ],
            selected2: [], // Must be an array reference!
            options2: [
                { text: '7 dias', value: 'client' },
                { text: '15 dias', value: 'Cruzayala' },
                { text: '30 dias', value: 'Cruzayala' },
                { text: '60 dias', value: 'Cruzayala' },
            ],
            selected3: [], // Must be an array reference!
            options3: [
                { text: 'Equipo Operando', value: 'client' },
                { text: 'Equipo Retirado', value: 'Cruzayala' },
            ],
            itemstable: [
                { codigo: '00', descripcion: 'Bomba', cantidad: '2'},
                { codigo: 'test', descripcion: 'test', cantidad: 'test'},
                { codigo: 'test', descripcion: 'test', cantidad: 'test'},
                { codigo: 'test', descripcion: 'test', cantidad: 'test'},
                { codigo: 'test', descripcion: 'test', cantidad: 'test'},
            ]
        }
    },
    computed: {
        /**
         * Total no. of records
         */
    },
    mounted () {
        // Set the initial number of items

    },
    methods: {
        /**
         * Search the table data with search input
         */
    },
}
</script>

<template>
    <Layout>
        <!--        <PageHeader :title="title" :items="items" />-->
        <div class="row page-title align-items-center">
            <div class="col-md-3 col-xl-6">
                <h4 class="mb-1 mt-0">Tecnicos</h4>
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
                        <h4 class="header-title mt-0 mb-1">Lista de tecnicos</h4>
                        <p class="text-muted font-13 mb-4"></p>
                        <b-form class="form-horizontal">
                            <div class="row">
                                <div class="col-lg-10">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Cliente"
                                        label-for="input-horizontal"
                                    >
                                        <select class="form-control custom-select">
                                            <option>Tomas Crespo</option>
                                            <option>Ricardo</option>
                                            <option>Jessica</option>
                                        </select>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-2">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Fecha"
                                        label-for="input-horizontal"
                                    >
                                        <input
                                            id="example-date"
                                            class="form-control"
                                            type="date"
                                            name="date"
                                        />
                                    </b-form-group>
                                </div>
                                <div class="col-lg-2">
                                    <b-form-group
                                        label="Servicio solicitado:"
                                        label-for="input-horizontal"
                                        label-cols-sm="12"
                                        label-cols-lg="12">
                                        <b-form-checkbox-group
                                            id="checkbox-group-1"
                                            v-model="selected"
                                            :options="options"
                                            name="flavour-1"
                                        ></b-form-checkbox-group>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label="Tipo de servico:"
                                        label-for="input-horizontal"
                                        label-cols-sm="12"
                                        label-cols-lg="12">
                                        <b-form-checkbox-group
                                            id="checkbox-group-1"
                                            v-model="selected1"
                                            :options="options1"
                                            name="flavour-1"
                                        ></b-form-checkbox-group>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-12">
                                    <hr>
                                </div>
                                <div class="col-lg-3">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Equipo"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-input
                                            id="input-horizontal"
                                            value=""
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-3">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Marca"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-input
                                            id="input-horizontal"
                                            value=""
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-3">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Modelo"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-input
                                            id="input-horizontal"
                                            value=""
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-3">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="No.serie"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-input
                                            id="input-horizontal"
                                            value=""
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-12">
                                    <hr>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Motivo del servico"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-textarea
                                            id="example-textarea"
                                            size="lg"
                                            rows="2"
                                        ></b-form-textarea>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Servicio realizado"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-textarea
                                            id="example-textarea"
                                            size="lg"
                                            rows="2"
                                        ></b-form-textarea>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Observaciones"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-textarea
                                            id="example-textarea"
                                            size="lg"
                                            rows="2"
                                        ></b-form-textarea>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Garantia del trabajo"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-textarea
                                            id="example-textarea"
                                            size="lg"
                                            rows="2"
                                        ></b-form-textarea>
                                        <b-form-checkbox-group
                                            id="checkbox-group-3"
                                            v-model="selected2"
                                            :options="options2"
                                            name="flavour-3"
                                        ></b-form-checkbox-group>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-table bordered responsive="sm" :items="itemstable"></b-table>
                                </div>
                                <div class="col-lg-6" />
                                <div class="col-lg-6">
                                    <b-form-group
                                        label-cols-sm="12"
                                        label-cols-lg="12"
                                        label="Proximo mantenimiento"
                                        label-for="input-horizontal"
                                    >
                                        <b-form-input
                                            id="input-horizontal"
                                            value=""
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-lg-6">
                                    <b-form-group
                                        label="Conclusion"
                                        label-for="input-horizontal"
                                        label-cols-sm="12"
                                        label-cols-lg="12">
                                        <b-form-checkbox-group
                                            id="checkbox-group-1"
                                            v-model="selected3"
                                            :options="options3"
                                            name="flavour-1"
                                        ></b-form-checkbox-group>
                                    </b-form-group>
                                </div>
                            </div>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
