var db = (function (driver) {

  var con;

  function init(shortname, version, display, maxSize) {

    shortname = shortname || "myDB";
    version = version || "1.0";
    display = display || "mySqlLiteDB";
    maxSize = maxSize || 65536;

    con = driver(shortname, version, display, maxSize);

  }

  /**
   * 
   * @param {type} query
   * @param {type} data
   * @param {type} callback
   * @param {type} error
   * @returns {undefined}
   */
  function execute(query, data, callback, error) {

    data = data || [];

    con.transaction.executeSql(query, data, callback, error);
  }

  return {
    'init': init,
    'con': con,
    'exec': execute
  };

})(window.openDatabase);