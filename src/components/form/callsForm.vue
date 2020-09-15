<template>
    <b-form class="form-horizontal">
        <div class="row">
            <div class="col-lg-6">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Nombre Cliente"
                    label-for="input-horizontal"
                >
                    <b-form-input id="input-horizontal" value></b-form-input>
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Atendido por"
                    label-for="input-horizontal"
                >
                    <b-form-input id="input-horizontal" value></b-form-input>
                </b-form-group>
            </div>

            <div class="col-lg-12">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Motivo"
                    label-for="input-horizontal"
                >
          <textarea
              v-model="textarea"
              class="form-control"
              :maxlength="225"
              rows="3"
          ></textarea>
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <div class="form-group row">
                    <label class="col-lg-12 col-form-label">Tipo</label>
                    <div class="col-lg-12">
                        <select class="form-control custom-select">
                            <option>Saliente</option>
                            <option>Entrante</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Duración"
                    label-for="input-horizontal"
                >
                    <b-form-input id="input-horizontal" value></b-form-input>
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Fecha Registro"
                    label-for="input-reg-data"
                >
                    <flat-pickr
                        v-model="date"
                        class="form-control"
                        placeholder=""
                        name="date"
                    ></flat-pickr>
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <b-form-group
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label="Fecha"
                    label-for="input-horizontal"
                ><flat-pickr
                    v-model="time"
                    :config="timePicker"
                    class="form-control"
                    placeholder=""
                ></flat-pickr>
                </b-form-group>
            </div>
            <div class="col-lg-12">
                <hr>
            </div>
            <div class="col-lg-12">
                <tasks-form />
            </div>
        </div>
    </b-form>
</template>
<script>
import tasksForm from "@components/form/tasksForm";
export default {
    components:{tasksForm},
    data () {
        return {
            regdata: '',
            duration: '',
            date: null,
            textarea: '',


            limit: null,
            timelimit: {
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                minDate: '16:00',
                maxDate: '22:30',
            },
        }
    }
}
</script>
