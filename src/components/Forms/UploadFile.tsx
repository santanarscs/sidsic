import { ReactNode } from 'react';
import Dropzone from 'react-dropzone'

interface UploadProps {
  onUpload: Function;
}

function Upload({onUpload}: UploadProps) {
  function renderDragMessage(
    isDragActive: boolean,
    isDragReject: boolean,
  ): ReactNode {
    if (!isDragActive) {
      return (
        <div className="flex justify-center items-center text-xl py-11 text-gray-600">Selecione ou arraste seus arquivos aqui.</div>
      );
    }

    if (isDragReject) {
      return <div className="flex justify-center items-center text-xl py-11 text-red-600">Arquivo não suportado.</div>;
    }

    return <div className="flex justify-center items-center text-xl py-11 text-green-600">Arraste seu arquivo.</div>;
  }

  return (
    <>
      <Dropzone  onDropAccepted={(files) => onUpload(files)}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <div className="border border-dashed border-gray-300 cursor-pointer"
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
        )}
      </Dropzone>
    </>
  );
}

export { Upload }