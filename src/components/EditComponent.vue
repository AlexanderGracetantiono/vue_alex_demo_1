<template>
  <div style="padding: 15px 20px;">
    <h1>{{ title }}</h1>
    <div class="input-container">
        <input  class="input-style" v-model="nameInput" placeholder="Username" /><br>
        <div class="input-style-file">
          <div >
            <span style="margin-right: 10px;">Image</span>
            <input  type="file" v-on:change="onFileUploaded" multiple>
          </div>
          <button v-bind:disabled="!previewImage" @click="addData">Submit Data</button>
        </div>
    </div>
    <div v-if="previewImage" class="preview-container">
      <img :src="previewImage" style="width: 200px; height: auto;"/>
    </div>
    <div class="header-class">
      <span class="header-title">View Data</span>
      <button @click="readData">View Data</button>
    </div>
        <div  v-for="item in customers" :key="item.ssn" >
         <div class="view-data-container">
          <CardComponent 
          :imageUrl="blobToImageUrl(item.image)"
          :username="item.name" />
          <div>
            <button style="margin-right: 10px;" v-on:click="deleteData(item.ssn)">Delete Data</button>
            <button @click="updateData">Update Data</button>
          </div>
         </div>
         <!-- <div class="edit-form-container">
          <div class="input-container" v-if="">
            <input class="input-style" v-model="nameInput" placeholder="Username" /><br>
            <div class="input-style-file">
              <div >
                <span style="margin-right: 10px;">Image</span>
                <input  type="file" v-on:change="onFileUploaded" multiple>
              </div>
              <button @click="updateData">Submit Data</button>
            </div>
          </div>
         </div> -->
        </div>
  </div>
