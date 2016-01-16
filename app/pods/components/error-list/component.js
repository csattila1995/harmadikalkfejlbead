import Ember from 'ember';

export default Ember.Component.extend({
    actions : {
        deleteError(error) {
            error.deleteRecord();
            error.save();
        }
    }
});
