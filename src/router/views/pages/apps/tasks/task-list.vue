<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import tasksForm from "@components/form/tasksForm";
import TaskDetail from './task-detail'
import { todayTasks, upcomingTasks, otherTasks } from './data-tasklist'

export default {
  page: {
    title: 'Tasks List',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, TaskDetail, tasksForm },
  data () {
    return {
      showmodal: false,
      selectedTask: todayTasks[0],
      title: 'Tasks List',
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
          text: 'Tasks',
          href: '/',
        },
        {
          text: 'List',
          active: true,
        },
      ],
      todayTasks: [...todayTasks],
      upcomingTask: [...upcomingTasks],
      otherTask: [...otherTasks],
      tabContent: `Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
      content: ` Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.`,
    }
  },
  methods: {

    hideModal (e) {
      this.showmodal = false
    }
  }
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <!-- cta -->
                <div class="row">
                  <div class="col-sm-3">
                    <b-button variant="primary" @click="showmodal = true" >
                      <i class="uil uil-plus mr-1"></i> Nueva tarea
                    </b-button>
                    <b-modal
                      v-model="showmodal"
                      size="lg"
                      title="Formulario tarea"
                      title-class="font-18"
                      hide-footer
                    >
                      <tasks-form />

                      <div class="text-right">
                        <button type="submit" class="btn btn-success">Guardar</button>
                        <b-button class="ml-1" variant="light" @click="hideModal">Cerrar</b-button>
                      </div>
                    </b-modal>
                  </div>
                  <div class="col-sm-9">
                    <div class="float-sm-right mt-3 mt-sm-0">
                      <div class="task-search d-inline-block mb-3 mb-sm-0 mr-sm-3">
                        <form>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control search-input"
                              placeholder="Search..."
                            />
                            <span class="uil uil-search icon-search"></span>
                            <div class="input-group-append">
                              <button class="btn btn-soft-primary" type="button">
                                <i class="uil uil-file-search-alt"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <b-dropdown id="sort-act" class="d-inline-block" right>
                        <template v-slot:button-content>
                          <i class="uil uil-sort-amount-down"></i>
                        </template>
                        <b-dropdown-item>Due Date</b-dropdown-item>
                        <b-dropdown-item>Added Date</b-dropdown-item>
                        <b-dropdown-item>Assignee</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <a
                      v-b-toggle.todayTasks
                      class="text-dark"
                      href="javascript: void(0);"
                      aria-controls="todayTasks"
                    >
                      <h5 class="mb-0">
                        <i class="uil uil-angle-down font-size-18"></i>Today
                        <span class="text-muted font-size-14">({{ todayTasks.length }})</span>
                      </h5>
                    </a>
                    <b-collapse id="todayTasks" visible>
                      <div class="card mb-0 shadow-none">
                        <div class="card-body pt-0">
                          <div
                            v-for="(task, index) of todayTasks"
                            :key="index"
                            class="row justify-content-sm-between border-bottom mt-2 pt-2"
                          >
                            <div class="col-lg-6 mb-2 mb-lg-0">
                              <div class="custom-control custom-checkbox">
                                <input
                                  :id="`task-${index}`"
                                  type="checkbox"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="`task-${index}`"
                                >{{ task.title }}</label>
                              </div>
                              <!-- end checkbox -->
                            </div>
                            <!-- end col -->
                            <div class="col-lg-6">
                              <div class="d-sm-flex justify-content-between">
                                <div>
                                  <img
                                    v-b-tooltip.hover
                                    :title="`Assigned to ${task.assigned_to}`"
                                    :src="`${task.assignee_avatar}`"
                                    alt="image"
                                    class="avatar-xs rounded-circle"
                                  />
                                </div>
                                <div class="mt-3 mt-sm-0">
                                  <ul class="list-inline font-13 text-sm-right">
                                    <li class="list-inline-item pr-1">
                                      <i class="uil uil-schedule font-16 mr-1"></i>
                                      {{ task.due_date }}
                                    </li>
                                    <li class="list-inline-item pr-1">
                                      <i class="uil uil-align-alt font-16 mr-1"></i>
                                      {{ task.checklists.length }}
                                    </li>
                                    <li class="list-inline-item pr-2">
                                      <i class="uil uil-comment-message font-16 mr-1"></i>
                                      {{ task.comments.length }}
                                    </li>
                                    <li class="list-inline-item">
                                      <span
                                        class="badge p-1"
                                        :class="{
                                          'badge-soft-danger':
                                            `${task.priority}` === 'High',
                                          'badge-soft-info':
                                            `${task.priority}` === 'Medium',
                                          'badge-soft-success':
                                            `${task.priority}` === 'Low',
                                        }"
                                      >{{ task.priority }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <!-- end .d-flex-->
                            </div>
                            <!-- end col -->
                          </div>
                          <!-- end card-body-->
                        </div>
                        <!-- end card -->
                      </div>
                      <!-- end .collapse-->

                      <!-- upcoming tasks -->
                    </b-collapse>

                    <div class="mt-4">
                      <a
                        v-b-toggle.upcomingTask
                        class="text-dark"
                        href="javascript: void(0);"
                        aria-controls="upcomingTask"
                      >
                        <h5 class="mb-0">
                          <i class="uil uil-angle-down font-size-18"></i>Upcoming
                          <span class="text-muted font-size-14">({{ upcomingTask.length }})</span>
                        </h5>
                      </a>
                      <b-collapse id="upcomingTask" visible>
                        <div class="card mb-0 shadow-none">
                          <div class="card-body pt-0">
                            <div
                              v-for="(task, index) of upcomingTask"
                              :key="index"
                              class="row justify-content-sm-between border-bottom mt-2 pt-2"
                            >
                              <div class="col-lg-6 mb-2 mb-lg-0">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    :id="`task-upcoming-${index}`"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    :for="`task-upcoming-${index}`"
                                  >{{ task.title }}</label>
                                </div>
                                <!-- end checkbox -->
                              </div>
                              <!-- end col -->
                              <div class="col-lg-6">
                                <div class="d-sm-flex justify-content-between">
                                  <div>
                                    <img
                                      v-b-tooltip.hover
                                      :title="`Assigned to ${task.assigned_to}`"
                                      :src="`${task.assignee_avatar}`"
                                      alt="image"
                                      class="avatar-xs rounded-circle"
                                    />
                                  </div>
                                  <div class="mt-3 mt-sm-0">
                                    <ul class="list-inline font-13 text-sm-right">
                                      <li class="list-inline-item pr-1">
                                        <i class="uil uil-schedule font-16 mr-1"></i>
                                        {{ task.due_date }}
                                      </li>
                                      <li class="list-inline-item pr-1">
                                        <i class="uil uil-align-alt font-16 mr-1"></i>
                                        {{ task.checklists.length }}
                                      </li>
                                      <li class="list-inline-item pr-2">
                                        <i class="uil uil-comment-message font-16 mr-1"></i>
                                        {{ task.comments.length }}
                                      </li>
                                      <li class="list-inline-item">
                                        <span
                                          class="badge p-1"
                                          :class="{
                                            'badge-soft-danger':
                                              `${task.priority}` === 'High',
                                            'badge-soft-info':
                                              `${task.priority}` === 'Medium',
                                            'badge-soft-success':
                                              `${task.priority}` === 'Low',
                                          }"
                                        >{{ task.priority }}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <!-- end .d-flex-->
                              </div>
                              <!-- end col -->
                            </div>
                            <!-- end card-body-->
                          </div>
                          <!-- end card -->
                        </div>
                        <!-- end .collapse-->

                        <!-- upcoming tasks -->
                      </b-collapse>
                    </div>

                    <div class="mt-4">
                      <a
                        v-b-toggle.otherTask
                        class="text-dark"
                        href="javascript: void(0);"
                        aria-controls="otherTask"
                      >
                        <h5 class="mb-0">
                          <i class="uil uil-angle-down font-size-18"></i>Other
                          <span class="text-muted font-size-14">({{ otherTask.length }})</span>
                        </h5>
                      </a>
                      <b-collapse id="otherTask" visible>
                        <div class="card mb-0 shadow-none">
                          <div class="card-body pt-0">
                            <div
                              v-for="(task, index) of otherTask"
                              :key="index"
                              class="row justify-content-sm-between border-bottom mt-2 pt-2"
                            >
                              <div class="col-lg-6 mb-2 mb-lg-0">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    :id="`task-other-${index}`"
                                    type="checkbox"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    :for="`task-other-${index}`"
                                  >{{ task.title }}</label>
                                </div>
                                <!-- end checkbox -->
                              </div>
                              <!-- end col -->
                              <div class="col-lg-6">
                                <div class="d-sm-flex justify-content-between">
                                  <div>
                                    <img
                                      v-b-tooltip.hover
                                      :title="`Assigned to ${task.assigned_to}`"
                                      :src="`${task.assignee_avatar}`"
                                      alt="image"
                                      class="avatar-xs rounded-circle"
                                    />
                                  </div>
                                  <div class="mt-3 mt-sm-0">
                                    <ul class="list-inline font-13 text-sm-right">
                                      <li class="list-inline-item pr-1">
                                        <i class="uil uil-schedule font-16 mr-1"></i>
                                        {{ task.due_date }}
                                      </li>
                                      <li class="list-inline-item pr-1">
                                        <i class="uil uil-align-alt font-16 mr-1"></i>
                                        {{ task.checklists.length }}
                                      </li>
                                      <li class="list-inline-item pr-2">
                                        <i class="uil uil-comment-message font-16 mr-1"></i>
                                        {{ task.comments.length }}
                                      </li>
                                      <li class="list-inline-item">
                                        <span
                                          class="badge p-1"
                                          :class="{
                                            'badge-soft-danger':
                                              `${task.priority}` === 'High',
                                            'badge-soft-info':
                                              `${task.priority}` === 'Medium',
                                            'badge-soft-success':
                                              `${task.priority}` === 'Low',
                                          }"
                                        >{{ task.priority }}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <!-- end .d-flex-->
                              </div>
                              <!-- end col -->
                            </div>
                            <!-- end card-body-->
                          </div>
                          <!-- end card -->
                        </div>
                        <!-- end .collapse-->

                        <!-- upcoming tasks -->
                      </b-collapse>
                    </div>
                  </div>
                  <!-- end row -->
                </div>
                <div class="row mb-3 mt-5">
                  <div class="col-12">
                    <div class="text-center">
                      <a href="javascript:void(0);" class="btn btn-white mb-3">
                        <feather type="loader" class="icon-dual icon-xs mr-2 align-middle"></feather>Load more
                      </a>
                    </div>
                  </div>
                  <!-- end col-->
                </div>
                <!-- end row -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- task details -->
      <div class="col-xl-4">
        <TaskDetail :task="selectedTask" />
      </div>
      <!-- end col -->
    </div>
  </Layout>
</template>
