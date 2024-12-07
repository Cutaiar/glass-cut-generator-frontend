import { Toaster } from "sonner";
import { ImageUploader } from "./components/ImageUploader";

function App() {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <ImageUploader className="w-full max-w-md" />
      </div>
      <Toaster />
    </>
  );
}

export default App;
