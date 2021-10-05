import { useRef, ChangeEvent } from 'react'

type FileInputButtonProps = {
  acceptedFileTypes?: string;
  allowMultipleFiles?: boolean;
  label: string;
  onChange: (formData: FormData) => void;
  uploadFileName: string;
}
function FileInputButton({
  onChange,
  label,
  acceptedFileTypes = '',
  allowMultipleFiles = false,
  uploadFileName
}: FileInputButtonProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    console.log(event.target.files)

    onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button
        type="button"
        onClick={onClickHandler}
        className="mt-3 bg-blue-600 text-white px-3 py-2 hover:bg-blue-500 transition-colors">
        {label}
      </button>
      <input
        accept={acceptedFileTypes}
        multiple={allowMultipleFiles}
        name={uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        
      />
    </form>
  );
}

export { FileInputButton }