'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.addForeignKey('transaction', 'provider', 'provider_id_fk2',
    {
      'id': 'id'
    },
    {
      onDelete: 'cascade',
      onUpdate: 'RESTRICT'
    }, callback);

};

exports.down = function (db, callback) {
  db.removeForeignKey('transaction', 'provider_id_fk2', callback);
};

exports._meta = {
  "version": 1
};
