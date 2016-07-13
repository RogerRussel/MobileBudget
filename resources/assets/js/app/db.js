app.run(['$db', function ($db) {

    var config = {
      name: "myDB",
      logging: true,
      tables: [{
          name: "user",
          columns: [{
              name: "usr_id",
              type: "INTEGER",
              is_null: false
            }, {
              name: "usr_name",
              type: "TEXT",
              is_null: false
            }, {
              name: "usr_login",
              type: "TEXT",
              is_null: false
            }, {
              name: "usr_password",
              type: "TEXT",
              is_null: false
            }, {
              name: "usr_rememberme",
              type: "BOOLEAN",
              is_null: false
            },
            {
              name: "usr_token",
              type: "TEXT",
              is_null: true
            }],
          primary_key: ["usr_id"]
        }]
    };

    $db.init(config);

    return;
  }]);
