<template>
  <v-dialog v-model="addNewTask" max-width="40%">
    <template v-slot:activator="{ on }">
      <v-btn 
        fab
        color="#0492C2"
        v-on="on"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Creating a new task...
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="title"
          class="mr-2 ml-2"
          outlined
          label="Task Title"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="imageUrl"
          class="mr-2 ml-2"
          outlined
          label="Image URL"
          clearable
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="emitNewTask()">
          Save
        </v-btn>
        <v-btn @click="addNewTask = false">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
