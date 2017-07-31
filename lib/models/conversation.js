const mongoose = require('mongoose')
  
let Schema = mongoose.Schema;

const ConversationSchema = new Schema({  
  participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('Conversation', ConversationSchema);  