import { appArray } from "../config/apps";
import DraggableDesktopIcon from "./draggableItemApp";

function Apps({ setOpen }: any) {
  return (
    <div className="flex flex-col flex-wrap content-start gap-x-5 gap-y-2 h-full">
      {appArray.map(app => (
        <DraggableDesktopIcon
          key={app.id}
          app={app}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}

export default Apps;
