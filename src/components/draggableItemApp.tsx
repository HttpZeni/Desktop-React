import { useDraggable } from "@dnd-kit/core";
import type { AppComponentProps } from "../config/apps";
import DesktopIcon from "./desktopIcon";

type Props = {
  app: AppComponentProps;
  setOpen: (open: boolean) => void;
};

export default function DraggableDesktopIcon({ app, setOpen }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: app.id,
  });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
      />
    </div>
  );
}
