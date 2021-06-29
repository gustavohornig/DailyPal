<template>
  <v-container fluid fill-height class="container pa-0">
    <draggable class="row" v-model="taskList">
      <v-col cols="4" v-for="task in taskList" :key="task.name" :sort="false">
        <v-card
          max-width="374"
          class="ml-8 mr-0"
        >
          <v-img
            class="mx-auto"
            height="120"
            width="120"
            :src="task.image"
          ></v-img>
          <v-card-title> {{ task.name }} </v-card-title>
        </v-card>
      </v-col>
    </draggable>
    <v-row align-end align="end" justify="end" class="mr-8">
      <createTaskForm
        @new-task-created="updateTaskList"
      />
    </v-row>
  </v-container>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
