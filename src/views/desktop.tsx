import { useState, type ChangeEvent } from "react";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  backgroundByIndex as defaultBackgroundByIndex,
  backgroundByName as defaultBackgroundByName,
  type DictDec,
} from "../config/background";
import {
  loadBackgroundByIndex,
  loadBackgroundByName,
} from "../utils/handelLocalStorage";
import { addBackground } from "../utils/addBg";
import Apps from "../components/app";

import Dropdown from "../components/dropDown";
import Button from "../components/button";

function Desktop() {
  const [currentOpen, setCurrentOpen] = useState<string>("");
  const [currentBgIndex, setBgIndex] = useState<string>("2");
  const [isAddBtnVisible, setAddBtnVisible] = useState<boolean>(false);
  
  const [addBgName, setAddBgName] = useState<string>("");
  const [addBgUrl, setAddBgUrl] = useState<string>("");

  const [bgByIndex, setBgByIndex] = useState<DictDec>(() => ({
    ...defaultBackgroundByIndex,
    ...loadBackgroundByIndex(),
  }));

  const [bgByName, setBgByName] = useState<DictDec>(() => ({
    ...defaultBackgroundByName,
    ...loadBackgroundByName(),
  }));

  const currentBgName = bgByIndex[currentBgIndex];
  const currentBg = bgByName[currentBgName];

  const isVisible = currentOpen !== "";

  const closeOnClick = () => {
    setCurrentOpen("");
  };

  const addBgOnClick = () => {
    setAddBtnVisible((prev) => !prev);
  };

  const handleInputChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setAddBgName(e.target.value);
  };

  const handleInputChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setAddBgUrl(e.target.value);
  };

  const closeAddPanel = () => {
    setAddBtnVisible(false);
  };

  const saveBg = () => {
    if (!addBgName || !addBgUrl) return;

    const { newByIndex, newByName } = addBackground(
      addBgName,
      addBgUrl,
      bgByIndex,
      bgByName
    );

    setBgByIndex(newByIndex);
    setBgByName(newByName);

    setAddBgName("");
    setAddBgUrl("");
    closeAddPanel();
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    console.log("drag:", active.id, "let go:", over?.id);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div
        style={{
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-full p-5"
      >

      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="bg-primary-400 border-b-4 border-l-4 border-r-0 border-t-0 border-primary-200 w-[70%] h-[70%] rounded-xl shadow-md flex flex-col overflow-hidden">
            <div className="w-full h-12 min-h-12 bg-primary-300 border-b-2 border-primary-200 flex items-center justify-between px-4">
              <h2 className="text-text-primary font-mono font-bold text-base">
                {currentOpen}
              </h2>
              <Button width={25} height={25} title="×" fontSize={16} onBtnClick={closeOnClick} />
            </div>
            
            <div className="flex-1 bg-background-elevated overflow-auto p-4">
              <div className="text-text-primary font-mono">
                {currentOpen}
              </div>
            </div>
          </div>
        </div>
      )}

        {isAddBtnVisible && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="bg-primary-400 border-b-4 border-l-4 border-r-0 border-t-0 border-primary-200 w-[90%] max-w-md h-auto max-h-[80%] rounded-xl shadow-md p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-text-primary font-mono font-bold text-base">
                  Add Background
                </h2>
                <Button width={20} height={20} title="x" onBtnClick={closeAddPanel} />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <label className="text-text-primary font-mono font-bold text-xs">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={addBgName}
                    onChange={handleInputChangeName}
                    placeholder="Background name..."
                    className="
                      w-full px-3 py-2
                      bg-background-elevated
                      border-b-[3px] border-l-[3px] border-r-0 border-t-0 border-border-accent
                      rounded-lg
                      text-text-primary font-mono text-sm
                      placeholder:text-text-muted
                      transition-all duration-150
                      hover:border-accent-500/50
                      focus:border-0 focus:border-t-[3px] focus:border-r-[3px] 
                      focus:outline-none focus:border-accent-500/50
                      focus:shadow-[0_0_15px_rgba(0,217,255,0.3)]
                    "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-text-primary font-mono font-bold text-xs">
                    URL:
                  </label>
                  <input
                    type="text"
                    value={addBgUrl}
                    onChange={handleInputChangeUrl}
                    placeholder="Image URL..."
                    className="
                      w-full px-3 py-2
                      bg-background-elevated
                      border-b-[3px] border-l-[3px] border-r-0 border-t-0 border-border-accent
                      rounded-lg
                      text-text-primary font-mono text-sm
                      placeholder:text-text-muted
                      transition-all duration-150
                      hover:border-accent-500/50
                      focus:border-0 focus:border-t-[3px] focus:border-r-[3px] 
                      focus:outline-none focus:border-accent-500/50
                      focus:shadow-[0_0_15px_rgba(0,217,255,0.3)]
                    "
                  />
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button title="Save" width={100} height={35} fontSize={12} onBtnClick={saveBg} />
                  <Button title="Cancel" width={100} height={35} fontSize={12} onBtnClick={closeAddPanel} />
                </div>
              </div>
            </div>
          </div>
        )}

        {(isAddBtnVisible || isVisible) && (
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={isAddBtnVisible ? closeAddPanel : closeOnClick}
          />
        )}

        <div className="absolute top-4 right-4 z-20 flex flex-row gap-2">
          <Dropdown
            options={bgByIndex}
            value={currentBgIndex}
            onChange={setBgIndex}
            placeholder="Select a background:"
          />
          <Button title="+" width={50} height={50} fontSize={20} onBtnClick={addBgOnClick} />
        </div>

        <Apps setOpen={setCurrentOpen}/>
      </div>
    </DndContext>
  );
}

export default Desktop;
