import dynamic from 'next/dynamic'
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor) as any,
  { ssr: false }
)
function RichText() {
  const [editorState, setEditorState ] = useState<EditorState | undefined>(EditorState.createEmpty())
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }
  return (
    <div>
      <Editor 
      // @ts-expect-error
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="justify-center"
        editorClassName="px-8 py-6 bg-white w-full mx-auto mb-12 border max-h-96 border border-gray-300"
      />
    </div>
  )
}

export { RichText }