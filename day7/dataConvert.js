import fs from "node:fs";
import Directory from "./Directory.js";

const data = fs.readFileSync("./input.txt", "utf-8");

const lines = data.split(/\n/);

let files = [];
let dirs = [];

let command = "";
let commands = [];

for (let line of lines) {
  if (/^\$/.test(line)) {
    if (command) commands.push({
      command: command.split(" ")[1],
      args: command.split(" ").slice(2),
      files,
      dirs
    });
    command = line;
    files = [];
    dirs = [];
  } else {
    if (/^dir/.test(line)) {
      dirs.push(line.split(" ")[1]);
    } else if (/^[0-9]+/.test(line)) {
      files.push({
        name: line.split(" ")[1],
        size: line.split(" ")[0]
      });
    }
  }
}

// walk command tree and generate directory structure
const directory = new Directory("/");
let currentDir = directory;

for (let command of commands) {
  switch (command.command) {
    case "ls":
      for (let dir of command.dirs) {
        if (!currentDir.getDir(dir)) {
          currentDir.addDir(new Directory(dir, currentDir));
        }
      }
      for (let file of command.files) {
        if (!currentDir.getFile(file.name)) {
          currentDir.addFile(file.name, file.size);
        }
      }
      break;
    case "cd":
      if (command.args[0] === "..") {
        currentDir = currentDir.getParent();
      } else if (command.args[0] === "/") {
        currentDir = directory;
      } else {
        currentDir = currentDir.getDir(command.args[0]);
      }
      break;
  }
}

fs.writeFileSync("./input.js", `export default ${JSON.stringify(directory, null, 2)};\n`, "utf-8");