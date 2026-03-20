'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <FileUploaderRegular
                sourceList="local, camera, facebook"
                cdnCname="https://6bpg5zicvs.ucarecd.net/"
                cameraModes="photo"
                cloudImageEditorAutoOpen={true}
                classNameUploader="uc-light uc-purple"
                pubkey="1c0505c28b3d7b38f12c"
                onCommonUploadSuccess={(e) =>
                    console.log(
                        e.successEntries.map((entry) => entry.cdnUrl)
                    )
                }
            />
        </div>
    );
}

export default App;