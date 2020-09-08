<script>
export default {
    data: () => {
        return {
            tabContent: `Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
            content: ` Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.`,
        }
    },
}
</script>
<template>
    <b-tabs>
        <b-tab title="Cliente" active>
            <b-form class="form-horizontal">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group row">
                            <label class="col-lg-12 col-form-label">Cliente</label>
                            <div class="col-lg-12">
                                <select class="form-control custom-select">
                                    <option>Tomas Crespo</option>
                                    <option>Ricardo</option>
                                    <option>Jessica</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Telefono"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-12">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Nombre de contacto"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-12">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Telefono de contacto"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-12">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Email de contacto"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-tab>
        <b-tab title="Detalle de la orden">
            <b-form class="form-horizontal">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-lg-12 col-form-label">Estado</label>
                            <div class="col-lg-12">
                                <select class="form-control custom-select">
                                    <option>En proceso</option>
                                    <option>Presupuesto</option>
                                    <option>Reparado</option>
                                    <option>No Reparado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-lg-12 col-form-label">Tecnico</label>
                            <div class="col-lg-12">
                                <select class="form-control custom-select">
                                    <option>Tomas Crespo</option>
                                    <option>Ricardo</option>
                                    <option>Jessica</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-lg-12 col-form-label" for="example-date">Fecha</label>
                            <div class="col-lg-12">
                                <input
                                    id="example-date"
                                    class="form-control"
                                    type="date"
                                    name="date"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-lg-12 col-form-label" for="example-date1">Fecha entrega</label>
                            <div class="col-lg-12">
                                <input
                                    id="example-date1"
                                    class="form-control"
                                    type="date"
                                    name="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-tab>
        <b-tab title="Detalles del equipo">
            <b-form class="form-horizontal">
                <div class="row">
                    <div class="col-lg-4">
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
                    <div class="col-lg-4">
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
                    <div class="col-lg-4">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Numero de serie"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-8">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Descripción o nombre del equipo"
                            label-for="input-horizontal"
                        >
                            <b-form-input
                                id="input-horizontal"
                                value=""
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-4">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Accesorios"
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
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Problema del equipo"
                            label-for="input-horizontal"
                        >
                            <b-form-textarea
                                id="example-textarea"
                                size="lg"
                                rows="4"
                            ></b-form-textarea>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6">
                        <b-form-group
                            label-cols-sm="12"
                            label-cols-lg="12"
                            label="Observeciones"
                            label-for="input-horizontal"
                        >
                            <b-form-textarea
                                id="example-textarea"
                                size="lg"
                                rows="4"
                            ></b-form-textarea>
                        </b-form-group>
                    </div>
                </div>
            </b-form>
        </b-tab>
    </b-tabs>
</template>
