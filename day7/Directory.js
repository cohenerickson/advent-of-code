export default class Directory {
  name;
  dirs = {};
  files = [];
  #parent;

  constructor (name, parent) {
    this.name = name;
    this.dirs = {};
    this.files = {};
    this.#parent = parent;
  }

  getParent () {
    return this.#parent;
  }

  addFile (file, size) {
    this.files[file] = size;
  }

  addDir (dir) {
    this.dirs[dir.name] = dir;
  }

  getDir (name) {
    return this.dirs[name];
  }

  getFile (name) {
    return this.files[name];
  }
}
