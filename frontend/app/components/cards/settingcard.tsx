"use client";
import { XIcon } from "lucide-react";
import { updateSetting } from "@/app/features/settings/settingslice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { settingsSlice } from "@/app/types";

export default function SettingsCard({ onclose }: any) {
  const settings = useSelector((state: any) => state.settings);
  const [timerSettings, setTimersetting] = useState<settingsSlice>({
    focusTime: settings.focusTime,
    shortBreak: settings.shortBreak,
    longBreak: settings.longBreak,
    sessionCount: settings.sessionCount,
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateSetting(timerSettings));
  };

  return (
     <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onclose}
      />

      <div className="w-[92vw] md:w-full fixed z-50 max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card backdrop-blur-md border border-border/80 rounded-2xl shadow-xl p-6 md:p-7 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="mb-5 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            ⚙️ Timer Settings
          </h2>
          <XIcon
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-lg"
            size={28}
            onClick={onclose}
          />
        </div>

        <hr className="border-border/60 mb-5" />

     
        <div className="w-full h-auto flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="focus-time"
              className="text-sm font-semibold text-foreground flex items-center justify-between"
            >
              Focus Duration
              <span className="text-xs font-normal text-muted-foreground">
                (minutes)
              </span>
            </label>
            <input
              id="focus-time"
              type="number"
              min={1}
              max={120}
              className="w-full border border-border/80 p-2.5 bg-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              value={timerSettings.focusTime}
              onChange={(e) => {
                setTimersetting((prev) => ({
                  ...prev,
                  focusTime: e.target.valueAsNumber,
                }));
              }}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="short-break"
              className="text-sm font-semibold text-foreground flex items-center justify-between"
            >
              Short Break
              <span className="text-xs font-normal text-muted-foreground">
                (minutes)
              </span>
            </label>
            <input
              id="short-break"
              type="number"
              min={1}
              max={120}
              className="w-full border border-border/80 p-2.5 bg-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              value={timerSettings.shortBreak}
              onChange={(e) => {
                setTimersetting((prev) => ({
                  ...prev,
                  shortBreak: e.target.valueAsNumber,
                }));
              }}
            />
          </div>

    
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="long-break"
              className="text-sm font-semibold text-foreground flex items-center justify-between"
            >
              Long Break
              <span className="text-xs font-normal text-muted-foreground">
                (minutes)
              </span>
            </label>
            <input
              id="long-break"
              type="number"
              min={1}
              max={120}
              className="w-full border border-border/80 p-2.5 bg-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              value={timerSettings.longBreak}
              onChange={(e) => {
                setTimersetting((prev) => ({
                  ...prev,
                  longBreak: e.target.valueAsNumber,
                }));
              }}
            />
          </div>

  
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="session-count"
              className="text-sm font-semibold text-foreground flex items-center justify-between"
            >
              Daily Session Target
              <span className="text-xs font-normal text-muted-foreground">
                (max 12)
              </span>
            </label>
            <input
              id="session-count"
              type="number"
              min={1}
              max={12}
              className="w-full border border-border/80 p-2.5 bg-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              value={timerSettings.sessionCount}
              onChange={(e) => {
                setTimersetting((prev) => ({
                  ...prev,
                  sessionCount: e.target.valueAsNumber,
                }));
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-primary font-medium text-sm text-primary-foreground py-3 rounded-xl shadow-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            onClick={() => {
              handleSubmit();
              onclose();
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </>
  );
}}
