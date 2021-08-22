import { ref, watch } from 'vue';
import { useBrowserFS } from './app.fs';
import { join, resolve } from 'path-browserify';

export type FileSystemObjectType = 'Directory' | 'File';

export interface IFileSystemObject {
  name: string;
  fullPath: string;
  type: FileSystemObjectType;
}

export interface IFileSystemDirctoryObject extends IFileSystemObject {
  type: 'Directory';
}

export interface IFileSystemFileObject extends IFileSystemObject {
  type: 'File';
  size: number;
}

const cwd = ref('');

export async function useFileDialogSharedState() {
  const { fs } = await useBrowserFS();
  const cwdContent = ref<(IFileSystemDirctoryObject | IFileSystemFileObject)[]>(
    []
  );

  watch(cwd, (newCwd) => {
    cwdContent.value.splice(0, cwdContent.value.length);
    fs.readdir(newCwd, (e, rv) => {
      if (e) return;
      if (!rv) return;
      rv.forEach((name) => {
        const fullPath = join(cwd.value, name);

        fs.stat(fullPath, null, (e, rv) => {
          if (e) return console.error(e);
          if (!rv) return;

          if (rv.isDirectory())
            cwdContent.value.push({ type: 'Directory', name, fullPath });
          if (rv.isFile())
            cwdContent.value.push(<IFileSystemFileObject>{
              type: 'File',
              name,
              fullPath,
              size: rv.size,
            });
        });
      });
      console.log('cwd = ', cwd.value);
    });
  });

  cwd.value = '/';

  return {
    cwd,
    cwdContent,
    resolve,
  };
}
