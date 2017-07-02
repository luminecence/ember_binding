import Ember from 'ember';

export default Ember.TextField.extend({
    value: Ember.computed({
    get(key) {
      return this.get(key);
    },
    set(key, value) {
      return "";
    }
  })
});
