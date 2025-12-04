import { useDraggable } from "@dnd-kit/core";
import { useState, useRef } from "react";
import type { AppComponentProps } from "../config/apps";
import DesktopIcon from "./desktopIcon";

type Props = {
  app: AppComponentProps;
  setOpen: (open: boolean) => void;
};

export default function DraggableDesktopIcon({ app, setOpen }: Props) {
  const [draggableEnabled, setDraggableEnabled] = useState(false);

  // Timer-ID im Browser: number, nicht NodeJS.Timeout
  const holdTimer = useRef<number | null>(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: app.id,
    });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
    pointerEvents: draggableEnabled ? "auto" : "none",
  };

  function handlePointerDown() {
    // Browser setTimeout gibt number zurück
    holdTimer.current = window.setTimeout(() => {
      setDraggableEnabled(true);
    }, 1000);
  }

  function handlePointerUp() {
    if (holdTimer.current !== null) {
      window.clearTimeout(holdTimer.current);
    }
    setDraggableEnabled(false);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      ref={setNodeRef}
      style={style}
      // Draggable Props nur aktiv, wenn der Timer abgelaufen ist
      {...(draggableEnabled ? { ...attributes, ...listeners } : {})}
      className="flex flex-col items-center gap-2"
    >
      <DesktopIcon
        id={app.id}
        title={app.title}
        img={app.img}
        width={app.width}
        height={app.height}
        open={app.open}
        activeBg={app.activeBg}
        setOpen={setOpen}
        isDragging={isDragging}
      />
    </div>
  );
}
