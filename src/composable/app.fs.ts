import { getFileSystem } from 'browserfs';
import { FileSystem } from 'browserfs/dist/node/core/file_system';
import { FileFlag } from 'browserfs/dist/node/core/file_flag';

const initFileSystem = new Promise<FileSystem>((resolve, reject) => {
  getFileSystem({ fs: 'InMemory', options: {} }, (e, rv) => {
    if (e) return reject(e);
    if (!rv) return reject(new Error('BrowserFS not return any value'));
    resolve(rv);
  });
});

export async function useBrowserFS() {
  const fs = await initFileSystem;

  const mkdir = async function (path: string) {
    return new Promise<void>((resolve, reject) => {
      fs.mkdir(path, 0, (e) => {
        if (e) return reject(e);
        resolve();
      });
    });
  };

  const writeFile = async function (path: string, content: string) {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(path, content, null, FileFlag.getFileFlag('w'), 0, (e) => {
        if (e) return reject(e);
        resolve();
      });
    });
  };

  await mkdir('/src');
  await mkdir('/dist');
  await writeFile('/README.md', 'This is readme!');
  await writeFile('/package.json', 'This is package.json');
  for (let index = 0; index < 100; index++) {
    await writeFile(
      `/file_${index}.txt`,
      `Here is content of 'file_${index}.txt' file.`
    );
  }
  return {
    fs,
  };
}
