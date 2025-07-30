import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DialogFileOpener = ({ onModelLoad }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0.0);
  const [error, setError] = React.useState(null);     
  const fileInputRef = React.useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(null);
    setLoading(false);
    setError(null);

    if (file) {
      setSelectedFile(file);
      setLoading(true);

      const reader = new FileReader();

      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const loader = new GLTFLoader();

        const blob = new Blob([arrayBuffer], { type: 'model/gltf-binary' });
        const url = URL.createObjectURL(blob);

        loader.load(url,
          (gltf) => {
            setLoading(true);
            if (onModelLoad) {
              onModelLoad(gltf.scene);
            }
            setLoading(false);
            setLoadingProgress(100);
            URL.revokeObjectURL(url);
          },
          (xhr) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            setLoadingProgress(progress)
          },
          (err) => {
            console.error("Error loading GLB model:", err);
            setLoading(false);
            setError("Failed to load model. Please ensure it's a valid .glb file.");
            setLoadingProgress(0);
            URL.revokeObjectURL(url);
          }
        );
      };

      reader.onerror = (e) => {
        console.error("FileReader error:", e);
        setLoading(false);
        setError("Error reading file. Please try again.");
        setLoadingProgress(0);
      };

      reader.readAsArrayBuffer(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex w-[200] h-[35px] px-[15px] py-[5px] items-center justify-center rounded bg-slate-400 font-medium leading-none text-white outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
          Load Model
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow backdrop-blur-sm dark:bg-blackA8" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="px-[15px] text-[17px] font-medium text-mauve12">
            Load Model File
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
            Select a `.glb` model file to load.
          </Dialog.Description>

          <input
            type="file"
            ref={fileInputRef}
            accept=".glb"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={handleButtonClick}
              className="inline-flex h-[35px] items-center justify-center rounded bg-sky-400 px-[15px] font-medium leading-none text-white outline-none outline-offset-1 hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-sky-700 select-none"
            >
              Choose File
            </button>
            <span className="text-mauve11 text-[15px] flex-grow truncate">
              {selectedFile ? selectedFile.name : "No file selected"}
            </span>
          </div>

          {loading && (
            <div className="mb-4">
              <p className="text-blue-600 text-[14px]">
                Loading model... {loadingProgress.toFixed(2)}%
              </p>
              <div className="w-full bg-gray-200 rounded h-2 mt-1">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          )}

          {!loading && selectedFile && !error && (
            <p className="text-green-600 text-[14px] mb-4 flex items-center gap-1">
              <span>✔</span> Model loaded!
            </p>
          )}

          {!loading && error && (
            <p className="text-red-500 text-[14px] mb-4 flex items-center gap-1">
              <span>✖</span> Model failed!
            </p>
          )}

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-rose-500 px-[20px] font-medium leading-none text-white outline-none outline-offset-1 hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-rose-700 select-none">
                Close
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogFileOpener;