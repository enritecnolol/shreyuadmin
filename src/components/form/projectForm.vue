<script>

</script>
<template>
    <b-form class="form-horizontal">
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group row">
                    <label class="col-lg-12 col-form-label">Categoria</label>
                    <div class="col-lg-12">
                        <select class="form-control custom-select">
                            <option>Categoria1</option>
                            <option>Categoria2</option>
                            <option>Categoria3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="titulo"
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
                    label="Detalles"
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
                <div class="form-group row">
                    <label class="col-lg-12 col-form-label" for="example-date2">Fecha</label>
                    <div class="col-lg-12">
                        <input
                            id="example-date2"
                            class="form-control"
                            type="date"
                            name="date"
                        />
                    </div>
                </div>
            </div>
        </div>
    </b-form>
</template>
