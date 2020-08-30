const NodeCache = require("node-cache");

function Cache(cacheName, ttl) {
    this.cache = new NodeCache({stdTTL: ttl?ttl:0});
    this.name = cacheName;
}
  
Cache.prototype.set = function (key, value) {
    this.cache.set(key, value);
    console.log(`Setting value ${value} with key ${key} in cache ${this.name}`);
}
Cache.prototype.get = function (key) {
    console.log(`Getting value with key ${key} in cache ${this.name} is ${this.cache.get(key)}`);
    return this.cache.get(key);
}
Cache.prototype.delete = function (key, value) {
    console.log(`Deleting value with key ${key} in cache ${this.name}`);
    this.cache.del(key);
}
Cache.prototype.flush = function () {
    console.log(`Flushing cache ${this.name}`);
    this.cache.flushAll();
}

let addressCache = new Cache('addressCache');
let streetCache = new Cache('streetCache');

addressCache.set('001','addr1');
streetCache.set('001','street1');
streetCache.get('001');
addressCache.get('001');
addressCache.flush();
addressCache.get('001');
streetCache.flush();
streetCache.get('001');