const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {

let MailingSchema = new Schema(fields);

module.exports = mongoose.model('Mailing', MailingSchema);