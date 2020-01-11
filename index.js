import * as common from './common';
import * as curd from './crud';

const connection = null;
const ispool = true;

// 合并
const sqljson = { ...common, ...curd };

// 建立sql对象
function mysql() {
  this.sqlObj = {};
  this.istransaction = false;
}

for (const key in sqljson) {
  mysql.prototype[key] = sqljson[key];
}

export default new mysql();
