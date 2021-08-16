<template>
  <h1>Hello Sunstone!</h1>
  <a-row type="flex" style="padding: 15px">
    <a-col :span="4">
      <a-radio-group v-model="tab" @change="onChange" size="large">
        <a-radio-button :style="radioStyle" value="vms-tab">
          VMs
        </a-radio-button>
        <a-radio-button :style="radioStyle" value="vnets-tab">
          VNets
        </a-radio-button>
        <a-radio-button :style="radioStyle" value="datastores-tab">
          Datastores
        </a-radio-button>
        <a-radio-button :style="radioStyle" value="templates-tab">
          Templates
        </a-radio-button>
      </a-radio-group></a-col
    >
    <a-col :span="20">
      <iframe
        :src="sunstone_url + '#' + tab"
        :style="{
          width: '50%',
          minWidth: '1024px',
          height: '100%',
          minHeight: '720px',
        }"
      >
      </iframe>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      tab: "vms-tab",
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
      },
      sunstone_url: "https://sunstone.support.by/",
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
      this.tab = e.target.value;
    },
  },
};
</script>