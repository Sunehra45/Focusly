interface iUserSignupdata{
  name:string;
  email:string;
  password:string
}

interface iUserLogindata{
email:string;
password:string
}

interface sessionSetting{
  focusDuration : number;
  shortBreakduration :number;
  longBreakduration: number;
  sessionCount:number
}

interface sessionState{
  sessionMode: string;
  title? : string;
  sessionDuration:Number;
  completedAt:String;
  date:Date
}

interface settingsSlice{
    focusTime: number;
    shortBreak:number;
    longBreak:number;
    sessionCount:number
}

export type {
    iUserLogindata,
    iUserSignupdata,
    sessionSetting,
    settingsSlice
}
