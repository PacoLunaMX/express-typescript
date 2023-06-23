"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = exports.findById = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== null) {
        return entry;
    }
    return undefined;
};
exports.findById = findById;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: diaries.length }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addEntry = addEntry;
