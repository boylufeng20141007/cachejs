/*
 * 应用全局缓存
 * @Author: luxlu
 * @Date: 2018-05-23 19:42:26
 * @Last Modified by: luxlu
 * @Last Modified time: 2018-05-23 21:17:11
 */


const cache = {};

export function get(key) {
  return cache[key];
}

export function set(obj) {
  Object.assign(cache, obj);
}

export function remove(key) {
  const temp = cache[key];
  delete cache[key];
  return temp;
}

export default {
  get,
  set,
  remove
}