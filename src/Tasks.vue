<template>
      <div id="taskListPage" class="container">
      <div class="card">
        <div class="card-body">
          <h5>Task List</h5>
          <div class="form-group">
            <div class="input-group mb-3">
              <input
                id="task"
                class="form-control"
                type="text"
                placeholder="the task..."
              />
              <div class="input-group-append">
                <button
                  id="addBtn"
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <table class="table table-sm table-bordered mt-2">
          <thead class="thead-light">
            <tr>
              <th scope="col">Tasks</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody id="taskList">
            <tr v-for="task in tasks" :key="task.id">
              {{task.title}}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Tasks',
  data: function () {
    return { tasks: [
      {
        id: 1,
        title: "Test 1"
      }
    ] }
  }
}
</script>

<style>
</style>
