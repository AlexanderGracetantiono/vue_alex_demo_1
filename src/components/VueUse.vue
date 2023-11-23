<template>
  <div>
    <div>
      <p>
        Supported: {{isSupported}}
      </p>
    </div>

    <div v-if="isSupported">
      <button @click="show()">
        Show Notification
      </button>
    </div>
    <div v-else>
      The Notification Web API is not supported in your browser.
    </div>
  </div>
</template>

<script setup>
import { useWebNotification } from '@vueuse/core'

var options = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
}

const {
  isSupported,
  show,
  onClick,
  onShow,
  onError,
  onClose,
} = useWebNotification(options)

onClick((evt => {
  console.log("onclick")
}))
onShow((evt => {
  console.log("onshow")
}))
onError((evt => {
  console.log("onerror")
}))
onClose((evt => {
  console.log("onclose")
}))


// Create Broadcast Channel and listen to messages sent to it
const broadcast = new BroadcastChannel('sw-update-channel');
console.log('broad',broadcast)
broadcast.onmessage = (event) => {
  console.log('broad event',event)
  if (event.data && event.data.type === 'CRITICAL_SW_UPDATE') {
    // Show "update to refresh" banner to the user.
    const payload = event.data.payload;

    // Log the payload to the console
    console.log(payload);
    var options = {
        title:payload.details,
        icon:payload.imageSepertinya,
        dir: 'auto',
        lang: 'en',
        renotify: true,
        tag: 'test',
      }
      
useWebNotification(options).show()
    //show()
  }
};
</script>