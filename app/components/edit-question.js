import Ember from 'ember';

export default Ember.Component.extend({

  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
      }
      this.set('editQuestionForm', false);
      this.sendAction('update', post, params);
    }
  }
});
