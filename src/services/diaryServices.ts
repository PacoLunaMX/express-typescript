import { DiaryEntry } from '../types';
import diaryData from './diaries.json'

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = ():Array<DiaryEntry> => diaries;

export const addEntry = ():undefined => undefined; 