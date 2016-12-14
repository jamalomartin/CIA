"use strict";
new Vue({
  // app initial state
  el: '#xxx',
  data: {
    newTitle: '',
    nTitle: [],
  },
  methods: {
    addTitle: function () {
      var value = this.newTitle && this.newTitle.trim();
      if (!value) {
        return;
      }
      this.nTitle.push(
        this.newTitle
      );
      console.log(this.newTitle);
      this.newTitle = '';
    }
  }
});