</template>
<style scoped>
.input-container{
  display: flex;
    flex-direction: column;
    align-items: center;
}
.input-style{
  width: -webkit-fill-available;
    border-radius: 10px;
    border: 1px black solid;
    padding: 15px 20px;
}
.input-style-file{
    width: -webkit-fill-available;
    border-radius: 10px;
    /* border: 1px black solid; */
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 20px;
    justify-content: space-between;
}
.input-style:focus{
  border: 3px black solid;
    padding: 15px 20px;
    border-radius: 10px;
}
.preview-container{
  padding: 15px 10px;
  border: 1px black solid;
  border-radius: 20px;
}
.header-class{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  background-color: rgb(193, 253, 255);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.header-title{
  color: black;
  font-size: 18px;
  font-weight: 600;
}
.view-data-container{
    background-color: rgb(193, 253, 255) ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
}
.view-data-container:hover{
  background-color: rgb(181, 250, 253);
    display: flex;
    align-items: center;
    padding: 10px 20px;
    
}
.edit-form-container{
  background-color: rgb(181, 250, 253);
  padding: 20px 10px;
  border-bottom: 5px solid gray;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import CardComponent from './shared/PeopleCard.vue'
// const base_url_1 = "https://my-json-server.typicode.com/AlexanderGracetantiono/json-server-sample/user"
const base_url_1 = "http://localhost:3000/user"
// Define reactive variables
const title = ref('CRUD Index DB');

// input Data
const nameInput = ref('');
const nameKey = ref('');

const dbName = "IndexDBAxe";
const tableName = "user_company";
var blob;
const addedData = ref(null);
const updatedData = ref(null);
const deletedData = ref(null);
var previewImage = ref(null);

const blobToImageUrl=(event)=>{
    return URL.createObjectURL(event);
}

async function isAllowSubmit(){
  console.log('previewImageDisable',previewImage)
}

const onFileUploaded= (event)=> {
    blob = new Blob([event.target.files[0]]); 
    previewImage.value =  URL.createObjectURL(blob);
    console.log('preview',previewImage)
}

// SUBMIT DATA
async function addData() {

  const request = indexedDB.open(dbName, 2);
  var customerToAdd = { ssn: 1, name: nameInput.value,image:blob};
  request.onerror = (event) => {
    console.error("Error opening database:", event.target.error);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore(tableName, { keyPath: "ssn" });
    objectStore.createIndex("name", "name", { unique: false });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const addTransaction = db.transaction(tableName, "readwrite");
    const customerObjectStore = addTransaction.objectStore(tableName);
    const customerCount = customerObjectStore.count();
    customerCount.onsuccess = function (e) {
        var recordCount = e.target.result;
        customerToAdd = { ssn:( recordCount+1), name: nameInput.value,image:blob};
        const addRequest = customerObjectStore.add(customerToAdd);
        addRequest.onsuccess = (event) => {
          console.log("Data added successfully");
          addedData.value = "Yes";
        };

        addRequest.onerror = (event) => {
          console.error("Error adding data", event.target.error);
          addedData.value = "No";
        };

        addTransaction.oncomplete = () => {
          console.log("Add transaction completed");
          db.close();
        };
    };
  };
}

// VIEW DATA
var customers = ref([]);
async function readData(){
customers.value=[]
const request = indexedDB.open(dbName, 2);

request.onerror = (event) => {
  console.error("Error opening database:", event.target.error);
};

request.onsuccess = (event) => {
  const db = event.target.result;

  const readTransaction = db.transaction(tableName, "readonly");
  const customerObjectStore = readTransaction.objectStore(tableName);

  const customersCursor = customerObjectStore.openCursor();

  customersCursor.onsuccess = (event) => {
    const cursor = event.target.result;

    if (cursor) {
      customers.value.push(cursor.value);
      cursor.continue();
    } else {
      console.log("Data read successfully");
      db.close();
    }
  };

  customersCursor.onerror = (event) => {
    console.error("Error reading data", event.target.error);
    db.close();
  };
  console.log('customer Data',customers)

};
}

// Update DATA
async function updateData() {
  const request = indexedDB.open(dbName, 2);
  const updatedCustomerData = { ssn: nameKey.value, name: nameInput.value,image:blob};

  request.onerror = (event) => {
    console.error("Error opening database:", event.target.error);
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    const updateTransaction = db.transaction(tableName, "readwrite");
    const customerObjectStore = updateTransaction.objectStore(tableName);

    const updateRequest = customerObjectStore.put(updatedCustomerData);

    updateRequest.onsuccess = (event) => {
      console.log("Data updated successfully");
      updatedData.value = "Yes";
    };

    updateRequest.onerror = (event) => {
      console.error("Error updating data", event.target.error);
      updatedData.value = "No";
    };

    updateTransaction.oncomplete = () => {
      console.log("Update transaction completed");
      db.close();
      readData();
    };
  };
};

// DELETE DATA
async function deleteData(eventData) {
  console.log('event Deltet',eventData)
  const request = indexedDB.open(dbName, 2);

  request.onerror = (event) => {
    console.error("Error opening database:", event.target.error);
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    const deleteTransaction = db.transaction(tableName, "readwrite");
    const deleteObjectStore = deleteTransaction.objectStore(tableName);
    const deleteRequest = deleteObjectStore.delete(eventData);

    deleteRequest.onsuccess = (event) => {
      console.log("Data deleted successfully");
      deletedData.value = "Yes";
    };

    deleteRequest.onerror = (event) => {
      console.error("Error deleting data", event.target.error);
      deletedData.value = "No";
    };

    deleteTransaction.oncomplete = () => {
      readData()
      console.log("Delete transaction completed");
      db.close();
    };
  };
};
// TRASH
// Define a function to fetch data
// const fetchData = async () => {
//     try {
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//       if (response.ok) {
//         const data = await response.json();
//         items.value = data['results'];
//         console.log(data);
//       } else {
//         console.error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };
 
//   // Call fetchData when the component is mounted
//   onMounted(fetchData);

// async function fetchData(){
//   try {
//     const response = await fetch(base_url_1);
//     if (response.ok) {
//       const data = await response.json();
//       items.value = data;
//     } else {
//       console.error('Failed to fetch data');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
// Call fetchData when the component is mounted
onMounted();
</script>