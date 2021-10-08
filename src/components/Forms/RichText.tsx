import dynamic from 'next/dynamic'
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor) as any,
  { ssr: false }
)
function RichText() {
  const [editorState, setEditorState ] = useState<EditorState>(EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }
  return (
    <div>
      <Editor 
      // @ts-expect-error
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 justify-center border border-gray-300"
        editorClassName="px-8 py-6 bg-white w-full mx-auto mb-12 border max-h-96 border border-gray-300"
      />
    </div>
  )
}

export { RichText }