import { DiaryEntry, NoSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json'

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>


export const findById = (id:number):DiaryEntry | undefined=>{
    const entry = diaries.find(d=> d.id===id)
    if(entry !== null){
        return entry
    }
    return undefined
}

export const getEntries = ():Array<DiaryEntry> => diaries;

export const getEntriesWithoutSensitiveInfo = ():Array<NoSensitiveInfoDiaryEntry> =>{
    return diaries.map(({id, date, weather, visibility})=>{
        return {id, date, weather, visibility}
    })
}

export const addEntry = ():undefined => undefined; 