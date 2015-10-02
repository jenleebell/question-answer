import Ember from 'ember';

export default Ember.Component.extend({
  formShowing:false,
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        description: this.get('description'),
        date_added: new Date()
      };
      this.sendAction('save', params);
      this.set('formShowing', false);
    },
    formShow() {
      this.set('formShowing', true);
    }
  }
});
